// Datos de servicios AHOMED — extraídos de "Guía de Servicios AHOMED 2026"
// Todos los precios son orientativos; se confirman tras visita técnica gratuita.

const services = [
  {
    slug: "electricidad",
    bloque: "electricidad-domotica",
    heroImagen: "/img/hero-bloques/electricidad.jpg",
    numero: 1,
    publico: "casa",
    versionAlternativa: "electricidad-nave",
    nombre: "Electricidad",
    icono: "bolt",
    resumen: "Cuadros eléctricos, boletines, averías, puntos de recarga e iluminación. La base de cualquier instalación segura.",
    tiempo: "Media jornada",
    desde: 100,
    idealPara: [
      "Viviendas con cuadro antiguo o sin boletín (CIE)",
      "Averías eléctricas urgentes",
      "Instalación de punto de recarga para coche eléctrico"
    ],
    avisoUrgente: {
      titulo: "¿Te has quedado sin luz ahora mismo?",
      texto: "Diagnóstico de avería eléctrica a domicilio desde 100 €. Vamos el mismo día, sin esperar a comparar presupuestos.",
      ctaTexto: "Pedir diagnóstico urgente",
      mensajeWhatsapp: "Hola, tengo una avería eléctrica y necesito un diagnóstico urgente."
    },
    ejemplo: {
      titulo: "Sustitución de cuadro eléctrico + boletín (CIE)",
      cliente: "Vivienda con cuadro eléctrico antiguo, sin diferencial ni protección por circuitos.",
      imagen: "/img/trabajos/cuadro-electrico-despues.jpg",
      imagenAntes: "/img/trabajos/cuadro-electrico-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
          destacada: false,
          lineas: [
            { ref: "mo_electricista_hora", horas: 4 },
            { ref: "cuadro_12_elementos" },
            { ref: "diferencial_estandar_30ma" },
            { ref: "material_cableado_basico" },
            { ref: "boletin_cie" }
          ]
        },
        {
          nombre: "Inteligente",
          destacada: true,
          lineas: [
            { ref: "mo_electricista_hora", horas: 5 },
            { ref: "cuadro_12_elementos" },
            { ref: "diferencial_superinmunizado", label: "Diferencial superinmunizado (no salta solo al encender el microondas o la lavadora)" },
            { ref: "material_cableado_medio" },
            { ref: "boletin_cie" }
          ]
        },
        {
          nombre: "Completa",
          destacada: false,
          lineas: [
            { ref: "mo_electricista_hora", horas: 6 },
            { ref: "cuadro_12_elementos" },
            { ref: "diferencial_superinmunizado", label: "Diferencial superinmunizado (no salta solo al encender el microondas o la lavadora)" },
            { ref: "protector_sobretensiones", label: "Protector de sobretensiones (protege tus aparatos electrónicos de una subida de tensión de la red)" },
            { ref: "material_cableado_ampliado" },
            { ref: "boletin_cie" }
          ]
        }
      ]
    },
    extras: [
      "Punto de recarga para coche eléctrico (desde 995 €)",
      "Iluminación LED (desde 235 €)"
    ],
    tambienInstalaron: [{ texto: "Iluminación LED", href: "/servicios/electricidad" }, { texto: "Red WiFi mesh", href: "/servicios/redes-informatica" }, { texto: "Domótica básica", href: "/servicios/domotica" }, { texto: "Energía solar (autoconsumo)", href: "/servicios/energia-solar" }],
    ejemplosAdicionales: [
      {
        titulo: "Punto de recarga para coche eléctrico (wallbox)",
        cliente: "Instalación de wallbox doméstica, desde el cuadro eléctrico hasta el garaje o plaza de parking",
        imagen: "/img/trabajos/wallbox-despues.jpg",
        opciones: [
          {
            nombre: "Esencial — wallbox 7,4 kW, instalación corta (hasta 5 m)",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 7.4, label: "Mano de obra e instalación (hasta 5 m desde el cuadro)" },
              { ref: "wallbox_74kw_mono" },
              { ref: "linea_dedicada_protecciones" },
              { ref: "material_canaleta_cableado" }
            ]
          },
          {
            nombre: "Inteligente — wallbox conectada + gestión de carga ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_electricista_hora", horas: 8.95, label: "Mano de obra e instalación (hasta 8 m)" },
              { ref: "wallbox_74kw_wifi" },
              { ref: "linea_dedicada_protecciones" },
              { ref: "material_wallbox_medio" },
              { ref: "boletin_cie", label: "Boletín eléctrico (CIE) de la nueva línea" }
            ]
          },
          {
            nombre: "Completa — wallbox trifásica 22 kW + gestión dinámica de potencia",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 11.05, label: "Mano de obra e instalación (hasta 10 m, línea trifásica)" },
              { ref: "wallbox_22kw_trifasica" },
              { ref: "linea_dedicada_protecciones_reforzada" },
              { ref: "gestor_carga_dinamico", label: "Gestor de carga dinámico (evita saltos del ICP si hay otros consumos altos)" },
              { ref: "material_wallbox_trifasica" },
              { ref: "boletin_cie" }
            ]
          }
        ],
        nota: "Si el cuadro eléctrico no tiene capacidad disponible o hay que llevar línea nueva desde el contador, se presupuesta aparte tras la visita técnica. La normativa (ITC-BT-52) exige línea dedicada con magnetotérmico y diferencial propios para el wallbox — van incluidos desde la opción Esencial, no como extra; en presupuestos más baratos del mercado conviene preguntar si de verdad los llevan, porque es lo que protege tu coche y tu instalación."
      }
    ]
  },
  {
    slug: "domotica",
    bloque: "electricidad-domotica",
    heroImagen: "/img/hero-bloques/domotica.jpg",
    numero: 2,
    publico: "casa",
    nombre: "Domótica",
    icono: "home-wifi",
    resumen: "Haz que tu casa haga cosas por ti. Luces, persianas, climatización, riego y escenas automáticas controladas desde el móvil — desde una estancia hasta la vivienda completa.",
    tiempo: "Trabajo rápido (por estancia)",
    desde: 210,
    idealPara: [
      "Personas mayores (control sencillo por app o voz)",
      "Viviendas nuevas",
      "Alquiler turístico",
      "Segunda residencia"
    ],
    ejemplo: {
      titulo: "Domótica salón + cocina",
      cliente: "Salón y cocina de un piso, con interruptores y enchufes convencionales.",
      imagen: "/img/trabajos/enchufes-despues.jpg",
      imagenAntes: "/img/trabajos/enchufes-antes.jpg",
      opciones: [
        {
          nombre: "Básica — interruptores de toda la vida",
          destacada: false,
          lineas: [
            { ref: "mo_domotica_hora", horas: 3, label: "Mano de obra (sustitución/instalación de puntos)" },
            { ref: "interruptor_convencional", cantidad: 4, label: "4 interruptores convencionales" },
            { ref: "enchufe_convencional", cantidad: 2, label: "2 enchufes convencionales" },
            { ref: "material_electrico_domotica_bajo" }
          ]
        },
        {
          nombre: "Inteligente — control desde el móvil ⭐",
          destacada: true,
          lineas: [
            { ref: "mo_domotica_hora", horas: 4, label: "Mano de obra" },
            { ref: "interruptor_wifi", cantidad: 4, label: "4 interruptores WiFi" },
            { ref: "enchufe_inteligente", cantidad: 2, label: "2 enchufes inteligentes" },
            { ref: "material_electrico_domotica_medio" }
          ]
        },
        {
          nombre: "Completa — la IA decide, tú confirmas",
          destacada: false,
          lineas: [
            { ref: "mo_domotica_hora", horas: 5, label: "Mano de obra" },
            { ref: "interruptor_wifi", cantidad: 6, label: "6 interruptores WiFi" },
            { ref: "enchufe_inteligente", cantidad: 3, label: "3 enchufes inteligentes" },
            { ref: "hub_domotica", label: "Hub central de domótica (para escenas y control por voz)" },
            { ref: "material_electrico_domotica_alto" }
          ]
        }
      ],
      nota: "La opción Completa necesita el Mini-PC IA Central de la Plataforma IA Predictiva (desde 590 €, no incluido aquí) — se comparte con el resto de modos IA que instales, no se paga varias veces. Revisión y mantenimiento anual (opcional): 60 €/año — revisión de dispositivos y actualización de la app."
    },
    extras: [
      "Al salir de casa: apaga luces y baja la climatización con una sola escena",
      "Al llegar: enciende luces y ajusta la temperatura automáticamente",
      "Por la noche: baja las persianas a la hora que tú decidas",
      "Domótica completa de vivienda (desde 1.610 €)",
      "Persianas motorizadas (desde 345 €)",
      "Riego automático de jardín (desde 420 €)",
      "Toldo motorizado con control por app (desde 620 €)",
      "Automatización de piscina (desde 460 €)"
    ],
    tambienInstalaron: [{ texto: "Persianas motorizadas", href: "/servicios/domotica" }, { texto: "Cerradura inteligente", href: "/servicios/seguridad" }, { texto: "Red WiFi mesh con red de domótica separada", href: "/servicios/redes-informatica" }, { texto: "Iluminación de exterior", href: "/servicios/electricidad" }, { texto: "Placas solares (para autoabastecer el sistema de riego)", href: "/servicios/energia-solar" }],
    ejemplosAdicionales: [
      {
        titulo: "Domótica completa de vivienda",
        cliente: "Control integral de luces, persianas, clima y escenas en todas las estancias, no solo una habitación",
      imagen: "/img/trabajos/persianas-despues.jpg",
      imagenAntes: "/img/trabajos/persianas-antes.jpg",
        opciones: [
          {
            nombre: "Básica — interruptores de toda la vida (piso de 3 habitaciones)",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 12, label: "Mano de obra (instalación, 3 hab. + salón + cocina)" },
              { ref: "interruptor_convencional", cantidad: 10, label: "10 interruptores convencionales" },
              { ref: "enchufe_convencional", cantidad: 4, label: "4 enchufes convencionales" },
              { ref: "mando_persiana_cableado", cantidad: 4, label: "4 mandos de pared para persianas" },
              { ref: "material_domotica_60" }
            ]
          },
          {
            nombre: "Inteligente — control desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_domotica_hora", horas: 20.5, label: "Mano de obra (instalación y configuración avanzada)" },
              { ref: "interruptor_wifi", cantidad: 10, label: "10 interruptores WiFi" },
              { ref: "enchufe_inteligente", cantidad: 4, label: "4 enchufes inteligentes" },
              { ref: "dispositivo_motor_persiana_wifi", cantidad: 4, horasPrimera: 4.5, horasAdicional: 2.5, horasRef: "mo_domotica_hora", label: "4 motores de persiana con control WiFi" },
              { ref: "hub_domotica" },
              { ref: "config_escenas_basica" },
              { ref: "material_domotica_70" }
            ]
          },
          {
            nombre: "Completa — la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 26, label: "Mano de obra (instalación y configuración completa)" },
              { ref: "interruptor_wifi", cantidad: 12, label: "12 interruptores WiFi" },
              { ref: "enchufe_inteligente", cantidad: 6, label: "6 enchufes inteligentes" },
              { ref: "dispositivo_motor_persiana_wifi", cantidad: 5, horasPrimera: 4.5, horasAdicional: 2.5, horasRef: "mo_domotica_hora", label: "5 motores de persiana con control WiFi" },
              { ref: "termostato_inteligente" },
              { ref: "hub_domotica_altavoz" },
              { ref: "config_escenas_avanzada" },
              { ref: "material_domotica_90" }
            ]
          }
        ],
        nota: "El alcance final depende del número de estancias y puntos de luz/persiana reales; se ajusta tras la visita técnica. La opción Completa decide sola cuándo bajar persianas, ajustar temperatura o encender luces según presencia y hora, y te avisa antes de actuar cuando la situación no está clara — necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
      },
      {
        titulo: "Persianas motorizadas",
        cliente: "Motorización de persianas existentes con control por app, mando o integración con domótica",
      imagen: "/img/trabajos/persianas-despues.jpg",
      imagenAntes: "/img/trabajos/persianas-antes.jpg",
        opciones: [
          {
            nombre: "Básica — 1 persiana, mando de pared cableado",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 3.5, label: "Mano de obra (desmontaje persiana manual + instalación motor)" },
              { ref: "dispositivo_motor_persiana_mando", label: "Motor tubular de persiana", precioOverride: 150 },
              { ref: "mando_persiana_cableado" },
              { ref: "material_fijacion_persiana" }
            ]
          },
          {
            nombre: "Inteligente — 1 persiana con control desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_domotica_hora", horas: 4.5 },
              { ref: "dispositivo_motor_persiana_wifi" },
              { ref: "material_fijacion_persiana", label: "Material de fijación", precioOverride: 45 }
            ]
          },
          {
            nombre: "Completa — pack 4 persianas, la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "dispositivo_motor_persiana_wifi", cantidad: 4, horasPrimera: 4.5, horasAdicional: 2.5, horasRef: "mo_domotica_hora", label: "4 motores tubulares con módulo WiFi (incluye mano de obra)" },
              { ref: "config_escenas_basica", label: "Configuración de escenas automáticas (apertura al amanecer, cierre por temperatura)" },
              { ref: "material_fijacion_persiana", cantidad: 3, label: "Material de fijación (4 persianas)" }
            ]
          }
        ],
        nota: "Precio por persiana estándar (hasta 3 m² de superficie); persianas grandes o de material reforzado se valoran aparte. La opción Completa necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA) para que decida sola cuándo subir o bajar cada persiana."
      },
      {
        titulo: "Riego automático de jardín",
        cliente: "Sistema de riego programado por zonas, con control por app y sensor de lluvia",
      imagen: "/img/trabajos/riego-despues.jpg",
      imagenAntes: "/img/trabajos/riego-antes.jpg",
        opciones: [
          {
            nombre: "Básica — 2 zonas, programador manual a pilas",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 6, label: "Mano de obra e instalación (2 zonas, hasta 100 m²)" },
              { ref: "programador_riego_manual", cantidad: 2, label: "2 programadores de riego a pilas (sin app)" },
              { ref: "tuberia_material_zanja_bajo" }
            ]
          },
          {
            nombre: "Inteligente — 4 zonas con control desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_domotica_hora", horas: 12.67, label: "Mano de obra e instalación (4 zonas, hasta 250 m²)" },
              { ref: "programador_riego_wifi_4v" },
              { ref: "sensor_lluvia", label: "Sensor de lluvia (evita riego innecesario)" },
              { ref: "tuberia_material_zanja_medio" }
            ]
          },
          {
            nombre: "Completa — 6 zonas, la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 17.33, label: "Mano de obra e instalación (6 zonas, hasta 500 m²)" },
              { ref: "programador_riego_wifi_6v" },
              { ref: "sensor_lluvia", label: "Sensor de lluvia y sensor de humedad de suelo", precioOverride: 150 },
              { ref: "tuberia_material_zanja_alto" },
              { ref: "integracion_domotica_riego" }
            ]
          }
        ],
        nota: "El precio depende de la superficie real de jardín y del tipo de riego (goteo, difusión o aspersión); se ajusta tras la visita técnica. La opción Completa cruza previsión meteorológica y humedad real del suelo para decidir si riega o no, y necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
      },
      {
        titulo: "Toldo motorizado con control por app",
        cliente: "Terraza de 4 x 3 m",
      imagen: "/img/trabajos/toldo-despues.jpg",
      imagenAntes: "/img/trabajos/toldo-antes.jpg",
        opciones: [
          {
            nombre: "Básica — manivela manual",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 3, label: "Instalación y fijación (toldo de 4 x 3 m)" },
              { ref: "manivela_toldo_manual" },
              { ref: "material_fijacion_toldo_20", label: "Material de fijación", precioOverride: 380 }
            ]
          },
          {
            nombre: "Inteligente — control desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_domotica_hora", horas: 6.67, label: "Instalación y fijación" },
              { ref: "dispositivo_toldo_motor_wifi" },
              { ref: "modulo_control_app_toldo" },
              { ref: "material_fijacion_toldo_25" }
            ]
          },
          {
            nombre: "Completa — la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 7.33, label: "Instalación y fijación" },
              { ref: "dispositivo_toldo_motor_wifi" },
              { ref: "modulo_control_app_toldo" },
              { ref: "sensor_viento", label: "Sensor de viento (cierre automático ante ráfagas fuertes)" },
              { ref: "led_brazo_toldo" },
              { ref: "material_fijacion_toldo_30" }
            ]
          }
        ],
        nota: "El sensor de viento protege el toldo cerrándolo automáticamente antes de que una ráfaga fuerte pueda dañar la lona o los brazos. La opción Completa avisa y cierra el toldo sola ante viento fuerte o lluvia, y necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
      },
      {
        titulo: "Automatización de piscina (filtración, luz y monitorización)",
        cliente: "Piscina de vivienda unifamiliar",
      imagen: "/img/trabajos/piscina-despues.jpg",
      imagenAntes: "/img/trabajos/piscina-antes.jpg",
        opciones: [
          {
            nombre: "Básica — temporizador mecánico de filtración",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 4, label: "Instalación y conexionado eléctrico" },
              { ref: "temporizador_bomba_piscina_mecanico" },
              { ref: "material_proteccion_electrica_60", label: "Material y protección eléctrica (caja estanca)", precioOverride: 155 }
            ]
          },
          {
            nombre: "Inteligente — filtración + iluminación desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_domotica_hora", horas: 7.33, label: "Instalación y conexionado eléctrico" },
              { ref: "programador_bomba_wifi" },
              { ref: "led_piscina_rgb" },
              { ref: "material_proteccion_electrica_70" }
            ]
          },
          {
            nombre: "Completa — la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_domotica_hora", horas: 8.67, label: "Instalación y conexionado eléctrico" },
              { ref: "programador_bomba_wifi" },
              { ref: "led_piscina_rgb" },
              { ref: "sonda_ph_cloro" },
              { ref: "material_proteccion_electrica_80" }
            ]
          }
        ],
        nota: "La sonda de calidad del agua avisa por app cuando el pH o el nivel de cloro se salen del rango recomendado, antes de que el agua se vea afectada. La opción Completa ajusta sola tiempos de filtración según uso y temperatura, y necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
      }
    ]
  },
  {
    slug: "energia-solar",
    bloque: "energia",
    heroImagen: "/img/hero-bloques/energia-solar.jpg",
    numero: 3,
    publico: "casa",
    nombre: "Energía solar",
    icono: "solar",
    resumen: "Desde un kit de balcón que se enchufa directamente hasta placas de autoconsumo en tejado. ¿No puedes poner placas en el tejado? Empieza por tu terraza.",
    tiempo: "Media jornada",
    desde: 510,
    idealPara: [
      "Pisos con terraza o balcón orientados al sol",
      "Viviendas con factura eléctrica alta",
      "Chalets con tejado disponible (placas de autoconsumo)"
    ],
    ejemplo: {
      titulo: "Kit solar de autoconsumo para balcón/terraza (\"solar de enchufar\")",
      cliente: "Piso con terraza orientada al sur, sin instalación solar previa.",
      imagen: "/img/trabajos/solar-terraza-despues.jpg",
      imagenAntes: "/img/trabajos/solar-terraza-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
          destacada: false,
          lineas: [
            { ref: "mo_solar_hora", horas: 2.25, label: "Instalación y fijación" },
            { ref: "panel_solar_400w", cantidad: 2, label: "2 paneles solares 400 W (800 W total)" },
            { ref: "microinversor_800w" },
            { ref: "material_solar_balcon_20" }
          ]
        },
        {
          nombre: "Inteligente",
          destacada: true,
          lineas: [
            { ref: "mo_solar_hora", horas: 2.75, label: "Instalación y fijación con estructura reforzada" },
            { ref: "panel_solar_400w", cantidad: 2, label: "2 paneles solares 400 W (800 W total)" },
            { ref: "microinversor_800w_app" },
            { ref: "estructura_fijacion_balcon" },
            { ref: "material_solar_balcon_20", label: "Material" }
          ]
        },
        {
          nombre: "Completa — con batería portátil",
          destacada: false,
          lineas: [
            { ref: "mo_solar_hora", horas: 3.25, label: "Instalación y fijación con estructura reforzada" },
            { ref: "panel_solar_400w", cantidad: 2, label: "2 paneles solares 400 W (800 W total)" },
            { ref: "microinversor_800w_app" },
            { ref: "bateria_portatil_1kwh", label: "Batería portátil 1 kWh (almacena excedente para la noche)" },
            { ref: "estructura_fijacion_balcon" },
            { ref: "material_solar_balcon_25", label: "Material" }
          ]
        }
      ],
      nota: "Instalación de autoconsumo sin excedentes de baja potencia: no requiere alta como productor ni boletín de vertido a red."
    },
    extras: [
      "Placas solares en tejado, autoconsumo (desde 2.830 €)",
      "Gestión energética inteligente con tarifa PVPC (desde 590 €)",
      "Revisión y mantenimiento anual (30 €/año)"
    ],
    tambienInstalaron: [{ texto: "Panel de monitorización a medida", href: "/servicios/ia-predictiva" }, { texto: "Punto de recarga para coche eléctrico", href: "/servicios/electricidad" }, { texto: "Batería portátil adicional", href: "/servicios/energia-solar" }],
    ejemplosAdicionales: [
      {
        titulo: "Placas solares en tejado, autoconsumo",
        cliente: "Instalación de autoconsumo fotovoltaico sobre tejado, para reducir de forma significativa la factura eléctrica",
      imagen: "/img/trabajos/solar-tejado-despues.jpg",
      imagenAntes: "/img/trabajos/solar-tejado-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — 4 paneles (1.600 W)",
            destacada: false,
            lineas: [
              { ref: "mo_solar_hora", horas: 19.5, label: "Instalación, estructura de tejado y cableado" },
              { ref: "panel_solar_400w_tejado", cantidad: 4, label: "4 paneles solares 400 W (1.600 W total)" },
              { ref: "inversor_string_1600w", label: "Inversor 1.600 W" },
              { ref: "estructura_tejado_4p", label: "Estructura de fijación para tejado" },
              { ref: "legalizacion_memoria_tecnica", label: "Legalización (memoria técnica, si aplica según potencia)" },
              { ref: "material_protecciones_solar_350", label: "Material y protecciones" }
            ]
          },
          {
            nombre: "Inteligente — 6 paneles (2.400 W) + monitorización ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_solar_hora", horas: 24.5, label: "Instalación, estructura de tejado y cableado" },
              { ref: "panel_solar_400w_tejado", cantidad: 6, label: "6 paneles solares 400 W (2.400 W total)" },
              { ref: "inversor_string_2400w_app", label: "Inversor 2.400 W con monitorización por app" },
              { ref: "estructura_tejado_6p", label: "Estructura de fijación para tejado" },
              { ref: "legalizacion_memoria_tecnica", label: "Legalización (memoria técnica)" },
              { ref: "material_protecciones_solar_420", label: "Material y protecciones" }
            ]
          },
          {
            nombre: "Completa — 8 paneles (3.200 W) + batería",
            destacada: false,
            lineas: [
              { ref: "mo_solar_hora", horas: 29.5, label: "Instalación, estructura de tejado y cableado" },
              { ref: "panel_solar_400w_tejado", cantidad: 8, label: "8 paneles solares 400 W (3.200 W total)" },
              { ref: "inversor_hibrido_3200w_app", label: "Inversor 3.200 W con monitorización por app" },
              { ref: "bateria_almacenamiento_5kwh", label: "Batería de almacenamiento 5 kWh" },
              { ref: "estructura_tejado_8p", label: "Estructura de fijación para tejado" },
              { ref: "legalizacion_memoria_tecnica", label: "Legalización (memoria técnica) y alta como productor si hay excedentes", precioOverride: 830 },
              { ref: "material_protecciones_solar_500", label: "Material y protecciones" }
            ]
          }
        ],
        nota: "Instalaciones con vertido de excedentes a red requieren alta como productor ante la compañía eléctrica; se gestiona como parte de la legalización. El número de paneles y orientación óptima se confirma con la visita técnica y el estudio de sombras. La legalización completa (memoria técnica y, si aplica, alta como productor) va incluida en el precio, no aparte — el sector suele facturarla como partida independiente, entre 400 € y 1.500 € según la instalación, y sin ella no puedes cobrar los excedentes que viertes a la red."
      },
      {
        titulo: "Gestión energética inteligente (tarifa PVPC)",
        cliente: "Vivienda con cuadro antiguo y contador convencional, sin visibilidad del consumo ni aprovechamiento de las horas más baratas de la tarifa eléctrica",
        imagen: "/img/trabajos/gestion-energetica-pvpc-despues.jpg",
        imagenAntes: "/img/trabajos/gestion-energetica-pvpc-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — monitorización de consumo",
            destacada: false,
            lineas: [
              { ref: "mo_solar_hora", horas: 5.5, label: "Instalación y configuración" },
              { ref: "modulo_monitorizacion_consumo" },
              { ref: "app_consumo_tiempo_real" }
            ]
          },
          {
            nombre: "Inteligente — + optimización por tarifa PVPC ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_solar_hora", horas: 7, label: "Instalación y configuración" },
              { ref: "modulo_monitorizacion_consumo" },
              { ref: "integracion_tarifa_pvpc" },
              { ref: "app_pvpc_aviso_automatizacion", label: "App con aviso de horas más baratas y consumo en tiempo real" }
            ]
          },
          {
            nombre: "Completa — + automatización de electrodomésticos",
            destacada: false,
            lineas: [
              { ref: "mo_solar_hora", horas: 7, label: "Instalación y configuración" },
              { ref: "modulo_monitorizacion_consumo" },
              { ref: "integracion_tarifa_pvpc" },
              { ref: "rele_inteligente_electrodomestico", label: "Relés inteligentes para lavadora/termo (arranque en horas baratas)" },
              { ref: "app_pvpc_aviso_automatizacion", label: "App con automatización y aviso de horas más baratas" }
            ]
          }
        ],
        nota: "Compatible con cualquier instalación eléctrica existente, con o sin placas solares. Cifras orientativas, a confirmar en visita técnica."
      }
    ]
  },
  {
    slug: "seguridad",
    bloque: "seguridad-accesos",
    heroImagen: "/img/hero-bloques/seguridad.jpg",
    numero: 4,
    publico: "casa",
    nombre: "Seguridad",
    icono: "shield",
    resumen: "Cámaras, alarmas, videoportero y cerraduras inteligentes. Graba en local, sin cuota mensual — frente a los 20-50 €/mes de una alarma con central receptora, pagas la instalación una vez y el equipo es tuyo. Para que además interprete lo que ve y avise por WhatsApp, añade Seguridad IA.",
    tiempo: "Trabajo rápido",
    desde: 145,
    idealPara: [
      "Chalets, locales y comunidades",
      "Segundas residencias",
      "Viviendas que quieren dejar de pagar cuota mensual de alarma"
    ],
    ejemplo: {
      titulo: "Videoportero inteligente",
      cliente: "Vivienda unifamiliar con portero automático antiguo, sin cámara ni app.",
      imagen: "/img/trabajos/videoportero-despues.jpg",
      imagenAntes: "/img/trabajos/videoportero-antes.jpg",
      opciones: [
        {
          nombre: "Básica — telefonillo con vídeo, sin app",
          destacada: false,
          lineas: [
            { ref: "mo_seguridad_hora", horas: 1.5, label: "Instalación y configuración" },
            { ref: "telefonillo_video_basico" },
            { ref: "material_seguridad_10" }
          ]
        },
        {
          nombre: "Inteligente — control desde el móvil ⭐",
          destacada: true,
          lineas: [
            { ref: "mo_seguridad_hora", horas: 2.3, label: "Instalación y configuración" },
            { ref: "videoportero_2hilos" },
            { ref: "material_seguridad_15", label: "Material" }
          ]
        },
        {
          nombre: "Completa — la IA decide, tú confirmas",
          destacada: false,
          lineas: [
            { ref: "mo_seguridad_hora", horas: 3.1, label: "Instalación y configuración avanzada" },
            { ref: "videoportero_ip_nube" },
            { ref: "modulo_apertura_remota" },
            { ref: "material_seguridad_20", label: "Material" }
          ]
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 25 €/año — comprobación de batería/conexión y actualización de firmware. La opción Completa reconoce si quien llama es una visita habitual o un repartidor y te sugiere abrir o no — necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
    },
    extras: [
      "Monitor adicional",
      "Cerradura eléctrica con apertura desde el móvil (desde 195 €)",
      "Grabación en mini-PC local (CCTV cableado, desde 840 €)"
    ],
    tambienInstalaron: [{ texto: "Cerradura inteligente", href: "/servicios/seguridad" }, { texto: "Cámara WiFi adicional", href: "/servicios/seguridad" }, { texto: "Sistema de seguridad completo para chalet", href: "/soluciones" }, { texto: "Seguridad IA (sin falsas alarmas)", href: "/servicios/ia-predictiva/seguridad-ia" }, { texto: "Red WiFi mesh", href: "/servicios/redes-informatica" }, { texto: "Panel de monitorización a medida", href: "/servicios/ia-predictiva" }],
    ejemplosAdicionales: [
      {
        titulo: "Cerradura inteligente",
        cliente: "Apertura por app, huella, tarjeta o código, manteniendo la llave física como respaldo",
      imagen: "/img/trabajos/cerradura-despues.jpg",
      imagenAntes: "/img/trabajos/cerradura-antes.jpg",
        opciones: [
          {
            nombre: "Básica — teclado numérico, sin conexión",
            destacada: false,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 2.2, label: "Instalación y configuración" },
              { ref: "cerradura_teclado_sin_app" },
              { ref: "material_seguridad_15", label: "Material" }
            ]
          },
          {
            nombre: "Inteligente — control desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 2.8, label: "Instalación y configuración" },
              { ref: "cerradura_huella_teclado_app" },
              { ref: "material_seguridad_20", label: "Material" }
            ]
          },
          {
            nombre: "Completa — la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 3.4, label: "Instalación y configuración avanzada" },
              { ref: "cerradura_huella_teclado_app_nfc" },
              { ref: "integracion_cerradura_videoportero" },
              { ref: "config_accesos_temporales" },
              { ref: "material_seguridad_20", label: "Material", precioOverride: 25 }
            ]
          }
        ],
        nota: "Compatible con la mayoría de puertas europeas estándar; en puertas acorazadas o con cerradura especial se valora aparte tras revisión. La opción Completa avisa si detecta un patrón de acceso raro (hora inusual, varios intentos fallidos) y necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
      },
      {
        titulo: "Videovigilancia CCTV",
        cliente: "Cámaras PoE cableadas (más fiables que WiFi) con grabación local, sin cuota mensual. Solo graba: si además quieres que la cámara entienda lo que ve y te avise por WhatsApp, mira Seguridad IA.",
      imagen: "/img/trabajos/camara-exterior-despues.jpg",
      imagenAntes: "/img/trabajos/camara-exterior-antes.jpg",
        opciones: [
          {
            nombre: "Básica — 4 cámaras, solo graba",
            destacada: false,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 12, label: "Instalación y cableado (4 cámaras, hasta 30 m de tirada por cámara)" },
              { ref: "camara_ip_poe_exterior", cantidad: 4, label: "4 cámaras IP cableadas con visión nocturna" },
              { ref: "nvr_grabacion_local", label: "Mini-PC de grabación (NVR) con disco duro" },
              { ref: "cableado_estructurado_cctv_4cam" },
              { ref: "material_cctv_100", label: "Material y conectorizado" }
            ]
          },
          {
            nombre: "Inteligente — 6 cámaras, control desde el móvil ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 17, label: "Instalación y cableado (6 cámaras)" },
              { ref: "camara_ip_poe_exterior", cantidad: 6, label: "6 cámaras IP cableadas con visión nocturna" },
              { ref: "nvr_grabacion_local_ampliado", label: "Mini-PC de grabación con disco duro ampliado" },
              { ref: "cableado_estructurado_cctv_6cam" },
              { ref: "config_acceso_remoto_app" },
              { ref: "material_cctv_130", label: "Material y conectorizado" }
            ]
          },
          {
            nombre: "Completa — 8 cámaras, la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 22.5, label: "Instalación y cableado (8 cámaras)" },
              { ref: "camara_ip_poe_exterior", cantidad: 8, label: "8 cámaras IP cableadas con visión nocturna" },
              { ref: "nvr_grabacion_local_ampliado", label: "Mini-PC de grabación con disco duro ampliado" },
              { ref: "cableado_estructurado_cctv_8cam" },
              { ref: "config_deteccion_ia_camara", label: "Configuración de detección IA (persona/vehículo)" },
              { ref: "notificaciones_whatsapp_alarma" },
              { ref: "material_cctv_160", label: "Material y conectorizado" }
            ]
          }
        ],
        nota: "El precio depende de la distancia real de cableado entre cámaras y el punto de grabación; se confirma en la visita técnica. A diferencia de domótica/clima/riego, aquí la IA va integrada en el propio NVR de grabación — no necesita el Mini-PC IA Central de la Plataforma IA Predictiva. La opción Completa distingue personas y vehículos de falsas alarmas (un gato, una sombra) y solo te avisa por WhatsApp cuando de verdad importa."
      }
    ]
  },
  {
    slug: "redes-informatica",
    bloque: "conectividad",
    heroImagen: "/img/hero-bloques/redes-informatica.jpg",
    numero: 5,
    publico: "casa",
    versionAlternativa: "redes-nave",
    nombre: "Redes e informática",
    icono: "network",
    resumen: "WiFi rápido y estable en toda tu casa, sin zonas muertas. Base imprescindible para domótica e IA.",
    tiempo: "Trabajo rápido",
    desde: 210,
    idealPara: [
      "Viviendas grandes o de varias plantas con mala cobertura",
      "Quien vaya a instalar domótica o cámaras IA (red estable)",
      "Teletrabajo"
    ],
    ejemplo: {
      titulo: "Red WiFi mesh + configuración de red doméstica",
      cliente: "Piso con router de la operadora y cobertura WiFi irregular por estancias.",
      imagen: "/img/trabajos/rack-comunicaciones-despues.jpg",
      imagenAntes: "/img/trabajos/rack-comunicaciones-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
          destacada: false,
          lineas: [
            { ref: "mo_redes_hora", horas: 1.875, label: "Instalación y configuración" },
            { ref: "wifi_mesh_2pt" },
            { ref: "material_redes_10", label: "Material" }
          ]
        },
        {
          nombre: "Inteligente — con redes separadas",
          destacada: true,
          lineas: [
            { ref: "mo_redes_hora", horas: 2.65625, label: "Instalación y configuración avanzada (red de invitados y red de domótica separadas)" },
            { ref: "wifi_mesh_3pt" },
            { ref: "material_redes_15", label: "Material" }
          ]
        },
        {
          nombre: "Completa — con copia de seguridad automática",
          destacada: false,
          lineas: [
            { ref: "mo_redes_hora", horas: 3.4375, label: "Instalación y configuración avanzada" },
            { ref: "wifi_mesh_3pt" },
            { ref: "config_backup_automatico" },
            { ref: "material_redes_20", label: "Material" }
          ]
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 35 €/año — actualización de firmware y comprobación de cobertura."
    },
    extras: [
      "Ampliación de puntos mesh adicionales",
      "Red separada para domótica/IA",
      "Copia de seguridad automática",
      "Armario de comunicaciones y rack de red (desde 380 €)"
    ],
    tambienInstalaron: [{ texto: "Domótica", href: "/servicios/domotica" }, { texto: "Cámaras con IA", href: "/servicios/ia-predictiva/seguridad-ia" }, { texto: "Panel de monitorización a medida", href: "/servicios/ia-predictiva" }],
    ejemplosAdicionales: [
      {
        titulo: "Armario de comunicaciones y rack de red",
        cliente: "Vivienda con router y cableado a la vista, 4 tomas de red",
      imagen: "/img/trabajos/rack-comunicaciones-despues.jpg",
      imagenAntes: "/img/trabajos/rack-comunicaciones-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — armario compacto de superficie",
            destacada: false,
            lineas: [
              { ref: "mo_redes_hora", horas: 4.375, label: "Instalación de armario y orden de cableado existente" },
              { ref: "armario_comunicaciones_superficie" },
              { ref: "switch_8p" },
              { ref: "material_rack_25" }
            ]
          },
          {
            nombre: "Inteligente — rack empotrado + 4 tomas nuevas ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_redes_hora", horas: 8.125, label: "Instalación de armario empotrado y cableado a 4 tomas" },
              { ref: "armario_comunicaciones_empotrado" },
              { ref: "switch_8p_gestionable" },
              { ref: "cable_red_4_tomas" },
              { ref: "material_rack_30" }
            ]
          },
          {
            nombre: "Completa — con ONT, patch panel y router en rack",
            destacada: false,
            lineas: [
              { ref: "mo_redes_hora", horas: 10, label: "Instalación de armario empotrado y cableado a 6 tomas" },
              { ref: "armario_comunicaciones_empotrado" },
              { ref: "patch_panel_12p" },
              { ref: "switch_8p_gestionable" },
              { ref: "cable_red_6_tomas" },
              { ref: "reubicacion_ont_router" },
              { ref: "material_rack_35" }
            ]
          }
        ],
        nota: "Centralizar ONT, router y switch en un único armario facilita el mantenimiento y evita que el router quede a la vista en el salón."
      }
    ]
  },
  {
    slug: "climatizacion",
    bloque: "climatizacion",
    heroImagen: "/img/hero-bloques/climatizacion.jpg",
    numero: 6,
    publico: "casa",
    nombre: "Climatización",
    icono: "climate",
    resumen: "Instalación de aire acondicionado, de una habitación a la vivienda completa con sistema multisplit.",
    tiempo: "Un día",
    desde: 640,
    idealPara: [
      "Dormitorios y salones sin climatizar",
      "Viviendas que buscan control por WiFi",
      "Reformas con climatización de varias estancias (multisplit)"
    ],
    ejemplo: {
      titulo: "Aire acondicionado split 1x1 (habitación de 20-25 m²)",
      cliente: "Dormitorio sin climatización, con ventana orientada al oeste.",
      imagen: "/img/trabajos/aire-acondicionado-despues.jpg",
      imagenAntes: "/img/trabajos/aire-acondicionado-antes.jpg",
      opciones: [
        {
          nombre: "Básica — mando físico, sin conexión",
          destacada: false,
          lineas: [
            { ref: "mo_clima_hora", horas: 5.5, label: "Mano de obra e instalación (hasta 3 m de distancia)" },
            { ref: "split_1x1_basico" },
            { ref: "material_clima_40" }
          ]
        },
        {
          nombre: "Inteligente — control desde el móvil ⭐",
          destacada: true,
          lineas: [
            { ref: "mo_clima_hora", horas: 6.9, label: "Mano de obra e instalación" },
            { ref: "split_1x1_alta_wifi", label: "Split 1x1 3.000 frigorías con control WiFi" },
            { ref: "material_clima_45", label: "Material" }
          ]
        },
        {
          nombre: "Completa — la IA decide, tú confirmas",
          destacada: false,
          lineas: [
            { ref: "mo_clima_hora", horas: 7, label: "Mano de obra e instalación" },
            { ref: "split_1x1_alta_wifi" },
            { ref: "material_clima_50", label: "Material" },
            { ref: "certificado_rite" }
          ]
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 45 €/año — limpieza de filtros, revisión de gas y rendimiento. La opción Completa ajusta sola la temperatura según si hay alguien en casa y la previsión del tiempo, y necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
    },
    extras: ["Climatización multisplit para toda la vivienda (desde 2.950 €)", "Control WiFi", "Certificado RITE"],
    tambienInstalaron: [{ texto: "Domótica (control por escenas)", href: "/servicios/domotica" }, { texto: "Iluminación LED", href: "/servicios/electricidad" }, { texto: "Energía solar (para compensar el consumo)", href: "/servicios/energia-solar" }],
    ejemplosAdicionales: [
      {
        titulo: "Climatización multisplit para toda la vivienda",
        cliente: "Una sola unidad exterior dando servicio a varias estancias, con control independiente por habitación",
      imagen: "/img/trabajos/climatizacion-multisplit-vivienda-despues.jpg",
        opciones: [
          {
            nombre: "Básica — multisplit 3x1, mando físico por estancia",
            destacada: false,
            lineas: [
              { ref: "mo_clima_hora", horas: 21.25, label: "Mano de obra e instalación (unidad exterior + 3 interiores)" },
              { ref: "unidad_exterior_3x1_media" },
              { ref: "unidad_interior_2500_3000fg", cantidad: 3, label: "3 unidades interiores 2.500-3.000 frigorías" },
              { ref: "material_clima_45", label: "Material", precioOverride: 220 },
              { ref: "certificado_rite" }
            ]
          },
          {
            nombre: "Inteligente — multisplit 3x1, control desde el móvil por zona ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_clima_hora", horas: 24, label: "Mano de obra e instalación (unidad exterior + 3 interiores)" },
              { ref: "unidad_exterior_3x1_media" },
              { ref: "unidad_interior_3000fg_wifi", cantidad: 3, label: "3 unidades interiores 3.000 frigorías con control WiFi" },
              { ref: "material_clima_45", label: "Material", precioOverride: 250 },
              { ref: "certificado_rite" }
            ]
          },
          {
            nombre: "Completa — multisplit 3x1, la IA decide, tú confirmas",
            destacada: false,
            lineas: [
              { ref: "mo_clima_hora", horas: 24, label: "Mano de obra e instalación (unidad exterior + 3 interiores)" },
              { ref: "unidad_exterior_3x1_media" },
              { ref: "unidad_interior_3000fg_wifi", cantidad: 3, label: "3 unidades interiores 3.000 frigorías con control WiFi" },
              { ref: "material_clima_45", label: "Material", precioOverride: 250 },
              { ref: "certificado_rite" }
            ]
          }
        ],
        nota: "Precio de referencia para multisplit 3x1 (2 y 4 estancias también disponibles, se ajusta en la visita técnica). La opción Completa ajusta sola la temperatura de cada estancia según ocupación y necesita el Mini-PC IA Central (desde 590 €, no incluido, se comparte con otros modos IA)."
      }
    ]
  },
  {
    slug: "antenas",
    bloque: "conectividad",
    heroImagen: "/img/hero-bloques/antenas.jpg",
    numero: 7,
    publico: "casa",
    nombre: "Antenas",
    icono: "antenna",
    resumen: "TV por satélite y TDT, para una vivienda o para una comunidad completa.",
    tiempo: "Trabajo rápido",
    desde: 150,
    idealPara: ["Viviendas sin señal de TV o antena antigua", "Comunidades de propietarios (instalación colectiva)"],
    ejemplo: {
      titulo: "Antena parabólica + toma de TV",
      cliente: "Vivienda sin señal de televisión o con antena antigua deteriorada.",
      imagen: "/img/trabajos/antena-tv-despues.jpg",
      imagenAntes: "/img/trabajos/antena-tv-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — 1 toma de TV",
          destacada: false,
          lineas: [
            { ref: "mo_antenista_hora", horas: 2.1875, label: "Instalación, orientación y configuración" },
            { ref: "antena_parabolica_60cm" },
            { ref: "soporte_cableado_antena" }
          ]
        },
        {
          nombre: "Inteligente — señal a varias TVs (hasta 3 tomas)",
          destacada: true,
          lineas: [
            { ref: "mo_antenista_hora", horas: 2.96875, label: "Instalación, orientación y configuración" },
            { ref: "antena_parabolica_60cm" },
            { ref: "modulador_uhf_vhf" },
            { ref: "cableado_3_tomas_tv", label: "Cableado a 3 tomas" }
          ]
        }
      ]
    },
    extras: ["Antena TDT comunitaria de edificio (desde 860 €)", "Tomas adicionales de TV"],
    tambienInstalaron: [{ texto: "Red WiFi mesh", href: "/servicios/redes-informatica" }, { texto: "Instalación eléctrica de la vivienda", href: "/servicios/electricidad" }, { texto: "Antena parabólica individual", href: "/servicios/antenas" }, { texto: "Red WiFi mesh comunitaria", href: "/servicios/redes-informatica" }, { texto: "Videoportero para el portal", href: "/servicios/seguridad" }],
    ejemplosAdicionales: [
      {
        titulo: "Antena TDT comunitaria de edificio",
        cliente: "Instalación colectiva de recepción TDT para todo un edificio o comunidad de propietarios",
        imagen: "/img/trabajos/antena-tdt-comunitaria-despues.jpg",
        opciones: [
          {
            nombre: "Esencial — hasta 8 viviendas",
            destacada: false,
            lineas: [
              { ref: "mo_antenista_hora", horas: 10, label: "Mano de obra (instalación en cubierta y revisión de bajantes)" },
              { ref: "antena_tdt_alta_ganancia" },
              { ref: "central_amplificadora_multibanda" },
              { ref: "material_antena_140", label: "Material y conectorizado" }
            ]
          },
          {
            nombre: "Inteligente — hasta 15 viviendas, con refuerzo de señal ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_antenista_hora", horas: 13.125, label: "Mano de obra (instalación y revisión completa de bajantes)" },
              { ref: "antena_tdt_alta_ganancia" },
              { ref: "central_amplificadora_multibanda_potente" },
              { ref: "repartidores_refuerzo_intermedio" },
              { ref: "material_antena_180", label: "Material y conectorizado" }
            ]
          },
          {
            nombre: "Completa — más de 15 viviendas, con certificado de instalación",
            destacada: false,
            lineas: [
              { ref: "mo_antenista_hora", horas: 17.5, label: "Mano de obra (instalación y revisión completa)" },
              { ref: "antena_tdt_alta_ganancia", label: "Antena TDT de alta ganancia + antena satélite comunitaria", precioOverride: 420 },
              { ref: "central_amplificadora_multibanda_potente" },
              { ref: "repartidores_refuerzo_total" },
              { ref: "certificado_instalacion_comunidad" },
              { ref: "material_antena_220", label: "Material y conectorizado" }
            ]
          }
        ],
        nota: "El número de tomas y el estado de las bajantes existentes se confirma en la visita técnica; puede requerir sustitución parcial de cableado antiguo."
      }
    ]
  },
  {
    slug: "reparaciones-reformas",
    bloque: "reformas",
    heroImagen: "/img/hero-bloques/reparaciones-reformas.jpg",
    numero: 8,
    publico: "casa",
    nombre: "Reparaciones y reformas",
    icono: "wrench",
    resumen: "Pintura, alicatado, montaje de muebles y pequeñas reformas de baño y cocina.",
    tiempo: "Un día",
    desde: 510,
    idealPara: [
      "Puesta a punto antes de alquilar o vender",
      "Baños y cocinas que necesitan un lavado de cara",
      "Montaje de muebles nuevos"
    ],
    ejemplo: {
      titulo: "Renovación de baño pequeño (pintura + alicatado parcial, 6 m² de pared)",
      cliente: "Baño con azulejo y pintura deteriorados, previo a la venta del piso.",
      imagen: "/img/trabajos/bano-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/bano-reforma-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
          destacada: false,
          lineas: [
            { ref: "mo_reformas_hora", horas: 4.2857, label: "Mano de obra pintura (paredes y techo, aprox. 15 m²)" },
            { ref: "pintura_plastica_antihumedad" },
            { ref: "mo_reformas_hora", horas: 7.5, label: "Mano de obra alicatado (6 m² pared de ducha)" },
            { ref: "azulejo_basico_6m2" },
            { ref: "material_agarre_juntas_25" }
          ]
        },
        {
          nombre: "Inteligente",
          destacada: true,
          lineas: [
            { ref: "mo_reformas_hora", horas: 4.2857, label: "Mano de obra pintura (paredes y techo, aprox. 15 m²)" },
            { ref: "pintura_plastica_antihumedad" },
            { ref: "mo_reformas_hora", horas: 7.5, label: "Mano de obra alicatado (6 m² pared de ducha)" },
            { ref: "azulejo_media_6m2" },
            { ref: "rodapie_ceramico_bano" },
            { ref: "sellado_silicona_antimoho_25" },
            { ref: "material_reformas_25", label: "Material" }
          ]
        },
        {
          nombre: "Completa",
          destacada: false,
          lineas: [
            { ref: "mo_reformas_hora", horas: 4.2857, label: "Mano de obra pintura (paredes y techo, aprox. 15 m²)" },
            { ref: "pintura_plastica_antihumedad" },
            { ref: "mo_reformas_hora", horas: 9.2857, label: "Mano de obra alicatado (6 m² pared de ducha, incluye impermeabilización)" },
            { ref: "azulejo_alta_6m2" },
            { ref: "impermeabilizacion_ducha" },
            { ref: "rodapie_ceramico_bano" },
            { ref: "sellado_silicona_antimoho_25" },
            { ref: "material_reformas_35", label: "Material" }
          ]
        }
      ]
    },
    extras: [
      "Pintura de piso completo, 80 m² (desde 970 €)",
      "Alicatado completo de baño, 12 m² (desde 670 €)",
      "Montaje de cocina modular (desde 395 €)",
      "Reforma integral de cocina (desde 3.200 €)"
    ],
    tambienInstalaron: [{ texto: "Sustitución de sanitarios y grifería", href: "/servicios/fontaneria" }, { texto: "Falso techo de pladur con LED", href: "/servicios/pladur" }, { texto: "Fontanería (grifería y sanitarios)", href: "/servicios/fontaneria" }, { texto: "Electricidad (nuevos circuitos para electrodomésticos)", href: "/servicios/electricidad" }, { texto: "Pack Piso Nuevo (todo junto, para estrenar vivienda)", href: "/soluciones#piso-nuevo" }],
    ejemplosAdicionales: [
      {
        titulo: "Pintura de piso completo",
        cliente: "Pintura integral de vivienda, paredes y techos, lista para entrar a vivir o para alquilar/vender",
      imagen: "/img/trabajos/pintura-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/pintura-reforma-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — piso de 80 m², un solo color",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 22.1429, label: "Mano de obra (paredes y techos, 80 m² aprox.)" },
              { ref: "pintura_plastica_lisa_1color" },
              { ref: "material_pintura_70" }
            ]
          },
          {
            nombre: "Inteligente — con reparación de grietas y varios colores ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_reformas_hora", horas: 27.1429, label: "Mano de obra (paredes y techos, incluye preparación de superficie)" },
              { ref: "pintura_plastica_lisa_3colores" },
              { ref: "reparacion_grietas_puntual" },
              { ref: "material_pintura_90" }
            ]
          },
          {
            nombre: "Completa — pintura antihumedad + techos con acabado especial",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 32.8571, label: "Mano de obra completa (paredes, techos y reparaciones)" },
              { ref: "pintura_antihumedad_banos_cocina" },
              { ref: "pintura_lisa_media_resto" },
              { ref: "reparacion_grietas_completa" },
              { ref: "acabado_especial_techos", label: "Acabado especial en techos (plano de luz, mate profesional)" },
              { ref: "material_pintura_110" }
            ]
          }
        ],
        nota: "Precio orientativo para 80 m² en buen estado de base; humedades, gotelé a alisar o alturas especiales se valoran aparte."
      },
      {
        titulo: "Alicatado completo de baño",
        cliente: "Retirada de azulejo antiguo y alicatado completo de un baño, listo para sanitarios y grifería",
      imagen: "/img/trabajos/bano-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/bano-reforma-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — 12 m², azulejo estándar",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 15, label: "Mano de obra (retirada de azulejo antiguo + alicatado, 12 m²)" },
              { ref: "azulejo_basico_12m2" },
              { ref: "material_alicatado_70" }
            ]
          },
          {
            nombre: "Inteligente — con rodapié y juntas antimoho ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_reformas_hora", horas: 17.1429, label: "Mano de obra (retirada + alicatado, 12 m²)" },
              { ref: "azulejo_media_12m2" },
              { ref: "rodapie_ceramico_12m2" },
              { ref: "sellado_silicona_antimoho_40" },
              { ref: "material_alicatado_80" }
            ]
          },
          {
            nombre: "Completa — con nivelación de suelo y azulejo gran formato",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 20.7143, label: "Mano de obra (retirada, nivelación y alicatado, 12 m²)" },
              { ref: "azulejo_gran_formato_12m2" },
              { ref: "nivelacion_suelo_previa" },
              { ref: "rodapie_perfiles_acabado" },
              { ref: "sellado_silicona_antimoho_40" },
              { ref: "material_alicatado_100" }
            ]
          }
        ],
        nota: "Incluye retirada y gestión de escombros del alicatado antiguo. No incluye fontanería ni sanitarios (ver categoría Fontanería)."
      },
      {
        titulo: "Montaje de cocina modular",
        cliente: "Montaje de muebles de cocina modular (comprados en tienda) e instalación de electrodomésticos de encimera",
      imagen: "/img/trabajos/cocina-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/cocina-reforma-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — módulos bajos y altos (hasta 4 m lineales)",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 10, label: "Mano de obra (montaje de muebles bajos y altos)" },
              { ref: "material_fijacion_nivelacion" },
              { ref: "ajuste_puertas_cajones" }
            ]
          },
          {
            nombre: "Inteligente — con encimera y conexión de fregadero ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_reformas_hora", horas: 12.1429, label: "Mano de obra (montaje completo)" },
              { ref: "colocacion_encimera" },
              { ref: "conexion_fregadero" },
              { ref: "material_fijacion_sellado" }
            ]
          },
          {
            nombre: "Completa — con instalación de electrodomésticos",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 13.5714, label: "Mano de obra (montaje completo)" },
              { ref: "colocacion_encimera" },
              { ref: "conexion_fregadero" },
              { ref: "instalacion_placa_horno_electrica", label: "Instalación de placa de inducción/vitro y horno (conexión eléctrica)" },
              { ref: "instalacion_campana_extractora" },
              { ref: "material_fijacion_sellado_70" }
            ]
          }
        ],
        nota: "No incluye el precio de los muebles ni electrodomésticos, solo mano de obra de montaje e instalación. Si hace falta mover puntos de agua, luz o gas, se presupuesta aparte."
      },
      {
        titulo: "Reforma integral de cocina",
        cliente: "Cocina de 9 m², con cambio de distribución",
      imagen: "/img/trabajos/cocina-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/cocina-reforma-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — muebles y encimera, sin cambiar distribución",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 27.8571, label: "Mano de obra (desmontaje, instalación de muebles y encimera)" },
              { ref: "muebles_cocina_basica_9m2" },
              { ref: "encimera_laminada" },
              { ref: "fontaneria_electricidad_adaptacion" },
              { ref: "material_cocina_120", label: "Material y remates" }
            ]
          },
          {
            nombre: "Inteligente — con cambio de distribución e isla ⭐",
            destacada: true,
            lineas: [
              { ref: "mo_reformas_hora", horas: 48.2143, label: "Mano de obra (demolición parcial, nueva distribución, isla)" },
              { ref: "muebles_cocina_media_isla_9m2" },
              { ref: "encimera_cuarzo_compacto" },
              { ref: "fontaneria_electricidad_isla" },
              { ref: "iluminacion_led_integrada_cocina" },
              { ref: "material_cocina_180", label: "Material y remates" }
            ]
          },
          {
            nombre: "Completa — con electrodomésticos integrados",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 51.7857, label: "Mano de obra (demolición parcial, nueva distribución, isla)" },
              { ref: "muebles_cocina_media_alta_isla_9m2" },
              { ref: "encimera_cuarzo_compacto" },
              { ref: "electrodomesticos_integrados_cocina" },
              { ref: "fontaneria_electricidad_isla" },
              { ref: "iluminacion_led_integrada_cocina" },
              { ref: "material_cocina_200", label: "Material y remates" }
            ]
          }
        ],
        nota: "El cambio de distribución (mover fontanería o electricidad de sitio) requiere visita técnica previa para confirmar la viabilidad según la instalación existente del edificio. La opción Esencial no incluye electrodomésticos ni cambio de distribución — para una reforma completa con nueva distribución, ver las opciones Inteligente y Completa."
      }
    ]
  },
  {
    slug: "fontaneria",
    bloque: "reformas",
    heroImagen: "/img/hero-bloques/fontaneria.jpg",
    numero: 9,
    publico: "casa",
    versionAlternativa: "fontaneria-nave",
    nombre: "Fontanería y fugas",
    icono: "plumbing",
    resumen: "Grifería, sanitarios y reparación de fugas.",
    tiempo: "Media jornada",
    desde: 145,
    idealPara: ["Baños que necesitan actualizar grifería o inodoro", "Fugas de agua detectadas o sospechadas"],
    avisoUrgente: {
      titulo: "¿Tienes una fuga de agua?",
      texto: "Reparación de fuga a domicilio desde 145 €. Vamos el mismo día, sin esperar a comparar presupuestos.",
      ctaTexto: "Pedir reparación urgente",
      mensajeWhatsapp: "Hola, tengo una fuga de agua y necesito una reparación urgente."
    },
    ejemplo: {
      titulo: "Sustitución de sanitarios y grifería de baño",
      cliente: "Baño con sanitarios y grifería antiguos, con fugas puntuales.",
      imagen: "/img/trabajos/bano-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/bano-reforma-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — grifería",
          destacada: false,
          lineas: [
            { ref: "mo_fontanero_hora", horas: 2.8125, label: "Mano de obra (cambio de 2 grifos: lavabo y ducha)" },
            { ref: "grifo_lavabo_monomando" },
            { ref: "grifo_termostatico_ducha" },
            { ref: "material_estanqueidad_10" }
          ]
        },
        {
          nombre: "Inteligente — grifería + inodoro",
          destacada: true,
          lineas: [
            { ref: "mo_fontanero_hora", horas: 5.625, label: "Mano de obra (grifería + sustitución de inodoro)" },
            { ref: "grifo_lavabo_monomando" },
            { ref: "grifo_termostatico_ducha" },
            { ref: "inodoro_doble_descarga" },
            { ref: "material_estanqueidad_20" }
          ]
        },
        {
          nombre: "Completa — baño completo (sin obra de alicatado)",
          destacada: false,
          lineas: [
            { ref: "mo_fontanero_hora", horas: 8.125, label: "Mano de obra completa (grifería, inodoro, lavabo)" },
            { ref: "grifo_lavabo_ducha_media" },
            { ref: "inodoro_doble_descarga" },
            { ref: "lavabo_pedestal" },
            { ref: "valvulas_sifones_estanqueidad" }
          ]
        }
      ],
      nota: "Si hay que picar pared o suelo para mover puntos de agua/desagüe, se presupuesta aparte según el alcance real (albañilería + alicatado)."
    },
    tambienInstalaron: [{ texto: "Alicatado de baño", href: "/servicios/reparaciones-reformas" }, { texto: "Reforma pequeña de baño", href: "/servicios/reparaciones-reformas" }]
  },
  {
    slug: "pladur",
    bloque: "reformas",
    heroImagen: "/img/hero-bloques/pladur.jpg",
    numero: 10,
    publico: "casa",
    nombre: "Pladur",
    icono: "pladur",
    resumen: "Tabiques y falsos techos, con iluminación LED integrada — y si quieres, regulable desde el móvil combinando pladur, electricidad y domótica en la misma visita.",
    tiempo: "Un día",
    desde: 435,
    idealPara: ["Dividir una habitación", "Salones que quieren un techo con iluminación indirecta"],
    ejemplo: {
      titulo: "Tabique de pladur",
      cliente: "División de una estancia o cerramiento con tabique de pladur, con o sin aislamiento acústico",
      imagen: "/img/trabajos/pladur-techo-despues.jpg",
      opciones: [
        {
          nombre: "Esencial — tabique simple, 10 m²",
          destacada: false,
          lineas: [
            { ref: "mo_pladurista_hora", horas: 8.5714, label: "Mano de obra (estructura y placas, 10 m²)" },
            { ref: "placas_pladur_10m2_simple", label: "Placas de pladur (10 m², una cara doble)" },
            { ref: "perfileria_tornilleria_40" },
            { ref: "masilla_cinta_juntas_25" }
          ]
        },
        {
          nombre: "Inteligente — con aislamiento acústico ⭐",
          destacada: true,
          lineas: [
            { ref: "mo_pladurista_hora", horas: 10, label: "Mano de obra (estructura y placas, 10 m²)" },
            { ref: "placas_pladur_10m2_simple", label: "Placas de pladur (10 m²)" },
            { ref: "lana_roca_aislamiento" },
            { ref: "perfileria_tornilleria_45" },
            { ref: "masilla_cinta_juntas_25" }
          ]
        },
        {
          nombre: "Completa — con puerta integrada y acabado listo para pintar",
          destacada: false,
          lineas: [
            { ref: "mo_pladurista_hora", horas: 12.1429, label: "Mano de obra (estructura, placas y hueco de puerta, 10 m²)" },
            { ref: "placas_pladur_10m2_simple", label: "Placas de pladur (10 m²)" },
            { ref: "lana_roca_aislamiento" },
            { ref: "precerco_puerta" },
            { ref: "perfileria_tornilleria_50" },
            { ref: "masilla_cinta_lijado_fino" }
          ]
        }
      ],
      nota: "El cableado eléctrico dentro del tabique (si hace falta pasar algún punto de luz o enchufe) se presupuesta aparte."
    },
    extras: ["Tabique de pladur, 10 m² (desde 435 €)", "Regulación por app (domótica)"],
    tambienInstalaron: [{ texto: "Iluminación LED", href: "/servicios/electricidad" }, { texto: "Domótica de escenas", href: "/servicios/domotica" }, { texto: "Pintura de piso completo", href: "/servicios/reparaciones-reformas" }, { texto: "Electricidad (nuevos puntos de luz)", href: "/servicios/electricidad" }],
    ejemplosAdicionales: [
      {
        titulo: "Falso techo de pladur con iluminación empotrada (salón, 18 m²)",
        cliente: "Salón sin iluminación indirecta, con techo liso convencional.",
        imagen: "/img/trabajos/pladur-falso-techo-despues.jpg",
        imagenAntes: "/img/trabajos/pladur-falso-techo-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — techo liso",
            destacada: false,
            lineas: [
              { ref: "mo_pladurista_hora", horas: 13.5714, label: "Mano de obra (estructura y placas, 18 m²)" },
              { ref: "placas_pladur_18m2" },
              { ref: "perfileria_varillas_suspension" },
              { ref: "masilla_cinta_juntas_25" }
            ]
          },
          {
            nombre: "Inteligente — con foseado perimetral para LED",
            destacada: true,
            lineas: [
              { ref: "mo_pladurista_hora", horas: 16.4286, label: "Mano de obra (estructura, foseado y placas, 18 m²)" },
              { ref: "placas_pladur_18m2" },
              { ref: "perfileria_varillas_foseado" },
              { ref: "tira_led_perimetral_transformador" },
              { ref: "masilla_cinta_juntas_25" }
            ]
          },
          {
            nombre: "Completa — con downlights y regulación por app",
            destacada: false,
            lineas: [
              { ref: "mo_pladurista_hora", horas: 17.1429, label: "Mano de obra (estructura, foseado y placas, 18 m²)" },
              { ref: "placas_pladur_18m2" },
              { ref: "perfileria_varillas_foseado" },
              { ref: "downlights_led_tira_perimetral" },
              { ref: "modulo_control_wifi_regulacion" },
              { ref: "masilla_cinta_juntas_25" }
            ]
          }
        ],
        nota: "El cableado eléctrico de los puntos de luz se incluye en la mano de obra; la conexión al cuadro eléctrico general se presupuesta aparte si no hay un circuito ya disponible cerca."
      }
    ]
  },
  {
    slug: "mantenimiento",
    bloque: "mantenimiento",
    heroImagen: "/img/hero-bloques/mantenimiento.jpg",
    numero: 11,
    publico: "casa",
    versionAlternativa: "mantenimiento-nave",
    nombre: "Mantenimiento y contratos",
    icono: "maintenance",
    resumen: "Para clientes con instalación domótica, de seguridad o eléctrica ya realizada por AHOMED. Tranquilidad todo el año.",
    tiempo: "Visita programada",
    desde: 90,
    desdeUnidad: "/año",
    idealPara: [
      "Instalaciones de seguridad o domótica que quieren revisión periódica",
      "Negocios con sistemas de IA que necesitan reentrenamiento del modelo"
    ],
    ejemplo: {
      titulo: "Contrato de mantenimiento",
      cliente: null,
      imagen: "/img/trabajos/mantenimiento-despues.jpg",
      opciones: [
        {
          nombre: "Esencial — revisión anual",
          destacada: false,
          items: [["1 visita de revisión anual (dispositivos, batería de sensores, actualización de apps)", 90]],
          total: 90,
          totalUnidad: "€/año"
        },
        {
          nombre: "Inteligente — revisión + 2 incidencias incluidas",
          destacada: true,
          items: [["1 visita de revisión anual + hasta 2 incidencias menores incluidas (sin coste de desplazamiento)", 180]],
          total: 180,
          totalUnidad: "€/año"
        },
        {
          nombre: "Completa — mensual con atención prioritaria",
          destacada: false,
          items: [["Revisión trimestral + incidencias ilimitadas (solo material aparte) + respuesta prioritaria en menos de 2 h", 35]],
          total: 35,
          totalUnidad: "€/mes (420 €/año)"
        }
      ],
      nota: "El bono no cubre sustitución de dispositivos dañados por mal uso o desgaste, ni obra civil."
    },
    extras: ["Reentrenamiento del modelo de IA (sistemas de detección inteligente)"],
    tambienInstalaron: []
  },
  {
    slug: "electricidad-nave",
    bloque: "electricidad-domotica",
    heroImagen: "/img/hero-bloques/electricidad.jpg",
    numero: 12,
    publico: "negocio",
    versionAlternativa: "electricidad",
    nombre: "Electricidad — Naves y Fincas",
    icono: "bolt",
    resumen:
      "Cuadros trifásicos, boletines CIE de alta potencia, acometidas y adecuación eléctrica a la actividad. Pensado para naves, almacenes y explotaciones, no para el cuadro de una vivienda. Estudio previo según potencia y actividad — no hay un precio estándar en industrial.",
    tiempo: "Jornada completa o más, según potencia",
    desde: 780,
    idealPara: [
      "Naves con cuadro antiguo o sin boletín CIE para la potencia real de la actividad",
      "Cambio de actividad que exige adecuar la instalación (más potencia, nuevas máquinas)",
      "Explotaciones agrícolas con acometida trifásica para riego, cámaras frigoríficas o maquinaria"
    ],
    ejemplo: {
      titulo: "Cuadro trifásico + boletín CIE para nave de hasta 300 m²",
      cliente: "Nave con cuadro monofásico insuficiente para la maquinaria instalada, sin boletín actualizado.",
      imagen: "/img/trabajos/cuadro-electrico-despues.jpg",
      imagenAntes: "/img/trabajos/cuadro-electrico-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — hasta 20 kW",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_hora", horas: 8, label: "Mano de obra (aprox. 8 h)" },
            { ref: "cuadro_trifasico_24elementos" },
            { ref: "diferencial_trifasico_30ma" },
            { ref: "material_industrial_90", label: "Material y cableado (sección industrial)" },
            { ref: "boletin_cie_trifasico" }
          ]
        },
        {
          nombre: "Inteligente — hasta 40 kW, con protección de sobretensiones",
          destacada: true,
          lineas: [
            { ref: "mo_industrial_hora", horas: 12, label: "Mano de obra (aprox. 12 h)" },
            { ref: "cuadro_trifasico_36elementos" },
            { ref: "diferencial_trifasico_superinmunizado" },
            { ref: "protector_sobretensiones_industrial" },
            { ref: "material_industrial_140", label: "Material y cableado (sección industrial)" },
            { ref: "boletin_cie_trifasico" }
          ]
        },
        {
          nombre: "Completa — más de 40 kW, con proyecto eléctrico",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_hora", horas: 17, label: "Mano de obra (aprox. 18 h)" },
            { ref: "cuadro_trifasico_ampliable" },
            { ref: "diferencial_trifasico_superinmunizado_x2" },
            { ref: "protector_sobretensiones_industrial" },
            { ref: "material_industrial_220", label: "Material y cableado (sección industrial)" },
            { ref: "proyecto_electrico_firmado" },
            { ref: "boletin_inspeccion_oca_inicial" }
          ]
        }
      ],
      nota: "A partir de 20 kW de potencia instalada, el REBT exige proyecto eléctrico firmado por técnico competente, no solo boletín — está incluido en la opción Completa. Instalaciones de más de 100 kW requieren además inspección periódica cada 5 años por un Organismo de Control Autorizado (OCA)."
    },
    extras: [
      "Centro de transformación propio (si la potencia contratada supera 250 kW, se presupuesta aparte)",
      "Punto de recarga para vehículos industriales o flota (desde 1.450 €)",
      "Iluminación LED industrial de nave (desde 890 €)"
    ],
    tambienInstalaron: [{ texto: "Redes e informática para nave", href: "/servicios/redes-nave" }, { texto: "Energía solar de autoconsumo", href: "/servicios/energia-solar" }, { texto: "Seguridad IA para Naves y Fincas", href: "/servicios/naves-fincas/seguridad-ia" }]
  },
  {
    slug: "redes-nave",
    bloque: "conectividad",
    heroImagen: "/img/hero-bloques/redes-informatica.jpg",
    numero: 13,
    publico: "negocio",
    versionAlternativa: "redes-informatica",
    nombre: "Redes e informática — Naves y Fincas",
    icono: "network",
    resumen:
      "WiFi industrial que atraviesa estructuras metálicas y estanterías, y cableado estructurado para oficinas dentro de la nave. No es un router doméstico con más alcance — es una red pensada para que no se caiga con la actividad en marcha.",
    tiempo: "1-2 jornadas según superficie",
    desde: 890,
    idealPara: [
      "Naves con estructura metálica o estanterías altas que crean zonas sin cobertura",
      "Almacenes que usan lectores de código de barras, tablets o sistemas de gestión (SGA) en movimiento",
      "Oficinas dentro de la nave que necesitan puntos de red fijos, no solo WiFi"
    ],
    ejemplo: {
      titulo: "WiFi industrial + cableado estructurado para nave de 500 m²",
      cliente: "Nave logística con estanterías metálicas de gran altura y zonas sin cobertura para los lectores de almacén.",
      imagen: "/img/trabajos/rack-comunicaciones-despues.jpg",
      imagenAntes: "/img/trabajos/rack-comunicaciones-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — WiFi industrial (2 puntos de acceso)",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_hora", horas: 5.5, label: "Instalación y configuración con roaming entre puntos" },
            { ref: "ap_wifi_industrial_alta_potencia", cantidad: 2, label: "Puntos de acceso WiFi industrial de alta potencia (x2)" },
            { ref: "material_industrial_redes_90", label: "Material y fijación en altura" }
          ]
        },
        {
          nombre: "Inteligente — WiFi industrial (4 puntos) + 4 tomas de red",
          destacada: true,
          lineas: [
            { ref: "mo_industrial_hora", horas: 9.5, label: "Instalación y configuración con roaming entre puntos" },
            { ref: "ap_wifi_industrial_alta_potencia", cantidad: 4, label: "Puntos de acceso WiFi industrial de alta potencia (x4)" },
            { ref: "cableado_cat6_4_tomas_oficina" },
            { ref: "switch_gestionable_8p_industrial" },
            { ref: "material_industrial_redes_180", label: "Material, canalización y fijación en altura" }
          ]
        },
        {
          nombre: "Completa — cobertura total + rack y VLAN separadas",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_hora", horas: 13, label: "Instalación y configuración con roaming entre puntos" },
            { ref: "ap_wifi_industrial_alta_potencia", cantidad: 6, label: "Puntos de acceso WiFi industrial de alta potencia (x6)" },
            { ref: "cableado_cat6_8_tomas" },
            { ref: "rack_switch_patch_panel" },
            { ref: "config_vlan_separadas", label: "Configuración de VLAN (red de gestión separada de la de invitados)" },
            { ref: "material_industrial_redes_260", label: "Material, canalización y fijación en altura" }
          ]
        }
      ],
      nota: "Un router doméstico no tiene potencia suficiente para atravesar estructuras de acero y estanterías metálicas — por eso las carretillas y lectores de almacén pierden conexión al moverse por la nave. El presupuesto de arriba usa equipo industrial pensado para eso."
    },
    extras: [
      "Ampliación de puntos de acceso adicionales (desde 240 € por punto)",
      "Fibra óptica troncal entre edificios de la misma finca (se presupuesta según distancia)",
      "Cámara IP integrada en la misma red (ver Seguridad IA para Naves y Fincas)"
    ],
    tambienInstalaron: [{ texto: "Electricidad para nave", href: "/servicios/electricidad-nave" }, { texto: "Seguridad IA para Naves y Fincas", href: "/servicios/naves-fincas/seguridad-ia" }]
  },
  {
    slug: "fontaneria-nave",
    bloque: "reformas",
    heroImagen: "/img/hero-bloques/fontaneria.jpg",
    numero: 14,
    publico: "negocio",
    versionAlternativa: "fontaneria",
    nombre: "Fontanería — Naves y Fincas",
    icono: "plumbing",
    resumen:
      "Redes de riego para finca, saneamiento industrial y puntos de agua para nave o explotación. No es la grifería de un baño — son caudales, presiones y recorridos de otra escala.",
    tiempo: "Según alcance de la instalación",
    desde: 420,
    idealPara: [
      "Fincas que necesitan red de riego (goteo, aspersión) o ampliar la existente",
      "Naves que necesitan puntos de agua para aseos, vestuarios o proceso productivo",
      "Explotaciones con fugas o presión insuficiente en tramos largos de tubería"
    ],
    ejemplo: {
      titulo: "Red de riego por goteo para finca de 1 hectárea",
      cliente: "Finca con riego manual, sin automatización ni sectorización por zonas.",
      imagen: "/img/trabajos/riego-despues.jpg",
      imagenAntes: "/img/trabajos/riego-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — riego por goteo, 1 sector",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_hora", horas: 9.5, label: "Mano de obra (zanja, tubería principal y ramales)" },
            { ref: "tuberia_pe32_200m" },
            { ref: "goteros_ramales_1sector" },
            { ref: "programador_riego_electrovalvula_1" },
            { ref: "material_conexion_estanqueidad_40" }
          ]
        },
        {
          nombre: "Inteligente — riego por goteo, 3 sectores + programador WiFi",
          destacada: true,
          lineas: [
            { ref: "mo_industrial_hora", horas: 15.5, label: "Mano de obra (zanja, tubería principal y ramales)" },
            { ref: "tuberia_pe32_40_400m" },
            { ref: "goteros_ramales_3sectores" },
            { ref: "programador_riego_wifi_3v_industrial" },
            { ref: "sensor_lluvia_industrial", label: "Sensor de lluvia (evita riego innecesario)" },
            { ref: "material_conexion_estanqueidad_70" }
          ]
        },
        {
          nombre: "Completa — riego automatizado + acometida nueva",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_hora", horas: 24.5, label: "Mano de obra (zanja, tubería principal y ramales)" },
            { ref: "acometida_agua_nueva" },
            { ref: "tuberia_pe40_50_800m" },
            { ref: "goteros_ramales_5sectores" },
            { ref: "programador_riego_wifi_5v_industrial" },
            { ref: "sensor_lluvia_humedad_industrial", label: "Sensor de lluvia y de humedad de suelo" },
            { ref: "material_conexion_estanqueidad_120" }
          ]
        }
      ],
      nota: "El precio varía mucho según si hay que abrir zanja nueva o se reutilizan canalizaciones existentes, y según la distancia real a la toma de agua — la visita técnica gratuita ajusta la cifra final."
    },
    extras: [
      "Puntos de agua para aseos o vestuarios de nave (desde 380 € por punto)",
      "Reparación de fuga en tramo largo (desde 145 €, según localización)",
      "Grupo de presión para caudal insuficiente (desde 650 €)"
    ],
    tambienInstalaron: [{ texto: "Electricidad para nave", href: "/servicios/electricidad-nave" }, { texto: "Gestión Inteligente de Energía", href: "/servicios/energia-solar" }, { texto: "Seguridad IA para Naves y Fincas", href: "/servicios/naves-fincas/seguridad-ia" }]
  },
  {
    slug: "mantenimiento-nave",
    bloque: "mantenimiento",
    heroImagen: "/img/hero-bloques/mantenimiento.jpg",
    numero: 15,
    publico: "negocio",
    versionAlternativa: "mantenimiento",
    nombre: "Mantenimiento — Naves y Fincas",
    icono: "maintenance",
    resumen:
      "Para negocios con instalación eléctrica, de seguridad IA o de red ya realizada por AHOMED. Revisión pensada para que la actividad no pare, no para el ritmo de una vivienda.",
    tiempo: "Visita programada",
    desde: 180,
    desdeUnidad: "/año",
    idealPara: [
      "Naves o fincas con Seguridad IA que necesitan reentrenamiento del modelo por cambios de actividad",
      "Instalaciones eléctricas trifásicas que requieren inspección periódica (OCA cada 5 años si superan 100 kW)",
      "Negocios que no pueden permitirse una avería sin respuesta rápida"
    ],
    ejemplo: {
      titulo: "Contrato de mantenimiento para nave o finca",
      cliente: null,
      imagen: "/img/trabajos/mantenimiento-despues.jpg",
      opciones: [
        {
          nombre: "Esencial — revisión anual",
          destacada: false,
          items: [["1 visita de revisión anual (cuadro eléctrico, cámaras IA, red, batería de sensores)", 180]],
          total: 180,
          totalUnidad: "€/año"
        },
        {
          nombre: "Inteligente — revisión + 2 incidencias incluidas",
          destacada: true,
          items: [["1 visita de revisión anual + hasta 2 incidencias menores incluidas (sin coste de desplazamiento)", 340]],
          total: 340,
          totalUnidad: "€/año"
        },
        {
          nombre: "Completa — mensual con atención prioritaria",
          destacada: false,
          items: [["Revisión trimestral + incidencias ilimitadas (solo material aparte) + respuesta prioritaria en menos de 4 h, adaptada a horario de actividad", 65]],
          total: 65,
          totalUnidad: "€/mes (780 €/año)"
        }
      ],
      nota: "El bono no cubre sustitución de dispositivos dañados por mal uso, obra civil, ni la inspección OCA obligatoria de instalaciones de más de 100 kW (se presupuesta aparte, es un trámite independiente con un Organismo de Control Autorizado)."
    },
    extras: [
      "Reentrenamiento del modelo de IA tras cambios de actividad o layout de la nave",
      "Gestión de la inspección periódica OCA (instalaciones de más de 100 kW)"
    ],
    tambienInstalaron: []
  }
];


