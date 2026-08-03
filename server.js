const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

const { services, iaService, packs, ventajas, comoFunciona, empresa } = require("./data/services");
const { trabajos } = require("./data/trabajos");
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
  next();
});

// ---- Rutas ----
app.get("/", (req, res) => {
  res.render("index", {
    title: `${empresa.nombre} — Soluciones integrales para el hogar`,
    services,
    iaService,
    packs,
    ventajas,
    comoFunciona,
    trabajos
  });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    title: `Servicios — ${empresa.nombre}`,
    services,
    iaService
  });
});

app.get("/servicios/ia-monitorizacion", (req, res) => {
  res.render("services/ia", {
    title: `${iaService.nombre} — ${empresa.nombre}`,
    iaService
  });
});

app.get("/servicios/:slug", (req, res, next) => {
  const service = services.find((s) => s.slug === req.params.slug);
  if (!service) return next();
  res.render("services/detalle", {
    title: `${service.nombre} — ${empresa.nombre}`,
    service
  });
});

app.get("/packs", (req, res) => {
  res.render("packs", {
    title: `Packs — ${empresa.nombre}`,
    packs
  });
});

app.get("/trabajos-reales", (req, res) => {
  res.render("trabajos", {
    title: `Trabajos reales — ${empresa.nombre}`,
    trabajos
  });
});

app.get("/trabajos-reales/:slug", (req, res, next) => {
  const trabajo = trabajos.find((t) => t.slug === req.params.slug);
  if (!trabajo) return next();
  const relacionados = trabajos.filter((t) => t.slug !== trabajo.slug && t.categoria === trabajo.categoria).slice(0, 4);
  res.render("trabajo-detalle", {
    title: `${trabajo.titulo} — ${empresa.nombre}`,
    trabajo,
    relacionados
  });
});

app.get("/sobre-mi", (req, res) => {
  res.render("sobre-mi", {
    title: `Sobre mí — ${empresa.nombre}`
  });
});

app.get("/contacto", (req, res) => {
  res.render("contacto", {
    title: `Contacto — ${empresa.nombre}`
  });
});

// ---- 404 ----
app.use((req, res) => {
  res.status(404).render("404", { title: `Página no encontrada — ${empresa.nombre}` });
});

app.listen(PORT, () => {
  console.log(`AHOMED web escuchando en http://localhost:${PORT}`);
});
