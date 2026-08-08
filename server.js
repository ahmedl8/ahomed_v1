const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

const { services, packs, ventajas, comoFunciona, empresa } = require("./data/services");
const bloques = require("./data/bloques");
const { instalacionBase, modos: modosIA } = require("./data/ia-predictiva");
const icons = require("./data/icons");

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Config ----
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(compression());
app.use(
  helmet({
    contentSecurityPolicy: false // simplificado para servir imágenes/estilos propios sin fricción
  })
);
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
  res.locals.metaDescription = empresa.metaDescriptionDefault;
  next();
});

// Helper: adjunta el bloque completo (nombre, letra...) a un servicio a partir de su slug
function bloqueDe(slug) {
  return bloques.find((b) => b.slug === slug) || null;
}

// ---- Rutas ----
app.get("/", (req, res) => {
  res.render("index", {
    title: `${empresa.nombre} — Soluciones integrales para el hogar en Madrid`,
    metaDescription:
      "Electricidad, domótica, seguridad con IA, energía solar, climatización y reformas en Madrid y alrededores. Equipo propiedad del cliente, sin cuotas. Primera visita técnica gratuita.",
    services,
    seguridadIA: modosIA.find((m) => m.slug === "seguridad-ia"),
    packs,
    ventajas,
    comoFunciona
  });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    title: `Servicios — ${empresa.nombre}`,
    metaDescription:
      "Catálogo completo de servicios AHOMED organizado en seis bloques: seguridad y accesos, instalaciones base, energía, reformas, plataforma IA predictiva y mantenimiento. Precios orientativos.",
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
  const incluyeIA = bloque.slug === "ia-predictiva";

  res.render("bloque", {
    title: `${bloque.nombre} — ${empresa.nombre}`,
    metaDescription: `${bloque.resumen} Servicios AHOMED en ${empresa.zona}, con presupuesto tras visita técnica gratuita.`,
    bloque,
    servicios: serviciosDelBloque,
    modosIA: incluyeIA ? modosIA : null,
    instalacionBase: incluyeIA ? instalacionBase : null
  });
});

// Plataforma IA Predictiva — página general con instalación base + los 10 modos
app.get("/servicios/ia-predictiva", (req, res) => {
  res.render("services/ia-predictiva", {
    title: `Plataforma IA Predictiva — ${empresa.nombre}`,
    metaDescription:
      "Instalación base (mini-PC de gama media + motor Python con YOLO + dashboard) y diez modos: seguridad IA, motor meteorológico, casa presencial, sueño, calidad del aire, mascotas, cocina, personas mayores, niños y paquetes.",
    instalacionBase,
    modos: modosIA
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

app.get("/packs", (req, res) => {
  res.render("packs", {
    title: `Packs — ${empresa.nombre}`,
    metaDescription:
      "Instalación completa llave en mano: Piso Nuevo, Chalet Seguro y Negocio. Varios servicios AHOMED combinados en una sola visita técnica.",
    packs
  });
});


app.get("/sobre-mi", (req, res) => {
  res.render("sobre-mi", {
    title: `Sobre mí — ${empresa.nombre}`,
    metaDescription: `Más de ${empresa.anosExperiencia} de experiencia técnica en electricidad, domótica, IA y reformas. Conoce al equipo detrás de ${empresa.nombre}.`
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
  const staticUrls = ["/", "/servicios", "/packs", "/sobre-mi", "/contacto"];
  const bloqueUrls = bloques.map((b) => `/servicios/bloque/${b.slug}`);
  const servicioUrls = services.map((s) => `/servicios/${s.slug}`);
  const iaPredictivaUrls = ["/servicios/ia-predictiva", ...modosIA.map((m) => `/servicios/ia-predictiva/${m.slug}`)];

  const urls = [...staticUrls, ...bloqueUrls, ...servicioUrls, ...iaPredictivaUrls];

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