// Packs combinados
const packs = [
  {
    nombre: "Pack Piso Nuevo",
    slug: "piso-nuevo",
    publico: "casa",
    // Usado por el Creador de instalación (/crea-tu-instalacion) para detectar
    // cuándo una combinación armada a mano se parece a este pack.
    coincideCon: { servicios: ["electricidad", "redes-informatica", "seguridad"], modos: ["seguridad-ia"] },
    descripcion: "Entra a vivir con todo funcionando: electricidad, WiFi y videoportero listos desde el primer día.",
    idealPara: "estrenar piso o preparar una vivienda para alquilar",
    resultado: "Enciendes la luz, tienes WiFi en toda la casa y ves quién llama al telefonillo desde el móvil — sin nada por instalar.",
    imagen: "/img/packs/pack-piso-nuevo.jpg",
    imagenAlt: "Cocina con iluminación LED integrada — Pack Piso Nuevo AHOMED",
    opciones: [
      {
        nombre: "Esencial",
        destacada: false,
        lineas: [
          { ref: "cuadro_electrico_boletin_pack" },
          { ref: "wifi_mesh_2pt_config" },
          { ref: "videoportero_inteligente_pack" }
        ]
      },
      {
        nombre: "Inteligente — con domótica y LED ⭐",
        destacada: true,
        lineas: [
          { ref: "cuadro_electrico_boletin_pack" },
          { ref: "wifi_mesh_3pt_config" },
          { ref: "videoportero_inteligente_pack" },
          { ref: "iluminacion_led_salon_pasillo_8p" },
          { ref: "interruptor_wifi", cantidad: 2, label: "2 interruptores WiFi para control desde el móvil", precioOverride: 80 }
        ]
      },
      {
        nombre: "Completa — con cerradura, cámara y Seguridad IA",
        destacada: false,
        lineas: [
          { ref: "cuadro_electrico_boletin_pack" },
          { ref: "wifi_mesh_3pt_config" },
          { ref: "videoportero_inteligente_pack", label: "Videoportero inteligente" },
          { ref: "iluminacion_led_salon_pasillo_8p", label: "Iluminación LED en salón y pasillo" },
          { ref: "cerradura_huella_teclado_app", precioOverride: 420 },
          { ref: "camara_ip_exterior_entrada" },
          { ref: "minipc_ia_start", label: "Mini-PC IA START", precioOverride: 590 },
          { ref: "config_seguridad_ia_camara_existente" }
        ]
      }
    ],
    nota: "Precio orientativo; se ajusta tras la visita técnica gratuita según el estado del cuadro actual y la superficie de la vivienda. La opción Completa incluye ya el Mini-PC IA Central (nivel START) — puede ampliarse después con cualquiera de los otros diez modos de la Plataforma IA Predictiva."
  },
  {
    nombre: "Pack Chalet Seguro con IA",
    slug: "chalet-seguro",
    publico: "casa",
    incluyeIA: true,
    coincideCon: { servicios: ["seguridad"], modos: ["seguridad-ia", "acceso-inteligente"] },
    descripcion: "Vigila tu casa aunque estés a kilómetros: cámaras con IA que distinguen personas y vehículos, sin falsas alarmas.",
    idealPara: "chalets y segundas residencias",
    resultado: "Recibes una alerta por WhatsApp con la imagen del momento cuando la IA detecta una persona o un vehículo — no cuando se mueve una rama.",
    imagen: "/img/packs/pack-chalet-seguro.jpg",
    imagenAlt: "Cámara de seguridad exterior sobre vallado de chalet — Pack Chalet Seguro con IA AHOMED",
    opciones: [
      {
        nombre: "Esencial — 4 cámaras + cerradura + IA",
        destacada: false,
        lineas: [
          { ref: "camara_ip_poe_exterior", cantidad: 4, label: "4 cámaras IP cableadas con visión nocturna" },
          { ref: "mo_seguridad_hora", horas: 11.875, label: "Instalación y cableado (4 cámaras)" },
          { ref: "minipc_ia_start", label: "Mini-PC con IA local (detección de personas y vehículos, descarta falsas alarmas)", precioOverride: 480 },
          { ref: "cerradura_teclado_app", precioOverride: 290 },
          { ref: "videoportero_inteligente_pack" },
          { ref: "notificaciones_whatsapp_alarma", label: "Alertas por WhatsApp con imagen del momento" }
        ]
      },
      {
        nombre: "Inteligente — con detección de movimiento y alertas IA",
        destacada: false,
        lineas: [
          { ref: "camara_ip_poe_exterior", cantidad: 6, label: "6 cámaras IP cableadas con visión nocturna" },
          { ref: "mo_seguridad_hora", horas: 16.875, label: "Instalación y cableado (6 cámaras)" },
          { ref: "minipc_ia_pro", label: "Mini-PC con IA local de mayor potencia (detección de personas y vehículos)", precioOverride: 620 },
          { ref: "cerradura_huella_teclado_app", precioOverride: 420 },
          { ref: "videoportero_inteligente_pack", label: "Videoportero inteligente" },
          { ref: "notificaciones_whatsapp_alarma", label: "Alertas por WhatsApp con imagen del momento", precioOverride: 120 }
        ]
      },
      {
        nombre: "Completa — con IA avanzada: reanálisis y reconocimiento de vehículos ⭐",
        destacada: true,
        lineas: [
          { ref: "camara_ip_poe_exterior", cantidad: 6, label: "6 cámaras IP cableadas con visión nocturna" },
          { ref: "mo_seguridad_hora", horas: 16.875, label: "Instalación y cableado (6 cámaras)" },
          { ref: "minipc_ia_pro", label: "Mini-PC con IA avanzada (reanálisis automático, descarta falsos positivos antes de avisar)", precioOverride: 780 },
          { ref: "cerradura_huella_teclado_app", precioOverride: 420 },
          { ref: "videoportero_inteligente_pack", label: "Videoportero inteligente" },
          { ref: "notificaciones_whatsapp_alarma", label: "Alertas WhatsApp con imagen del momento + reconocimiento de vehículos recurrentes", precioOverride: 200 }
        ]
      }
    ],
    nota: "Sin cuota mensual ni contrato con central de alarmas — frente a los 20-50 €/mes (240-620 €/año) de una alarma con central receptora, aquí pagas la instalación una vez y el sistema es tuyo. Funciona de forma autónoma en tu propiedad, con IA desde la opción Esencial."
  },
  {
    nombre: "Pack Hogar con IA",
    slug: "hogar-inteligente",
    publico: "casa",
    incluyeIA: true,
    coincideCon: { servicios: [], modos: ["seguridad-ia", "motor-meteorologico", "gestion-paquetes", "ia-sueno", "personas-mayores"] },
    descripcion: "El pack que reúne lo que hace diferente a AHOMED: Seguridad IA sin falsas alarmas combinada con los modos de la Plataforma IA Predictiva que más piden las familias.",
    idealPara: "quien ya tiene claro que quiere Seguridad IA y quiere ampliarla con más modos",
    resultado: "La IA vigila tu casa, se anticipa al clima y te avisa por WhatsApp solo cuando de verdad importa.",
    imagen: "/img/packs/pack-hogar-inteligente.jpg",
    imagenAlt: "Panel táctil de domótica con luces, clima, persianas y escenas — Pack Hogar con IA AHOMED",
    opciones: [
      {
        nombre: "Esencial — Seguridad IA (2 cámaras)",
        destacada: false,
        lineas: [
          { ref: "minipc_ia_start", label: "Mini-PC IA START — instalación base obligatoria (motor Python + dashboard + WhatsApp)", precioOverride: 590 },
          { ref: "mo_config_deteccion_ia_320", label: "Seguridad IA — 2 cámaras con detección de personas/vehículos y alertas WhatsApp", precioOverride: 860 }
        ]
      },
      {
        nombre: "Inteligente — + Motor Meteorológico y Paquetes ⭐",
        destacada: true,
        lineas: [
          { ref: "minipc_ia_pro", label: "Mini-PC IA PRO — instalación base obligatoria (para varios modos a la vez)", precioOverride: 950 },
          { ref: "mo_config_deteccion_ia_320", label: "Seguridad IA — 2 cámaras con detección de personas/vehículos y alertas WhatsApp", precioOverride: 860 },
          { ref: "config_motor_clima_riego", label: "Motor Meteorológico — riego y persianas con IA climática", precioOverride: 600 },
          { ref: "motor_python_deteccion_paquete_foto", label: "Gestión de Paquetes — detección, foto y alerta WhatsApp", precioOverride: 320 }
        ]
      },
      {
        nombre: "Completa — + IA de Sueño y Personas Mayores",
        destacada: false,
        lineas: [
          { ref: "minipc_ia_pro", label: "Mini-PC IA PRO — instalación base obligatoria", precioOverride: 950 },
          { ref: "mo_config_avanzada_520", label: "Seguridad IA — 6 cámaras + reconocimiento de personas habituales", precioOverride: 2720 },
          { ref: "config_motor_sueno", label: "IA de Sueño — persianas y luz adaptativa + integración con alarma del móvil", precioOverride: 645 },
          { ref: "motor_python_caidas_ausencia_temp", label: "Personas Mayores — ausencia prolongada + detección de caídas por IA de visión", precioOverride: 933 }
        ]
      }
    ],
    nota: "Precio orientativo; cada modo puede ampliarse o sustituirse por cualquiera de los diez de la Plataforma IA Predictiva sin cambiar el Mini-PC IA Central ya instalado."
  },
  {
    nombre: "Pack Segunda Residencia IA",
    slug: "alquiler-segunda-residencia-ia",
    publico: "casa",
    incluyeIA: true,
    coincideCon: { servicios: [], modos: ["casa-presencial", "seguridad-ia", "gestion-paquetes", "motor-meteorologico"] },
    descripcion: "Controla tu propiedad desde donde estés: seguridad, simulación de presencia, gestión de paquetes y clima/riego, sin tener que desplazarte para saber que todo está bien.",
    idealPara: "viviendas que no se habitan todo el año — alquiler o segunda residencia",
    resultado: "Sabes que tu propiedad está bien sin ir a comprobarlo — la casa simula que hay alguien y te avisa si detecta algo raro.",
    imagen: "/img/packs/pack-alquiler-segunda-residencia.jpg",
    imagenAlt: "Cámara de seguridad en terraza con vistas al mar — Pack Segunda Residencia IA AHOMED",
    opciones: [
      {
        nombre: "Esencial — Casa Presencial + Seguridad IA",
        destacada: false,
        lineas: [
          { ref: "minipc_ia_start", label: "Mini-PC IA START — instalación base obligatoria", precioOverride: 590 },
          { ref: "config_motor_geofencing", label: "Casa Presencial — geofencing, 2 escenas y simulación de presencia", precioOverride: 455 },
          { ref: "mo_config_deteccion_ia_320", label: "Seguridad IA — 2 cámaras con detección de personas/vehículos", precioOverride: 860 }
        ]
      },
      {
        nombre: "Inteligente — + Gestión de Paquetes ⭐",
        destacada: true,
        lineas: [
          { ref: "minipc_ia_pro", label: "Mini-PC IA PRO — instalación base obligatoria (3 modos a la vez + varias cámaras en Seguridad IA)", precioOverride: 950 },
          { ref: "config_motor_geofencing_reducido", label: "Casa Presencial — 3 escenas + simulación de presencia", precioOverride: 595 },
          { ref: "mo_config_420", label: "Seguridad IA — 4 cámaras + zonas de detección personalizadas", precioOverride: 1330 },
          { ref: "motor_python_deteccion_paquete_foto", label: "Gestión de Paquetes — detección, foto y alerta WhatsApp", precioOverride: 320 }
        ]
      },
      {
        nombre: "Completa — + Motor Meteorológico",
        destacada: false,
        lineas: [
          { ref: "minipc_ia_pro", label: "Mini-PC IA PRO — instalación base obligatoria", precioOverride: 950 },
          { ref: "config_motor_geofencing_reducido", label: "Casa Presencial — 3 escenas + simulación de presencia", precioOverride: 595 },
          { ref: "mo_config_avanzada_520", label: "Seguridad IA — 6 cámaras + reconocimiento de personas habituales", precioOverride: 2720 },
          { ref: "motor_python_deteccion_reconocimiento_historico", label: "Gestión de Paquetes — + histórico de entregas", precioOverride: 575 },
          { ref: "motor_python_clima_riego_persianas", label: "Motor Meteorológico — riego y persianas con IA climática", precioOverride: 1070 }
        ]
      }
    ],
    nota: "Sin cuota mensual ni necesidad de desplazarte para comprobar el estado de la vivienda. Precio orientativo, se ajusta en visita técnica según distancia y accesibilidad."
  }
];

