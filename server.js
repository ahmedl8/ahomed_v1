const express = require("express");
const path = require("path");
const crypto = require("crypto");
const compression = require("compression");
const helmet = require("helmet");

const { translate } = require("./i18n/content");
const uiStrings = require("./i18n/ui");
const { resolverServicios } = require("./data/pricing");

const {
  services: servicesRaw,
  familias: familiasRaw,
  comoFunciona: comoFuncionaRaw,
  empresa: empresaRaw
} = require("./data/services");

// Cada servicio debe pertenecer a una familia declarada (si no, no se vería
// en la portada, en /servicios ni en el menú).
servicesRaw.forEach((s) => {
  if (!familiasRaw.some((f) => f.slug === s.familia)) {
    console.warn(`[AHOMED] El servicio "${s.slug}" tiene familia desconocida: ${s.familia}`);
  }
});
const titular = require("./data/titular");
const titularFaltan = titular.CAMPOS_OBLIGATORIOS.filter((c) => !String(titular[c] || "").trim());
if (titularFaltan.length) {
  console.warn(`[AHOMED] Datos legales del titular incompletos (${titularFaltan.join(", ")}): rellénalos en data/titular.js antes de publicar. Aviso legal y privacidad muestran mientras tanto el aviso de datos pendientes.`);
}
const escapeHtml = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const galeriaRaw = require("./data/galeria");
const icons = require("./data/icons");

const SUPPORTED_LANGS = ["es", "fr", "en"];

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Config ----
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(compression());

// Detección de idioma por prefijo de URL: el español vive en las rutas
// existentes sin prefijo (para no romper el SEO ya indexado), y francés/inglés
// se sirven bajo /fr y /en reutilizando exactamente las mismas rutas. Se hace
// aquí, antes de cualquier ruta, reescribiendo req.url para que el resto de la
// app (incluida express.static para vistas, no para /public) funcione igual
// en los tres idiomas.
app.use((req, res, next) => {
  const m = req.url.match(/^\/(fr|en)(\/|\?|$)/);
  if (m) {
    res.locals.lang = m[1];
    const rest = req.url.slice(1 + m[1].length);
    req.url = rest.startsWith("/") || rest.startsWith("?") || rest === "" ? (rest || "/") : "/" + rest;
  } else {
    res.locals.lang = "es";
  }
  next();
});

// Construye la URL equivalente en otro idioma a partir de la ruta actual
// (sin prefijo, ya que req.url fue reescrito arriba) — usado por el selector
// de idioma y las etiquetas hreflang.
function langHref(currentPathNoPrefix, lang) {
  const clean = currentPathNoPrefix === "/" ? "" : currentPathNoPrefix;
  return lang === "es" ? clean || "/" : `/${lang}${clean}`;
}

// URL de la home en el idioma actual (independiente de la página en la que
// se esté) — usada por el logo y el enlace "Inicio" del menú.
function homeHref(lang) {
  return lang === "es" ? "/" : `/${lang}`;
}

// Construye la lista de migas de pan para el schema BreadcrumbList. Siempre
// empieza en Inicio; cada argumento adicional es [nombre, ruta-sin-prefijo].
function crumbs(res, ...items) {
  const { t, pathHref, empresa } = res.locals;
  const base = `https://${empresa.web}`;
  const list = [{ name: t("nav.home"), item: base + pathHref("/") }];
  items.forEach(([name, path]) => list.push({ name, item: base + pathHref(path) }));
  return list;
}

// Genera un nonce único por petición para el único script inline que tiene
// la web (el arranque de Google Tag Manager en head.ejs). Así la CSP puede
// permitir ese script concreto sin recurrir a 'unsafe-inline', que abriría
// la puerta a cualquier script inyectado.
app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString("base64");
  next();
});

