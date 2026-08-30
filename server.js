const express = require("express");
const path = require("path");
const crypto = require("crypto");
const compression = require("compression");
const helmet = require("helmet");

const { translate } = require("./i18n/content");
const uiStrings = require("./i18n/ui");
const { resolverServicios, resolverModos, resolverNiveles } = require("./data/pricing");

const {
  services: servicesRaw,
  packs: packsRaw,
  ventajas: ventajasRaw,
  comoFunciona: comoFuncionaRaw,
  empresa: empresaRaw
} = require("./data/services");
const bloquesRaw = require("./data/bloques");
const {
  instalacionBase: instalacionBaseRaw,
  modos: modosIARaw,
  familiasIA: familiasIARaw
} = require("./data/ia-predictiva");
const { seguridadIANaves: seguridadIANavesRaw } = require("./data/naves-fincas");
const galeriaRaw = require("./data/galeria");
const icons = require("./data/icons");
const escenariosRaw = require("./data/escenarios");

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

app.use(express.static(path.join(__dirname, "public")));
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
  res.locals.currentPath = req.path;
  res.locals.icons = icons;
  res.locals.bloques = translate("bloques", bloquesRaw, lang);
  res.locals.services = translate("services", resolverServicios(servicesRaw), lang);
  res.locals.packs = translate("packs", resolverServicios(packsRaw), lang);
  res.locals.ventajas = translate("ventajas", ventajasRaw, lang);
  res.locals.comoFunciona = translate("comoFunciona", comoFuncionaRaw, lang);
  res.locals.escenarios = translate("escenarios", escenariosRaw, lang);
  res.locals.galeria = translate("galeria", galeriaRaw, lang);
  res.locals.modosIA = translate("modos", resolverModos(modosIARaw), lang);
  res.locals.familiasIA = translate("familiasIA", familiasIARaw, lang);
  res.locals.instalacionBase = translate(
    "instalacionBase",
    { ...instalacionBaseRaw, niveles: resolverNiveles(instalacionBaseRaw.niveles) },
    lang
  );
  res.locals.seguridadIANaves = translate("seguridadIANaves", seguridadIANavesRaw, lang);
  res.locals.totalModos = modosIARaw.length;
  res.locals.metaDescription = res.locals.empresa.metaDescriptionDefault;
  next();
});

// Helper: adjunta el bloque completo (nombre, letra...) a un servicio a partir de su slug
// Recibe el array de bloques ya traducido de res.locals para que el nombre
// mostrado coincida con el idioma de la petición.
function bloqueDe(slug, bloquesArr) {
  return bloquesArr.find((b) => b.slug === slug) || null;
}

// Sustituye {placeholders} en las plantillas de meta description traducidas
// (seo.*.desc_suffix en common.json) por los valores reales (zona, precio...).
function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (m, k) => (Object.prototype.hasOwnProperty.call(values, k) ? values[k] : m));
}

// ---- Rutas ----
const PACKS_DESTACADOS_HOME = ["chalet-seguro", "piso-nuevo", "hogar-inteligente"];

// Bloque "¿Qué necesitas?": navegación por necesidad del cliente, no por
// bloque técnico. Cada tarjeta enlaza al servicio/página real más representativo
// de esa necesidad (no se filtra por varios servicios a la vez).
const QUE_NECESITAS = [
  {
    icono: "wrench",
    imagen: "/img/iconos/necesitas-resolver",
    titulo: "Resolver un problema",
    subtitulo: "Averías, electricidad, fontanería, climatización",
    link: "/servicios/electricidad",
    desde: 100
  },
  {
    icono: "home-wifi",
    imagen: "/img/iconos/necesitas-mejorar",
    titulo: "Mejorar tu casa",
    subtitulo: "Domótica, WiFi, iluminación, escenas",
    link: "/servicios/domotica",
    desde: 210
  },
  {
    icono: "shield",
    imagen: "/img/iconos/necesitas-energia",
    titulo: "Proteger tu vivienda",
    subtitulo: "Cámaras, videoportero, cerraduras, Seguridad IA",
    link: "/servicios/seguridad",
    desde: 145
  },
  {
    icono: "solar",
    imagen: "/img/iconos/necesitas-vivienda",
    titulo: "Ahorrar energía",
    subtitulo: "Solar, gestión energética",
    link: "/servicios/energia-solar",
    desde: 510
  },
  {
    icono: "ai",
    imagen: "/img/iconos/necesitas-negocio",
    titulo: "Proteger tu negocio",
    subtitulo: "Seguridad IA, electricidad y redes industriales",
    link: "/servicios/naves-fincas/seguridad-ia",
    desde: null
  }
];

