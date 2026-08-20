// Escenarios interactivos "Vive AHOMED" — sección de la home que muestra
// cómo actúan varios modos de la Plataforma IA Predictiva juntos ante una
// situación real, en vez de listarlos como productos sueltos.
// Cada escenario referencia solo modos que existen de verdad en
// data/ia-predictiva.js (por slug), para que el texto no prometa nada que
// AHOMED no instale. Ver /areas/ahomed-negocio.md — construcción 2 de 5
// del análisis comparativo con Loxone (feedback de reestructuración).

const escenarios = [
  {
    slug: "llegar-a-casa",
    nombre: "Llegar a casa",
    icono: "geo-casa",
    momento: "Tu coche se acerca a la puerta",
    acciones: [
      { icono: "geo-casa", texto: "Acceso Inteligente reconoce el vehículo y abre el garaje" },
      { icono: "clima-ia", texto: "Casa Presencial activa la escena de bienvenida: luces, clima" },
      { icono: "sueno", texto: "Todo listo antes de que aparques" }
    ],
    explicacion:
      "El mini-PC cruza el reconocimiento de matrícula con el geofencing del móvil: si eres tú, abre; si no, avisa por WhatsApp con una foto en vez de abrir.",
    modos: ["acceso-inteligente", "casa-presencial"]
  },
  {
    slug: "salir-de-casa",
    nombre: "Salir de casa",
    icono: "clima-ia",
    momento: "El móvil se aleja del geoperímetro de casa",
    acciones: [
      { icono: "clima-ia", texto: "Casa Presencial apaga luces y pone el clima en modo ahorro" },
      { icono: "clima-ia", texto: "Motor Meteorológico decide si el riego puede esperar" },
      { icono: "ai", texto: "Simulación de presencia si vas a tardar en volver" }
    ],
    explicacion:
      "No hace falta acordarse de nada al cerrar la puerta: la casa detecta que te has ido y ajusta consumo y presencia sola.",
    modos: ["casa-presencial", "motor-meteorologico"]
  },
  {
    slug: "estas-durmiendo",
    nombre: "Estás durmiendo",
    icono: "sueno",
    momento: "Se acerca tu horario habitual de sueño",
    acciones: [
      { icono: "sueno", texto: "IA de Sueño baja persianas y pasa la luz a temperatura cálida" },
      { icono: "aire-calidad", texto: "Panel de Calidad del Aire ventila si el CO₂ sube" },
      { icono: "sueno", texto: "Amanecer gradual e integración con la alarma del móvil" }
    ],
    explicacion:
      "El dormitorio se prepara solo antes de que te acuestes, y te despierta con luz gradual en vez de un sonido brusco.",
    modos: ["ia-sueno", "calidad-aire"]
  },
  {
    slug: "alguien-en-la-puerta",
    nombre: "Alguien en la puerta",
    icono: "ai",
    momento: "Una cámara detecta movimiento en el acceso",
    acciones: [
      { icono: "ai", texto: "Seguridad IA distingue si es una persona real o una falsa alarma" },
      { icono: "paquete", texto: "Gestión de Paquetes identifica si es un repartidor y hace una foto" },
      { icono: "geo-casa", texto: "Acceso Inteligente registra el acceso si está autorizado" }
    ],
    explicacion:
      "Nada de alertas por un gato o una sombra: solo te llega un WhatsApp cuando de verdad hay alguien, con foto del momento.",
    modos: ["seguridad-ia", "gestion-paquetes", "acceso-inteligente"]
  },
  {
    slug: "segunda-residencia-vacia",
    nombre: "Tu segunda residencia está vacía",
    icono: "shield",
    momento: "Llevas semanas sin pisar la casa",
    acciones: [
      { icono: "clima-ia", texto: "Casa Presencial simula presencia con patrones realistas de luz" },
      { icono: "ai", texto: "Seguridad IA vigila y avisa por WhatsApp ante cualquier acceso real" },
      { icono: "clima-ia", texto: "Motor Meteorológico sube persianas si hay viento fuerte" }
    ],
    explicacion:
      "Controlas la propiedad desde donde estés, sin tener que desplazarte solo para comprobar que todo sigue bien.",
    modos: ["casa-presencial", "seguridad-ia", "motor-meteorologico"],
    packSugerido: "alquiler-segunda-residencia-ia"
  }
];

module.exports = escenarios;
