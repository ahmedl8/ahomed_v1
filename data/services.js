// Datos de servicios AHOMED — extraídos de "Guía de Servicios AHOMED 2026"
// Todos los precios son orientativos; se confirman tras visita técnica gratuita.

const services = [
  {
    slug: "electricidad",
    numero: 1,
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
    ejemplo: {
      titulo: "Sustitución de cuadro eléctrico + boletín (CIE)",
      cliente: "Roberto Gómez",
      opciones: [
        {
          nombre: "Básica",
          destacada: false,
          items: [
            ["Mano de obra (aprox. 4 h)", 150],
            ["Cuadro eléctrico 12 elementos + PIAs", 130],
            ["Diferencial 30 mA estándar", 45],
            ["Material y pequeño cableado", 25],
            ["Boletín eléctrico (CIE): tramitación e inspección", 165]
          ],
          total: 515
        },
        {
          nombre: "Recomendada",
          destacada: true,
          items: [
            ["Mano de obra (aprox. 5 h)", 190],
            ["Cuadro eléctrico 12 elementos + PIAs", 130],
            ["Diferencial superinmunizado (evita disparos por fugas fantasma)", 70],
            ["Material y cableado", 30],
            ["Boletín eléctrico (CIE): tramitación e inspección", 165]
          ],
          total: 585
        },
        {
          nombre: "Premium",
          destacada: false,
          items: [
            ["Mano de obra (aprox. 6 h)", 220],
            ["Cuadro eléctrico 12 elementos + PIAs", 130],
            ["Diferencial superinmunizado", 70],
            ["Protector de sobretensiones", 65],
            ["Material y cableado", 35],
            ["Boletín eléctrico (CIE): tramitación e inspección", 165]
          ],
          total: 685
        }
      ]
    },
    extras: [
      "Punto de recarga para coche eléctrico (desde 995 €)",
      "Iluminación LED (desde 235 €)",
      "Diagnóstico de avería eléctrica (desde 100 €)"
    ],
    tambienInstalaron: ["Iluminación LED", "Red WiFi mesh", "Domótica básica"]
  },
  {
    slug: "domotica",
    numero: 2,
    nombre: "Domótica",
    icono: "home-wifi",
    resumen: "Luces, persianas, riego y escenas controladas desde el móvil. Desde una estancia hasta la vivienda completa.",
    tiempo: "Trabajo rápido (por estancia)",
    desde: 295,
    idealPara: [
      "Personas mayores (control sencillo por app o voz)",
      "Viviendas nuevas",
      "Alquiler turístico",
      "Segunda residencia"
    ],
    ejemplo: {
      titulo: "Domótica salón + cocina",
      cliente: "María Fernández",
      opciones: [
        {
          nombre: "Presupuesto",
          destacada: true,
          items: [
            ["Mano de obra", 120],
            ["4 interruptores WiFi", 120],
            ["2 enchufes inteligentes", 40],
            ["Material eléctrico", 15]
          ],
          total: 295
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 60 €/año — revisión de dispositivos y actualización de la app."
    },
    extras: [
      "Domótica completa de vivienda (desde 1.610 €)",
      "Persianas motorizadas (desde 345 €)",
      "Riego automático de jardín (desde 500 €)"
    ],
    tambienInstalaron: ["Persianas motorizadas", "Cerradura inteligente", "Red WiFi mesh con red de domótica separada"]
  },
  {
    slug: "energia-solar",
    numero: 3,
    nombre: "Energía solar",
    icono: "solar",
    resumen: "Desde un kit de balcón que se enchufa directamente hasta placas de autoconsumo en tejado.",
    tiempo: "Media jornada",
    desde: 510,
    idealPara: [
      "Pisos con terraza o balcón orientados al sol",
      "Viviendas con factura eléctrica alta",
      "Chalets con tejado disponible (placas de autoconsumo)"
    ],
    ejemplo: {
      titulo: "Kit solar de autoconsumo para balcón/terraza (\"solar de enchufar\")",
      cliente: "Fernando Ruiz",
      opciones: [
        {
          nombre: "Básica",
          destacada: false,
          items: [
            ["Instalación y fijación", 90],
            ["2 paneles solares 400 W (800 W total)", 280],
            ["Microinversor 800 W", 120],
            ["Material de fijación", 20]
          ],
          total: 510
        },
        {
          nombre: "Recomendada",
          destacada: true,
          items: [
            ["Instalación y fijación con estructura reforzada", 110],
            ["2 paneles solares 400 W (800 W total)", 280],
            ["Microinversor 800 W con monitorización por app", 150],
            ["Estructura de fijación reforzada", 45],
            ["Material", 20]
          ],
          total: 605
        },
        {
          nombre: "Premium — con batería portátil",
          destacada: false,
          items: [
            ["Instalación y fijación con estructura reforzada", 130],
            ["2 paneles solares 400 W (800 W total)", 280],
            ["Microinversor 800 W con monitorización por app", 150],
            ["Batería portátil 1 kWh (almacena excedente para la noche)", 480],
            ["Estructura de fijación reforzada", 45],
            ["Material", 25]
          ],
          total: 1110
        }
      ],
      nota: "Instalación de autoconsumo sin excedentes de baja potencia: no requiere alta como productor ni boletín de vertido a red."
    },
    extras: [
      "Placas solares en tejado, autoconsumo (desde 2.830 €)",
      "Revisión y mantenimiento anual (30 €/año)"
    ],
    tambienInstalaron: ["Panel de monitorización a medida", "Punto de recarga para coche eléctrico"]
  },
  {
    slug: "seguridad",
    numero: 4,
    nombre: "Seguridad",
    icono: "shield",
    resumen: "Cámaras, alarmas, videoportero y cerraduras inteligentes. Equipo propiedad del cliente desde el primer día, sin cuota de por vida.",
    tiempo: "Trabajo rápido",
    desde: 120,
    idealPara: [
      "Chalets, locales y comunidades",
      "Segundas residencias",
      "Viviendas que quieren dejar de pagar cuota mensual de alarma"
    ],
    ejemplo: {
      titulo: "Videoportero inteligente",
      cliente: "Sonia Navarro",
      opciones: [
        {
          nombre: "Básica — inalámbrico, sin obra",
          destacada: false,
          items: [
            ["Instalación y configuración", 45],
            ["Videoportero WiFi a batería con app", 90],
            ["Material", 10]
          ],
          total: 145
        },
        {
          nombre: "Recomendada — sobre cableado existente (2 hilos)",
          destacada: true,
          items: [
            ["Instalación y configuración", 75],
            ["Videoportero 2 hilos con cámara y monitor interior", 145],
            ["Material", 15]
          ],
          total: 235
        },
        {
          nombre: "Premium — sistema IP con apertura remota",
          destacada: false,
          items: [
            ["Instalación y configuración avanzada", 100],
            ["Videoportero IP con grabación en la nube", 210],
            ["Módulo de apertura remota", 45],
            ["Material", 20]
          ],
          total: 375
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 25 €/año — comprobación de batería/conexión y actualización de firmware."
    },
    extras: [
      "Monitor adicional",
      "Cerradura eléctrica con apertura desde el móvil (desde 195 €)",
      "Grabación en NVR (CCTV cableado, desde 840 €)"
    ],
    tambienInstalaron: ["Cerradura inteligente", "Cámara WiFi adicional", "Sistema de seguridad completo para chalet"]
  },
  {
    slug: "redes-informatica",
    numero: 5,
    nombre: "Redes e informática",
    icono: "network",
    resumen: "Cobertura WiFi sin zonas muertas y red doméstica bien configurada. Base imprescindible para domótica e IA.",
    tiempo: "Trabajo rápido",
    desde: 210,
    idealPara: [
      "Viviendas grandes o de varias plantas con mala cobertura",
      "Quien vaya a instalar domótica o cámaras IA (red estable)",
      "Teletrabajo"
    ],
    ejemplo: {
      titulo: "Red WiFi mesh + configuración de red doméstica",
      cliente: "Elena Castro",
      opciones: [
        {
          nombre: "Básica",
          destacada: false,
          items: [
            ["Instalación y configuración", 60],
            ["Sistema WiFi mesh (2 puntos)", 140],
            ["Material", 10]
          ],
          total: 210
        },
        {
          nombre: "Recomendada — con redes separadas",
          destacada: true,
          items: [
            ["Instalación y configuración avanzada (red de invitados y red de domótica separadas)", 85],
            ["Sistema WiFi mesh (3 puntos)", 210],
            ["Material", 15]
          ],
          total: 310
        },
        {
          nombre: "Premium — con copia de seguridad automática",
          destacada: false,
          items: [
            ["Instalación y configuración avanzada", 110],
            ["Sistema WiFi mesh (3 puntos)", 210],
            ["Configuración de copia de seguridad automática (NAS/nube)", 95],
            ["Material", 20]
          ],
          total: 435
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 35 €/año — actualización de firmware y comprobación de cobertura."
    },
    extras: ["Ampliación de puntos mesh adicionales", "Red separada para domótica/IA", "Copia de seguridad automática"],
    tambienInstalaron: ["Domótica", "Cámaras con IA", "Panel de monitorización a medida"]
  },
  {
    slug: "climatizacion",
    numero: 6,
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
      cliente: "Rocío Delgado",
      opciones: [
        {
          nombre: "Básica",
          destacada: false,
          items: [
            ["Mano de obra e instalación (hasta 3 m de distancia)", 220],
            ["Split 1x1 2.500 frigorías (gama básica)", 380],
            ["Material (tubería, soportes, canaleta)", 40]
          ],
          total: 640
        },
        {
          nombre: "Recomendada",
          destacada: true,
          items: [
            ["Mano de obra e instalación", 250],
            ["Split 1x1 3.000 frigorías (gama media, Daikin/Mitsubishi)", 650],
            ["Material", 45]
          ],
          total: 945
        },
        {
          nombre: "Premium — alta eficiencia con WiFi",
          destacada: false,
          items: [
            ["Mano de obra e instalación", 280],
            ["Split 1x1 3.000 frigorías alta eficiencia (A+++) con control WiFi", 850],
            ["Material", 50],
            ["Certificado RITE", 60]
          ],
          total: 1240
        }
      ],
      nota: "Revisión y mantenimiento anual (opcional): 45 €/año — limpieza de filtros, revisión de gas y rendimiento."
    },
    extras: ["Climatización multisplit para toda la vivienda (desde 2.950 €)", "Control WiFi", "Certificado RITE"],
    tambienInstalaron: ["Domótica (control por escenas)", "Iluminación LED"]
  },
  {
    slug: "antenas",
    numero: 7,
    nombre: "Antenas",
    icono: "antenna",
    resumen: "TV por satélite y TDT, para una vivienda o para una comunidad completa.",
    tiempo: "Trabajo rápido",
    desde: 150,
    idealPara: ["Viviendas sin señal de TV o antena antigua", "Comunidades de propietarios (instalación colectiva)"],
    ejemplo: {
      titulo: "Antena parabólica + toma de TV",
      cliente: "Isabel Prado",
      opciones: [
        {
          nombre: "Básica — 1 toma de TV",
          destacada: false,
          items: [
            ["Instalación, orientación y configuración", 70],
            ["Antena parabólica 60 cm con LNB universal", 55],
            ["Soporte y cableado", 25]
          ],
          total: 150
        },
        {
          nombre: "Recomendada — señal a varias TVs (hasta 3 tomas)",
          destacada: true,
          items: [
            ["Instalación, orientación y configuración", 95],
            ["Antena parabólica 60 cm con LNB universal", 55],
            ["Modulador UHF/VHF", 60],
            ["Cableado a 3 tomas", 70]
          ],
          total: 280
        }
      ]
    },
    extras: ["Antena TDT comunitaria de edificio (desde 860 €)", "Tomas adicionales de TV"],
    tambienInstalaron: ["Red WiFi mesh", "Instalación eléctrica de la vivienda"]
  },
  {
    slug: "reparaciones-reformas",
    numero: 8,
    nombre: "Reparaciones y reformas",
    icono: "wrench",
    resumen: "Pintura, alicatado, montaje de muebles y pequeñas reformas de baño y cocina.",
    tiempo: "Un día",
    desde: 160,
    idealPara: [
      "Puesta a punto antes de alquilar o vender",
      "Baños y cocinas que necesitan un lavado de cara",
      "Montaje de muebles nuevos"
    ],
    ejemplo: {
      titulo: "Renovación de baño pequeño (pintura + alicatado parcial, 6 m² de pared)",
      cliente: "Miguel Santos",
      opciones: [
        {
          nombre: "Básica",
          destacada: false,
          items: [
            ["Mano de obra pintura (paredes y techo, aprox. 15 m²)", 120],
            ["Pintura plástica antihumedad", 65],
            ["Mano de obra alicatado (6 m² pared de ducha)", 210],
            ["Azulejo básico (6 m²)", 90],
            ["Material de agarre y juntas", 25]
          ],
          total: 510
        },
        {
          nombre: "Recomendada",
          destacada: true,
          items: [
            ["Mano de obra pintura (paredes y techo, aprox. 15 m²)", 120],
            ["Pintura plástica antihumedad", 65],
            ["Mano de obra alicatado (6 m² pared de ducha)", 210],
            ["Azulejo de gama media (6 m²)", 130],
            ["Rodapié cerámico", 30],
            ["Sellado de juntas con silicona antimoho", 25],
            ["Material", 25]
          ],
          total: 605
        }
      ]
    },
    extras: [
      "Pintura de piso completo, 80 m² (desde 970 €)",
      "Alicatado completo de baño, 12 m² (desde 670 €)",
      "Montaje de cocina modular (desde 395 €)"
    ],
    tambienInstalaron: ["Sustitución de sanitarios y grifería", "Falso techo de pladur con LED"]
  },
  {
    slug: "fontaneria",
    numero: 9,
    nombre: "Fontanería",
    icono: "plumbing",
    resumen: "Grifería, sanitarios y reparación de fugas.",
    tiempo: "Media jornada",
    desde: 145,
    idealPara: ["Baños que necesitan actualizar grifería o inodoro", "Fugas de agua detectadas o sospechadas"],
    ejemplo: {
      titulo: "Sustitución de sanitarios y grifería de baño",
      cliente: "Raúl Ibáñez",
      opciones: [
        {
          nombre: "Básica — grifería",
          destacada: false,
          items: [
            ["Mano de obra (cambio de 2 grifos: lavabo y ducha)", 90],
            ["Grifo de lavabo monomando", 45],
            ["Grifo termostático de ducha", 85],
            ["Material de estanqueidad (teflón, juntas)", 10]
          ],
          total: 230
        },
        {
          nombre: "Recomendada — grifería + inodoro",
          destacada: true,
          items: [
            ["Mano de obra (grifería + sustitución de inodoro)", 180],
            ["Grifo de lavabo monomando", 45],
            ["Grifo termostático de ducha", 85],
            ["Inodoro con cisterna de doble descarga", 180],
            ["Material de fijación y estanqueidad", 20]
          ],
          total: 510
        },
        {
          nombre: "Premium — baño completo (sin obra de alicatado)",
          destacada: false,
          items: [
            ["Mano de obra completa (grifería, inodoro, lavabo)", 260],
            ["Grifo de lavabo y ducha, gama media", 150],
            ["Inodoro con cisterna de doble descarga", 180],
            ["Lavabo con pedestal o semipedestal", 120],
            ["Válvulas de corte, sifones y material de estanqueidad", 45]
          ],
          total: 755
        }
      ],
      nota: "Si hay que picar pared o suelo para mover puntos de agua/desagüe, se presupuesta aparte según el alcance real (albañilería + alicatado)."
    },
    extras: ["Reparación de fuga de agua (desde 145 €)"],
    tambienInstalaron: ["Alicatado de baño", "Reforma pequeña de baño"]
  },
  {
    slug: "pladur",
    numero: 10,
    nombre: "Pladur",
    icono: "pladur",
    resumen: "Tabiques y falsos techos, con opción de iluminación LED integrada.",
    tiempo: "Un día",
    desde: 435,
    idealPara: ["Dividir una habitación", "Salones que quieren un techo con iluminación indirecta"],
    ejemplo: {
      titulo: "Falso techo de pladur con iluminación empotrada (salón, 18 m²)",
      cliente: "Nuria Campos",
      opciones: [
        {
          nombre: "Básica — techo liso",
          destacada: false,
          items: [
            ["Mano de obra (estructura y placas, 18 m²)", 380],
            ["Placas de pladur (18 m²)", 230],
            ["Perfilería y varillas de suspensión", 60],
            ["Masilla y cinta de juntas", 25]
          ],
          total: 695
        },
        {
          nombre: "Recomendada — con foseado perimetral para LED",
          destacada: true,
          items: [
            ["Mano de obra (estructura, foseado y placas, 18 m²)", 460],
            ["Placas de pladur (18 m²)", 230],
            ["Perfilería, varillas y perfil de foseado", 80],
            ["Tira LED perimetral con transformador", 90],
            ["Masilla y cinta de juntas", 25]
          ],
          total: 885
        },
        {
          nombre: "Premium — con downlights y regulación por app",
          destacada: false,
          items: [
            ["Mano de obra (estructura, foseado y placas, 18 m²)", 480],
            ["Placas de pladur (18 m²)", 230],
            ["Perfilería, varillas y perfil de foseado", 80],
            ["8 downlights LED regulables + tira perimetral", 220],
            ["Módulo de control WiFi para regulación por app", 85],
            ["Masilla y cinta de juntas", 25]
          ],
          total: 1120
        }
      ],
      nota: "El cableado eléctrico de los puntos de luz se incluye en la mano de obra; la conexión al cuadro eléctrico general se presupuesta aparte si no hay un circuito ya disponible cerca."
    },
    extras: ["Tabique de pladur, 10 m² (desde 435 €)", "Regulación por app (domótica)"],
    tambienInstalaron: ["Iluminación LED", "Domótica de escenas"]
  },
  {
    slug: "mantenimiento",
    numero: 11,
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
      opciones: [
        {
          nombre: "Básica — revisión anual",
          destacada: false,
          items: [["1 visita de revisión anual (dispositivos, batería de sensores, actualización de apps)", 90]],
          total: 90,
          totalUnidad: "€/año"
        },
        {
          nombre: "Recomendada — revisión + 2 incidencias incluidas",
          destacada: true,
          items: [["1 visita de revisión anual + hasta 2 incidencias menores incluidas (sin coste de desplazamiento)", 180]],
          total: 180,
          totalUnidad: "€/año"
        },
        {
          nombre: "Premium — mensual con atención prioritaria",
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
  }
];

// Servicio destacado: IA y Monitorización Inteligente (el gran diferenciador)
const iaService = {
  slug: "ia-monitorizacion",
  nombre: "IA y Monitorización Inteligente",
  icono: "ai",
  resumen:
    "El sistema aprenderá a distinguir personas y vehículos reales de falsas alarmas (un gato, una sombra, una bolsa moviéndose con el viento), y solo avisa por WhatsApp cuando de verdad importa.",
  destacado: "El gran diferenciador de AHOMED. Servicio exclusivo — la mayoría de instaladores no lo ofrecen.",
  tiempo: "Proyecto completo",
  desde: 790,
  idealPara: "Negocios, naves, fincas rurales y viviendas con vigilancia avanzada",
  ejemplos: [
    {
      titulo: "Negocio: cámaras IA para nave o almacén",
      subtitulo: "Talleres Bravo, S.L. · nave industrial de 450 m²",
      opciones: [
        {
          nombre: "Básica — perímetro con 4 cámaras",
          destacada: false,
          items: [
            ["Instalación y cableado (4 cámaras, nave de hasta 500 m²)", 450],
            ["4 cámaras IP con visión nocturna", 480],
            ["Grabador NVR 8 canales + disco duro", 220],
            ["Configuración del modelo de detección IA (persona/vehículo, descarta falsos positivos)", 380],
            ["Notificaciones por WhatsApp ante alarma real", 90],
            ["Material y conectorizado", 60]
          ],
          total: 1680
        },
        {
          nombre: "Recomendada — 8 cámaras, cubre accesos y muelles",
          destacada: true,
          items: [
            ["Instalación y cableado (8 cámaras)", 780],
            ["8 cámaras IP con visión nocturna", 960],
            ["Grabador NVR 16 canales + disco duro ampliado", 340],
            ["Configuración del modelo de detección IA (persona/vehículo/matrícula)", 480],
            ["Notificaciones por WhatsApp ante alarma real", 90],
            ["Material y conectorizado", 90]
          ],
          total: 2740
        },
        {
          nombre: "Premium — con reanálisis de alarmas por IA",
          destacada: false,
          items: [
            ["Instalación y cableado (8 cámaras + 2 térmicas perimetrales)", 950],
            ["8 cámaras IP con visión nocturna", 960],
            ["2 cámaras térmicas para detección perimetral (reducen falsos positivos por fauna o vegetación)", 1600],
            ["Grabador NVR 16 canales + disco duro ampliado", 340],
            ["Configuración del modelo de detección IA (persona/vehículo/matrícula)", 480],
            ["Reanálisis automático de alarmas con IA (descarta falsos positivos antes de avisar)", 380],
            ["Notificaciones por WhatsApp ante alarma real", 90],
            ["Material y conectorizado", 100]
          ],
          total: 4900
        }
      ],
      nota: "El modelo de detección se entrena y ajusta con imágenes reales del propio local (iluminación, maquinaria, tránsito habitual), lo que reduce avisos falsos frente a un sistema genérico de fábrica."
    },
    {
      titulo: "Vivienda: kit de vigilancia con alertas por WhatsApp",
      subtitulo: "Familia Reyes · 2 a 6 cámaras según opción",
      opciones: [
        {
          nombre: "Básica — 2 cámaras",
          destacada: false,
          items: [
            ["Mano de obra y configuración del modelo de detección", 320],
            ["2 cámaras IP compatibles + procesamiento local", 480],
            ["Configuración de alertas por WhatsApp (API Meta) y app", 150]
          ],
          total: 950
        },
        {
          nombre: "Recomendada — 4 cámaras + zonas personalizadas",
          destacada: true,
          items: [
            ["Mano de obra y configuración", 420],
            ["4 cámaras IP + mini-PC de procesamiento", 890],
            ["Configuración de alertas WhatsApp y zonas de detección personalizadas", 200]
          ],
          total: 1510
        },
        {
          nombre: "Premium — 6 cámaras + reconocimiento de personas habituales",
          destacada: false,
          items: [
            ["Mano de obra y configuración avanzada", 520],
            ["6 cámaras IP", 900],
            ["Servidor de procesamiento con IA (GPU local, para reconocimiento facial en tiempo real)", 950],
            ["Entrenamiento de reconocimiento de personas habituales y alertas WhatsApp", 350]
          ],
          total: 2720
        }
      ]
    }
  ],
  extras: [
    "Reentrenamiento del modelo (ver bono de mantenimiento)",
    "Ampliación a panel de monitorización a medida (dashboard propio)",
    "Integración con CCTV cableado ya instalado"
  ],
  tambienInstalaron: ["Cerradura inteligente", "Videoportero inteligente", "Red WiFi mesh (conexión estable, imprescindible para la IA)"]
};

// Packs combinados
const packs = [
  {
    nombre: "Pack Piso Nuevo",
    descripcion: "Ideal para estrenar piso o preparar un alquiler.",
    incluye: [
      "Cuadro eléctrico + boletín eléctrico (CIE)",
      "Red WiFi mesh + configuración",
      "Videoportero inteligente",
      "Iluminación LED (salón)"
    ],
    desde: 1105
  },
  {
    nombre: "Pack Chalet Seguro",
    descripcion: "Ideal para chalets y segundas residencias.",
    incluye: [
      "Sistema de seguridad con 4 cámaras IP + NVR (sin cuota mensual)",
      "Cerradura inteligente",
      "Videoportero inteligente"
    ],
    desde: 1500
  },
  {
    nombre: "Pack Negocio",
    descripcion: "Ideal para naves, almacenes, talleres y locales.",
    incluye: [
      "Cámaras con detección inteligente por IA (perímetro, 4 cámaras)",
      "Panel de monitorización a medida (dashboard propio)"
    ],
    desde: 2470,
    nota: "Ampliable con notificaciones WhatsApp y CCTV cableado adicional."
  }
];

const ventajas = [
  "Instalación profesional",
  "Material de primeras marcas",
  "Garantía en todas las instalaciones",
  "Domótica e Inteligencia Artificial — servicio exclusivo AHOMED"
];

const comoFunciona = [
  "Visita técnica gratuita en tu domicilio o negocio.",
  "Presupuesto cerrado con opción Básica, Recomendada y Premium.",
  "Tú eliges. Sin compromiso, sin letra pequeña."
];

const empresa = {
  nombre: "AHOMED",
  eslogan: "Soluciones integrales para el hogar",
  zona: "Madrid y alrededores",
  whatsapp: "671176482",
  whatsappDisplay: "671 176 482",
  web: "ahomed.com",
  email: "info@ahomed.com",
  anosExperiencia: "10 años"
};

module.exports = { services, iaService, packs, ventajas, comoFunciona, empresa };
