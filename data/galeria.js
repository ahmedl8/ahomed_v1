// Galería — agrega automáticamente todos los pares antes/después del catálogo
// de servicios (cada ejemplo con imagen "antes" e imagen "después"). Las
// imágenes siguen siendo recreaciones por servicio, no fotos de proyectos ya
// ejecutados (ver galeria.orientative_note en locales).

const { services } = require("./services");

const trabajos = [];

function add(titulo, ej, enlace, categoria) {
  if (ej && ej.imagen && ej.imagenAntes) {
    trabajos.push({ titulo, imagenAntes: ej.imagenAntes, imagenDespues: ej.imagen, enlace, categoria });
  }
}

services.forEach((s) => {
  add(s.ejemplo.titulo, s.ejemplo, `/servicios/${s.slug}`, s.nombre);
  (s.ejemplosAdicionales || []).forEach((ej) => add(ej.titulo, ej, `/servicios/${s.slug}`, s.nombre));
});

module.exports = trabajos;