app.get("/", (req, res) => {
  const { services, bloques, packs, modosIA, instalacionBase, ventajas, comoFunciona, familiasIA, escenarios, empresa, t } = res.locals;
  const necesitas = QUE_NECESITAS.map((item) => ({
    ...item,
    titulo: t(`necesitas.${item.icono}.titulo`),
    subtitulo: t(`necesitas.${item.icono}.subtitulo`)
  }));
  res.render("index", {
    title: `${empresa.nombre} — ${t('seo.home.title')}`,
    metaDescription: t('seo.home.desc'),
    services,
    necesitas,
    bloques,
    seguridadIA: modosIA.find((m) => m.slug === "seguridad-ia"),
    modosIA: modosIA.filter((m) => !m.esProyecto),
    // Lista completa (incluye Seguridad IA, esProyecto: true) para los enlaces
    // de la sección "Vive AHOMED", que sí referencian ese modo.
    modosIATodos: modosIA,
    instalacionBase,
    packs: packs.filter((p) => p.publico !== "negocio"),
    packsDestacados: PACKS_DESTACADOS_HOME.map((slug) => packs.find((p) => p.slug === slug)).filter(Boolean),
    ventajas,
    comoFunciona,
    familiasIA,
    escenarios
  });
});

// Configurador de vivienda: asistente de 3 pasos (tipo de vivienda, qué
// quieres mejorar, qué quieres controlar) que recomienda un pack o servicio
// real del catálogo y prepara el mensaje de WhatsApp. Toda la lógica de
// recomendación vive en public/js/configurador.js, sobre los datos ya
// renderizados en la página (sin llamadas al servidor).
// Ver /areas/ahomed-negocio.md — construcción 3 de 5.
// Configurador (wizard de 4 preguntas): vivienda → qué te importa (varias
// opciones a la vez) → qué quieres controlar (servicios/modos reales,
// filtrados según lo marcado en el paso anterior) → nivel de automatización.
// El paso 2 filtra qué aparece en el paso 3 para no volcar el catálogo
// entero de golpe — ver NECESIDAD_CATALOGO más abajo.
//
// El resultado (calculado en el navegador, public/js/configurador.js)
// reutiliza el mismo motor de coincidencia con packs que ya usa el creador
// (mejorCoincidencia sobre coincideCon.servicios/modos): si lo marcado hace
// match con un pack existente, se recomienda ese pack; si no pero hay 2+
// cosas marcadas, se arma un pack a medida sumando en vivo; si hay solo 1,
// se recomienda ese servicio o modo individual.
const NECESIDAD_CATALOGO = {
  seguridad: { servicios: ["seguridad"], modos: ["seguridad-ia", "acceso-inteligente"] },
  confort: { servicios: ["domotica", "climatizacion"], modos: ["casa-presencial", "ia-sueno", "cocina-inteligente", "acceso-inteligente"] },
  ahorro: { servicios: ["energia-solar"], modos: ["motor-meteorologico", "calidad-aire"] },
  familia: { servicios: [], modos: ["cuidado-mascotas", "personas-mayores", "modo-ninos", "gestion-paquetes"] }
};