const ventajas = [
  "Una capa tecnológica que puedes añadir a cualquier obra",
  "IA local, sin depender de la nube para decidir",
  "Sin cuotas mensuales en las soluciones que no las necesitan",
  "Un sistema que puede crecer contigo",
  "Hablas directamente con el técnico"
];

const comoFunciona = [
  "Me escribes por WhatsApp y me cuentas qué necesitas.",
  "Visito tu vivienda o negocio — la primera visita es gratuita.",
  "Te preparo opciones claras: Esencial, Inteligente y Completa.",
  "Tú decides. Sin compromiso, sin letra pequeña.",
  "Instalamos y te enseño a usarlo todo."
];

const empresa = {
  nombre: "AHOMED",
  eslogan: "La capa inteligente de tu vivienda",
  zona: "Madrid y alrededores",
  whatsapp: "671176482",
  whatsappDisplay: "671 176 482",
  web: "ahomed.com",
  email: "info@ahomed.com",
  anosExperiencia: "10 años",
  metaDescriptionDefault:
    "AHOMED — Seguridad inteligente, domótica, IA, redes y energía para tu vivienda o negocio en Madrid y alrededores. Colaboramos con reformistas, constructoras e instaladores. Primera visita gratuita."
};

module.exports = { services, packs, ventajas, comoFunciona, empresa };
