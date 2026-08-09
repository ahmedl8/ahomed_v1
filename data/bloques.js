// Los 6 bloques que agrupan todos los servicios AHOMED.
// Cada servicio (en services.js) y cada modo IA (en ia-predictiva.js) declara
// a qué bloque pertenece mediante el campo `bloque` (su slug aquí).
//
// `grupo` clasifica cada bloque en el modelo de dos categorías del catálogo:
//  - "basico"    → trabajos puntuales, sin IA, se venden sueltos.
//  - "exclusivo" → requieren o giran en torno al Mini-PC IA Central.
// Mantenimiento no encaja en ninguna de las dos de forma exclusiva (aplica a
// cualquier instalación, tenga IA o no), así que se muestra aparte.

const bloques = [
  {
    slug: "seguridad-accesos",
    heroImagen: "/img/hero-bloques/bloque-a.jpg",
    letra: "A",
    nombre: "Seguridad y Accesos",
    resumen: "Cámaras, alarmas, videoportero y cerraduras inteligentes — solo grabación, sin análisis IA.",
    icono: "shield",
    grupo: "basico"
  },
  {
    slug: "instalaciones-base",
    heroImagen: "/img/hero-bloques/bloque-b.jpg",
    letra: "B",
    nombre: "Instalaciones Base",
    resumen: "Electricidad, domótica por app, redes, climatización y antenas.",
    icono: "bolt",
    grupo: "basico"
  },
  {
    slug: "energia",
    heroImagen: "/img/hero-bloques/bloque-c.jpg",
    letra: "C",
    nombre: "Energía",
    resumen: "Energía solar de autoconsumo, con monitorización del ahorro desde el móvil.",
    icono: "solar",
    grupo: "basico"
  },
  {
    slug: "reformas",
    heroImagen: "/img/hero-bloques/bloque-d.jpg",
    letra: "D",
    nombre: "Reformas",
    resumen: "Pintura, alicatado, fontanería, pladur y montaje de muebles.",
    icono: "wrench",
    grupo: "basico"
  },
  {
    slug: "ia-predictiva",
    letra: "E",
    nombre: "Plataforma IA Predictiva",
    resumen: "Un único Mini-PC IA Central y diez modos: seguridad, clima, presencia, sueño, aire, mascotas, cocina, mayores, niños y paquetes.",
    icono: "ai",
    grupo: "exclusivo"
  },
  {
    slug: "mantenimiento",
    letra: "F",
    nombre: "Mantenimiento",
    resumen: "Contratos de revisión y reentrenamiento de IA para cualquier instalación AHOMED.",
    icono: "maintenance",
    grupo: "general"
  }
];

module.exports = bloques;
