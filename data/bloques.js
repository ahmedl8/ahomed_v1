// Los 7 bloques que agrupan todos los servicios AHOMED.
// Cada servicio (en services.js) y cada modo IA (en ia-predictiva.js) declara
// a qué bloque pertenece mediante el campo `bloque` (su slug aquí).
//
// `grupo` clasifica cada bloque en el modelo de dos categorías del catálogo:
//  - "basico"    → trabajos puntuales, sin IA, se venden sueltos.
//  - "exclusivo" → requieren o giran en torno al Mini-PC IA Central.
// Mantenimiento no encaja en ninguna de las dos de forma exclusiva (aplica a
// cualquier instalación, tenga IA o no), así que se muestra aparte.
//
// `publico` clasifica cada bloque según a quién se dirige, para poder
// organizar el menú en dos columnas ("Para tu Casa" / "Naves y Fincas"):
//  - "ambos"    → básicos que vende igual a viviendas que a naves/fincas.
//  - "casa"     → solo tiene sentido en una vivienda (los 9 modos IA
//                 residenciales + Seguridad IA vivienda).
//  - "negocio"  → solo tiene sentido en una nave, almacén o finca
//                 (Seguridad IA a escala industrial/perimetral).

const bloques = [
  {
    slug: "seguridad-accesos",
    heroImagen: "/img/hero-bloques/bloque-a.jpg",
    letra: "A",
    nombre: "Seguridad y Accesos",
    resumen: "Cámaras, alarmas, videoportero y cerraduras inteligentes — solo grabación, sin análisis IA.",
    icono: "shield",
    grupo: "basico",
    publico: "ambos"
  },
  {
    slug: "instalaciones-base",
    heroImagen: "/img/hero-bloques/bloque-b.jpg",
    letra: "B",
    nombre: "Instalaciones Base",
    resumen: "Electricidad, domótica por app, redes, climatización y antenas.",
    icono: "bolt",
    grupo: "basico",
    publico: "ambos"
  },
  {
    slug: "energia",
    heroImagen: "/img/hero-bloques/bloque-c.jpg",
    letra: "C",
    nombre: "Energía",
    resumen: "Energía solar de autoconsumo, con monitorización del ahorro desde el móvil.",
    icono: "solar",
    grupo: "basico",
    publico: "ambos"
  },
  {
    slug: "ia-predictiva",
    letra: "E",
    nombre: "Plataforma IA Predictiva",
    resumen: "Un único Mini-PC IA Central y once modos: seguridad, acceso, clima, presencia, sueño, aire, mascotas, cocina, mayores, niños y bebés, y paquetes.",
    icono: "ai",
    grupo: "exclusivo",
    publico: "casa"
  },
  {
    slug: "seguridad-ia-naves-fincas",
    letra: "G",
    nombre: "Seguridad IA — Naves y Fincas",
    resumen: "Vigilancia perimetral con IA a escala industrial: naves, almacenes y fincas rurales, sin falsas alarmas por fauna o vegetación.",
    icono: "ai",
    grupo: "exclusivo",
    publico: "negocio"
  },
  {
    slug: "mantenimiento",
    letra: "F",
    nombre: "Mantenimiento",
    resumen: "Contratos de revisión y reentrenamiento de IA para cualquier instalación AHOMED.",
    icono: "maintenance",
    grupo: "general",
    publico: "ambos"
  },
  {
    slug: "reformas",
    heroImagen: "/img/hero-bloques/bloque-d.jpg",
    letra: "D",
    nombre: "Reformas de apoyo",
    resumen: "Pintura, alicatado, fontanería, pladur y montaje de muebles — como complemento a una instalación AHOMED, no como servicio independiente.",
    icono: "wrench",
    // "secundario": no aparece en los desplegables Básicos/Con IA del menú
    // principal ni en los bloques destacados de /servicios; sigue teniendo
    // su página propia (/servicios/bloque/reformas) para quien llega por SEO
    // o desde un enlace directo, y sus servicios cuentan con ficha propia.
    grupo: "secundario",
    publico: "ambos"
  }
];

module.exports = bloques;