app.use((req, res, next) => {
  helmet({
    // CSP explícita: solo permite los orígenes que la web realmente usa
    // (Google Tag Manager/Analytics para medición, Google Fonts para tipografía,
    // y el propio dominio para imágenes/scripts/estilos). No usamos ningún CDN
    // ni script de terceros más allá de estos.
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", `'nonce-${res.locals.cspNonce}'`, "https://www.googletagmanager.com"],
        // GTM inserta reglas de estilo vía JS; se permite inline solo para estilos
        // (no ejecuta código, riesgo mínimo) en vez de bloquear el widget.
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
        connectSrc: [
          "'self'",
          "https://www.googletagmanager.com",
          "https://www.google-analytics.com",
          "https://region1.google-analytics.com"
        ],
        // El iframe de respaldo de GTM (<noscript>) y los vídeos propios
        frameSrc: ["'self'", "https://www.googletagmanager.com"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"]
      }
    }
  })(req, res, next);
});

// Sirve automáticamente la versión .webp de una imagen si existe y el
// navegador la acepta (todos los navegadores modernos) — sin tocar ninguna
// vista ni ruta de <img>. Si no hay .webp o el navegador no la acepta,
// sigue sirviendo el .jpg/.png original sin cambios.
const fs = require("fs");
app.use((req, res, next) => {
  if (!/\.(jpe?g|png)$/i.test(req.path)) return next();
  const accept = req.headers.accept || "";
  if (!accept.includes("image/webp")) return next();
  const webpPath = req.path.replace(/\.(jpe?g|png)$/i, ".webp");
  const fullWebpPath = path.join(__dirname, "public", webpPath);
  fs.access(fullWebpPath, fs.constants.F_OK, (err) => {
    if (err) return next();
    req.url = webpPath;
    res.set("Content-Type", "image/webp");
    next();
  });
});

app.use(express.static(path.join(__dirname, "public"), {
  maxAge: "7d",
  etag: true,
  // Sin esto, /en y /fr (home en otro idioma, req.url reescrito a "/") se
  // redirigían con 301 a /en/ y /fr/; el logo, el sitemap y el canonical usan
  // la forma sin barra final.
  redirect: false,
}));
app.use(express.json());

// Helper de formato de moneda (estilo español: 1.680 €)
// Implementado a mano porque el runtime puede no incluir datos ICU completos
// para Intl.NumberFormat("es-ES"), lo que haría caer el formato a "1105".
app.locals.fmt = (n) => {
  const parts = Math.round(n).toString().split("");
  let out = "";
  let count = 0;
  for (let i = parts.length - 1; i >= 0; i--) {
    out = parts[i] + out;
    count++;
    if (count % 3 === 0 && i !== 0) out = "." + out;
  }
  return out;
};

// Datos disponibles en todas las vistas — traducidos según res.locals.lang
// (fijado por el middleware de prefijo de arriba). El español no pasa por
// translate() (devuelve el dato tal cual); francés e inglés aplican el
// diccionario correspondiente de /locales/<lang>/content.json por ruta
// estable, con fallback automático al español si falta una traducción.
app.use((req, res, next) => {
  const lang = res.locals.lang;
  res.locals.t = (key) => uiStrings.t(key, lang);
  res.locals.tv = (key, vars) => uiStrings.tv(key, lang, vars);
  // Selector de idioma (ES/FR/EN): misma página, otro idioma.
  res.locals.langHref = (targetLang) => langHref(req.path, targetLang);
  // Enlaces de navegación (menú, botones internos): otra ruta, mismo idioma actual.
  res.locals.pathHref = (targetPath) => langHref(targetPath, lang);
  res.locals.homeHref = homeHref(lang);
  res.locals.supportedLangs = SUPPORTED_LANGS;

  res.locals.empresa = translate("empresa", empresaRaw, lang);
  // Titular legal: valores ya escapados para usarlos en textos con HTML.
  res.locals.titularCompleto = titularFaltan.length === 0;
  res.locals.titular = {
    nombreCompleto: escapeHtml(titular.nombreCompleto),
    nif: escapeHtml(titular.nif),
    domicilio: escapeHtml(titular.domicilio)
  };
  res.locals.currentPath = req.path;
  res.locals.icons = icons;
  res.locals.services = translate("services", resolverServicios(servicesRaw), lang).sort((a, b) => a.numero - b.numero);
  // Familias con sus servicios ya resueltos y traducidos; las vacías no se muestran.
  res.locals.familias = translate("familias", familiasRaw, lang)
    .map((f) => Object.assign({}, f, { items: res.locals.services.filter((sv) => sv.familia === f.slug).sort((a, b) => a.numero - b.numero) }))
    .filter((f) => f.items.length);
  res.locals.comoFunciona = translate("comoFunciona", comoFuncionaRaw, lang);
  res.locals.galeria = translate("galeria", galeriaRaw, lang);
  res.locals.metaDescription = res.locals.empresa.metaDescriptionDefault;
  next();
});

