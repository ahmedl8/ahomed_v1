// Plataforma IA Predictiva — bloque E del catálogo AHOMED.
// El diferencial no está en los dispositivos (un Shelly o un Zigbee los compra
// cualquiera), sino en el motor Python que vive en el mini-PC y cruza datos que
// nadie más mezcla: clima, precio de la luz por hora, geolocalización, calidad
// del aire, fases de sueño, presencia humana y de vehículos. Ellos instalan
// dispositivos. AHOMED instala inteligencia.
//
// Modelo de precio (revisado agosto 2026): el Mini-PC IA Central es OBLIGATORIO
// y se compra una única vez — ya no existe la opción de instalar un modo "solo,
// con equipo propio" ni Raspberry Pi como cerebro central. Dos niveles de
// hardware según cuántos servicios IA quiere el cliente:
//   - IA START (Ryzen 5, sin NPU): de sobra para 1-2 modos, ya que el análisis
//     por IA se hace sobre 1 frame cada 1-2 segundos, no sobre streaming continuo.
//   - IA PRO (Ryzen 7 con NPU): para 3+ modos o Seguridad IA con varias cámaras
//     en paralelo — varios modos y varias cámaras a la vez sí piden más músculo.
// El coste adicional de cada modo NO cambia entre niveles: es el mismo trabajo
// de sensores, cableado y configuración de software tanto si el cerebro central
// es el START como si es el PRO. Lo único que cambia es el precio de la base.

const nivelesInstalacionBase = [
  {
    slug: "start",
    nombre: "IA START",
    subtitulo: "Para 1-2 servicios IA",
    resumen:
      "El mini-PC IA analiza 1 frame cada 1-2 segundos por cámara y ejecuta un modo o dos sin esfuerzo — no hace falta más músculo del que da un Ryzen 5 de gama media para arrancar con la Plataforma IA Predictiva.",
    items: [
      ["Mini-PC IA (Ryzen 5 7530U o equivalente, 16 GB RAM, 512 GB SSD)", 430],
      ["Instalación del motor Python + modelos YOLO26 (orquestador de modos)", 90],
      ["Dashboard de control unificado", 40],
      ["Integración WhatsApp Business API", 30]
    ],
    total: 590
  },
  {
    slug: "pro",
    nombre: "IA PRO",
    subtitulo: "Para 3 o más servicios IA, o Seguridad IA con varias cámaras",
    resumen:
      "Cuando el mini-PC tiene que correr varios modos a la vez, o analizar varias cámaras en paralelo para Seguridad IA, conviene más núcleos y una NPU dedicada — el Ryzen 7 8845HS mantiene todo fluido sin cuellos de botella.",
    items: [
      ["Mini-PC IA (Ryzen 7 8845HS o equivalente, 32 GB RAM, 1 TB SSD, NPU ~16 TOPS)", 700],
      ["Instalación del motor Python + modelos YOLO26 (orquestador de modos)", 130],
      ["Dashboard de control unificado", 50],
      ["Integración WhatsApp Business API", 30],
      ["UPS de protección (evita corrupción de datos ante cortes de luz)", 40]
    ],
    total: 950
  }
];

// Compatibilidad hacia atrás: instalacionBase apunta al nivel PRO por defecto
// en vistas que aún no distinguen niveles.
const instalacionBase = {
  nombre: "Mini-PC IA Central — instalación base obligatoria",
  resumen:
    "Antes de cualquier modo se instala una única vez el Mini-PC IA Central, el motor Python que orquesta todos los modos, el dashboard de control y la integración con WhatsApp Business API. Disponible en dos niveles según cuántos servicios IA quiere el cliente — ver comparativa arriba. A partir de aquí, cada modo añadido es un coste adicional fijo, igual en ambos niveles.",
  niveles: nivelesInstalacionBase,
  total: 950
};

