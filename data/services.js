// Datos de servicios AHOMED — extraídos de "Guía de Servicios AHOMED 2026"
// Todos los precios son orientativos; se confirman tras visita técnica gratuita.

const services = [
  {
    slug: "electricidad",
    bloque: "instalaciones-base",
    heroImagen: "/img/hero-bloques/electricidad.jpg",
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
      cliente: "Vivienda con cuadro eléctrico antiguo, sin diferencial ni protección por circuitos.",
      imagen: "/img/trabajos/cuadro-electrico-despues.jpg",
      imagenAntes: "/img/trabajos/cuadro-electrico-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
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
          nombre: "Inteligente",
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
          nombre: "Completa",
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
    tambienInstalaron: ["Iluminación LED", "Red WiFi mesh", "Domótica básica", "Energía solar (autoconsumo)"],
    ejemplosAdicionales: [
      {
        titulo: "Punto de recarga para coche eléctrico (wallbox)",
        cliente: "Instalación de wallbox doméstica, desde el cuadro eléctrico hasta el garaje o plaza de parking",
        imagen: "/img/trabajos/wallbox-despues.jpg",
        opciones: [
          {
            nombre: "Esencial — wallbox 7,4 kW, instalación corta (hasta 5 m)",
            destacada: false,
            items: [
              ["Mano de obra e instalación (hasta 5 m desde el cuadro)", 280],
              ["Wallbox 7,4 kW monofásica", 480],
              ["Línea eléctrica dedicada + protecciones (magnetotérmico y diferencial)", 165],
              ["Material (canaleta, cableado)", 70]
            ],
            total: 995
          },
          {
            nombre: "Inteligente — wallbox conectada + gestión de carga ⭐",
            destacada: true,
            items: [
              ["Mano de obra e instalación (hasta 8 m)", 340],
              ["Wallbox 7,4 kW con conexión WiFi y app de control", 620],
              ["Línea eléctrica dedicada + protecciones", 165],
              ["Material", 85],
              ["Boletín eléctrico (CIE) de la nueva línea", 165]
            ],
            total: 1375
          },
          {
            nombre: "Completa — wallbox trifásica 22 kW + gestión dinámica de potencia",
            destacada: false,
            items: [
              ["Mano de obra e instalación (hasta 10 m, línea trifásica)", 420],
              ["Wallbox trifásica 22 kW con app y programación horaria", 1150],
              ["Línea eléctrica dedicada + protecciones reforzadas", 220],
              ["Gestor de carga dinámico (evita saltos del ICP si hay otros consumos altos)", 180],
              ["Material", 100],
              ["Boletín eléctrico (CIE)", 165]
            ],
            total: 2235
          }
        ],
        nota: "Si el cuadro eléctrico no tiene capacidad disponible o hay que llevar línea nueva desde el contador, se presupuesta aparte tras la visita técnica."
      }
    ]
  },
  {
    slug: "domotica",
    bloque: "instalaciones-base",
    heroImagen: "/img/hero-bloques/domotica.jpg",
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
      cliente: "Salón y cocina de un piso, con interruptores y enchufes convencionales.",
      imagen: "/img/trabajos/enchufes-despues.jpg",
      imagenAntes: "/img/trabajos/enchufes-antes.jpg",
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
      "Riego automático de jardín (desde 420 €)",
      "Toldo motorizado con control por app (desde 620 €)",
      "Automatización de piscina (desde 460 €)"
    ],
    tambienInstalaron: ["Persianas motorizadas", "Cerradura inteligente", "Red WiFi mesh con red de domótica separada", "Iluminación de exterior", "Placas solares (para autoabastecer el sistema de riego)"],
    ejemplosAdicionales: [
      {
        titulo: "Domótica completa de vivienda",
        cliente: "Control integral de luces, persianas, clima y escenas en todas las estancias, no solo una habitación",
      imagen: "/img/trabajos/persianas-despues.jpg",
      imagenAntes: "/img/trabajos/persianas-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — piso de 3 habitaciones",
            destacada: false,
            items: [
              ["Mano de obra (instalación y configuración, 3 hab. + salón + cocina)", 480],
              ["10 interruptores WiFi", 300],
              ["4 enchufes inteligentes", 80],
              ["Hub central de domótica", 150],
              ["Material eléctrico", 60]
            ],
            total: 1070
          },
          {
            nombre: "Inteligente — con persianas y escenas ⭐",
            destacada: true,
            items: [
              ["Mano de obra (instalación y configuración avanzada)", 620],
              ["10 interruptores WiFi", 300],
              ["4 enchufes inteligentes", 80],
              ["4 motores de persiana con control WiFi", 480],
              ["Hub central de domótica", 150],
              ["Configuración de escenas (\"buenas noches\", \"salir de casa\")", 120],
              ["Material", 70]
            ],
            total: 1820
          },
          {
            nombre: "Completa — control por voz + clima integrado",
            destacada: false,
            items: [
              ["Mano de obra (instalación y configuración completa)", 780],
              ["12 interruptores WiFi", 360],
              ["6 enchufes inteligentes", 120],
              ["5 motores de persiana con control WiFi", 600],
              ["Termostato inteligente integrado", 180],
              ["Hub central + altavoz de control por voz", 220],
              ["Configuración de escenas y automatizaciones por horario/presencia", 180],
              ["Material", 90]
            ],
            total: 2530
          }
        ],
        nota: "El alcance final depende del número de estancias y puntos de luz/persiana reales; se ajusta tras la visita técnica."
      },
      {
        titulo: "Persianas motorizadas",
        cliente: "Motorización de persianas existentes con control por app, mando o integración con domótica",
      imagen: "/img/trabajos/persianas-despues.jpg",
      imagenAntes: "/img/trabajos/persianas-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — 1 persiana, motor con mando",
            destacada: false,
            items: [
              ["Mano de obra (desmontaje persiana manual + instalación motor)", 120],
              ["Motor tubular con mando a distancia", 185],
              ["Material de fijación", 40]
            ],
            total: 345
          },
          {
            nombre: "Inteligente — 1 persiana con control WiFi ⭐",
            destacada: true,
            items: [
              ["Mano de obra", 140],
              ["Motor tubular con módulo WiFi y control por app", 280],
              ["Material de fijación", 45]
            ],
            total: 465
          },
          {
            nombre: "Completa — pack 4 persianas con escenas automáticas",
            destacada: false,
            items: [
              ["Mano de obra (4 persianas)", 480],
              ["4 motores tubulares con módulo WiFi", 1120],
              ["Configuración de escenas automáticas (apertura al amanecer, cierre por temperatura)", 150],
              ["Material de fijación", 120]
            ],
            total: 1870
          }
        ],
        nota: "Precio por persiana estándar (hasta 3 m² de superficie); persianas grandes o de material reforzado se valoran aparte."
      },
      {
        titulo: "Riego automático de jardín",
        cliente: "Sistema de riego programado por zonas, con control por app y sensor de lluvia",
      imagen: "/img/trabajos/riego-despues.jpg",
      imagenAntes: "/img/trabajos/riego-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — 2 zonas de riego",
            destacada: false,
            items: [
              ["Mano de obra e instalación (2 zonas, hasta 100 m²)", 220],
              ["Programador de riego con 2 electroválvulas", 180],
              ["Tubería, goteros/difusores y material de zanja", 100]
            ],
            total: 500
          },
          {
            nombre: "Inteligente — 4 zonas con control WiFi ⭐",
            destacada: true,
            items: [
              ["Mano de obra e instalación (4 zonas, hasta 250 m²)", 380],
              ["Programador de riego WiFi con 4 electroválvulas", 320],
              ["Sensor de lluvia (evita riego innecesario)", 60],
              ["Tubería, goteros/difusores y material de zanja", 180]
            ],
            total: 940
          },
          {
            nombre: "Completa — 6 zonas + sensor de humedad de suelo",
            destacada: false,
            items: [
              ["Mano de obra e instalación (6 zonas, hasta 500 m²)", 520],
              ["Programador de riego WiFi con 6 electroválvulas", 420],
              ["Sensor de lluvia y sensor de humedad de suelo", 150],
              ["Tubería, goteros/difusores y material de zanja", 260],
              ["Integración con domótica (escenas y automatizaciones)", 90]
            ],
            total: 1440
          }
        ],
        nota: "El precio depende de la superficie real de jardín y del tipo de riego (goteo, difusión o aspersión); se ajusta tras la visita técnica."
      },
      {
        titulo: "Toldo motorizado con control por app",
        cliente: "Terraza de 4 x 3 m",
      imagen: "/img/trabajos/toldo-despues.jpg",
      imagenAntes: "/img/trabajos/toldo-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — motorizado con mando",
            destacada: false,
            items: [
              ["Instalación y fijación (toldo de 4 x 3 m)", 180],
              ["Toldo con motor tubular y mando a distancia", 420],
              ["Material de fijación", 20]
            ],
            total: 620
          },
          {
            nombre: "Inteligente — con control por app ⭐",
            destacada: true,
            items: [
              ["Instalación y fijación", 200],
              ["Toldo con motor tubular WiFi", 520],
              ["Módulo de control por app", 60],
              ["Material de fijación", 25]
            ],
            total: 805
          },
          {
            nombre: "Completa — con sensor de viento y LED integrado",
            destacada: false,
            items: [
              ["Instalación y fijación", 220],
              ["Toldo con motor tubular WiFi", 520],
              ["Módulo de control por app", 60],
              ["Sensor de viento (cierre automático ante ráfagas fuertes)", 110],
              ["Tira LED integrada en el brazo del toldo", 80],
              ["Material de fijación", 30]
            ],
            total: 1020
          }
        ],
        nota: "El sensor de viento protege el toldo cerrándolo automáticamente antes de que una ráfaga fuerte pueda dañar la lona o los brazos."
      },
      {
        titulo: "Automatización de piscina (filtración, luz y monitorización)",
        cliente: "Piscina de vivienda unifamiliar",
      imagen: "/img/trabajos/piscina-despues.jpg",
      imagenAntes: "/img/trabajos/piscina-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — programador de filtración",
            destacada: false,
            items: [
              ["Instalación y conexionado eléctrico", 180],
              ["Programador WiFi para bomba de filtración", 220],
              ["Material y protección eléctrica (caja estanca)", 60]
            ],
            total: 460
          },
          {
            nombre: "Inteligente — filtración + iluminación LED ⭐",
            destacada: true,
            items: [
              ["Instalación y conexionado eléctrico", 220],
              ["Programador WiFi para bomba de filtración", 220],
              ["Foco LED de piscina RGB con control por app", 180],
              ["Material y protección eléctrica", 70]
            ],
            total: 690
          },
          {
            nombre: "Completa — con sonda de calidad del agua",
            destacada: false,
            items: [
              ["Instalación y conexionado eléctrico", 260],
              ["Programador WiFi para bomba de filtración", 220],
              ["Foco LED de piscina RGB con control por app", 180],
              ["Sonda de pH y cloro con monitorización desde el móvil", 340],
              ["Material y protección eléctrica", 80]
            ],
            total: 1080
          }
        ],
        nota: "La sonda de calidad del agua avisa por app cuando el pH o el nivel de cloro se salen del rango recomendado, antes de que el agua se vea afectada."
      }
    ]
  },
  {
    slug: "energia-solar",
    bloque: "energia",
    heroImagen: "/img/hero-bloques/energia-solar.jpg",
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
      cliente: "Piso con terraza orientada al sur, sin instalación solar previa.",
      imagen: "/img/ia-predictiva/gestion-energia.jpg",
      opciones: [
        {
          nombre: "Esencial",
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
          nombre: "Inteligente",
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
          nombre: "Completa — con batería portátil",
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
    tambienInstalaron: ["Panel de monitorización a medida", "Punto de recarga para coche eléctrico", "Batería portátil adicional"],
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
            items: [
              ["Instalación, estructura de tejado y cableado", 780],
              ["4 paneles solares 400 W (1.600 W total)", 560],
              ["Inversor 1.600 W", 480],
              ["Estructura de fijación para tejado", 310],
              ["Legalización (memoria técnica, si aplica según potencia)", 350],
              ["Material y protecciones", 350]
            ],
            total: 2830
          },
          {
            nombre: "Inteligente — 6 paneles (2.400 W) + monitorización ⭐",
            destacada: true,
            items: [
              ["Instalación, estructura de tejado y cableado", 980],
              ["6 paneles solares 400 W (2.400 W total)", 840],
              ["Inversor 2.400 W con monitorización por app", 650],
              ["Estructura de fijación para tejado", 420],
              ["Legalización (memoria técnica)", 350],
              ["Material y protecciones", 420]
            ],
            total: 3660
          },
          {
            nombre: "Completa — 8 paneles (3.200 W) + batería",
            destacada: false,
            items: [
              ["Instalación, estructura de tejado y cableado", 1180],
              ["8 paneles solares 400 W (3.200 W total)", 1120],
              ["Inversor 3.200 W con monitorización por app", 780],
              ["Batería de almacenamiento 5 kWh", 2400],
              ["Estructura de fijación para tejado", 520],
              ["Legalización (memoria técnica) y alta como productor si hay excedentes", 480],
              ["Material y protecciones", 500]
            ],
            total: 6980
          }
        ],
        nota: "Instalaciones con vertido de excedentes a red requieren alta como productor ante la compañía eléctrica; se gestiona como parte de la legalización. El número de paneles y orientación óptima se confirma con la visita técnica y el estudio de sombras."
      }
    ]
  },
  {
    slug: "seguridad",
    bloque: "seguridad-accesos",
    heroImagen: "/img/hero-bloques/seguridad.jpg",
    numero: 4,
    nombre: "Seguridad",
    icono: "shield",
    resumen: "Cámaras, alarmas, videoportero y cerraduras inteligentes. Graba en local, sin cuota mensual — para que además interprete lo que ve y avise por WhatsApp, añade Seguridad IA. Equipo propiedad del cliente desde el primer día.",
    tiempo: "Trabajo rápido",
    desde: 120,
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
          nombre: "Esencial — inalámbrico, sin obra",
          destacada: false,
          items: [
            ["Instalación y configuración", 45],
            ["Videoportero WiFi a batería con app", 90],
            ["Material", 10]
          ],
          total: 145
        },
        {
          nombre: "Inteligente — sobre cableado existente (2 hilos)",
          destacada: true,
          items: [
            ["Instalación y configuración", 75],
            ["Videoportero 2 hilos con cámara y monitor interior", 145],
            ["Material", 15]
          ],
          total: 235
        },
        {
          nombre: "Completa — sistema IP con apertura remota",
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
      "Grabación en mini-PC local (CCTV cableado, desde 840 €)"
    ],
    tambienInstalaron: ["Cerradura inteligente", "Cámara WiFi adicional", "Sistema de seguridad completo para chalet", "Detección YOLO + Alertas WhatsApp", "Red WiFi mesh", "Panel de monitorización a medida"],
    ejemplosAdicionales: [
      {
        titulo: "Cerradura inteligente",
        cliente: "Apertura por app, huella, tarjeta o código, manteniendo la llave física como respaldo",
      imagen: "/img/trabajos/cerradura-despues.jpg",
      imagenAntes: "/img/trabajos/cerradura-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — cerradura con teclado y app",
            destacada: false,
            items: [
              ["Instalación y configuración", 80],
              ["Cerradura inteligente con teclado numérico + app", 195],
              ["Material", 15]
            ],
            total: 290
          },
          {
            nombre: "Inteligente — con huella digital ⭐",
            destacada: true,
            items: [
              ["Instalación y configuración", 90],
              ["Cerradura inteligente con huella, teclado y app", 310],
              ["Material", 20]
            ],
            total: 420
          },
          {
            nombre: "Completa — integrada con videoportero y accesos temporales",
            destacada: false,
            items: [
              ["Instalación y configuración avanzada", 110],
              ["Cerradura inteligente con huella, teclado, app y NFC", 380],
              ["Integración con videoportero (apertura remota desde la app del portero)", 90],
              ["Configuración de accesos temporales (códigos de un solo uso para huéspedes/limpieza)", 60],
              ["Material", 25]
            ],
            total: 665
          }
        ],
        nota: "Compatible con la mayoría de puertas europeas estándar; en puertas acorazadas o con cerradura especial se valora aparte tras revisión."
      },
      {
        titulo: "Videovigilancia CCTV",
        cliente: "Cámaras PoE cableadas (más fiables que WiFi) con grabación local, sin cuota mensual. Solo graba: si además quieres que la cámara entienda lo que ve y te avise por WhatsApp, mira Seguridad IA.",
      imagen: "/img/trabajos/camara-exterior-despues.jpg",
      imagenAntes: "/img/trabajos/camara-exterior-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — 4 cámaras cableadas",
            destacada: false,
            items: [
              ["Instalación y cableado (4 cámaras, hasta 30 m de tirada por cámara)", 380],
              ["4 cámaras IP cableadas con visión nocturna", 340],
              ["Mini-PC de grabación (NVR) con disco duro", 220],
              ["Material y conectorizado", 80]
            ],
            total: 1020
          },
          {
            nombre: "Inteligente — 6 cámaras + acceso remoto ⭐",
            destacada: true,
            items: [
              ["Instalación y cableado (6 cámaras)", 540],
              ["6 cámaras IP cableadas con visión nocturna", 510],
              ["Mini-PC de grabación con disco duro ampliado", 320],
              ["Configuración de acceso remoto por app", 90],
              ["Material y conectorizado", 110]
            ],
            total: 1570
          },
          {
            nombre: "Completa — 8 cámaras + detección IA",
            destacada: false,
            items: [
              ["Instalación y cableado (8 cámaras)", 720],
              ["8 cámaras IP cableadas con visión nocturna", 680],
              ["Mini-PC de grabación con disco duro ampliado", 320],
              ["Configuración de detección IA (persona/vehículo)", 380],
              ["Notificaciones por WhatsApp ante alarma real", 90],
              ["Material y conectorizado", 140]
            ],
            total: 2330
          }
        ],
        nota: "El precio depende de la distancia real de cableado entre cámaras y el punto de grabación; se confirma en la visita técnica."
      }
    ]
  },
  {
    slug: "redes-informatica",
    bloque: "instalaciones-base",
    heroImagen: "/img/hero-bloques/redes-informatica.jpg",
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
      cliente: "Piso con router de la operadora y cobertura WiFi irregular por estancias.",
      imagen: "/img/trabajos/rack-comunicaciones-despues.jpg",
      imagenAntes: "/img/trabajos/rack-comunicaciones-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
          destacada: false,
          items: [
            ["Instalación y configuración", 60],
            ["Sistema WiFi mesh (2 puntos)", 140],
            ["Material", 10]
          ],
          total: 210
        },
        {
          nombre: "Inteligente — con redes separadas",
          destacada: true,
          items: [
            ["Instalación y configuración avanzada (red de invitados y red de domótica separadas)", 85],
            ["Sistema WiFi mesh (3 puntos)", 210],
            ["Material", 15]
          ],
          total: 310
        },
        {
          nombre: "Completa — con copia de seguridad automática",
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
    extras: [
      "Ampliación de puntos mesh adicionales",
      "Red separada para domótica/IA",
      "Copia de seguridad automática",
      "Armario de comunicaciones y rack de red (desde 380 €)"
    ],
    tambienInstalaron: ["Domótica", "Cámaras con IA", "Panel de monitorización a medida"],
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
            items: [
              ["Instalación de armario y orden de cableado existente", 140],
              ["Armario de comunicaciones compacto (superficie)", 110],
              ["Switch de 8 puertos", 45],
              ["Material y regletas de conexión", 25]
            ],
            total: 320
          },
          {
            nombre: "Inteligente — rack empotrado + 4 tomas nuevas ⭐",
            destacada: true,
            items: [
              ["Instalación de armario empotrado y cableado a 4 tomas", 260],
              ["Armario de comunicaciones empotrado con rack", 160],
              ["Switch gestionable de 8 puertos", 70],
              ["Cable de red y 4 tomas RJ45", 100],
              ["Material y regletas de conexión", 30]
            ],
            total: 620
          },
          {
            nombre: "Completa — con ONT, patch panel y router en rack",
            destacada: false,
            items: [
              ["Instalación de armario empotrado y cableado a 6 tomas", 320],
              ["Armario de comunicaciones empotrado con rack", 160],
              ["Patch panel de 12 puertos", 65],
              ["Switch gestionable de 8 puertos", 70],
              ["Cable de red y 6 tomas RJ45", 140],
              ["Reubicación de ONT y router dentro del rack", 55],
              ["Material y regletas de conexión", 35]
            ],
            total: 845
          }
        ],
        nota: "Centralizar ONT, router y switch en un único armario facilita el mantenimiento y evita que el router quede a la vista en el salón."
      }
    ]
  },
  {
    slug: "climatizacion",
    bloque: "instalaciones-base",
    heroImagen: "/img/hero-bloques/climatizacion.jpg",
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
      cliente: "Dormitorio sin climatización, con ventana orientada al oeste.",
      imagen: "/img/trabajos/aire-acondicionado-despues.jpg",
      imagenAntes: "/img/trabajos/aire-acondicionado-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
          destacada: false,
          items: [
            ["Mano de obra e instalación (hasta 3 m de distancia)", 220],
            ["Split 1x1 2.500 frigorías (gama básica)", 380],
            ["Material (tubería, soportes, canaleta)", 40]
          ],
          total: 640
        },
        {
          nombre: "Inteligente",
          destacada: true,
          items: [
            ["Mano de obra e instalación", 250],
            ["Split 1x1 3.000 frigorías (gama media, Daikin/Mitsubishi)", 650],
            ["Material", 45]
          ],
          total: 945
        },
        {
          nombre: "Completa — alta eficiencia con WiFi",
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
    tambienInstalaron: ["Domótica (control por escenas)", "Iluminación LED", "Energía solar (para compensar el consumo)"],
    ejemplosAdicionales: [
      {
        titulo: "Climatización multisplit para toda la vivienda",
        cliente: "Una sola unidad exterior dando servicio a varias estancias, con control independiente por habitación",
      imagen: "/img/trabajos/climatizacion-multisplit-despues.jpg",
        opciones: [
          {
            nombre: "Esencial — multisplit 2x1 (2 estancias)",
            destacada: false,
            items: [
              ["Mano de obra e instalación (unidad exterior + 2 interiores)", 620],
              ["Unidad exterior 2x1 (gama básica)", 780],
              ["2 unidades interiores 2.500 frigorías", 760],
              ["Material (tubería, soportes, canaleta)", 160],
              ["Certificado RITE", 60]
            ],
            total: 2380
          },
          {
            nombre: "Inteligente — multisplit 3x1 (3 estancias) ⭐",
            destacada: true,
            items: [
              ["Mano de obra e instalación (unidad exterior + 3 interiores)", 850],
              ["Unidad exterior 3x1 (gama media, Daikin/Mitsubishi)", 1180],
              ["3 unidades interiores 2.500-3.000 frigorías", 1320],
              ["Material", 220],
              ["Certificado RITE", 60]
            ],
            total: 3630
          },
          {
            nombre: "Completa — multisplit 4x1 con control WiFi por zona",
            destacada: false,
            items: [
              ["Mano de obra e instalación (unidad exterior + 4 interiores)", 1080],
              ["Unidad exterior 4x1 alta eficiencia (A+++)", 1850],
              ["4 unidades interiores 3.000 frigorías con control WiFi", 1980],
              ["Material", 280],
              ["Certificado RITE", 60]
            ],
            total: 5250
          }
        ],
        nota: "El presupuesto final depende del número de estancias, distancias entre unidad exterior e interiores, y accesibilidad de la fachada. La opción Completa usa equipo A+++ de gama alta con control WiFi por zona; se recomienda confirmar el margen con el proveedor de equipos antes de publicitar el precio cerrado."
      }
    ]
  },
  {
    slug: "antenas",
    bloque: "instalaciones-base",
    heroImagen: "/img/hero-bloques/antenas.jpg",
    numero: 7,
    nombre: "Antenas",
    icono: "antenna",
    resumen: "TV por satélite y TDT, para una vivienda o para una comunidad completa.",
    tiempo: "Trabajo rápido",
    desde: 150,
    idealPara: ["Viviendas sin señal de TV o antena antigua", "Comunidades de propietarios (instalación colectiva)"],
    ejemplo: {
      titulo: "Antena parabólica + toma de TV",
      cliente: "Vivienda sin señal de televisión o con antena antigua deteriorada.",
      imagen: "/img/trabajos/antenas-despues.jpg",
      opciones: [
        {
          nombre: "Esencial — 1 toma de TV",
          destacada: false,
          items: [
            ["Instalación, orientación y configuración", 70],
            ["Antena parabólica 60 cm con LNB universal", 55],
            ["Soporte y cableado", 25]
          ],
          total: 150
        },
        {
          nombre: "Inteligente — señal a varias TVs (hasta 3 tomas)",
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
    tambienInstalaron: ["Red WiFi mesh", "Instalación eléctrica de la vivienda", "Antena parabólica individual", "Red WiFi mesh comunitaria", "Videoportero para el portal"],
    ejemplosAdicionales: [
      {
        titulo: "Antena TDT comunitaria de edificio",
        cliente: "Instalación colectiva de recepción TDT para todo un edificio o comunidad de propietarios",
        imagen: "/img/trabajos/antena-tdt-comunitaria-despues.jpg",
        opciones: [
          {
            nombre: "Esencial — hasta 8 viviendas",
            destacada: false,
            items: [
              ["Mano de obra (instalación en cubierta y revisión de bajantes)", 320],
              ["Antena TDT de alta ganancia", 180],
              ["Central amplificadora multibanda", 220],
              ["Material y conectorizado", 140]
            ],
            total: 860
          },
          {
            nombre: "Inteligente — hasta 15 viviendas, con refuerzo de señal ⭐",
            destacada: true,
            items: [
              ["Mano de obra (instalación y revisión completa de bajantes)", 420],
              ["Antena TDT de alta ganancia", 180],
              ["Central amplificadora multibanda de mayor potencia", 320],
              ["Repartidores y refuerzo en plantas intermedias", 180],
              ["Material y conectorizado", 180]
            ],
            total: 1280
          },
          {
            nombre: "Completa — más de 15 viviendas, con certificado de instalación",
            destacada: false,
            items: [
              ["Mano de obra (instalación y revisión completa)", 560],
              ["Antena TDT de alta ganancia + antena satélite comunitaria", 420],
              ["Central amplificadora multibanda de mayor potencia", 320],
              ["Repartidores y refuerzo en todas las plantas", 260],
              ["Certificado de instalación para la comunidad", 120],
              ["Material y conectorizado", 220]
            ],
            total: 1900
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
      cliente: "Baño con azulejo y pintura deteriorados, previo a la venta del piso.",
      imagen: "/img/trabajos/bano-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/bano-reforma-antes.jpg",
      opciones: [
        {
          nombre: "Esencial",
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
          nombre: "Inteligente",
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
      "Montaje de cocina modular (desde 395 €)",
      "Reforma integral de cocina (desde 3.200 €)"
    ],
    tambienInstalaron: ["Sustitución de sanitarios y grifería", "Falso techo de pladur con LED", "Fontanería (grifería y sanitarios)", "Electricidad (nuevos circuitos para electrodomésticos)"],
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
            items: [
              ["Mano de obra (paredes y techos, 80 m² aprox.)", 620],
              ["Pintura plástica lisa (blanco o color único)", 280],
              ["Material (cinta, plásticos protectores, masilla)", 70]
            ],
            total: 970
          },
          {
            nombre: "Inteligente — con reparación de grietas y varios colores ⭐",
            destacada: true,
            items: [
              ["Mano de obra (paredes y techos, incluye preparación de superficie)", 760],
              ["Pintura plástica lisa, hasta 3 colores distintos por estancia", 320],
              ["Reparación de grietas y desconchones puntuales", 150],
              ["Material", 90]
            ],
            total: 1320
          },
          {
            nombre: "Completa — pintura antihumedad + techos con acabado especial",
            destacada: false,
            items: [
              ["Mano de obra completa (paredes, techos y reparaciones)", 920],
              ["Pintura plástica antihumedad en baños y cocina", 180],
              ["Pintura lisa gama media en el resto de estancias", 320],
              ["Reparación de grietas y desconchones", 180],
              ["Acabado especial en techos (plano de luz, mate profesional)", 150],
              ["Material", 110]
            ],
            total: 1860
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
            items: [
              ["Mano de obra (retirada de azulejo antiguo + alicatado, 12 m²)", 420],
              ["Azulejo básico (12 m²)", 180],
              ["Material de agarre y juntas", 70]
            ],
            total: 670
          },
          {
            nombre: "Inteligente — con rodapié y juntas antimoho ⭐",
            destacada: true,
            items: [
              ["Mano de obra (retirada + alicatado, 12 m²)", 480],
              ["Azulejo de gama media (12 m²)", 260],
              ["Rodapié cerámico", 50],
              ["Sellado de juntas con silicona antimoho", 40],
              ["Material", 80]
            ],
            total: 910
          },
          {
            nombre: "Completa — con nivelación de suelo y azulejo gran formato",
            destacada: false,
            items: [
              ["Mano de obra (retirada, nivelación y alicatado, 12 m²)", 580],
              ["Azulejo gran formato, gama alta (12 m²)", 420],
              ["Nivelación de suelo antes del alicatado", 150],
              ["Rodapié y perfiles de acabado", 80],
              ["Sellado de juntas con silicona antimoho", 40],
              ["Material", 100]
            ],
            total: 1370
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
            items: [
              ["Mano de obra (montaje de muebles bajos y altos)", 280],
              ["Material de fijación y nivelación", 45],
              ["Ajuste de puertas y cajones", 70]
            ],
            total: 395
          },
          {
            nombre: "Inteligente — con encimera y conexión de fregadero ⭐",
            destacada: true,
            items: [
              ["Mano de obra (montaje completo)", 340],
              ["Colocación e instalación de encimera", 130],
              ["Conexión de fregadero (grifo y desagüe)", 90],
              ["Material de fijación y sellado", 60]
            ],
            total: 620
          },
          {
            nombre: "Completa — con instalación de electrodomésticos",
            destacada: false,
            items: [
              ["Mano de obra (montaje completo)", 380],
              ["Colocación e instalación de encimera", 130],
              ["Conexión de fregadero", 90],
              ["Instalación de placa de inducción/vitro y horno (conexión eléctrica)", 160],
              ["Instalación de campana extractora", 110],
              ["Material de fijación y sellado", 70]
            ],
            total: 940
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
            items: [
              ["Mano de obra (desmontaje, instalación de muebles y encimera)", 780],
              ["Muebles de cocina, gama básica (9 m²)", 1400],
              ["Encimera laminada", 320],
              ["Fontanería y electricidad (adaptación de puntos existentes)", 380],
              ["Material y remates", 120]
            ],
            total: 3000
          },
          {
            nombre: "Inteligente — con cambio de distribución e isla ⭐",
            destacada: true,
            items: [
              ["Mano de obra (demolición parcial, nueva distribución, isla)", 1350],
              ["Muebles de cocina, gama media (9 m²) + isla central", 2200],
              ["Encimera de cuarzo compacto", 620],
              ["Fontanería y electricidad (nuevos puntos para isla)", 650],
              ["Iluminación LED integrada", 220],
              ["Material y remates", 180]
            ],
            total: 5220
          },
          {
            nombre: "Completa — con electrodomésticos integrados",
            destacada: false,
            items: [
              ["Mano de obra (demolición parcial, nueva distribución, isla)", 1450],
              ["Muebles de cocina, gama media-alta (9 m²) + isla central", 2600],
              ["Encimera de cuarzo compacto", 620],
              ["Electrodomésticos integrados (horno, placa, campana, frigorífico)", 2100],
              ["Fontanería y electricidad (nuevos puntos para isla)", 650],
              ["Iluminación LED integrada", 220],
              ["Material y remates", 200]
            ],
            total: 7840
          }
        ],
        nota: "El cambio de distribución (mover fontanería o electricidad de sitio) requiere visita técnica previa para confirmar la viabilidad según la instalación existente del edificio."
      }
    ]
  },
  {
    slug: "fontaneria",
    bloque: "reformas",
    heroImagen: "/img/hero-bloques/fontaneria.jpg",
    numero: 9,
    nombre: "Fontanería",
    icono: "plumbing",
    resumen: "Grifería, sanitarios y reparación de fugas.",
    tiempo: "Media jornada",
    desde: 145,
    idealPara: ["Baños que necesitan actualizar grifería o inodoro", "Fugas de agua detectadas o sospechadas"],
    ejemplo: {
      titulo: "Sustitución de sanitarios y grifería de baño",
      cliente: "Baño con sanitarios y grifería antiguos, con fugas puntuales.",
      imagen: "/img/trabajos/bano-reforma-despues.jpg",
      imagenAntes: "/img/trabajos/bano-reforma-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — grifería",
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
          nombre: "Inteligente — grifería + inodoro",
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
          nombre: "Completa — baño completo (sin obra de alicatado)",
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
    bloque: "reformas",
    heroImagen: "/img/hero-bloques/pladur.jpg",
    numero: 10,
    nombre: "Pladur",
    icono: "pladur",
    resumen: "Tabiques y falsos techos, con opción de iluminación LED integrada.",
    tiempo: "Un día",
    desde: 435,
    idealPara: ["Dividir una habitación", "Salones que quieren un techo con iluminación indirecta"],
    ejemplo: {
      titulo: "Falso techo de pladur con iluminación empotrada (salón, 18 m²)",
      cliente: "Salón sin iluminación indirecta, con techo liso convencional.",
      imagen: "/img/trabajos/pladur-techo-despues.jpg",
      opciones: [
        {
          nombre: "Esencial — techo liso",
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
          nombre: "Inteligente — con foseado perimetral para LED",
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
          nombre: "Completa — con downlights y regulación por app",
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
    tambienInstalaron: ["Iluminación LED", "Domótica de escenas", "Pintura de piso completo", "Electricidad (nuevos puntos de luz)"],
    ejemplosAdicionales: [
      {
        titulo: "Tabique de pladur",
        cliente: "División de una estancia o cerramiento con tabique de pladur, con o sin aislamiento acústico",
      imagen: "/img/trabajos/reforma-general-despues.jpg",
      imagenAntes: "/img/trabajos/reforma-general-antes.jpg",
        opciones: [
          {
            nombre: "Esencial — tabique simple, 10 m²",
            destacada: false,
            items: [
              ["Mano de obra (estructura y placas, 10 m²)", 240],
              ["Placas de pladur (10 m², una cara doble)", 130],
              ["Perfilería y tornillería", 40],
              ["Masilla y cinta de juntas", 25]
            ],
            total: 435
          },
          {
            nombre: "Inteligente — con aislamiento acústico ⭐",
            destacada: true,
            items: [
              ["Mano de obra (estructura y placas, 10 m²)", 280],
              ["Placas de pladur (10 m²)", 130],
              ["Lana de roca para aislamiento acústico", 80],
              ["Perfilería y tornillería", 45],
              ["Masilla y cinta de juntas", 25]
            ],
            total: 560
          },
          {
            nombre: "Completa — con puerta integrada y acabado listo para pintar",
            destacada: false,
            items: [
              ["Mano de obra (estructura, placas y hueco de puerta, 10 m²)", 340],
              ["Placas de pladur (10 m²)", 130],
              ["Lana de roca para aislamiento acústico", 80],
              ["Precerco de puerta", 90],
              ["Perfilería y tornillería", 50],
              ["Masilla, cinta de juntas y lijado fino (listo para pintar)", 55]
            ],
            total: 745
          }
        ],
        nota: "El cableado eléctrico dentro del tabique (si hace falta pasar algún punto de luz o enchufe) se presupuesta aparte."
      }
    ]
  },
  {
    slug: "mantenimiento",
    bloque: "mantenimiento",
    heroImagen: "/img/hero-bloques/mantenimiento.jpg",
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
  }
];

// Packs combinados
const packs = [
  {
    nombre: "Pack Piso Nuevo",
    slug: "piso-nuevo",
    descripcion: "Ideal para estrenar piso o preparar un alquiler. Todo lo que necesitas para que funcione desde el primer día.",
    imagen: "/img/trabajos/cuadro-electrico-despues.jpg",
    imagenAntes: "/img/trabajos/cuadro-electrico-antes.jpg",
    imagenAlt: "Cuadro eléctrico renovado — Pack Piso Nuevo AHOMED",
    opciones: [
      {
        nombre: "Esencial",
        destacada: false,
        items: [
          ["Cuadro eléctrico nuevo + boletín eléctrico (CIE)", 520],
          ["Red WiFi mesh 2 puntos de acceso + configuración", 285],
          ["Videoportero inteligente (instalación incluida)", 300]
        ],
        total: 1105
      },
      {
        nombre: "Inteligente — con domótica y LED ⭐",
        destacada: true,
        items: [
          ["Cuadro eléctrico nuevo + boletín eléctrico (CIE)", 520],
          ["Red WiFi mesh 3 puntos de acceso + configuración", 380],
          ["Videoportero inteligente (instalación incluida)", 300],
          ["Iluminación LED en salón y pasillo (8 puntos de luz)", 280],
          ["2 interruptores WiFi para control desde el móvil", 80]
        ],
        total: 1560
      },
      {
        nombre: "Completa — con cerradura y cámara exterior",
        destacada: false,
        items: [
          ["Cuadro eléctrico nuevo + boletín eléctrico (CIE)", 520],
          ["Red WiFi mesh 3 puntos de acceso + configuración", 380],
          ["Videoportero inteligente", 300],
          ["Iluminación LED en salón y pasillo", 280],
          ["Cerradura inteligente con huella digital y app", 420],
          ["Cámara IP exterior (entrada/puerta principal)", 280]
        ],
        total: 2180
      }
    ],
    nota: "Precio orientativo; se ajusta tras la visita técnica gratuita según el estado del cuadro actual y la superficie de la vivienda."
  },
  {
    nombre: "Pack Chalet Seguro",
    slug: "chalet-seguro",
    descripcion: "Ideal para chalets y segundas residencias. Tranquilidad total: sabrás en todo momento lo que pasa en tu propiedad.",
    imagen: "/img/trabajos/camara-exterior-despues.jpg",
    imagenAntes: "/img/trabajos/camara-exterior-antes.jpg",
    imagenAlt: "Cámara IP exterior instalada — Pack Chalet Seguro AHOMED",
    opciones: [
      {
        nombre: "Esencial — 4 cámaras + cerradura",
        destacada: false,
        items: [
          ["4 cámaras IP cableadas con visión nocturna", 340],
          ["Instalación y cableado (4 cámaras)", 380],
          ["Mini-PC de grabación con disco duro (sin cuota mensual)", 220],
          ["Cerradura inteligente con teclado y app", 290],
          ["Videoportero inteligente (instalación incluida)", 300]
        ],
        total: 1530
      },
      {
        nombre: "Inteligente — con detección de movimiento y alertas ⭐",
        destacada: true,
        items: [
          ["6 cámaras IP cableadas con visión nocturna", 510],
          ["Instalación y cableado (6 cámaras)", 540],
          ["Mini-PC de grabación con disco duro ampliado", 320],
          ["Cerradura inteligente con huella digital y app", 420],
          ["Videoportero inteligente", 300],
          ["Configuración de acceso remoto y alertas de movimiento", 90]
        ],
        total: 2180
      },
      {
        nombre: "Completa — con IA local: alertas solo cuando importa",
        destacada: false,
        items: [
          ["6 cámaras IP cableadas con visión nocturna", 510],
          ["Instalación y cableado (6 cámaras)", 540],
          ["Mini-PC con IA local (detección de personas y vehículos, descarta falsas alarmas)", 680],
          ["Cerradura inteligente con huella digital y app", 420],
          ["Videoportero inteligente", 300],
          ["Alertas por WhatsApp con imagen del momento", 150]
        ],
        total: 2600
      }
    ],
    nota: "Sin cuota mensual ni contrato con central de alarmas. El sistema funciona de forma autónoma en tu propiedad."
  },
  {
    nombre: "Pack Negocio",
    slug: "negocio",
    incluyeIA: true,
    descripcion: "Ideal para naves, almacenes, talleres y locales. IA que descarta falsas alarmas y te avisa por WhatsApp solo cuando hay algo real.",
    imagen: "/img/trabajos/naves-seguridad-ia-despues.jpg",
    imagenAntes: "/img/trabajos/naves-seguridad-ia-antes.jpg",
    imagenAlt: "Seguridad con IA en nave industrial — Pack Negocio AHOMED",
    opciones: [
      {
        nombre: "Esencial — 4 cámaras con detección IA",
        destacada: false,
        items: [
          ["4 cámaras IP (perímetro y accesos)", 340],
          ["Instalación y cableado", 380],
          ["Mini-PC con IA local (detección de personas y vehículos)", 480],
          ["Configuración de alertas por WhatsApp con imagen del momento", 150],
          ["Zonas de detección personalizadas (horario de negocio vs. fuera de horario)", 120]
        ],
        total: 1470
      },
      {
        nombre: "Inteligente — 6 cámaras + dashboard ⭐",
        destacada: true,
        items: [
          ["6 cámaras IP (perímetro, accesos y zona de carga)", 510],
          ["Instalación y cableado (6 cámaras)", 540],
          ["Mini-PC con IA local de mayor potencia", 680],
          ["Configuración de alertas por WhatsApp", 150],
          ["Panel de monitorización a medida (dashboard propio en navegador)", 380],
          ["Zonas de detección personalizadas y horarios", 150]
        ],
        total: 2410
      },
      {
        nombre: "Completa — 8 cámaras + CCTV cableado + IA avanzada",
        destacada: false,
        items: [
          ["8 cámaras IP (cobertura total del perímetro)", 680],
          ["Instalación y cableado (8 cámaras)", 720],
          ["Mini-PC con IA avanzada (detección de placas, reconocimiento de vehículos recurrentes)", 950],
          ["Panel de monitorización a medida", 380],
          ["Alertas WhatsApp por tipo de evento (persona / vehículo / acceso fuera de horario)", 200],
          ["Integración con sistema de iluminación de seguridad perimetral", 280]
        ],
        total: 3210
      }
    ],
    nota: "Ampliable con CCTV cableado adicional, integración con acceso de empleados o control de presencia. Sin cuota mensual."
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
  "Presupuesto cerrado con opción Esencial, Inteligente y Completa.",
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
  anosExperiencia: "10 años",
  metaDescriptionDefault:
    "AHOMED — Soluciones integrales para el hogar. Electricidad, domótica, seguridad con IA, energía solar, climatización y reformas en Madrid y alrededores. Primera visita gratuita."
};

module.exports = { services, packs, ventajas, comoFunciona, empresa };