// Sustituye {placeholders} en las plantillas de meta description traducidas
// (seo.*.desc_suffix en common.json) por los valores reales (zona, precio...).
function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (m, k) => (Object.prototype.hasOwnProperty.call(values, k) ? values[k] : m));
}

// ---- Rutas ----
app.get("/", (req, res) => {
  const { services, comoFunciona, empresa, t } = res.locals;
  res.render("index", {
    title: `${empresa.nombre} — ${t('seo.home.title')}`,
    metaDescription: t('seo.home.desc'),
    services,
    comoFunciona
  });
});

// AHOMED para Profesionales: página B2B dirigida a reformistas, constructoras,
// interioristas y administradores de fincas. No vende directamente al
// particular — explica cómo AHOMED cubre los oficios sencillos de una obra
// (electricidad, pintura, pladur, limpieza final...) como colaborador.
app.get("/para-profesionales", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("para-profesionales", {
    title: `${t('seo.profesionales.title')} ${empresa.nombre}`,
    metaDescription: t('seo.profesionales.desc'),
    breadcrumbs: crumbs(res, [t('nav.para_profesionales'), '/para-profesionales'])
  });
});

app.get("/servicios", (req, res) => {
  const { empresa, services, t } = res.locals;
  res.render("servicios", {
    title: `${t('seo.servicios.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.servicios.desc'),
    breadcrumbs: crumbs(res, [t('seo.servicios.title'), '/servicios']),
    services
  });
});

app.get("/servicios/:slug", (req, res, next) => {
  const { empresa, services, t } = res.locals;
  const service = services.find((s) => s.slug === req.params.slug);
  if (!service) return next();
  const familia = res.locals.familias.find((f) => f.slug === service.familia);
  res.render("services/detalle", {
    familia,
    title: `${service.nombre} — ${empresa.nombre}`,
    metaDescription: `${service.resumen} ${fill(t('seo.detalle_servicio.desc_suffix'), { desde: service.desde, unidad: service.desdeUnidad || "", zona: empresa.zona })}`,
    breadcrumbs: crumbs(res, [t('seo.servicios.title'), '/servicios'], [service.nombre, '/servicios/' + service.slug]),
    service
  });
});

// ---- Redirecciones 301 de URLs retiradas en v91 ----
// La web pasó de "capa inteligente / IA" a trabajos sencillos (electricidad,
// fontanería, reformas, pintura, pladur, cámaras, persianas, jardinería,
// mantenimiento de chalets y limpieza post-obra). Las
// URLs antiguas ya indexadas se redirigen a la sección más cercana para no
// dejar enlaces rotos ni perder el posicionamiento que ya tuvieran.
const REDIRECTS_301 = [
  [/^\/servicios\/seguridad$/, "/servicios/camaras-vigilancia"],
  [/^\/servicios\/reparaciones-reformas$/, "/servicios/reformas-parciales"],
  [/^\/servicios\/(reformas|reforma|reformas-integrales)$/, "/servicios/reforma-integral"],
  [/^\/servicios\/(fontaneria-nave)$/, "/servicios/fontaneria"],
  [/^\/servicios\/(mantenimiento|chalets|mantenimiento-viviendas)$/, "/servicios/mantenimiento-chalets"],
  [/^\/servicios\/(domotica|iluminacion-led|iluminacion-exterior)$/, "/servicios/electricidad"],
  [/^\/servicios\/(electricidad-nave)$/, "/servicios/electricidad"],
  [/^\/servicios\/(climatizacion|antenas|redes-informatica|redes-nave|energia-solar|baterias|mantenimiento-nave)$/, "/servicios"],
  [/^\/servicios\/(bloque|ia-predictiva|ia-monitorizacion|naves-fincas)(\/.*)?$/, "/servicios"],
  [/^\/(soluciones|packs|configurador|crea-tu-instalacion|tecnologia)\/?$/, "/servicios"]
];
app.use((req, res, next) => {
  for (const [re, to] of REDIRECTS_301) {
    if (re.test(req.path)) {
      const target = res.locals.pathHref(to);
      return res.redirect(301, target);
    }
  }
  next();
});

app.get("/galeria", (req, res) => {
  const { empresa, galeria, t } = res.locals;
  res.render("galeria", {
    title: `${t('seo.galeria.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.galeria.desc'),
    breadcrumbs: crumbs(res, [t('breadcrumb.galeria'), '/galeria']),
    trabajos: galeria
  });
});

app.get("/preguntas-frecuentes", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("faq", {
    title: `${t('seo.faq.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.faq.desc'),
    breadcrumbs: crumbs(res, [t('nav.faq'), '/preguntas-frecuentes'])
  });
});

app.get("/sobre-mi", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("sobre-mi", {
    title: `${t('seo.sobre_mi.title')} — ${empresa.nombre}`,
    metaDescription: `${empresa.anosExperiencia} ${t('seo.sobre_mi.desc')}`,
    breadcrumbs: crumbs(res, [t('footer.sobre_mi'), '/sobre-mi'])
  });
});

app.get("/contacto", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("contacto", {
    title: `${t('seo.contacto.title')} — ${empresa.nombre}`,
    metaDescription: `${t('seo.contacto.desc')} ${empresa.zona}.`,
    breadcrumbs: crumbs(res, [t('nav.contacto'), '/contacto'])
  });
});

app.get("/aviso-legal", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("legal-aviso", {
    title: `${t('seo.aviso_legal.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.aviso_legal.desc'),
    breadcrumbs: crumbs(res, [t('footer.aviso_legal'), '/aviso-legal'])
  });
});

app.get("/privacidad", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("legal-privacidad", {
    title: `${t('seo.privacidad.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.privacidad.desc'),
    breadcrumbs: crumbs(res, [t('footer.privacidad'), '/privacidad'])
  });
});

app.get("/cookies", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("legal-cookies", {
    title: `${t('seo.cookies.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.cookies.desc'),
    breadcrumbs: crumbs(res, [t('footer.cookies'), '/cookies'])
  });
});

// ---- SEO técnico ----
app.get("/robots.txt", (req, res) => {
  const { empresa } = res.locals;
  res.type("text/plain").send(
    ["User-agent: *", "Allow: /", `Sitemap: https://${empresa.web}/sitemap.xml`].join("\n")
  );
});

app.get("/sitemap.xml", (req, res) => {
  const empresa = empresaRaw;
  const base = `https://${empresa.web}`;
  const staticUrls = ["/", "/servicios", "/para-profesionales", "/galeria", "/preguntas-frecuentes", "/sobre-mi", "/contacto", "/aviso-legal", "/privacidad", "/cookies"];
  const servicioUrls = servicesRaw.map((s) => `/servicios/${s.slug}`);

  const paths = [...staticUrls, ...servicioUrls];
  // Cada URL se ofrece en los 3 idiomas: español sin prefijo, francés/inglés con /fr y /en
  const urls = [];
  paths.forEach((p) => {
    SUPPORTED_LANGS.forEach((lang) => {
      urls.push(lang === "es" ? p : `/${lang}${p === "/" ? "" : p}`);
    });
  });

  const body = urls
    .map((u) => `  <url><loc>${base}${u}</loc></url>`)
    .join("\n");

  res.type("application/xml").send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
  );
});

// ---- 404 ----
app.use((req, res) => {
  const { empresa, t } = res.locals;
  res.status(404).render("404", {
    title: `${t('seo.404.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.404.desc')
  });
});

app.listen(PORT, () => {
  console.log(`AHOMED web escuchando en http://localhost:${PORT}`);
});
