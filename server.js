const express = require("express");
const path = require("path");
const crypto = require("crypto");
const compression = require("compression");
const helmet = require("helmet");

const { services, packs, ventajas, comoFunciona, empresa } = require("./data/services");
const bloques = require("./data/bloques");
const { instalacionBase, modos: modosIA, familiasIA } = require("./data/ia-predictiva");
const { seguridadIANaves } = require("./data/naves-fincas");
const galeria = require("./data/galeria");
const icons = require("./data/icons");
const escenarios = require("./data/escenarios");

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Config ----
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(compression());

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

// Datos disponibles en todas las vistas
app.use((req, res, next) => {
  res.locals.empresa = empresa;
  res.locals.currentPath = req.path;
  res.locals.icons = icons;
  res.locals.bloques = bloques;
  res.locals.services = services;
  res.locals.seguridadIANaves = seguridadIANaves;
  res.locals.totalModos = modosIA.length;
  res.locals.metaDescription = empresa.metaDescriptionDefault;
  next();
});

// Helper: adjunta el bloque completo (nombre, letra...) a un servicio a partir de su slug
function bloqueDe(slug) {
  return bloques.find((b) => b.slug === slug) || null;
}

// ---- Rutas ----
// Home: subconjunto reducido de servicios y packs a destacar, para no mezclar
// los 15 servicios (incl. Naves y Fincas) ni los packs de negocio en la portada.
// Ver /areas/ahomed-web.md — feedback de reestructuración comercial, Prioridad 1.
const SERVICIOS_DESTACADOS_HOME = [
  "seguridad",
  "domotica",
  "redes-informatica",
  "energia-solar",
  "electricidad",
  "climatizacion"
];
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
  res.render("index", {
    title: `${empresa.nombre} — Seguridad IA, domótica y energía inteligente en Madrid`,
    metaDescription:
      "Seguridad con IA, domótica, redes y energía inteligente para tu vivienda o negocio en Madrid y alrededores. Equipo propiedad del cliente, sin cuotas. Primera visita técnica gratuita.",
    services,
    serviciosDestacados: SERVICIOS_DESTACADOS_HOME.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean),
    necesitas: QUE_NECESITAS,
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
app.get("/configurador", (req, res) => {
  res.render("configurador", {
    title: `Configura tu casa — ${empresa.nombre}`,
    metaDescription:
      "Responde 4 preguntas sobre tu vivienda o negocio y te recomendamos el pack o servicio AHOMED que mejor encaja, con presupuesto orientativo al momento.",
    packs,
    services
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
  const serviciosCasa = services.filter((s) => s.publico === "casa");
  const packsCasa = packs.filter((p) => p.publico === "casa");
  res.render("creador", {
    title: `Crea tu instalación a medida — ${empresa.nombre}`,
    metaDescription:
      "Combina los servicios y modos IA que quieras para tu vivienda y consigue un presupuesto orientativo al instante — con aviso si ya existe un pack AHOMED que encaja mejor.",
    serviciosCasa,
    packsCasa,
    modos: modosIA,
    instalacionBase
  });
});

// Tecnología AHOMED: qué hay detrás del Cerebro AHOMED (motor Python, IA
// local, WhatsApp Business API, privacidad). Construcción 5 de 5.
app.get("/tecnologia", (req, res) => {
  res.render("tecnologia", {
    title: `Tecnología AHOMED — ${empresa.nombre}`,
    metaDescription:
      "Cómo funciona el Cerebro AHOMED por dentro: motor Python, modelos de IA locales, procesamiento de vídeo, dashboard, integración con WhatsApp y privacidad de tus datos.",
    instalacionBase
  });
});

// AHOMED para Profesionales: página B2B dirigida a reformistas, constructoras,
// persianeros, electricistas e interioristas. No vende directamente al
// particular — explica el modelo de colaboración (referidos, packs conjuntos,
// AHOMED asumiendo la parte tecnológica del proyecto).
app.get("/para-profesionales", (req, res) => {
  res.render("para-profesionales", {
    title: `AHOMED para Profesionales — colabora con ${empresa.nombre}`,
    metaDescription:
      "Tú haces la obra, AHOMED la hace inteligente. Colabora con AHOMED si eres reformista, constructor, persianero, electricista o interiorista: añade seguridad IA, domótica y tecnología a tus proyectos sin tener que aprenderla."
  });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    title: `Servicios — ${empresa.nombre}`,
    metaDescription: `Catálogo completo de servicios AHOMED: seguridad y accesos, instalaciones base, energía, plataforma IA predictiva, mantenimiento y naves y fincas. Precios orientativos.`,
    services,
    bloques,
    modosIA
  });
});

// Página de bloque: agrupa los servicios (y, para el bloque E, los modos IA) de esa categoría
app.get("/servicios/bloque/:slug", (req, res, next) => {
  const bloque = bloqueDe(req.params.slug);
  if (!bloque) return next();

  const serviciosDelBloque = services.filter((s) => s.bloque === bloque.slug);
  const esPlataformaIA = bloque.slug === "ia-predictiva";

  res.render("bloque", {
    title: `${bloque.nombre} — ${empresa.nombre}`,
    metaDescription: `${bloque.resumen} Servicios AHOMED en ${empresa.zona}, con presupuesto tras visita técnica gratuita.`,
    bloque,
    servicios: serviciosDelBloque,
    modosIA: esPlataformaIA ? modosIA : null,
    instalacionBase: esPlataformaIA ? instalacionBase : null
  });
});

// Seguridad IA para Naves y Fincas — servicio independiente de la Plataforma IA
// Predictiva residencial (bloque E), a escala perimetral/industrial.
app.get("/servicios/naves-fincas/seguridad-ia", (req, res) => {
  res.render("services/seguridad-ia-negocio", {
    title: `${seguridadIANaves.nombre} — ${empresa.nombre}`,
    metaDescription: `${seguridadIANaves.resumen} Servicio exclusivo de ${empresa.nombre} en ${empresa.zona}.`,
    modo: seguridadIANaves,
    instalacionBase
  });
});

// Plataforma IA Predictiva — página general con instalación base + los 11 modos
app.get("/servicios/ia-predictiva", (req, res) => {
  res.render("services/ia-predictiva", {
    title: `Plataforma IA Predictiva — ${empresa.nombre}`,
    metaDescription:
      "Mini-PC IA Central obligatorio, en dos niveles (IA START 590 € o IA PRO 950 €), motor Python + dashboard, y once modos: seguridad IA, acceso inteligente, motor meteorológico, casa presencial, sueño, calidad del aire, mascotas, cocina, personas mayores, niños y bebés, y paquetes. Configura tu presupuesto.",
    instalacionBase,
    modos: modosIA,
    familiasIA,
    packsIA: packs.filter((p) => ["hogar-inteligente", "alquiler-segunda-residencia-ia"].includes(p.slug))
  });
});

// Ficha de un modo concreto de la Plataforma IA Predictiva
app.get("/servicios/ia-predictiva/:modoSlug", (req, res, next) => {
  const modo = modosIA.find((m) => m.slug === req.params.modoSlug);
  if (!modo) return next();
  const template = modo.esProyecto ? "services/ia-modo-proyecto" : "services/ia-modo";
  res.render(template, {
    title: `${modo.nombre} — ${empresa.nombre}`,
    metaDescription: modo.esProyecto
      ? `${modo.resumen} Servicio exclusivo de ${empresa.nombre} en ${empresa.zona}.`
      : `${modo.resumen} Desde ${modo.precioIncremento} € instalado junto a la plataforma IA Predictiva de ${empresa.nombre}.`,
    modo,
    instalacionBase
  });
});

// La antigua "IA y Monitorización Inteligente" vive ahora dentro de la Plataforma IA Predictiva (modo 10)
app.get("/servicios/ia-monitorizacion", (req, res) => {
  res.redirect(301, "/servicios/ia-predictiva/seguridad-ia");
});

app.get("/servicios/:slug", (req, res, next) => {
  const service = services.find((s) => s.slug === req.params.slug);
  if (!service) return next();
  res.render("services/detalle", {
    title: `${service.nombre} — ${empresa.nombre}`,
    metaDescription: `${service.resumen} Desde ${service.desde} € en ${empresa.zona}. Presupuesto tras visita técnica gratuita.`,
    service,
    bloque: bloqueDe(service.bloque)
  });
});

app.get("/soluciones", (req, res) => {
  res.render("packs", {
    title: `Soluciones — ${empresa.nombre}`,
    metaDescription:
      "Instalación completa llave en mano para tu casa (Piso Nuevo, Chalet Seguro con IA, Hogar con IA, Segunda Residencia IA) o para tu nave o finca (Pack Seguridad IA para Negocios). Varios servicios AHOMED combinados en una sola visita técnica.",
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
  res.render("galeria", {
    title: `Así puede quedar tu instalación — ${empresa.nombre}`,
    metaDescription: `Recreaciones visuales de lo que ${empresa.nombre} puede hacer en tu vivienda o negocio en ${empresa.zona}: electricidad, domótica, seguridad e IA.`,
    trabajos: galeria
  });
});

app.get("/preguntas-frecuentes", (req, res) => {
  res.render("faq", {
    title: `Preguntas frecuentes — ${empresa.nombre}`,
    metaDescription: `Resolvemos las dudas más habituales sobre presupuestos, el Mini-PC IA Central, cuotas mensuales, garantía y zona de servicio de ${empresa.nombre}.`
  });
});

app.get("/sobre-mi", (req, res) => {
  res.render("sobre-mi", {
    title: `Sobre mí — ${empresa.nombre}`,
    metaDescription: `Más de ${empresa.anosExperiencia} de experiencia técnica en electricidad, domótica, IA y seguridad. Conoce al equipo detrás de ${empresa.nombre}.`
  });
});

app.get("/contacto", (req, res) => {
  res.render("contacto", {
    title: `Contacto — ${empresa.nombre}`,
    metaDescription: `Contacta con ${empresa.nombre} por WhatsApp, teléfono o email. Visita técnica gratuita en ${empresa.zona}.`
  });
});

// ---- SEO técnico ----
app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send(
    ["User-agent: *", "Allow: /", `Sitemap: https://${empresa.web}/sitemap.xml`].join("\n")
  );
});

app.get("/sitemap.xml", (req, res) => {
  const base = `https://${empresa.web}`;
  const staticUrls = ["/", "/servicios", "/soluciones", "/configurador", "/crea-tu-instalacion", "/tecnologia", "/para-profesionales", "/preguntas-frecuentes", "/sobre-mi", "/contacto"];
  const bloqueUrls = bloques.map((b) => `/servicios/bloque/${b.slug}`);
  const servicioUrls = services.map((s) => `/servicios/${s.slug}`);
  const iaPredictivaUrls = ["/servicios/ia-predictiva", ...modosIA.map((m) => `/servicios/ia-predictiva/${m.slug}`)];
  const navesFincasUrls = ["/servicios/naves-fincas/seguridad-ia"];

  const urls = [...staticUrls, ...bloqueUrls, ...servicioUrls, ...iaPredictivaUrls, ...navesFincasUrls];

  const body = urls
    .map((u) => `  <url><loc>${base}${u}</loc></url>`)
    .join("\n");

  res.type("application/xml").send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
  );
});

// ---- 404 ----
app.use((req, res) => {
  res.status(404).render("404", {
    title: `Página no encontrada — ${empresa.nombre}`,
    metaDescription: `La página que buscas no existe. Vuelve al inicio de ${empresa.nombre} o consulta nuestro catálogo de servicios.`
  });
});

app.listen(PORT, () => {
  console.log(`AHOMED web escuchando en http://localhost:${PORT}`);
});
