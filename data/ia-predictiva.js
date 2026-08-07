// Plataforma IA Predictiva — bloque E del catálogo AHOMED.
// El diferencial no está en los dispositivos (un Shelly o un Zigbee los compra
// cualquiera), sino en el motor Python que vive en el mini-PC y cruza datos que
// nadie más mezcla: clima, precio de la luz por hora, geolocalización, calidad
// del aire, fases de sueño. Ellos instalan dispositivos. AHOMED instala inteligencia.
//
// Modelo de precio: una instalación base única (mini-PC + motor + dashboard +
// WhatsApp) y luego cada modo se cotiza como incremento sobre esa base. Quien
// solo quiere un modo, sin plataforma previa, paga el precio de catálogo
// completo (columna "solo").

const instalacionBase = {
  nombre: "Instalación base de la plataforma",
  resumen:
    "Antes de cualquier modo, se instala una única vez: el mini-PC compartido, el motor Python que orquesta todos los modos, el dashboard de control y la integración con WhatsApp Business API. A partir de aquí, cada modo añadido es un incremento — no una instalación nueva desde cero.",
  items: [
    ["Mini-PC (4 GB) con SSD, uso compartido por todos los modos", 110],
    ["Instalación del motor Python (orquestador de modos)", 90],
    ["Dashboard de control unificado", 50],
    ["Integración WhatsApp Business API", 30]
  ],
  total: 280
};

