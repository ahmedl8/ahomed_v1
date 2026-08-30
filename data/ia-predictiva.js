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
    subtitulo: "Empieza pequeño — para 1-2 servicios IA",
    resumen:
      "Suficiente para arrancar con 1 o 2 servicios de la Plataforma IA Predictiva sin esfuerzo — la opción más ajustada para empezar.",
    lineas: [
      { ref: "minipc_ia_start" },
      { ref: "motor_python_start" },
      { ref: "dashboard_control_start" },
      { ref: "integracion_whatsapp_api" }
    ]
  },
  {
    slug: "pro",
    nombre: "IA PRO",
    subtitulo: "Crece sin cambiar todo — para 3+ servicios IA o Seguridad IA con varias cámaras",
    resumen:
      "Cuando quieres varios servicios a la vez, o Seguridad IA con varias cámaras en paralelo, conviene más potencia para que todo vaya fluido sin esperas.",
    lineas: [
      { ref: "minipc_ia_pro" },
      { ref: "motor_python_pro" },
      { ref: "dashboard_control_pro" },
      { ref: "integracion_whatsapp_api" },
      { ref: "ups_proteccion" }
    ]
  }
];

// Compatibilidad hacia atrás: instalacionBase apunta al nivel PRO por defecto
// en vistas que aún no distinguen niveles.
const instalacionBase = {
  nombre: "Mini-PC IA Central — instalación base obligatoria",
  // "Cerebro AHOMED" es el nombre comercial de este mismo Mini-PC IA Central:
  // se usa en la home y en la cabecera de /servicios/ia-predictiva para que
  // el sistema se perciba como el cerebro que conecta la casa, no solo como
  // una pieza de hardware. El hardware real sigue siendo el Mini-PC IA Central
  // descrito abajo — no son dos productos distintos. Ver /areas/ahomed-negocio.md,
  // construcción 1 de 5 del análisis comparativo con Loxone.
  marca: "Cerebro AHOMED",
  tagline: "El sistema que conecta y coordina tu casa.",
  resumen:
    "Antes de cualquier modo se instala una única vez el Mini-PC IA Central: el cerebro que conecta todos los modos entre sí, el dashboard de control y la integración con WhatsApp Business API. Disponible en dos niveles según cuántos servicios IA quiere el cliente — ver comparativa arriba. A partir de aquí, cada modo añadido es un coste adicional fijo, igual en ambos niveles.",
  niveles: nivelesInstalacionBase,
  total: 950
};