const modos = [
  {
    slug: "motor-meteorologico",
    imagen: "/img/ia-predictiva/motor-meteorologico.jpg",
    video: "/video/ia-predictiva/motor-meteorologico.mp4",
    numero: 1,
    publico: "casa",
    nombre: "Motor Meteorológico",
    titular: "Tu jardín decide cuándo necesita agua",
    subtitulo: "Riego y persianas con IA climática",
    icono: "clima-ia",
    resumen:
      "El mini-PC consulta la API meteorológica cada hora, anticipa lluvia, viento y temperatura, y actúa sobre el riego y las persianas sin intervención del usuario. Si va a llover en 3 horas, el riego no arranca. Si el viento supera 40 km/h, las persianas suben automáticamente.",
    idealPara: ["Jardines y terrazas con riego automático", "Viviendas con persianas motorizadas", "Segundas residencias que se visitan poco"],
    precioIncremento: 600,
    ejemplo: {
      titulo: "Motor clima + riego + persianas",
      opciones: [
        {
          nombre: "Esencial — motor clima + riego (4 zonas)",
          destacada: false,
          items: [

            ["Controlador de riego WiFi 4 zonas (Shelly o similar)", 55],
            ["Sensores de temperatura/humedad exterior (x2)", 30],
            ["Cableado y material de instalación", 25],
            ["Configuración del motor Python (API clima + lógica de riego)", 280],
            ["Puesta en marcha y formación (2 h)", 120]
          ],
          total: 510
        },
        {
          nombre: "Inteligente — motor clima + riego + persianas",
          destacada: true,
          items: [
            ["Controlador de riego WiFi 4 zonas", 55],
            ["4 motores de persiana WiFi (Shelly 2.5 o equivalente)", 220],
            ["Sensores exterior temperatura/humedad/lluvia", 45],
            ["Cableado, canal y material", 60],
            ["Motor Python: lógica climática + riego + persianas + alertas WhatsApp", 380],
            ["Dashboard web personalizado (consulta desde móvil)", 180],
            ["Puesta en marcha y formación (3 h)", 130]
          ],
          total: 1070
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 510 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "casa-presencial",
    imagen: "/img/ia-predictiva/casa-presencial.jpg",
    video: "/video/ia-predictiva/casa-presencial.mp4",
    numero: 2,
    publico: "casa",
    nombre: "Casa Presencial",
    titular: "Tu casa sabe cuándo llegas",
    subtitulo: "Geolocalización y escenas automáticas",
    icono: "geo-casa",
    resumen:
      "El móvil avisa al mini-PC cuando sales o llegas a casa. Al salir: luces apagadas, clima en modo ahorro, simulación de presencia si vas a tardar en volver. Al llegar: escena de bienvenida con luces, música y clima ya en marcha.",
    idealPara: ["Viviendas donde todos salen a trabajar", "Segundas residencias (simulación de presencia)", "Quien quiere llegar a casa con todo listo"],
    precioIncremento: 620,
    ejemplo: {
      titulo: "Geofencing + 3 escenas + simulación de presencia",
      opciones: [
        {
          nombre: "Esencial — geofencing + 2 escenas",
          destacada: false,
          items: [
            ["2 enchufes inteligentes WiFi (Shelly Plug)", 40],
            ["1 tira LED salón con controlador WiFi", 55],
            ["Cableado y material", 20],
            ["Configuración del motor de geofencing (GPS móvil → escenas)", 240],
            ["Puesta en marcha y ajuste de perímetros GPS (2 h)", 100]
          ],
          total: 455
        },
        {
          nombre: "Inteligente — 3 escenas + simulación de presencia",
          destacada: true,
          items: [
            ["2 enchufes inteligentes WiFi", 40],
            ["1 tira LED salón con controlador WiFi", 55],
            ["Termostato WiFi inteligente", 75],
            ["Cableado y material", 75],
            ["Configuración del motor de geofencing (GPS móvil → escenas)", 20],
            ["3 escenas configuradas + simulación de presencia + app de control", 240],
            ["Puesta en marcha y ajuste de perímetros GPS (2 h)", 90]
          ],
          total: 595
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 455 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "ia-sueno",
    imagen: "/img/ia-predictiva/ia-sueno.jpg",
    video: "/video/ia-predictiva/ia-sueno.mp4",
    numero: 3,
    publico: "casa",
    nombre: "IA de Sueño",
    titular: "Tu dormitorio se prepara para que descanses mejor",
    subtitulo: "Entorno adaptativo para descanso óptimo",
    icono: "sueno",
    resumen:
      "Persianas y luz se ajustan automáticamente según tu horario de sueño: amanecer gradual por la mañana, temperatura de color cálida por la noche, integración con la alarma del móvil.",
    idealPara: ["Personas con horarios de sueño irregulares", "Dormitorios con persianas motorizadas", "Quien quiere despertar sin alarma brusca"],
    precioIncremento: 618,
    ejemplo: {
      titulo: "Persianas + luz adaptativa + integración con alarma",
      opciones: [
        {
          nombre: "Esencial — persianas + amanecer gradual",
          destacada: false,
          items: [
            ["2 motores de persiana WiFi (dormitorio principal)", 110],
            ["Sensor de luminosidad exterior", 65],
            ["Cableado y material", 25],
            ["Configuración del motor de sueño: horarios + amanecer gradual", 220],
            ["Puesta en marcha y formación (2 h)", 90]
          ],
          total: 510
        },
        {
          nombre: "Inteligente — + luz cálida/fría + alarma del móvil",
          destacada: true,
          items: [
            ["2 motores de persiana WiFi", 110],
            ["Tira LED regulable (temperatura de color cálido/frío)", 110],
            ["Sensor de luminosidad exterior", 65],
            ["Cableado y material", 25],
            ["Configuración del motor de sueño: horarios + amanecer gradual", 25],
            ["Integración con alarma del móvil (vía API o IFTTT)", 220],
            ["Puesta en marcha y formación (2 h)", 90]
          ],
          total: 645
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 510 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "calidad-aire",
    imagen: "/img/ia-predictiva/calidad-aire.jpg",
    numero: 4,
    publico: "casa",
    nombre: "Panel de Calidad del Aire",
    titular: "Respira un aire que se controla solo",
    subtitulo: "CO₂, VOC y ventilación con IA",
    icono: "aire-calidad",
    resumen:
      "Sensores de CO₂, humedad y temperatura envían lectura continua al mini-PC, que activa ventilación o purificación automáticamente cuando se superan los umbrales saludables, con alertas por WhatsApp.",
    idealPara: ["Dormitorios y oficinas en casa", "Viviendas bien selladas con poca ventilación natural", "Familias con niños pequeños o alergias"],
    precioIncremento: 430,
    ejemplo: {
      titulo: "Sensor CO₂ + dashboard + alertas automáticas",
      opciones: [
        {
          nombre: "Esencial — sensor + alertas WhatsApp",
          destacada: false,
          items: [
            ["Sensor CO₂ + temperatura + humedad (SCD40 o equivalente)", 45],
            ["Cableado y material mínimo", 15],
            ["Motor Python: lectura continua + umbrales + alertas WhatsApp", 200],
            ["Puesta en marcha y calibración (1,5 h)", 70]
          ],
          total: 330
        },
        {
          nombre: "Inteligente — + dashboard con histórico",
          destacada: true,
          items: [
            ["Sensor CO₂ + temperatura + humedad", 45],
            ["Cableado y material", 20],
            ["Motor Python: lectura continua + umbrales + alertas WhatsApp", 200],
            ["Dashboard básico con histórico 7 días", 100],
            ["Puesta en marcha y calibración (1,5 h)", 90]
          ],
          total: 455
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 330 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "cuidado-mascotas",
    imagen: "/img/ia-predictiva/cuidado-mascotas.jpg",
    video: "/video/ia-predictiva/cuidado-mascotas.mp4",
    numero: 5,
    publico: "casa",
    nombre: "Cuidado de Mascotas",
    titular: "Tu mascota, vigilada aunque no estés",
    subtitulo: "IA de bienestar animal",
    icono: "mascota",
    resumen:
      "El sistema vigila el bienestar de la mascota cuando el propietario no está en casa: comprueba si ha comido, el nivel del bebedero, la temperatura del espacio y detecta ladridos prolongados o señales de estrés, con aviso inmediato por WhatsApp.",
    idealPara: ["Mascotas que se quedan solas durante la jornada laboral", "Perros con ansiedad por separación", "Quien viaja con frecuencia"],
    precioIncremento: 405,
    ejemplo: {
      titulo: "Monitorización + comedero + control de temperatura",
      opciones: [
        {
          nombre: "Esencial — monitorización + alerta de ladridos",
          destacada: false,
          items: [
            ["Cámara IP con audio bidireccional", 110],
            ["Sensor de nivel de bebedero", 35],
            ["Cableado y material", 15],
            ["Motor Python: detección de ladridos prolongados + alertas WhatsApp", 180],
            ["Puesta en marcha (1,5 h)", 65]
          ],
          total: 405
        },
        {
          nombre: "Inteligente — + comedero y control de temperatura",
          destacada: true,
          items: [
            ["Cámara IP con audio bidireccional y visión nocturna", 140],
            ["Comedero automático conectado (raciones programadas)", 120],
            ["Sensor de nivel de bebedero", 35],
            ["Sensor de temperatura de la estancia", 20],
            ["Cableado y material", 25],
            ["Motor Python: comida/agua/temperatura + detección de ladridos + alertas WhatsApp", 280],
            ["Puesta en marcha y formación (2 h)", 90]
          ],
          total: 710
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 405 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "cocina-inteligente",
    imagen: "/img/ia-predictiva/cocina-inteligente.jpg",
    video: "/video/ia-predictiva/cocina-inteligente.mp4",
    numero: 6,
    publico: "casa",
    nombre: "Cocina Inteligente",
    titular: "Que nunca más te preocupe si dejaste algo encendido",
    subtitulo: "Detección de humo y aviso de horno",
    icono: "cocina-ia",
    resumen:
      "El sistema vigila la cocina mientras el usuario está fuera de casa: si detecta humo, activa el extractor y avisa por WhatsApp; si el usuario sale de casa con el horno encendido, envía una pregunta directa por WhatsApp para confirmar si debe apagarlo.",
    idealPara: ["Quien suele olvidar el horno encendido", "Viviendas con extractor conectado", "Familias con niños o mayores en casa"],
    precioIncremento: 385,
    ejemplo: {
      titulo: "Detección de humo + extractor automático + aviso de horno",
      opciones: [
        {
          nombre: "Esencial — detección de humo + alerta WhatsApp",
          destacada: false,
          items: [
            ["Detector de humo/CO conectado", 100],
            ["Cableado y material", 15],
            ["Motor Python: lectura continua + alerta WhatsApp inmediata", 180],
            ["Puesta en marcha (1,5 h)", 90]
          ],
          total: 385
        },
        {
          nombre: "Inteligente — + extractor automático y aviso de horno",
          destacada: true,
          items: [
            ["Detector de humo/CO conectado", 100],
            ["Extractor de cocina WiFi inteligente", 80],
            ["Enchufe/relé inteligente en horno o vitro", 45],
            ["Cableado y material", 30],
            ["Motor Python: humo → extractor + alerta; horno encendido al salir → pregunta WhatsApp", 320],
            ["Puesta en marcha y formación (2,5 h)", 120]
          ],
          total: 695
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 385 €. El detector de humo/CO conectado sube de 70 € a 100 € en esta revisión: es lo que cuesta de verdad un detector conectado equivalente (tipo Nest Protect) en 2026."
    }
  },
  {
    slug: "personas-mayores",
    imagen: "/img/ia-predictiva/personas-mayores.jpg",
    video: "/video/ia-predictiva/personas-mayores.mp4",
    numero: 7,
    publico: "casa",
    nombre: "Personas Mayores",
    titular: "Tranquilidad para cuidar a distancia",
    subtitulo: "Teleasistencia inteligente sin cuota",
    icono: "mayores",
    resumen:
      "Detecta ausencia prolongada de movimiento, posibles caídas mediante IA de visión, puertas abiertas demasiado tiempo, temperaturas extremas y consumo eléctrico anormal. Avisa automáticamente a uno o varios familiares por WhatsApp, sin cuota mensual.",
    idealPara: ["Padres o madres mayores que viven solos", "Familias que quieren tranquilidad sin cuota de teleasistencia", "Viviendas con varias generaciones"],
    precioIncremento: 540,
    ejemplo: {
      titulo: "Ausencia de movimiento + detección de caídas por IA",
      opciones: [
        {
          nombre: "Esencial — ausencia de movimiento + puerta abierta",
          destacada: false,
          items: [
            ["Sensor de movimiento por estancia (x3)", 75],
            ["Sensor de puerta/ventana (entrada principal)", 20],
            ["Cableado y material", 25],
            ["Motor Python: ausencia prolongada + puerta abierta + alertas WhatsApp a familiares", 300],
            ["Puesta en marcha y formación (2,5 h)", 120]
          ],
          total: 540
        },
        {
          nombre: "Inteligente — + detección de caídas por IA de visión",
          destacada: true,
          items: [
            ["Sensor de movimiento por estancia (x4)", 100],
            ["Sensor de puerta/ventana (x2)", 40],
            ["Cámara IP con IA de detección de caídas (zonas comunes)", 160],
            ["Sensor de temperatura interior", 18],
            ["Cableado y material", 35],
            ["Motor Python: caídas (IA visión) + ausencia + puerta + temperatura + alertas WhatsApp", 420],
            ["Puesta en marcha, calibración y formación (3,5 h)", 160]
          ],
          total: 933
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 540 €. Ya no se ofrece este modo con equipo propio independiente. No sustituye a la teleasistencia sanitaria oficial."
    }
  },
  {
    slug: "modo-ninos",
    imagen: "/img/ia-predictiva/modo-ninos.jpg",
    video: "/video/ia-predictiva/modo-ninos.mp4",
    videosExtra: [{ titulo: "Bebés", src: "/video/ia-predictiva/bebes.mp4" }],
    numero: 8,
    publico: "casa",
    nombre: "Niños y Bebés",
    titular: "Sabrás que han llegado bien, sin tener que preguntar",
    subtitulo: "Llegada del colegio automatizada",
    icono: "ninos",
    resumen:
      "Cuando los hijos llegan a casa desde el colegio, el sistema los reconoce por geolocalización del móvil, abre automáticamente, enciende las luces necesarias, activa la calefacción o el clima, y envía una confirmación inmediata a los padres por WhatsApp.",
    idealPara: ["Familias con ambos padres trabajando", "Niños que ya vuelven solos del colegio", "Bebés y niños pequeños al cuidado de otra persona en casa", "Quien quiere confirmación automática de llegada"],
    precioIncremento: 385,
    ejemplo: {
      titulo: "Geofencing + aviso de llegada + escena de bienvenida",
      opciones: [
        {
          nombre: "Esencial — aviso de llegada por WhatsApp",
          destacada: false,
          items: [
            ["Sensor de puerta/ventana (confirmación de entrada)", 20],
            ["Cableado y material", 15],
            ["Motor Python: geofencing del móvil del menor + confirmación + WhatsApp a los padres", 260],
            ["Puesta en marcha y ajuste de perímetro GPS (2 h)", 90]
          ],
          total: 385
        },
        {
          nombre: "Inteligente — + apertura y escena de bienvenida",
          destacada: true,
          items: [
            ["Sensor de puerta/ventana", 20],
            ["2 enchufes/interruptores inteligentes (luz de entrada y salón)", 50],
            ["Cableado y material", 25],
            ["Motor Python: geofencing + apertura (cerradura inteligente ya instalada) + escena + WhatsApp", 320],
            ["Puesta en marcha y formación (3 h)", 130]
          ],
          total: 545
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 385 €. La opción Inteligente asume cerradura inteligente ya instalada (bloque Seguridad y Accesos)."
    }
  },
  {
    slug: "gestion-paquetes",
    imagen: "/img/ia-predictiva/gestion-paquetes.jpg",
    video: "/video/ia-predictiva/gestion-paquetes.mp4",
    numero: 9,
    publico: "casa",
    nombre: "Gestión de Paquetes",
    titular: "No te pierdas ni un paquete otra vez",
    subtitulo: "Detección de repartidores con IA",
    icono: "paquete",
    resumen:
      "El sistema detecta cuándo llega un repartidor mediante IA de visión, hace una foto del paquete y del momento de la entrega, y avisa por WhatsApp — todo procesado en local, sin cuota mensual.",
    idealPara: ["Quien recibe pedidos con frecuencia y no está en casa", "Viviendas con portal o entrada compartida", "Negocios con recepción de mercancía"],
    precioIncremento: 320,
    ejemplo: {
      titulo: "Detección de paquete + foto automática + alerta WhatsApp",
      opciones: [
        {
          nombre: "Esencial — detección + foto + alerta WhatsApp",
          destacada: false,
          items: [
            ["Cámara IP de entrada con visión nocturna", 110],
            ["Cableado y material", 15],
            ["Motor Python: detección IA de repartidor/paquete + foto automática + alerta WhatsApp", 195]
          ],
          total: 320
        },
        {
          nombre: "Inteligente — + histórico de entregas",
          destacada: true,
          items: [
            ["Cámara IP de entrada con visión nocturna", 140],
            ["Cableado y material", 25],
            ["Motor Python: detección + reconocimiento de mensajería habitual + histórico", 300],
            ["Dashboard con historial de entregas (fecha, hora, foto)", 110]
          ],
          total: 575
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): 320 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "seguridad-ia",
    imagen: "/img/hero-bloques/ia-monitorizacion.jpg",
    video: "/video/ia-predictiva/seguridad-ia.mp4",
    numero: 10,
    publico: "casa",
    nombre: "Seguridad IA",
    titular: "Que una cámara no solo grabe: que entienda lo que ocurre",
    subtitulo: "Detección de personas y vehículos, sin falsas alarmas",
    icono: "ai",
    resumen:
      "El mini-PC central analiza un frame cada 1-2 segundos de cada cámara con YOLO26 y aprende a distinguir personas y vehículos reales de falsas alarmas (un gato, una sombra, una bolsa moviéndose con el viento). Solo avisa por WhatsApp cuando de verdad importa.",
    idealPara: ["Viviendas que quieren dejar de recibir alertas falsas", "Quien ya tiene cámaras y quiere añadirles análisis IA", "Chalets y segundas residencias"],
    extras: ["Reentrenamiento del modelo (ver bono de mantenimiento)", "Ampliación a panel de monitorización a medida (dashboard propio)", "Integración con CCTV cableado ya instalado"],
    tambienInstalaron: ["Cerradura inteligente", "Videoportero inteligente", "Red WiFi mesh (conexión estable, imprescindible para la IA)"],
    esProyecto: true,
    ejemplos: [
      {
        titulo: "Vivienda: kit de vigilancia con alertas por WhatsApp",
        subtitulo: "Vivienda unifamiliar · 2 a 6 cámaras según opción",
        imagen: "/img/trabajos/monitor-ia-despues.jpg",
        imagenAntes: "/img/trabajos/monitor-ia-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — 2 cámaras",
            destacada: false,
            items: [
              ["Mano de obra y configuración del modelo de detección", 320],
              ["2 cámaras IP compatibles (usan el Mini-PC IA Central, sin equipo propio)", 390],
              ["Configuración de alertas por WhatsApp (API Meta) y app", 150]
            ],
            total: 860
          },
          {
            nombre: "Inteligente — 4 cámaras + zonas personalizadas",
            destacada: true,
            items: [
              ["Mano de obra y configuración", 420],
              ["4 cámaras IP (usan el Mini-PC IA Central, sin equipo propio)", 710],
              ["Configuración de alertas WhatsApp y zonas de detección personalizadas", 200]
            ],
            total: 1330
          },
          {
            nombre: "Completa — 6 cámaras + reconocimiento de personas habituales",
            destacada: false,
            items: [
              ["Mano de obra y configuración avanzada", 520],
              ["6 cámaras IP", 900],
              ["Servidor con GPU dedicada para reconocimiento facial en tiempo real (el mini-PC central no cubre esta carga)", 950],
              ["Entrenamiento de reconocimiento de personas habituales y alertas WhatsApp", 350]
            ],
            total: 2720
          }
        ]
      }
    ],
    nota:
      "Todas las opciones ya asumen que tienes instalado el Mini-PC IA Central (950 €, obligatorio) — no incluyen un mini-PC de grabación aparte. Excepción: la opción Completa añade un servidor con GPU dedicada para reconocimiento facial en tiempo real, una carga que el mini-PC central no cubre. Cifras orientativas, a confirmar en visita técnica. ¿Tienes una nave, almacén o finca en vez de una vivienda? Consulta Seguridad IA para Naves y Fincas."
  },
  {
    slug: "acceso-inteligente",
    imagen: "/img/trabajos/acceso-inteligente-despues.jpg",
    video: "/video/ia-predictiva/acceso-inteligente.mp4",
    videosExtra: [
      { titulo: "Vehículo autorizado", src: "/video/ia-predictiva/garaje-autorizado.mp4" },
      { titulo: "Vehículo no autorizado", src: "/video/ia-predictiva/garaje-no-autorizado.mp4" }
    ],
    numero: 11,
    publico: "casa",
    nombre: "Acceso Inteligente",
    titular: "Que la puerta y el garaje reconozcan quién eres, sin llave ni mando",
    subtitulo: "Reconocimiento de personas y vehículos autorizados",
    icono: "ai",
    resumen:
      "El mini-PC central identifica a las personas y vehículos habituales de la casa y abre la puerta o el garaje automáticamente al reconocerlos. Si detecta a alguien o algo no autorizado, no abre y avisa por WhatsApp con una foto del momento.",
    idealPara: ["Viviendas con puerta o cancela de acceso peatonal", "Garajes y cocheras con entrada de vehículos", "Familias que quieren dejar de usar mando o llave"],
    precioIncremento: 620,
    ejemplo: {
      titulo: "Acceso a puerta principal + garaje",
      opciones: [
        {
          nombre: "Esencial — reconocimiento en la puerta principal",
          destacada: false,
          items: [
            ["Cámara IP en el acceso con reconocimiento facial", 180],
            ["Configuración del modelo de reconocimiento (hasta 6 personas)", 260],
            ["Integración con cerradura/abrepuertas ya instalado", 90],
            ["Alertas por WhatsApp ante acceso no reconocido (con foto)", 90]
          ],
          total: 620
        },
        {
          nombre: "Inteligente — + apertura automática de garaje ⭐",
          destacada: true,
          items: [
            ["Cámara IP en el acceso con reconocimiento facial", 180],
            ["Cámara IP en la entrada del garaje con visión nocturna", 220],
            ["Configuración del modelo de reconocimiento de personas y matrículas (hasta 6)", 480],
            ["Integración con cerradura y motor de garaje ya instalados", 180],
            ["Alertas por WhatsApp ante acceso no reconocido (con foto)", 90]
          ],
          total: 1150
        },
        {
          nombre: "Completa — + accesos temporales y registro",
          destacada: false,
          items: [
            ["Cámara IP en el acceso con reconocimiento facial", 180],
            ["Cámara IP en la entrada del garaje con visión nocturna", 220],
            ["Configuración del modelo de reconocimiento de personas y matrículas (ilimitados)", 620],
            ["Integración con cerradura y motor de garaje ya instalados", 180],
            ["Accesos temporales programables (repartidores, limpieza, visitas) + histórico", 260],
            ["Alertas por WhatsApp ante acceso no reconocido (con foto)", 90]
          ],
          total: 1550
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (950 €, obligatorio): desde 620 €. Asume cerradura inteligente y/o motor de garaje ya instalados (bloque Seguridad y Accesos)."
    }
  }
];

module.exports = { instalacionBase, modos };
