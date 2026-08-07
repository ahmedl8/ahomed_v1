// Los 6 bloques que agrupan todos los servicios AHOMED.
// Cada servicio (en services.js) y cada modo IA (en ia-predictiva.js) declara
// a qué bloque pertenece mediante el campo `bloque` (su slug aquí).

const bloques = [
  {
    slug: "seguridad-accesos",
    heroImagen: "/img/hero-bloques/bloque-a.jpg",
    letra: "A",
    nombre: "Seguridad y Accesos",
    resumen: "Cámaras, alarmas, videoportero, cerraduras inteligentes y monitorización con IA.",
    icono: "shield"
  },
  {
    slug: "instalaciones-base",
    heroImagen: "/img/hero-bloques/bloque-b.jpg",
    letra: "B",
    nombre: "Instalaciones Base",
    resumen: "Electricidad, domótica, redes, climatización y antenas.",
    icono: "bolt"
  },
  {
    slug: "energia",
    heroImagen: "/img/hero-bloques/bloque-c.jpg",
    letra: "C",
    nombre: "Energía",
    resumen: "Energía solar de autoconsumo, con monitorización del ahorro desde el móvil.",
    icono: "solar"
  },
  {
    slug: "reformas",
    heroImagen: "/img/hero-bloques/bloque-d.jpg",
    letra: "D",
    nombre: "Reformas",
    resumen: "Pintura, alicatado, fontanería, pladur y montaje de muebles.",
    icono: "wrench"
  },
  {
    slug: "ia-predictiva",
    letra: "E",
    nombre: "Plataforma IA Predictiva",
    resumen: "El cerebro central de la vivienda y sus modos: clima, presencia, sueño, aire, mascotas, cocina, mayores, niños y paquetes.",
    icono: "ai"
  },
  {
    slug: "mantenimiento",
    letra: "F",
    nombre: "Mantenimiento",
    resumen: "Contratos de revisión y reentrenamiento de IA para cualquier instalación AHOMED.",
    icono: "maintenance"
  }
];

module.exports = bloques;