const modos = [
  {
    slug: "motor-meteorologico",
    imagen: "/img/ia-predictiva/motor-meteorologico.jpg",
    numero: 1,
    nombre: "Motor Meteorológico",
    subtitulo: "Riego y persianas con IA climática",
    icono: "clima-ia",
    resumen:
      "El mini-PC consulta la API meteorológica cada hora, anticipa lluvia, viento y temperatura, y actúa sobre el riego y las persianas sin intervención del usuario. Si va a llover en 3 horas, el riego no arranca. Si el viento supera 40 km/h, las persianas suben automáticamente.",
    idealPara: ["Jardines y terrazas con riego automático", "Viviendas con persianas motorizadas", "Segundas residencias que se visitan poco"],
    precioSolo: 675,
    precioIncremento: 520,
    ejemplo: {
      titulo: "Motor clima + riego + persianas",
      opciones: [
        {
          nombre: "Básica — motor clima + riego (4 zonas)",
          destacada: false,
          items: [
            ["Raspberry Pi 4 (2 GB) o mini-PC equivalente", 75],
            ["Controlador de riego WiFi 4 zonas (Shelly o similar)", 55],
            ["Sensores de temperatura/humedad exterior (x2)", 30],
            ["Cableado y material de instalación", 25],
            ["Configuración del motor Python (API clima + lógica de riego)", 280],
            ["Puesta en marcha y formación (2 h)", 120]
          ],
          total: 675
        },
        {
          nombre: "Recomendada — motor clima + riego + persianas",
          destacada: true,
          items: [
            ["Mini-PC (4 GB RAM, SSD 64 GB) para mayor fiabilidad", 110],
            ["Controlador de riego WiFi 4 zonas", 55],
            ["4 motores de persiana WiFi (Shelly 2.5 o equivalente)", 220],
            ["Sensores exterior temperatura/humedad/lluvia", 45],
            ["Cableado, canal y material", 60],
            ["Motor Python: lógica climática + riego + persianas + alertas WhatsApp", 380],
            ["Dashboard web personalizado (consulta desde móvil)", 180],
            ["Puesta en marcha y formación (3 h)", 130]
          ],
          total: 1180
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 675 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 520 €."
    }
  },
  {
    slug: "casa-presencial",
    imagen: "/img/ia-predictiva/casa-presencial.jpg",
    numero: 2,
    nombre: "Casa Presencial",
    subtitulo: "Geolocalización y escenas automáticas",
    icono: "geo-casa",
    resumen:
      "El móvil avisa al mini-PC cuando sales o llegas a casa. Al salir: luces apagadas, clima en modo ahorro, simulación de presencia si vas a tardar en volver. Al llegar: escena de bienvenida con luces, música y clima ya en marcha.",
    idealPara: ["Viviendas donde todos salen a trabajar", "Segundas residencias (simulación de presencia)", "Quien quiere llegar a casa con todo listo"],
    precioSolo: 695,
    precioIncremento: 570,
    ejemplo: {
      titulo: "Geofencing + 3 escenas + simulación de presencia",
      opciones: [
        {
          nombre: "Básica — geofencing + 2 escenas",
          destacada: false,
          items: [
            ["Mini-PC o Raspberry Pi 4", 75],
            ["2 enchufes inteligentes WiFi (Shelly Plug)", 40],
            ["1 tira LED salón con controlador WiFi", 55],
            ["Cableado y material", 20],
            ["Configuración del motor de geofencing (GPS móvil → escenas)", 240],
            ["Puesta en marcha y ajuste de perímetros GPS (2 h)", 100]
          ],
          total: 530
        },
        {
          nombre: "Recomendada — 3 escenas + simulación de presencia",
          destacada: true,
          items: [
            ["Mini-PC (4 GB) con SSD", 110],
            ["2 enchufes inteligentes WiFi", 40],
            ["1 tira LED salón con controlador WiFi", 55],
            ["Termostato WiFi inteligente", 75],
            ["Cableado y material", 75],
            ["Configuración del motor de geofencing (GPS móvil → escenas)", 20],
            ["3 escenas configuradas + simulación de presencia + app de control", 240],
            ["Puesta en marcha y ajuste de perímetros GPS (2 h)", 90]
          ],
          total: 695
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 695 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 570 €."
    }
  },
  {
    slug: "ia-sueno",
    imagen: "/img/ia-predictiva/ia-sueno.jpg",
    numero: 3,
    nombre: "IA de Sueño",
    subtitulo: "Entorno adaptativo para descanso óptimo",
    icono: "sueno",
    resumen:
      "Persianas y luz se ajustan automáticamente según tu horario de sueño: amanecer gradual por la mañana, temperatura de color cálida por la noche, integración con la alarma del móvil.",
    idealPara: ["Personas con horarios de sueño irregulares", "Dormitorios con persianas motorizadas", "Quien quiere despertar sin alarma brusca"],
    precioSolo: 693,
    precioIncremento: 568,
    ejemplo: {
      titulo: "Persianas + luz adaptativa + integración con alarma",
      opciones: [
        {
          nombre: "Básica — persianas + amanecer gradual",
          destacada: false,
          items: [
            ["Raspberry Pi 4 o mini-PC", 75],
            ["2 motores de persiana WiFi (dormitorio principal)", 110],
            ["Sensor de luminosidad exterior", 65],
            ["Cableado y material", 25],
            ["Configuración del motor de sueño: horarios + amanecer gradual", 220],
            ["Puesta en marcha y formación (2 h)", 90]
          ],
          total: 585
        },
        {
          nombre: "Recomendada — + luz cálida/fría + alarma del móvil",
          destacada: true,
          items: [
            ["Mini-PC (4 GB) con SSD", 110],
            ["2 motores de persiana WiFi", 110],
            ["Tira LED regulable (temperatura de color cálido/frío)", 110],
            ["Sensor de luminosidad exterior", 65],
            ["Cableado y material", 25],
            ["Configuración del motor de sueño: horarios + amanecer gradual", 25],
            ["Integración con alarma del móvil (vía API o IFTTT)", 220],
            ["Puesta en marcha y formación (2 h)", 90]
          ],
          total: 755
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 693 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 568 €."
    }
  },
  {
    slug: "calidad-aire",
    numero: 4,
    nombre: "Panel de Calidad del Aire",
    subtitulo: "CO₂, VOC y ventilación con IA",
    icono: "aire-calidad",
    resumen:
      "Sensores de CO₂, humedad y temperatura envían lectura continua al mini-PC, que activa ventilación o purificación automáticamente cuando se superan los umbrales saludables, con alertas por WhatsApp.",
    idealPara: ["Dormitorios y oficinas en casa", "Viviendas bien selladas con poca ventilación natural", "Familias con niños pequeños o alergias"],
    precioSolo: 465,
    precioIncremento: 390,
    ejemplo: {
      titulo: "Sensor CO₂ + dashboard + alertas automáticas",
      opciones: [
        {
          nombre: "Básica — sensor + alertas WhatsApp",
          destacada: false,
          items: [
            ["Sensor CO₂ + temperatura + humedad (SCD40 o equivalente)", 45],
            ["Raspberry Pi Zero 2 W o mini-PC existente", 35],
            ["Cableado y material mínimo", 15],
            ["Motor Python: lectura continua + umbrales + alertas WhatsApp", 200],
            ["Puesta en marcha y calibración (1,5 h)", 70]
          ],
          total: 365
        },
        {
          nombre: "Recomendada — + dashboard con histórico",
          destacada: true,
          items: [
            ["Sensor CO₂ + temperatura + humedad", 45],
            ["Mini-PC (4 GB) con SSD", 110],
            ["Cableado y material", 20],
            ["Motor Python: lectura continua + umbrales + alertas WhatsApp", 200],
            ["Dashboard básico con histórico 7 días", 100],
            ["Puesta en marcha y calibración (1,5 h)", 90]
          ],
          total: 565
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 465 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 390 €."
    }
  },
  {
    slug: "cuidado-mascotas",
    imagen: "/img/ia-predictiva/cuidado-mascotas.jpg",
    numero: 5,
    nombre: "Cuidado de Mascotas",
    subtitulo: "IA de bienestar animal",
    icono: "mascota",
    resumen:
      "El sistema vigila el bienestar de la mascota cuando el propietario no está en casa: comprueba si ha comido, el nivel del bebedero, la temperatura del espacio y detecta ladridos prolongados o señales de estrés, con aviso inmediato por WhatsApp.",
    idealPara: ["Mascotas que se quedan solas durante la jornada laboral", "Perros con ansiedad por separación", "Quien viaja con frecuencia"],
    precioSolo: 480,
    precioIncremento: 370,
    ejemplo: {
      titulo: "Monitorización + comedero + control de temperatura",
      opciones: [
        {
          nombre: "Básica — monitorización + alerta de ladridos",
          destacada: false,
          items: [
            ["Cámara IP con audio bidireccional", 110],
            ["Sensor de nivel de bebedero", 35],
            ["Raspberry Pi 4 o mini-PC existente", 75],
            ["Cableado y material", 15],
            ["Motor Python: detección de ladridos prolongados + alertas WhatsApp", 180],
            ["Puesta en marcha (1,5 h)", 65]
          ],
          total: 480
        },
        {
          nombre: "Recomendada — + comedero y control de temperatura",
          destacada: true,
          items: [
            ["Cámara IP con audio bidireccional y visión nocturna", 140],
            ["Comedero automático conectado (raciones programadas)", 120],
            ["Sensor de nivel de bebedero", 35],
            ["Sensor de temperatura de la estancia", 20],
            ["Mini-PC (4 GB) con SSD", 110],
            ["Cableado y material", 25],
            ["Motor Python: comida/agua/temperatura + detección de ladridos + alertas WhatsApp", 280],
            ["Puesta en marcha y formación (2 h)", 90]
          ],
          total: 820
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 480 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 370 €."
    }
  },
  {
    slug: "cocina-inteligente",
    imagen: "/img/ia-predictiva/cocina-inteligente.jpg",
    numero: 6,
    nombre: "Cocina Inteligente",
    subtitulo: "Detección de humo y aviso de horno",
    icono: "cocina-ia",
    resumen:
      "El sistema vigila la cocina mientras el usuario está fuera de casa: si detecta humo, activa el extractor y avisa por WhatsApp; si el usuario sale de casa con el horno encendido, envía una pregunta directa por WhatsApp para confirmar si debe apagarlo.",
    idealPara: ["Quien suele olvidar el horno encendido", "Viviendas con extractor conectado", "Familias con niños o mayores en casa"],
    precioSolo: 430,
    precioIncremento: 295,
    ejemplo: {
      titulo: "Detección de humo + extractor automático + aviso de horno",
      opciones: [
        {
          nombre: "Básica — detección de humo + alerta WhatsApp",
          destacada: false,
          items: [
            ["Detector de humo/CO conectado", 70],
            ["Raspberry Pi 4 o mini-PC existente", 75],
            ["Cableado y material", 15],
            ["Motor Python: lectura continua + alerta WhatsApp inmediata", 180],
            ["Puesta en marcha (1,5 h)", 90]
          ],
          total: 430
        },
        {
          nombre: "Recomendada — + extractor automático y aviso de horno",
          destacada: true,
          items: [
            ["Detector de humo/CO conectado", 70],
            ["Extractor de cocina WiFi inteligente", 80],
            ["Enchufe/relé inteligente en horno o vitro", 45],
            ["Mini-PC (4 GB) con SSD", 110],
            ["Cableado y material", 30],
            ["Motor Python: humo → extractor + alerta; horno encendido al salir → pregunta WhatsApp", 320],
            ["Puesta en marcha y formación (2,5 h)", 120]
          ],
          total: 775
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 430 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 295 €."
    }
  },
  {
    slug: "personas-mayores",
    imagen: "/img/ia-predictiva/personas-mayores.jpg",
    numero: 7,
    nombre: "Personas Mayores",
    subtitulo: "Teleasistencia inteligente sin cuota",
    icono: "mayores",
    resumen:
      "Detecta ausencia prolongada de movimiento, posibles caídas mediante IA de visión, puertas abiertas demasiado tiempo, temperaturas extremas y consumo eléctrico anormal. Avisa automáticamente a uno o varios familiares por WhatsApp, sin cuota mensual.",
    idealPara: ["Padres o madres mayores que viven solos", "Familias que quieren tranquilidad sin cuota de teleasistencia", "Viviendas con varias generaciones"],
    precioSolo: 650,
    precioIncremento: 460,
    ejemplo: {
      titulo: "Ausencia de movimiento + detección de caídas por IA",
      opciones: [
        {
          nombre: "Básica — ausencia de movimiento + puerta abierta",
          destacada: false,
          items: [
            ["Sensor de movimiento por estancia (x3)", 75],
            ["Sensor de puerta/ventana (entrada principal)", 20],
            ["Mini-PC (4 GB) con SSD", 110],
            ["Cableado y material", 25],
            ["Motor Python: ausencia prolongada + puerta abierta + alertas WhatsApp a familiares", 300],
            ["Puesta en marcha y formación (2,5 h)", 120]
          ],
          total: 650
        },
        {
          nombre: "Recomendada — + detección de caídas por IA de visión",
          destacada: true,
          items: [
            ["Sensor de movimiento por estancia (x4)", 100],
            ["Sensor de puerta/ventana (x2)", 40],
            ["Cámara IP con IA de detección de caídas (zonas comunes)", 160],
            ["Sensor de temperatura interior", 18],
            ["Mini-PC (4 GB) con SSD", 110],
            ["Cableado y material", 35],
            ["Motor Python: caídas (IA visión) + ausencia + puerta + temperatura + alertas WhatsApp", 420],
            ["Puesta en marcha, calibración y formación (3,5 h)", 160]
          ],
          total: 1043
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 650 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 460 €. No sustituye a la teleasistencia sanitaria oficial."
    }
  },
  {
    slug: "modo-ninos",
    imagen: "/img/ia-predictiva/modo-ninos.jpg",
    numero: 8,
    nombre: "Modo Niños",
    subtitulo: "Llegada del colegio automatizada",
    icono: "ninos",
    resumen:
      "Cuando los hijos llegan a casa desde el colegio, el sistema los reconoce por geolocalización del móvil, abre automáticamente, enciende las luces necesarias, activa la calefacción o el clima, y envía una confirmación inmediata a los padres por WhatsApp.",
    idealPara: ["Familias con ambos padres trabajando", "Niños que ya vuelven solos del colegio", "Quien quiere confirmación automática de llegada"],
    precioSolo: 460,
    precioIncremento: 325,
    ejemplo: {
      titulo: "Geofencing + aviso de llegada + escena de bienvenida",
      opciones: [
        {
          nombre: "Básica — aviso de llegada por WhatsApp",
          destacada: false,
          items: [
            ["Mini-PC o Raspberry Pi 4", 75],
            ["Sensor de puerta/ventana (confirmación de entrada)", 20],
            ["Cableado y material", 15],
            ["Motor Python: geofencing del móvil del menor + confirmación + WhatsApp a los padres", 260],
            ["Puesta en marcha y ajuste de perímetro GPS (2 h)", 90]
          ],
          total: 460
        },
        {
          nombre: "Recomendada — + apertura y escena de bienvenida",
          destacada: true,
          items: [
            ["Mini-PC (4 GB) con SSD", 110],
            ["Sensor de puerta/ventana", 20],
            ["2 enchufes/interruptores inteligentes (luz de entrada y salón)", 50],
            ["Cableado y material", 25],
            ["Motor Python: geofencing + apertura (cerradura inteligente ya instalada) + escena + WhatsApp", 320],
            ["Puesta en marcha y formación (3 h)", 130]
          ],
          total: 655
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 460 € (incluye mini-PC propio y puesta en marcha completa). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 325 €. La opción Recomendada asume cerradura inteligente ya instalada (bloque Seguridad y Accesos)."
    }
  },
  {
    slug: "gestion-paquetes",
    imagen: "/img/ia-predictiva/gestion-paquetes.jpg",
    numero: 9,
    nombre: "Gestión de Paquetes",
    subtitulo: "Detección de repartidores con IA",
    icono: "paquete",
    resumen:
      "El sistema detecta cuándo llega un repartidor mediante IA de visión, hace una foto del paquete y del momento de la entrega, y avisa por WhatsApp — todo procesado en local, sin cuota mensual.",
    idealPara: ["Quien recibe pedidos con frecuencia y no está en casa", "Viviendas con portal o entrada compartida", "Negocios con recepción de mercancía"],
    precioSolo: 395,
    precioIncremento: 320,
    ejemplo: {
      titulo: "Detección de paquete + foto automática + alerta WhatsApp",
      opciones: [
        {
          nombre: "Básica — detección + foto + alerta WhatsApp",
          destacada: false,
          items: [
            ["Cámara IP de entrada con visión nocturna", 110],
            ["Raspberry Pi 4 o mini-PC existente", 75],
            ["Cableado y material", 15],
            ["Motor Python: detección IA de repartidor/paquete + foto automática + alerta WhatsApp", 195]
          ],
          total: 395
        },
        {
          nombre: "Recomendada — + histórico de entregas",
          destacada: true,
          items: [
            ["Cámara IP de entrada con visión nocturna", 140],
            ["Mini-PC (4 GB) con SSD", 110],
            ["Cableado y material", 25],
            ["Motor Python: detección + reconocimiento de mensajería habitual + histórico", 300],
            ["Dashboard con historial de entregas (fecha, hora, foto)", 110]
          ],
          total: 685
        }
      ],
      nota: "Precio \"Solo, sin plataforma\": 395 € (incluye mini-PC propio). Precio \"+ instalado junto a la plataforma\" (si ya existe la instalación base): 320 €."
    }
  }
];

module.exports = { instalacionBase, modos };