const modos = [
  {
    slug: "motor-meteorologico",
    imagen: "/img/ia-predictiva/motor-meteorologico.jpg",
    video: "/video/ia-predictiva/motor-meteorologico.mp4",
    numero: 1,
    familia: "confort",
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
          lineas: [
            { ref: "controlador_riego_wifi_4z_shelly" },
            { ref: "sensores_temp_humedad_ext_x2" },
            { ref: "material_ia_25" },
            { ref: "config_motor_clima_riego" },
            { ref: "integracion_app_dashboard_basico" },
            { ref: "puesta_marcha_formacion_2h" }
          ]
        },
        {
          nombre: "Inteligente — motor clima + riego + persianas",
          destacada: true,
          lineas: [
            { ref: "controlador_riego_wifi_4z_shelly" },
            { ref: "motores_persiana_wifi_x4_shelly" },
            { ref: "sensores_ext_temp_hum_lluvia" },
            { ref: "material_ia_60" },
            { ref: "motor_python_clima_riego_persianas" },
            { ref: "dashboard_web_personalizado" },
            { ref: "puesta_marcha_formacion_3h" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 600 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "casa-presencial",
    imagen: "/img/ia-predictiva/casa-presencial.jpg",
    video: "/video/ia-predictiva/casa-presencial.mp4",
    numero: 2,
    familia: "seguridad",
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
          nombre: "Esencial — geofencing + 3 escenas (llegada / salida / noche)",
          destacada: false,
          lineas: [
            { ref: "enchufes_inteligentes_wifi_x2" },
            { ref: "tira_led_salon_controlador_wifi" },
            { ref: "termostato_wifi_inteligente" },
            { ref: "material_ia_20" },
            { ref: "config_motor_geofencing" },
            { ref: "escenas_3_app_control" },
            { ref: "puesta_marcha_ajuste_gps_2h" }
          ]
        },
        {
          nombre: "Inteligente — 3 escenas + simulación de presencia",
          destacada: true,
          lineas: [
            { ref: "enchufes_inteligentes_wifi_x2" },
            { ref: "tira_led_salon_controlador_wifi" },
            { ref: "termostato_wifi_inteligente" },
            { ref: "material_ia_75" },
            { ref: "config_motor_geofencing" },
            { ref: "escenas_3_presencia_app" },
            { ref: "puesta_marcha_ajuste_gps_2h", label: "Puesta en marcha y ajuste de perímetros GPS (2 h)" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 620 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "ia-sueno",
    imagen: "/img/ia-predictiva/ia-sueno.jpg",
    video: "/video/ia-predictiva/ia-sueno.mp4",
    numero: 3,
    familia: "confort",
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
          nombre: "Esencial — persianas + luz nocturna adaptativa",
          destacada: false,
          lineas: [
            { ref: "motores_persiana_wifi_x2_dormitorio" },
            { ref: "tira_led_regulable_temp_color" },
            { ref: "sensor_luminosidad_exterior" },
            { ref: "material_ia_25", label: "Cableado y material" },
            { ref: "config_motor_sueno" },
            { ref: "integracion_alarma_movil" },
            { ref: "puesta_marcha_formacion_2h", label: "Puesta en marcha y formación (2 h)" }
          ]
        },
        {
          nombre: "Inteligente — + luz cálida/fría + alarma del móvil",
          destacada: true,
          lineas: [
            { ref: "motores_persiana_wifi_x2_dormitorio" },
            { ref: "tira_led_regulable_temp_color_v2" },
            { ref: "sensor_luminosidad_ext_v2" },
            { ref: "material_ia_25", label: "Cableado y material" },
            { ref: "config_motor_sueno_reducido" },
            { ref: "integracion_alarma_movil_v2" },
            { ref: "puesta_marcha_formacion_2h", label: "Puesta en marcha y formación (2 h)" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 618 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "calidad-aire",
    imagen: "/img/ia-predictiva/calidad-aire.jpg",
    video: "/video/ia-predictiva/calidad-aire.mp4",
    numero: 4,
    familia: "confort",
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
          nombre: "Esencial — monitorización + alertas WhatsApp",
          destacada: false,
          lineas: [
            { ref: "sensor_co2_temp_hum_scd40" },
            { ref: "material_ia_15" },
            { ref: "motor_python_umbrales_alertas" },
            { ref: "dashboard_basico_historico_7d" },
            { ref: "puesta_marcha_calibracion_15h" }
          ]
        },
        {
          nombre: "Inteligente — CO₂ + VOC + ventilación automática",
          destacada: true,
          lineas: [
            { ref: "sensor_co2_voc_multisensor" },
            { ref: "extractor_wifi_x2" },
            { ref: "material_ia_40" },
            { ref: "motor_python_umbrales_ventilacion" },
            { ref: "dashboard_tiempo_real_recomendaciones" },
            { ref: "alertas_whatsapp_resumen_diario" },
            { ref: "puesta_marcha_calibracion_25h" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 430 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "cuidado-mascotas",
    imagen: "/img/ia-predictiva/cuidado-mascotas.jpg",
    video: "/video/ia-predictiva/cuidado-mascotas.mp4",
    numero: 5,
    familia: "familia",
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
          lineas: [
            { ref: "camara_ip_audio_bidireccional" },
            { ref: "sensor_nivel_bebedero" },
            { ref: "material_ia_15", label: "Cableado y material" },
            { ref: "motor_python_ladridos_alertas" },
            { ref: "puesta_marcha_15h" }
          ]
        },
        {
          nombre: "Inteligente — + comedero y control de temperatura",
          destacada: true,
          lineas: [
            { ref: "camara_ip_audio_vision_nocturna" },
            { ref: "comedero_automatico_conectado" },
            { ref: "sensor_nivel_bebedero" },
            { ref: "sensor_temperatura_estancia" },
            { ref: "material_ia_25", label: "Cableado y material" },
            { ref: "motor_python_comida_temp_ladridos" },
            { ref: "puesta_marcha_formacion_2h", label: "Puesta en marcha y formación (2 h)" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 405 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "cocina-inteligente",
    imagen: "/img/ia-predictiva/cocina-inteligente.jpg",
    video: "/video/ia-predictiva/cocina-inteligente.mp4",
    numero: 6,
    familia: "hogar",
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
          lineas: [
            { ref: "detector_humo_co_conectado" },
            { ref: "material_ia_15", label: "Cableado y material" },
            { ref: "motor_python_humo_alerta" },
            { ref: "puesta_marcha_15h", label: "Puesta en marcha (1,5 h)", precioOverride: 90 }
          ]
        },
        {
          nombre: "Inteligente — + extractor automático y aviso de horno",
          destacada: true,
          lineas: [
            { ref: "detector_humo_co_conectado" },
            { ref: "extractor_cocina_wifi" },
            { ref: "enchufe_rele_horno_vitro" },
            { ref: "material_ia_30" },
            { ref: "motor_python_humo_horno" },
            { ref: "puesta_marcha_formacion_25h" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 385 €. El detector de humo/CO conectado sube de 70 € a 100 € en esta revisión: es lo que cuesta de verdad un detector conectado equivalente (tipo Nest Protect) en 2026."
    }
  },
  {
    slug: "personas-mayores",
    imagen: "/img/ia-predictiva/personas-mayores.jpg",
    video: "/video/ia-predictiva/personas-mayores.mp4",
    numero: 7,
    familia: "familia",
    publico: "casa",
    nombre: "Personas Mayores",
    titular: "Sin cuota, para siempre — se paga sola en 1-3 años",
    subtitulo: "Teleasistencia inteligente sin cuota",
    icono: "mayores",
    resumen:
      "Detecta ausencia prolongada de movimiento, posibles caídas mediante IA de visión, puertas abiertas demasiado tiempo, temperaturas extremas y consumo eléctrico anormal. Avisa automáticamente a uno o varios familiares por WhatsApp — pagas la instalación una vez y ya no hay cuota nunca más: una teleasistencia privada cuesta 20-60 €/mes (240-720 €/año) de por vida, así que esto se amortiza en 1-3 años y luego sale gratis.",
    idealPara: ["Padres o madres mayores que viven solos", "Familias que quieren tranquilidad sin cuota de teleasistencia", "Viviendas con varias generaciones"],
    precioIncremento: 540,
    ejemplo: {
      titulo: "Ausencia de movimiento + detección de caídas por IA",
      opciones: [
        {
          nombre: "Esencial — ausencia de movimiento + puerta abierta",
          destacada: false,
          lineas: [
            { ref: "sensor_movimiento_estancia_x3" },
            { ref: "sensor_puerta_ventana" },
            { ref: "material_ia_25", label: "Cableado y material" },
            { ref: "motor_python_ausencia_puerta" },
            { ref: "puesta_marcha_formacion_25h_v2" }
          ]
        },
        {
          nombre: "Inteligente — + detección de caídas por IA de visión",
          destacada: true,
          lineas: [
            { ref: "sensor_movimiento_estancia_x4" },
            { ref: "sensor_puerta_ventana_x2" },
            { ref: "camara_ip_deteccion_caidas" },
            { ref: "sensor_temperatura_interior" },
            { ref: "material_ia_35" },
            { ref: "motor_python_caidas_ausencia_temp" },
            { ref: "puesta_marcha_calibracion_formacion_35h" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 540 €. Ya no se ofrece este modo con equipo propio independiente. No sustituye a la teleasistencia sanitaria oficial."
    }
  },
  {
    slug: "modo-ninos",
    imagen: "/img/ia-predictiva/modo-ninos.jpg",
    video: "/video/ia-predictiva/modo-ninos.mp4",
    videosExtra: [{ titulo: "Bebés", src: "/video/ia-predictiva/bebes.mp4" }],
    numero: 8,
    familia: "familia",
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
          lineas: [
            { ref: "sensor_puerta_ventana", label: "Sensor de puerta/ventana (confirmación de entrada)" },
            { ref: "material_ia_15", label: "Cableado y material" },
            { ref: "motor_python_geofencing_menor" },
            { ref: "puesta_marcha_ajuste_gps_2h", label: "Puesta en marcha y ajuste de perímetro GPS (2 h)" }
          ]
        },
        {
          nombre: "Inteligente — + apertura y escena de bienvenida",
          destacada: true,
          lineas: [
            { ref: "sensor_puerta_ventana" },
            { ref: "enchufes_inteligentes_entrada_salon_x2" },
            { ref: "material_ia_25", label: "Cableado y material" },
            { ref: "motor_python_geofencing_apertura_escena" },
            { ref: "puesta_marcha_formacion_3h_v2" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 385 €. La opción Inteligente asume cerradura inteligente ya instalada (bloque Seguridad y Accesos)."
    }
  },
  {
    slug: "gestion-paquetes",
    imagen: "/img/ia-predictiva/gestion-paquetes.jpg",
    video: "/video/ia-predictiva/gestion-paquetes.mp4",
    numero: 9,
    familia: "seguridad",
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
          lineas: [
            { ref: "camara_ip_entrada_vision_nocturna" },
            { ref: "material_ia_15", label: "Cableado y material" },
            { ref: "motor_python_deteccion_paquete_foto" }
          ]
        },
        {
          nombre: "Inteligente — + histórico de entregas",
          destacada: true,
          lineas: [
            { ref: "camara_ip_entrada_vision_nocturna_v2" },
            { ref: "material_ia_25", label: "Cableado y material" },
            { ref: "motor_python_deteccion_reconocimiento_historico" },
            { ref: "dashboard_historial_entregas" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): 320 €. Ya no se ofrece este modo con equipo propio independiente."
    }
  },
  {
    slug: "seguridad-ia",
    imagen: "/img/hero-bloques/ia-monitorizacion.jpg",
    video: "/video/ia-predictiva/seguridad-ia.mp4",
    numero: 10,
    familia: "seguridad",
    publico: "casa",
    nombre: "Seguridad IA",
    titular: "Sin cuota ni permanencia — la alarma con central cuesta 20-50 €/mes",
    subtitulo: "Detección de personas y vehículos, sin falsas alarmas",
    icono: "ai",
    resumen:
      "El sistema aprende a distinguir personas y vehículos reales de falsas alarmas (un gato, una sombra, una bolsa moviéndose con el viento). Solo avisa por WhatsApp cuando de verdad importa — pagas la instalación una vez, sin cuota mensual ni permanencia de 24 meses como las alarmas con central receptora (20-50 €/mes, 240-620 €/año).",
    idealPara: ["Viviendas que quieren dejar de recibir alertas falsas", "Quien ya tiene cámaras y quiere añadirles análisis IA", "Chalets y segundas residencias"],
    extras: ["Reentrenamiento del modelo (ver bono de mantenimiento)", "Ampliación a panel de monitorización a medida (dashboard propio)", "Integración con CCTV cableado ya instalado"],
    tambienInstalaron: [
      { texto: "Cerradura inteligente", href: "/servicios/seguridad" },
      { texto: "Videoportero inteligente", href: "/servicios/seguridad" },
      { texto: "Red WiFi mesh (conexión estable, imprescindible para la IA)", href: "/servicios/redes-informatica" }
    ],
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
            lineas: [
              { ref: "mo_config_deteccion_ia_320" },
              { ref: "camaras_ip_compatibles_x2" },
              { ref: "config_alertas_whatsapp_app" }
            ]
          },
          {
            nombre: "Inteligente — 4 cámaras + zonas personalizadas",
            destacada: true,
            lineas: [
              { ref: "mo_config_420" },
              { ref: "camaras_ip_compatibles_x4" },
              { ref: "config_alertas_zonas_personalizadas" }
            ]
          },
          {
            nombre: "Completa — 6 cámaras + reconocimiento de personas habituales",
            destacada: false,
            lineas: [
              { ref: "mo_config_avanzada_520" },
              { ref: "camaras_ip_x6" },
              { ref: "servidor_gpu_reconocimiento_facial" },
              { ref: "entrenamiento_reconocimiento_alertas" }
            ]
          }
        ]
      }
    ],
    nota:
      "Todas las opciones ya asumen que tienes instalado el Mini-PC IA Central (E1, desde 590 €, según nivel) — no incluyen un mini-PC de grabación aparte. Excepción: la opción Completa añade un servidor con GPU dedicada para reconocimiento facial en tiempo real, una carga que el mini-PC central no cubre. Cifras orientativas, a confirmar en visita técnica. ¿Tienes una nave, almacén o finca en vez de una vivienda? Consulta Seguridad IA para Naves y Fincas."
  },
  {
    slug: "acceso-inteligente",
    imagen: "/img/trabajos/acceso-inteligente-despues.jpg",
    video: "/video/ia-predictiva/acceso-inteligente.mp4",
    videosExtra: [
      { titulo: "Vehículo autorizado", src: "/video/ia-predictiva/garaje-autorizado.mp4", poster: "/img/trabajos/garaje-inteligente-despues.jpg" },
      { titulo: "Vehículo no autorizado", src: "/video/ia-predictiva/garaje-no-autorizado.mp4" }
    ],
    numero: 11,
    familia: "seguridad",
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
          lineas: [
            { ref: "camara_ip_acceso_reconocimiento_facial" },
            { ref: "config_modelo_reconocimiento_6p" },
            { ref: "integracion_cerradura_abrepuertas" },
            { ref: "alertas_whatsapp_acceso_no_reconocido" }
          ]
        },
        {
          nombre: "Inteligente — + apertura automática de garaje ⭐",
          destacada: true,
          lineas: [
            { ref: "camara_ip_acceso_reconocimiento_facial" },
            { ref: "camara_ip_garaje_vision_nocturna" },
            { ref: "config_modelo_reconocimiento_matriculas_6" },
            { ref: "integracion_cerradura_motor_garaje" },
            { ref: "alertas_whatsapp_acceso_no_reconocido" }
          ]
        },
        {
          nombre: "Completa — + accesos temporales y registro",
          destacada: false,
          lineas: [
            { ref: "camara_ip_acceso_reconocimiento_facial" },
            { ref: "camara_ip_garaje_vision_nocturna" },
            { ref: "config_modelo_reconocimiento_matriculas_ilimitado" },
            { ref: "integracion_cerradura_motor_garaje" },
            { ref: "accesos_temporales_historico" },
            { ref: "alertas_whatsapp_acceso_no_reconocido" }
          ]
        }
      ],
      nota: "Coste adicional sobre el Mini-PC IA Central (E1, desde 590 €, según nivel): desde 620 €. Asume cerradura inteligente y/o motor de garaje ya instalados (bloque Seguridad y Accesos)."
    }
  }
];

// Agrupación comercial de los 11 modos en 4 familias (feedback de reestructuración,
// Prioridad 4 — ver /areas/ahomed-web.md). Cada modo declara su familia arriba
// mediante el campo `familia`, igual que cada servicio declara su `bloque` en
// services.js. Así 11 modos se presentan como 4 soluciones, no como 11 productos
// sueltos que el cliente tiene que estudiar uno a uno.
const familiasIA = [
  {
    slug: "seguridad",
    nombre: "Seguridad",
    resumen: "Seguridad IA, Acceso Inteligente, Gestión de Paquetes y Casa Presencial.",
    icono: "shield",
    imagen: "/img/iconos/necesitas-seguridad"
  },
  {
    slug: "confort",
    nombre: "Confort",
    resumen: "Motor Meteorológico, IA de Sueño y Panel de Calidad del Aire.",
    icono: "clima-ia",
    imagen: "/img/iconos/necesitas-confort"
  },
  {
    slug: "familia",
    nombre: "Familia",
    resumen: "Personas Mayores, Niños y Bebés, y Cuidado de Mascotas.",
    icono: "mayores",
    imagen: "/img/iconos/necesitas-familia"
  },
  {
    slug: "hogar",
    nombre: "Hogar",
    resumen: "Cocina Inteligente.",
    icono: "cocina-ia",
    imagen: "/img/iconos/necesitas-hogar"
  }
];

module.exports = { instalacionBase, modos, familiasIA };