app.get("/configurador", (req, res) => {
  const { empresa, packs, services, modosIA, t } = res.locals;
  const serviciosCasa = services.filter((s) => s.publico === "casa");

  res.render("configurador", {
    title: `${t('seo.configurador.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.configurador.desc'),
    packs,
    services: serviciosCasa,
    modosIA,
    necesidadCatalogo: NECESIDAD_CATALOGO
  });
});

// Creador de instalación: versión "arma tu combinación" del configurador.
// A diferencia del wizard de 4 preguntas (que recomienda UN pack o servicio),
// aquí el cliente marca libremente cualquier servicio Básico y cualquier modo
// de la Plataforma IA Predictiva, ve el total en vivo (igual que la
// calculadora de /servicios/ia-predictiva pero para toda la casa) y, si su
// combinación se parece a un pack ya existente, se lo señalamos con el precio
// de ese pack al lado — así no le montamos a mano algo que ya vendemos
// empaquetado y más barato. Solo cubre público "casa" por ahora: naves y
// fincas ya tienen su propio Pack Seguridad IA para Negocios.
app.get("/crea-tu-instalacion", (req, res) => {
  const { empresa, services, packs, modosIA, instalacionBase, t } = res.locals;
  const serviciosCasa = services.filter((s) => s.publico === "casa");
  const packsCasa = packs.filter((p) => p.publico === "casa");
  res.render("creador", {
    title: `${t('seo.creador.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.creador.desc'),
    serviciosCasa,
    packsCasa,
    modos: modosIA,
    instalacionBase
  });
});

// Tecnología AHOMED: qué hay detrás del Cerebro AHOMED (motor Python, IA
// local, WhatsApp Business API, privacidad). Construcción 5 de 5.
app.get("/tecnologia", (req, res) => {
  const { empresa, instalacionBase, t } = res.locals;
  res.render("tecnologia", {
    title: `${t('seo.tecnologia.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.tecnologia.desc'),
    instalacionBase
  });
});

// AHOMED para Profesionales: página B2B dirigida a reformistas, constructoras,
// persianeros, electricistas e interioristas. No vende directamente al
// particular — explica el modelo de colaboración (referidos, packs conjuntos,
// AHOMED asumiendo la parte tecnológica del proyecto).
app.get("/para-profesionales", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("para-profesionales", {
    title: `${t('seo.profesionales.title')} ${empresa.nombre}`,
    metaDescription: t('seo.profesionales.desc')
  });
});

app.get("/servicios", (req, res) => {
  const { empresa, services, bloques, modosIA, t } = res.locals;
  res.render("servicios", {
    title: `${t('seo.servicios.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.servicios.desc'),
    services,
    bloques,
    modosIA
  });
});

// Página de bloque: agrupa los servicios (y, para el bloque E, los modos IA) de esa categoría
app.get("/servicios/bloque/:slug", (req, res, next) => {
  const { empresa, services, bloques, modosIA, instalacionBase, t } = res.locals;
  const bloque = bloqueDe(req.params.slug, bloques);
  if (!bloque) return next();

  const serviciosDelBloque = services.filter((s) => s.bloque === bloque.slug);
  const esPlataformaIA = bloque.slug === "ia-predictiva";

  res.render("bloque", {
    title: `${bloque.nombre} — ${empresa.nombre}`,
    metaDescription: `${bloque.resumen} ${fill(t('seo.bloque.desc_suffix'), { zona: empresa.zona })}`,
    bloque,
    servicios: serviciosDelBloque,
    modosIA: esPlataformaIA ? modosIA : null,
    instalacionBase: esPlataformaIA ? instalacionBase : null
  });
});

// Seguridad IA para Naves y Fincas — servicio independiente de la Plataforma IA
// Predictiva residencial (bloque E), a escala perimetral/industrial.
app.get("/servicios/naves-fincas/seguridad-ia", (req, res) => {
  const { empresa, seguridadIANaves, instalacionBase, t } = res.locals;
  res.render("services/seguridad-ia-negocio", {
    title: `${seguridadIANaves.nombre} — ${empresa.nombre}`,
    metaDescription: `${seguridadIANaves.resumen} ${fill(t('seo.seguridad_ia_naves.desc_suffix'), { empresa: empresa.nombre, zona: empresa.zona })}`,
    modo: seguridadIANaves,
    instalacionBase
  });
});

// Plataforma IA Predictiva — página general con instalación base + los 11 modos
app.get("/servicios/ia-predictiva", (req, res) => {
  const { empresa, instalacionBase, modosIA, familiasIA, packs, t } = res.locals;
  res.render("services/ia-predictiva", {
    title: `${t('seo.ia_predictiva.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.ia_predictiva.desc'),
    instalacionBase,
    modos: modosIA,
    familiasIA,
    packsIA: packs.filter((p) => ["hogar-inteligente", "alquiler-segunda-residencia-ia"].includes(p.slug))
  });
});

// Ficha de un modo concreto de la Plataforma IA Predictiva
app.get("/servicios/ia-predictiva/:modoSlug", (req, res, next) => {
  const { empresa, modosIA, instalacionBase, t } = res.locals;
  const modo = modosIA.find((m) => m.slug === req.params.modoSlug);
  if (!modo) return next();
  const template = modo.esProyecto ? "services/ia-modo-proyecto" : "services/ia-modo";
  res.render(template, {
    title: `${modo.nombre} — ${empresa.nombre}`,
    metaDescription: modo.esProyecto
      ? `${modo.resumen} ${fill(t('seo.ia_modo.desc_suffix_proyecto'), { empresa: empresa.nombre, zona: empresa.zona })}`
      : `${modo.resumen} ${fill(t('seo.ia_modo.desc_suffix_addon'), { precio: modo.precioIncremento, empresa: empresa.nombre })}`,
    modo,
    instalacionBase
  });
});

// La antigua "IA y Monitorización Inteligente" vive ahora dentro de la Plataforma IA Predictiva (modo 10)
app.get("/servicios/ia-monitorizacion", (req, res) => {
  res.redirect(301, "/servicios/ia-predictiva/seguridad-ia");
});

app.get("/servicios/:slug", (req, res, next) => {
  const { empresa, services, bloques, t } = res.locals;
  const service = services.find((s) => s.slug === req.params.slug);
  if (!service) return next();
  res.render("services/detalle", {
    title: `${service.nombre} — ${empresa.nombre}`,
    metaDescription: `${service.resumen} ${fill(t('seo.detalle_servicio.desc_suffix'), { desde: service.desde, zona: empresa.zona })}`,
    service,
    bloque: bloqueDe(service.bloque, bloques)
  });
});

app.get("/soluciones", (req, res) => {
  const { empresa, packs, t } = res.locals;
  res.render("packs", {
    title: `${t('seo.soluciones.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.soluciones.desc'),
    packsCasa: packs.filter((p) => p.publico !== "negocio"),
    packsNegocio: packs.filter((p) => p.publico === "negocio")
  });
});

// v44: "/packs" pasó a llamarse "/soluciones" (ver /areas/ahomed-negocio.md,
// punto 16 del análisis comparativo con Loxone — "pack" suena a paquete
// comercial, "solución" suena a respuesta a un problema). Redirect 301 por
// si algún enlace viejo sigue circulando.
app.get("/packs", (req, res) => {
  res.redirect(301, "/soluciones");
});


app.get("/galeria", (req, res) => {
  const { empresa, galeria, t } = res.locals;
  res.render("galeria", {
    title: `${t('seo.galeria.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.galeria.desc'),
    trabajos: galeria
  });
});

app.get("/preguntas-frecuentes", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("faq", {
    title: `${t('seo.faq.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.faq.desc')
  });
});

app.get("/sobre-mi", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("sobre-mi", {
    title: `${t('seo.sobre_mi.title')} — ${empresa.nombre}`,
    metaDescription: `${empresa.anosExperiencia} ${t('seo.sobre_mi.desc')}`
  });
});

app.get("/contacto", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("contacto", {
    title: `${t('seo.contacto.title')} — ${empresa.nombre}`,
    metaDescription: `${t('seo.contacto.desc')} ${empresa.zona}.`
  });
});

app.get("/aviso-legal", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("legal-aviso", {
    title: `${t('seo.aviso_legal.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.aviso_legal.desc')
  });
});

app.get("/privacidad", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("legal-privacidad", {
    title: `${t('seo.privacidad.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.privacidad.desc')
  });
});

app.get("/cookies", (req, res) => {
  const { empresa, t } = res.locals;
  res.render("legal-cookies", {
    title: `${t('seo.cookies.title')} — ${empresa.nombre}`,
    metaDescription: t('seo.cookies.desc')
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
  const staticUrls = ["/", "/servicios", "/soluciones", "/configurador", "/crea-tu-instalacion", "/tecnologia", "/para-profesionales", "/preguntas-frecuentes", "/sobre-mi", "/contacto", "/aviso-legal", "/privacidad", "/cookies"];
  const bloqueUrls = bloquesRaw.map((b) => `/servicios/bloque/${b.slug}`);
  const servicioUrls = servicesRaw.map((s) => `/servicios/${s.slug}`);
  const iaPredictivaUrls = ["/servicios/ia-predictiva", ...modosIARaw.map((m) => `/servicios/ia-predictiva/${m.slug}`)];
  const navesFincasUrls = ["/servicios/naves-fincas/seguridad-ia"];

  const paths = [...staticUrls, ...bloqueUrls, ...servicioUrls, ...iaPredictivaUrls, ...navesFincasUrls];
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
