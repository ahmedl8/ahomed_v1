// Galería — agrega automáticamente todos los pares antes/después reales del
// catálogo (servicios básicos, modo Seguridad IA y Naves y Fincas). No incluye
// imágenes ilustrativas de la Plataforma IA ni fotos sueltas sin "antes": esta
// página es prueba visual de trabajos reales, no material gráfico genérico.

const { services } = require("./services");
const bloques = require("./bloques");
const { modos } = require("./ia-predictiva");
const { seguridadIANaves } = require("./naves-fincas");

const bloquePorSlug = {};
bloques.forEach((b) => {
  bloquePorSlug[b.slug] = b.nombre;
});

const trabajos = [];

function add(titulo, ej, enlace, categoria) {
  if (ej && ej.imagen && ej.imagenAntes) {
    trabajos.push({ titulo, imagenAntes: ej.imagenAntes, imagenDespues: ej.imagen, enlace, categoria });
  }
}

services.forEach((s) => {
  const categoria = bloquePorSlug[s.bloque] || s.nombre;
  add(s.ejemplo.titulo, s.ejemplo, `/servicios/${s.slug}`, categoria);
  (s.ejemplosAdicionales || []).forEach((ej) => add(ej.titulo, ej, `/servicios/${s.slug}`, categoria));
});

modos.forEach((m) => {
  if (m.esProyecto) {
    (m.ejemplos || []).forEach((ej) =>
      add(ej.titulo, ej, `/servicios/ia-predictiva/${m.slug}`, "Plataforma IA Predictiva")
    );
  }
});

(seguridadIANaves.ejemplos || []).forEach((ej) =>
  add(ej.titulo, ej, "/servicios/naves-fincas/seguridad-ia", "Naves y Fincas")
);

module.exports = trabajos;
