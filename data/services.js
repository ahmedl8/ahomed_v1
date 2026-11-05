// Datos de servicios AHOMED (v91) — trabajos sencillos, sin IA ni automatismos:
// electricidad, pintura, pladur, cámaras de vigilancia, motorización de
// persianas, jardinería y limpieza después de obra.
//
// Todos los precios salen de data/pricing-catalog.json (componentes) y son
// orientativos: se confirman tras la visita técnica gratuita. Cada servicio
// declara un ejemplo principal y, opcionalmente, ejemplos adicionales; cada
// ejemplo tiene tres opciones (Básica, Estándar, Completa) definidas por líneas
// que referencian componentes del catálogo (ver data/pricing.js).

const services = [
  // ───────────────────────── 1. ELECTRICIDAD ─────────────────────────
  {
    slug: "electricidad",
    heroImagen: "/img/hero-bloques/electricidad.jpg",
    cardImagen: "/img/trabajos/cuadro-electrico-despues.jpg",
    numero: 1,
    nombre: "Electricidad",
    icono: "bolt",
    resumen: "Cuadros eléctricos, boletines (CIE), enchufes, puntos de luz, iluminación LED, averías y puntos de recarga para coche eléctrico. La base de cualquier instalación segura.",
    tiempo: "Media jornada",
    desde: 100,
    idealPara: [
      "Viviendas con cuadro antiguo o sin boletín (CIE)",
      "Averías eléctricas urgentes",
      "Más enchufes o puntos de luz donde los necesitas",
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
          nombre: "Básica",
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
          nombre: "Estándar",
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
      "Punto de recarga para coche eléctrico (desde 996 €)",
      "Cambio de iluminación a LED (desde 313 €)",
      "Boletín eléctrico (CIE) con tramitación e inspección"
    ],
    tambienInstalaron: [
      { texto: "Falso techo de pladur con iluminación", href: "/servicios/pladur" },
      { texto: "Pintura después de la obra eléctrica", href: "/servicios/pintura" },
      { texto: "Motorización de persianas", href: "/servicios/motorizacion-persianas" },
      { texto: "Cámaras de vigilancia", href: "/servicios/camaras-vigilancia" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Más enchufes y puntos de luz",
        cliente: "Vivienda con pocos enchufes o con puntos de luz mal repartidos (cocina, salón, dormitorios).",
        imagen: "/img/trabajos/enchufes-despues.jpg",
        imagenAntes: "/img/trabajos/enchufes-antes.jpg",
        opciones: [
          {
            nombre: "Básica — 4 enchufes nuevos",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 3.5, label: "Mano de obra (4 enchufes, hasta 15 m de cable)" },
              { ref: "enchufe_convencional", cantidad: 4, label: "4 enchufes empotrados" },
              { ref: "material_cableado_basico" }
            ]
          },
          {
            nombre: "Estándar — 8 enchufes nuevos",
            destacada: true,
            lineas: [
              { ref: "mo_electricista_hora", horas: 6, label: "Mano de obra (8 enchufes, con regatas y tapado)" },
              { ref: "enchufe_convencional", cantidad: 8, label: "8 enchufes empotrados" },
              { ref: "material_cableado_medio" }
            ]
          },
          {
            nombre: "Completa — 12 enchufes y puntos de luz",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 8.5, label: "Mano de obra (12 puntos entre enchufes e interruptores)" },
              { ref: "enchufe_convencional", cantidad: 12, label: "12 enchufes e interruptores empotrados" },
              { ref: "material_cableado_ampliado" }
            ]
          }
        ],
        nota: "El número de puntos y la distancia al cuadro se confirman en la visita técnica. Si hace falta un circuito nuevo desde el cuadro, se presupuesta aparte."
      },
      {
        titulo: "Cambio de iluminación a LED",
        cliente: "Vivienda con halógenos o fluorescentes antiguos (alto consumo, se funden a menudo).",
        opciones: [
          {
            nombre: "Básica — sustitución directa, 10 puntos de luz",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 3.5, label: "Mano de obra (sustitución de 10 puntos de luz)" },
              { ref: "downlight_led_empotrable", cantidad: 10, label: "10 downlights LED empotrables (sustituyen halógeno)" },
              { ref: "material_iluminacion_led_20", label: "Material eléctrico" }
            ]
          },
          {
            nombre: "Estándar — con regulador de intensidad",
            destacada: true,
            lineas: [
              { ref: "mo_electricista_hora", horas: 4.5, label: "Mano de obra (sustitución + instalación de reguladores)" },
              { ref: "downlight_led_empotrable", cantidad: 10, label: "10 downlights LED empotrables" },
              { ref: "regulador_led_pared", cantidad: 2, label: "2 reguladores de intensidad de pared (cocina y salón)" },
              { ref: "material_iluminacion_led_35", label: "Material eléctrico" }
            ]
          },
          {
            nombre: "Completa — más puntos y tira LED en la cocina",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 6, label: "Mano de obra (16 puntos de luz + tira LED)" },
              { ref: "downlight_led_empotrable", cantidad: 16, label: "16 downlights LED empotrables" },
              { ref: "regulador_led_pared", cantidad: 3, label: "3 reguladores de intensidad de pared" },
              { ref: "tira_led_regulable_temp_color", label: "Tira LED bajo los muebles de la cocina" },
              { ref: "material_iluminacion_led_50", label: "Material eléctrico" }
            ]
          }
        ],
        nota: "El número de puntos de luz y el estado del cableado existente se confirman en la visita técnica."
      },
      {
        titulo: "Punto de recarga para coche eléctrico (wallbox)",
        cliente: "Instalación de wallbox doméstica, desde el cuadro eléctrico hasta el garaje o plaza de parking.",
        imagen: "/img/trabajos/wallbox-despues.jpg",
        opciones: [
          {
            nombre: "Básica — wallbox 7,4 kW, instalación corta (hasta 5 m)",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 7.4, label: "Mano de obra e instalación (hasta 5 m desde el cuadro)" },
              { ref: "wallbox_74kw_mono" },
              { ref: "linea_dedicada_protecciones" },
              { ref: "material_canaleta_cableado" }
            ]
          },
          {
            nombre: "Estándar — wallbox 7,4 kW con programación desde el móvil",
            destacada: true,
            lineas: [
              { ref: "mo_electricista_hora", horas: 8.95, label: "Mano de obra e instalación (hasta 8 m)" },
              { ref: "wallbox_74kw_wifi", label: "Wallbox 7,4 kW con control de carga desde el móvil" },
              { ref: "linea_dedicada_protecciones" },
              { ref: "material_wallbox_medio" },
              { ref: "boletin_cie", label: "Boletín eléctrico (CIE) de la nueva línea" }
            ]
          },
          {
            nombre: "Completa — wallbox trifásica 22 kW",
            destacada: false,
            lineas: [
              { ref: "mo_electricista_hora", horas: 11.05, label: "Mano de obra e instalación (hasta 10 m, línea trifásica)" },
              { ref: "wallbox_22kw_trifasica" },
              { ref: "linea_dedicada_protecciones_reforzada" },
              { ref: "gestor_carga_dinamico", label: "Gestor de carga (evita saltos del ICP si hay otros consumos altos)" },
              { ref: "material_wallbox_trifasica" },
              { ref: "boletin_cie" }
            ]
          }
        ],
        nota: "Si el cuadro eléctrico no tiene capacidad disponible o hay que llevar línea nueva desde el contador, se presupuesta aparte tras la visita técnica. La normativa (ITC-BT-52) exige línea dedicada con magnetotérmico y diferencial propios para el wallbox — van incluidos desde la opción Básica, no como extra; en presupuestos más baratos del mercado conviene preguntar si de verdad los llevan, porque es lo que protege tu coche y tu instalación."
      }
    ]
  },

  // ───────────────────────── 2. PINTURA ─────────────────────────
  {
    slug: "pintura",
    heroImagen: "/img/hero-bloques/reparaciones-reformas.jpg",
    cardImagen: "/img/trabajos/pintura-reforma-despues.jpg",
    numero: 2,
    nombre: "Pintura",
    icono: "paint",
    resumen: "Pintura de pisos, chalets y locales: paredes y techos, reparación de grietas, eliminación de gotelé y acabados lavables. Se entrega limpio, con los muebles protegidos.",
    tiempo: "De uno a varios días",
    idealPara: [
      "Pisos que se van a vender o alquilar",
      "Viviendas recién reformadas que necesitan el acabado final",
      "Paredes con grietas, manchas o gotelé que se quiere quitar",
      "Locales y oficinas que quieren renovar su imagen"
    ],
    ejemplo: {
      titulo: "Pintura de piso completo",
      cliente: "Pintura integral de vivienda (paredes y techos), lista para entrar a vivir o para alquilar o vender.",
      imagen: "/img/trabajos/pintura-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/pintura-reforma-antes.jpg",
      opciones: [
        {
          nombre: "Básica — piso de 80 m², un solo color",
          destacada: false,
          lineas: [
            { ref: "mo_reformas_hora", horas: 22.1429, label: "Mano de obra (paredes y techos, 80 m² aprox.)" },
            { ref: "pintura_plastica_lisa_1color" },
            { ref: "material_pintura_70" }
          ]
        },
        {
          nombre: "Estándar — con reparación de grietas y varios colores",
          destacada: true,
          lineas: [
            { ref: "mo_reformas_hora", horas: 27.1429, label: "Mano de obra (paredes y techos, incluye preparación de superficie)" },
            { ref: "pintura_plastica_lisa_3colores" },
            { ref: "reparacion_grietas_puntual" },
            { ref: "material_pintura_90" }
          ]
        },
        {
          nombre: "Completa — antihumedad en baños y cocina, techos con acabado especial",
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
    extras: [
      "Eliminación de gotelé y alisado de paredes",
      "Lacado de puertas y rodapiés",
      "Reparación de humedades y desconchones antes de pintar"
    ],
    tambienInstalaron: [
      { texto: "Pladur (tabiques y falsos techos)", href: "/servicios/pladur" },
      { texto: "Electricidad (nuevos puntos de luz y enchufes)", href: "/servicios/electricidad" },
      { texto: "Limpieza después de obra", href: "/servicios/limpieza-post-obra" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Pintura de una estancia",
        cliente: "Un salón o dormitorio de unos 15 m² de suelo (paredes y techo).",
        opciones: [
          {
            nombre: "Básica — pintura blanca, sin reparaciones",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 7, label: "Mano de obra (paredes y techo, 1 estancia)" },
              { ref: "pintura_plastica_estancia_blanca" },
              { ref: "material_pintura_40" }
            ]
          },
          {
            nombre: "Estándar — pintura lavable de color, con reparación de desperfectos",
            destacada: true,
            lineas: [
              { ref: "mo_reformas_hora", horas: 8, label: "Mano de obra (preparación de superficie + dos manos)" },
              { ref: "pintura_plastica_estancia_lavable_color" },
              { ref: "reparacion_grietas_puntual" },
              { ref: "material_pintura_40" }
            ]
          },
          {
            nombre: "Completa — quitando el gotelé y alisando las paredes",
            destacada: false,
            lineas: [
              { ref: "mo_reformas_hora", horas: 14, label: "Mano de obra (eliminación de gotelé, alisado, lijado y pintura)" },
              { ref: "alisado_gotele_estancia" },
              { ref: "pintura_plastica_estancia_lavable_color" },
              { ref: "material_pintura_60" }
            ]
          }
        ],
        nota: "Precio orientativo para una estancia de tamaño medio con altura estándar; el número exacto de manos y el estado de las paredes se confirman en la visita."
      }
    ]
  },

  // ───────────────────────── 3. PLADUR ─────────────────────────
  {
    slug: "pladur",
    heroImagen: "/img/hero-bloques/pladur.jpg",
    cardImagen: "/img/trabajos/pladur-techo-despues.jpg",
    numero: 3,
    nombre: "Pladur",
    icono: "pladur",
    resumen: "Tabiques, falsos techos y trasdosados de pladur, con aislamiento acústico si lo necesitas y con la iluminación integrada en el mismo trabajo.",
    tiempo: "Un día",
    desde: 435,
    idealPara: [
      "Dividir una habitación o separar una zona",
      "Salones que quieren un techo con iluminación indirecta",
      "Reformas que necesitan tapar instalaciones o igualar paredes",
      "Aislar acústicamente un dormitorio o un despacho"
    ],
    ejemplo: {
      titulo: "Tabique de pladur",
      cliente: "División de una estancia o cerramiento con tabique de pladur, con o sin aislamiento acústico.",
      imagen: "/img/trabajos/pladur-techo-despues.jpg",
      opciones: [
        {
          nombre: "Básica — tabique simple, 10 m²",
          destacada: false,
          lineas: [
            { ref: "mo_pladurista_hora", horas: 8.5714, label: "Mano de obra (estructura y placas, 10 m²)" },
            { ref: "placas_pladur_10m2_simple", label: "Placas de pladur (10 m², una cara doble)" },
            { ref: "perfileria_tornilleria_40" },
            { ref: "masilla_cinta_juntas_25" }
          ]
        },
        {
          nombre: "Estándar — con aislamiento acústico",
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
    extras: [
      "Tabique de pladur, 10 m² (desde 435 €)",
      "Falso techo con iluminación LED integrada",
      "Pintura del tabique o techo en la misma visita"
    ],
    tambienInstalaron: [
      { texto: "Pintura (tabiques y techos listos para pintar)", href: "/servicios/pintura" },
      { texto: "Electricidad (nuevos puntos de luz)", href: "/servicios/electricidad" },
      { texto: "Limpieza después de obra", href: "/servicios/limpieza-post-obra" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Falso techo de pladur con iluminación empotrada (salón, 18 m²)",
        cliente: "Salón sin iluminación indirecta, con techo liso convencional.",
        imagen: "/img/trabajos/pladur-falso-techo-despues.jpg",
        imagenAntes: "/img/trabajos/pladur-falso-techo-antes.jpg",
        opciones: [
          {
            nombre: "Básica — techo liso",
            destacada: false,
            lineas: [
              { ref: "mo_pladurista_hora", horas: 13.5714, label: "Mano de obra (estructura y placas, 18 m²)" },
              { ref: "placas_pladur_18m2" },
              { ref: "perfileria_varillas_suspension" },
              { ref: "masilla_cinta_juntas_25" }
            ]
          },
          {
            nombre: "Estándar — con foseado perimetral para LED",
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
            nombre: "Completa — con downlights y regulador de intensidad",
            destacada: false,
            lineas: [
              { ref: "mo_pladurista_hora", horas: 17.1429, label: "Mano de obra (estructura, foseado y placas, 18 m²)" },
              { ref: "placas_pladur_18m2" },
              { ref: "perfileria_varillas_foseado" },
              { ref: "downlights_led_tira_perimetral", label: "8 downlights LED regulables + tira perimetral" },
              { ref: "regulador_led_pared" },
              { ref: "masilla_cinta_juntas_25" }
            ]
          }
        ],
        nota: "El cableado eléctrico de los puntos de luz se incluye en la mano de obra; la conexión al cuadro eléctrico general se presupuesta aparte si no hay un circuito ya disponible cerca."
      }
    ]
  },

  // ───────────────────────── 4. CÁMARAS DE VIGILANCIA ─────────────────────────
  {
    slug: "camaras-vigilancia",
    heroImagen: "/img/hero-bloques/seguridad.jpg",
    cardImagen: "/img/trabajos/camara-exterior-despues.jpg",
    numero: 4,
    nombre: "Cámaras de vigilancia",
    icono: "camera",
    resumen: "Cámaras con visión nocturna y grabación en tu propio equipo, para viviendas, chalets y locales. Ves las imágenes desde el móvil, sin cuota mensual: pagas la instalación una vez y el equipo es tuyo.",
    tiempo: "Una jornada",
    idealPara: [
      "Chalets, locales y comunidades",
      "Segundas residencias que quedan vacías",
      "Viviendas que quieren dejar de pagar una cuota mensual de alarma",
      "Garajes, naves pequeñas y accesos"
    ],
    ejemplo: {
      titulo: "Videovigilancia con cámaras cableadas",
      cliente: "Cámaras PoE cableadas (más fiables que las WiFi) con grabación local, sin cuota mensual.",
      imagen: "/img/trabajos/camara-exterior-despues.jpg",
      imagenAntes: "/img/trabajos/camara-exterior-antes.jpg",
      opciones: [
        {
          nombre: "Básica — 4 cámaras, grabación local",
          destacada: false,
          lineas: [
            { ref: "mo_seguridad_hora", horas: 12, label: "Instalación y cableado (4 cámaras, hasta 30 m de tirada por cámara)" },
            { ref: "camara_ip_poe_exterior", cantidad: 4, label: "4 cámaras IP cableadas con visión nocturna" },
            { ref: "nvr_grabacion_local", label: "Grabador con disco duro" },
            { ref: "cableado_estructurado_cctv_4cam" },
            { ref: "material_cctv_100", label: "Material y conectorizado" }
          ]
        },
        {
          nombre: "Estándar — 6 cámaras, con ver las imágenes desde el móvil",
          destacada: true,
          lineas: [
            { ref: "mo_seguridad_hora", horas: 17, label: "Instalación y cableado (6 cámaras)" },
            { ref: "camara_ip_poe_exterior", cantidad: 6, label: "6 cámaras IP cableadas con visión nocturna" },
            { ref: "nvr_grabacion_local_ampliado", label: "Grabador con disco duro ampliado" },
            { ref: "cableado_estructurado_cctv_6cam" },
            { ref: "config_acceso_remoto_app", label: "Configuración para ver las cámaras desde el móvil" },
            { ref: "material_cctv_130", label: "Material y conectorizado" }
          ]
        },
        {
          nombre: "Completa — 8 cámaras con batería de respaldo",
          destacada: false,
          lineas: [
            { ref: "mo_seguridad_hora", horas: 22.5, label: "Instalación y cableado (8 cámaras)" },
            { ref: "camara_ip_poe_exterior", cantidad: 8, label: "8 cámaras IP cableadas con visión nocturna" },
            { ref: "nvr_grabacion_local_ampliado", label: "Grabador con disco duro ampliado" },
            { ref: "cableado_estructurado_cctv_8cam" },
            { ref: "config_acceso_remoto_app", label: "Configuración para ver las cámaras desde el móvil" },
            { ref: "sai_respaldo_cctv" },
            { ref: "material_cctv_160", label: "Material y conectorizado" }
          ]
        }
      ],
      nota: "El precio depende de la distancia real de cableado entre cámaras y el grabador; se confirma en la visita técnica. Si las cámaras graban zonas comunes o la vía pública, hay normas específicas de protección de datos: te explicamos qué se puede grabar y cómo señalizarlo."
    },
    extras: [
      "Carteles de zona videovigilada",
      "Ampliación con más cámaras más adelante",
      "Revisión anual del equipo (opcional)"
    ],
    tambienInstalaron: [
      { texto: "Electricidad (punto de corriente para el grabador)", href: "/servicios/electricidad" },
      { texto: "Motorización de persianas", href: "/servicios/motorizacion-persianas" },
      { texto: "Jardinería (iluminación y riego exterior)", href: "/servicios/jardineria" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Cámaras WiFi sin obra",
        cliente: "Una o varias cámaras WiFi con grabación en tarjeta, para vigilar una entrada, un garaje o un jardín sin tirar cable.",
        imagen: "/img/trabajos/camara-exterior-despues.jpg",
        imagenAntes: "/img/trabajos/camara-exterior-antes.jpg",
        opciones: [
          {
            nombre: "Básica — 1 cámara exterior",
            destacada: false,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 1.5, label: "Instalación y configuración" },
              { ref: "camara_wifi_exterior" },
              { ref: "tarjeta_microsd_128" },
              { ref: "material_camaras_wifi_20" }
            ]
          },
          {
            nombre: "Estándar — 2 cámaras, entrada y jardín",
            destacada: true,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 2.5, label: "Instalación y configuración (2 cámaras)" },
              { ref: "camara_wifi_exterior", cantidad: 2, label: "2 cámaras WiFi exteriores con visión nocturna" },
              { ref: "tarjeta_microsd_128", cantidad: 2, label: "2 tarjetas microSD de 128 GB" },
              { ref: "material_camaras_wifi_20" },
              { ref: "cartel_disuasorio_camaras" }
            ]
          },
          {
            nombre: "Completa — 4 cámaras alrededor de la vivienda",
            destacada: false,
            lineas: [
              { ref: "mo_seguridad_hora", horas: 4.5, label: "Instalación y configuración (4 cámaras)" },
              { ref: "camara_wifi_exterior", cantidad: 4, label: "4 cámaras WiFi exteriores con visión nocturna" },
              { ref: "tarjeta_microsd_128", cantidad: 4, label: "4 tarjetas microSD de 128 GB" },
              { ref: "material_camaras_wifi_20", cantidad: 2, label: "Material de fijación y pequeño cableado" },
              { ref: "cartel_disuasorio_camaras" }
            ]
          }
        ],
        nota: "Las cámaras WiFi necesitan buena cobertura de red en el punto donde van; si no la hay, se valora un punto de acceso adicional o pasar a cámaras cableadas."
      }
    ]
  },

  // ───────────────────────── 5. MOTORIZACIÓN DE PERSIANAS ─────────────────────────
  {
    slug: "motorizacion-persianas",
    cardImagen: "/img/trabajos/persianas-despues.jpg",
    numero: 5,
    nombre: "Motorización de persianas",
    icono: "blinds",
    resumen: "Convierte tus persianas de cinta o manivela en persianas con motor: se suben y bajan con un botón, con mando a distancia o desde el móvil. También toldos.",
    tiempo: "Media jornada",
    idealPara: [
      "Persianas grandes o pesadas que cuesta subir a mano",
      "Personas mayores o con movilidad reducida",
      "Terrazas y salones con persiana de gran tamaño",
      "Viviendas que se reforman y quieren dejarlo todo con motor"
    ],
    ejemplo: {
      titulo: "Persianas motorizadas",
      cliente: "Motorización de persianas existentes, con mando de pared, mando a distancia o desde el móvil.",
      imagen: "/img/trabajos/persianas-despues.jpg",
      imagenAntes: "/img/trabajos/persianas-antes.jpg",
      opciones: [
        {
          nombre: "Básica — 1 persiana, interruptor de pared",
          destacada: false,
          lineas: [
            { ref: "mo_persianas_hora", horas: 3.5, label: "Mano de obra (desmontaje del sistema manual + instalación del motor)" },
            { ref: "dispositivo_motor_persiana_mando", label: "Motor tubular de persiana" },
            { ref: "mando_persiana_cableado", label: "Interruptor de pared para subir y bajar" },
            { ref: "material_fijacion_persiana" }
          ]
        },
        {
          nombre: "Estándar — 4 persianas con mando a distancia",
          destacada: true,
          lineas: [
            { ref: "dispositivo_motor_persiana_mando", cantidad: 4, horasPrimera: 3.5, horasAdicional: 2, horasRef: "mo_persianas_hora", label: "4 motores tubulares con mando a distancia (incluye mano de obra)" },
            { ref: "mando_multicanal_persianas", label: "Mando multicanal (controla las 4 persianas)" },
            { ref: "material_fijacion_persiana", cantidad: 4, label: "Material de fijación (4 persianas)" }
          ]
        },
        {
          nombre: "Completa — 4 persianas controladas desde el móvil",
          destacada: false,
          lineas: [
            { ref: "dispositivo_motor_persiana_wifi", cantidad: 4, horasPrimera: 4.5, horasAdicional: 2.5, horasRef: "mo_persianas_hora", label: "4 motores tubulares con módulo WiFi (incluye mano de obra)" },
            { ref: "material_fijacion_persiana", cantidad: 4, label: "Material de fijación (4 persianas)" }
          ]
        }
      ],
      nota: "Precio por persiana estándar (hasta 3 m² de superficie); persianas grandes (por ejemplo, de terraza), de material reforzado o con cajón difícil de abrir se valoran aparte porque necesitan un motor de más potencia."
    },
    extras: [
      "Persiana grande de terraza con motor reforzado",
      "Interruptor de pared adicional o mando extra",
      "Toldo con motor y mando a distancia"
    ],
    tambienInstalaron: [
      { texto: "Electricidad (punto de corriente en el cajón de persiana)", href: "/servicios/electricidad" },
      { texto: "Pintura (acabado tras la obra)", href: "/servicios/pintura" },
      { texto: "Cámaras de vigilancia", href: "/servicios/camaras-vigilancia" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Toldo motorizado",
        cliente: "Terraza de 4 x 3 m con toldo de brazos extensibles.",
        imagen: "/img/trabajos/toldo-despues.jpg",
        imagenAntes: "/img/trabajos/toldo-antes.jpg",
        opciones: [
          {
            nombre: "Básica — toldo con manivela manual",
            destacada: false,
            lineas: [
              { ref: "mo_persianas_hora", horas: 3, label: "Instalación y fijación (toldo de 4 x 3 m)" },
              { ref: "toldo_brazos_4x3_manual" },
              { ref: "material_fijacion_toldo_20", label: "Material de fijación" }
            ]
          },
          {
            nombre: "Estándar — toldo con motor y mando a distancia",
            destacada: true,
            lineas: [
              { ref: "mo_persianas_hora", horas: 4, label: "Instalación y fijación" },
              { ref: "dispositivo_toldo_motor_mando" },
              { ref: "material_fijacion_toldo_25", label: "Material de fijación" }
            ]
          },
          {
            nombre: "Completa — con motor, mando y luz LED en el brazo",
            destacada: false,
            lineas: [
              { ref: "mo_persianas_hora", horas: 4.5, label: "Instalación y fijación" },
              { ref: "dispositivo_toldo_motor_mando" },
              { ref: "led_brazo_toldo" },
              { ref: "material_fijacion_toldo_30", label: "Material de fijación" }
            ]
          }
        ],
        nota: "Los precios son para un toldo estándar de 4 x 3 m; otras medidas, anclajes especiales o toldos ya instalados que solo se quieren motorizar se valoran en la visita."
      }
    ]
  },

  // ───────────────────────── 6. JARDINERÍA ─────────────────────────
  {
    slug: "jardineria",
    cardImagen: "/img/trabajos/jardin-cesped.jpg",
    numero: 6,
    nombre: "Jardinería",
    icono: "leaf",
    resumen: "Corte de césped, poda de setos y árboles pequeños, limpieza y abonado, y riego automático. En visitas sueltas o con mantenimiento mensual, para chalets, adosados y comunidades.",
    tiempo: "De media jornada a una jornada",
    idealPara: [
      "Chalets y adosados con jardín que no tienes tiempo de cuidar",
      "Segundas residencias que necesitan una puesta a punto antes de usarlas",
      "Jardines abandonados que hay que recuperar",
      "Comunidades con zonas verdes"
    ],
    ejemplo: {
      titulo: "Puesta a punto de jardín (150 m²)",
      cliente: "Jardín de unos 150 m² con césped, setos y arbustos, con una visita de trabajo completa.",
      opciones: [
        {
          nombre: "Básica — corte de césped y limpieza",
          destacada: false,
          lineas: [
            { ref: "mo_jardinero_hora", horas: 4, label: "Mano de obra (corte de césped, perfilado de bordes y limpieza)" },
            { ref: "maquinaria_combustible_jardin" },
            { ref: "retirada_restos_jardin" }
          ]
        },
        {
          nombre: "Estándar — con poda de setos y abonado",
          destacada: true,
          lineas: [
            { ref: "mo_jardinero_hora", horas: 7, label: "Mano de obra (corte, poda de setos y arbustos, limpieza)" },
            { ref: "maquinaria_combustible_jardin" },
            { ref: "retirada_restos_jardin" },
            { ref: "abonado_cesped_200m2" }
          ]
        },
        {
          nombre: "Completa — con poda de árboles pequeños y tratamiento de plagas",
          destacada: false,
          lineas: [
            { ref: "mo_jardinero_hora", horas: 10, label: "Mano de obra (corte, podas, tratamiento y limpieza)" },
            { ref: "maquinaria_combustible_jardin" },
            { ref: "retirada_restos_jardin" },
            { ref: "abonado_cesped_200m2" },
            { ref: "tratamiento_plagas_jardin" }
          ]
        }
      ],
      nota: "Precio orientativo para un jardín de tamaño medio en estado normal; jardines muy descuidados, árboles grandes que requieren plataforma o volúmenes grandes de restos se valoran en la visita."
    },
    extras: [
      "Mantenimiento mensual con visitas periódicas",
      "Riego automático por goteo o aspersión",
      "Recuperación de jardines abandonados"
    ],
    tambienInstalaron: [
      { texto: "Cámaras de vigilancia para el exterior", href: "/servicios/camaras-vigilancia" },
      { texto: "Electricidad (iluminación y puntos de corriente exteriores)", href: "/servicios/electricidad" },
      { texto: "Limpieza después de obra (terrazas y zonas exteriores)", href: "/servicios/limpieza-post-obra" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Mantenimiento mensual",
        cliente: "Jardín de unos 150 m² con visitas periódicas, para que esté siempre cuidado sin que tengas que pensar en ello.",
        opciones: [
          {
            nombre: "Básica — 1 visita al mes",
            destacada: false,
            totalUnidad: "€/mes",
            lineas: [
              { ref: "mo_jardinero_hora", horas: 3, label: "Mano de obra (1 visita de 3 h: corte, bordes y limpieza)" },
              { ref: "maquinaria_combustible_jardin" }
            ]
          },
          {
            nombre: "Estándar — 2 visitas al mes",
            destacada: true,
            totalUnidad: "€/mes",
            lineas: [
              { ref: "mo_jardinero_hora", horas: 6, label: "Mano de obra (2 visitas de 3 h: corte, setos y limpieza)" },
              { ref: "maquinaria_combustible_jardin", cantidad: 2, label: "Maquinaria, combustible y desgaste (2 visitas)" },
              { ref: "retirada_restos_jardin", label: "Retirada de restos vegetales" }
            ]
          },
          {
            nombre: "Completa — visita semanal",
            destacada: false,
            totalUnidad: "€/mes",
            lineas: [
              { ref: "mo_jardinero_hora", horas: 8, label: "Mano de obra (4 visitas de 2 h)" },
              { ref: "maquinaria_combustible_jardin", cantidad: 4, label: "Maquinaria, combustible y desgaste (4 visitas)" },
              { ref: "retirada_restos_jardin", cantidad: 2, label: "Retirada de restos vegetales (2 veces al mes)" }
            ]
          }
        ],
        nota: "Cuota mensual orientativa para un jardín de tamaño medio; abonados, tratamientos y podas grandes se presupuestan aparte. Sin permanencia."
      },
      {
        titulo: "Riego automático",
        cliente: "Sistema de riego programado por zonas, para no regar a mano ni depender de que alguien se acuerde.",
        imagen: "/img/trabajos/riego-despues.jpg",
        imagenAntes: "/img/trabajos/riego-antes.jpg",
        opciones: [
          {
            nombre: "Básica — 2 zonas, programador a pilas",
            destacada: false,
            lineas: [
              { ref: "mo_jardinero_hora", horas: 6, label: "Mano de obra e instalación (2 zonas, hasta 100 m²)" },
              { ref: "programador_riego_manual", cantidad: 2, label: "2 programadores de riego a pilas" },
              { ref: "tuberia_material_zanja_bajo" }
            ]
          },
          {
            nombre: "Estándar — 4 zonas, programador y sensor de lluvia",
            destacada: true,
            lineas: [
              { ref: "mo_jardinero_hora", horas: 12.67, label: "Mano de obra e instalación (4 zonas, hasta 250 m²)" },
              { ref: "programador_riego_4v" },
              { ref: "sensor_lluvia", label: "Sensor de lluvia (evita regar cuando llueve)" },
              { ref: "tuberia_material_zanja_medio" }
            ]
          },
          {
            nombre: "Completa — 6 zonas, para jardines grandes",
            destacada: false,
            lineas: [
              { ref: "mo_jardinero_hora", horas: 17.33, label: "Mano de obra e instalación (6 zonas, hasta 500 m²)" },
              { ref: "programador_riego_wifi_6v", label: "Programador de riego de 6 electroválvulas" },
              { ref: "sensor_lluvia", label: "Sensor de lluvia" },
              { ref: "tuberia_material_zanja_alto" }
            ]
          }
        ],
        nota: "El precio depende de la superficie real de jardín y del tipo de riego (goteo, difusión o aspersión); se ajusta tras la visita técnica."
      }
    ]
  },

  // ───────────────────────── 7. LIMPIEZA POST-OBRA ─────────────────────────
  {
    slug: "limpieza-post-obra",
    cardImagen: "/img/trabajos/reforma-general-despues.jpg",
    numero: 7,
    nombre: "Limpieza después de obra",
    icono: "sparkles",
    resumen: "Limpieza a fondo al terminar una reforma: polvo fino, restos de pintura, cemento y silicona en suelos, cristales y marcos, para entregar la vivienda lista para entrar a vivir.",
    tiempo: "Una jornada",
    idealPara: [
      "Reformas terminadas que van a entregarse, alquilarse o venderse",
      "Pisos nuevos con restos de obra y embalajes",
      "Reformistas y constructoras que quieren entregar la obra impecable",
      "Locales antes de la inauguración"
    ],
    ejemplo: {
      titulo: "Limpieza final de un piso reformado (90 m²)",
      cliente: "Piso de unos 90 m² recién reformado, con polvo fino de obra y restos de pintura y silicona.",
      opciones: [
        {
          nombre: "Básica — polvo, suelos, baños y cocina",
          destacada: false,
          lineas: [
            { ref: "mo_limpieza_hora", horas: 14, label: "Mano de obra (retirada de polvo, suelos, baños y cocina)" },
            { ref: "material_limpieza_30" }
          ]
        },
        {
          nombre: "Estándar — con cristales, marcos y retirada de embalajes",
          destacada: true,
          lineas: [
            { ref: "mo_limpieza_hora", horas: 18, label: "Mano de obra (limpieza completa de la vivienda)" },
            { ref: "limpieza_cristales_marcos" },
            { ref: "retirada_restos_obra_fino" },
            { ref: "material_limpieza_45" }
          ]
        },
        {
          nombre: "Completa — con tratamiento de suelos",
          destacada: false,
          lineas: [
            { ref: "mo_limpieza_hora", horas: 20, label: "Mano de obra (limpieza completa en dos pasadas)" },
            { ref: "limpieza_cristales_marcos" },
            { ref: "tratamiento_suelo_postobra" },
            { ref: "retirada_restos_obra_fino" },
            { ref: "material_limpieza_60" }
          ]
        }
      ],
      nota: "Precio orientativo para una vivienda de 90 m² con nivel de suciedad normal de obra; si hay mucho escombro o restos de cemento incrustados, se valora en la visita. La limpieza de obra no incluye la retirada de escombros gruesos (contenedor)."
    },
    extras: [
      "Limpieza de terrazas y zonas exteriores",
      "Limpieza de locales antes de la apertura",
      "Segunda pasada de limpieza cuando termine el resto de oficios"
    ],
    tambienInstalaron: [
      { texto: "Pintura (último paso antes de limpiar)", href: "/servicios/pintura" },
      { texto: "Pladur", href: "/servicios/pladur" },
      { texto: "Jardinería (puesta a punto del exterior)", href: "/servicios/jardineria" }
    ],
    ejemplosAdicionales: [
      {
        titulo: "Chalet con terraza (150 m²)",
        cliente: "Vivienda unifamiliar de unos 150 m² con terraza, recién reformada.",
        opciones: [
          {
            nombre: "Básica — polvo, suelos, baños y cocina",
            destacada: false,
            lineas: [
              { ref: "mo_limpieza_hora", horas: 22, label: "Mano de obra (retirada de polvo, suelos, baños y cocina)" },
              { ref: "material_limpieza_45" }
            ]
          },
          {
            nombre: "Estándar — con cristales, terraza y retirada de embalajes",
            destacada: true,
            lineas: [
              { ref: "mo_limpieza_hora", horas: 28, label: "Mano de obra (limpieza completa de la vivienda)" },
              { ref: "limpieza_cristales_marcos_amplia" },
              { ref: "limpieza_terraza_exterior" },
              { ref: "retirada_restos_obra_fino" },
              { ref: "material_limpieza_60" }
            ]
          },
          {
            nombre: "Completa — con tratamiento de suelos",
            destacada: false,
            lineas: [
              { ref: "mo_limpieza_hora", horas: 34, label: "Mano de obra (limpieza completa en dos pasadas)" },
              { ref: "limpieza_cristales_marcos_amplia" },
              { ref: "tratamiento_suelo_postobra_amplio" },
              { ref: "limpieza_terraza_exterior" },
              { ref: "retirada_restos_obra_fino" },
              { ref: "material_limpieza_60" }
            ]
          }
        ],
        nota: "Precio orientativo; el número de ventanas, el tipo de suelo y el estado de la terraza se confirman en la visita."
      }
    ]
  }
];

const comoFunciona = [
  { label: "Me escribes", texto: "Me escribes por WhatsApp y me cuentas qué necesitas." },
  { label: "Te visito", texto: "Visito tu vivienda o negocio — la primera visita es gratuita." },
  { label: "Te preparo opciones", texto: "Te preparo opciones claras: Básica, Estándar y Completa." },
  { label: "Tú decides", texto: "Tú decides. Sin compromiso, sin letra pequeña." },
  { label: "Lo hacemos", texto: "Hacemos el trabajo, lo dejamos limpio y te lo explico." }
];

const empresa = {
  nombre: "AHOMED",
  eslogan: "Trabajos para tu casa, bien hechos",
  zona: "Madrid y alrededores",
  whatsapp: "671176482",
  whatsappDisplay: "671 176 482",
  web: "ahomed.com",
  email: "info@ahomed.com",
  anosExperiencia: "10 años",
  metaDescriptionDefault:
    "AHOMED — Electricidad, pintura, pladur, cámaras de vigilancia, motorización de persianas, jardinería y limpieza después de obra en Madrid y alrededores. Presupuesto con tres opciones claras. Primera visita gratuita."
};

module.exports = { services, comoFunciona, empresa };
