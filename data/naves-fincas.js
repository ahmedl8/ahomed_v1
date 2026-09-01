// Naves y Fincas — vertical de negocio, independiente de la Plataforma IA
// Predictiva residencial (bloque E). De los once modos de esa plataforma,
// solo Seguridad IA tiene sentido fuera de una vivienda: los otros diez
// (sueño, mascotas, niños y bebés, cocina, mayores, acceso a puerta/garaje...) son domésticos. Por eso
// Seguridad IA para Naves y Fincas vive aquí como producto propio, a escala
// perimetral/industrial, aunque reutiliza el mismo Mini-PC IA Central y el
// mismo motor Python que la plataforma residencial.

const seguridadIANaves = {
  slug: "seguridad-ia-naves-fincas",
  imagen: "/img/trabajos/fincas-seguridad-ia-despues.jpg",
  video: "/video/naves-fincas/seguridad-ia.mp4",
  numero: null,
  publico: "negocio",
  nombre: "Seguridad IA para Naves y Fincas",
  titular: "Vigilancia perimetral que descarta falsas alarmas por sí sola",
  subtitulo: "Detección de personas y vehículos a gran escala",
  icono: "ai",
  resumen:
    "El sistema aprende a distinguir personas y vehículos reales de falsas alarmas por fauna, vegetación o sombras. Pensado para el perímetro y los accesos de una nave, almacén o finca — no para el interior de una vivienda. Solo avisa por WhatsApp cuando de verdad importa.",
  idealPara: ["Naves industriales y almacenes", "Fincas rurales y agrícolas con vigilancia perimetral", "Talleres y locales con acceso de vehículos"],
  extras: ["Reentrenamiento del modelo (ver bono de mantenimiento)", "Ampliación a panel de monitorización a medida (dashboard propio)", "Integración con CCTV cableado ya instalado", "Cámaras térmicas perimetrales (reducen falsos positivos por fauna o vegetación)"],
  tambienInstalaron: [
    { texto: "Panel de monitorización a medida", href: "/servicios/ia-predictiva" },
    { texto: "Integración con iluminación de seguridad perimetral", href: "/servicios/electricidad-nave" },
    { texto: "Red de datos cableada para las cámaras", href: "/servicios/redes-nave" }
  ],
  esProyecto: true,
  ejemplos: [
    {
      titulo: "Nave industrial de 450 m²",
      subtitulo: "Cámaras IA para nave o almacén",
      imagen: "/img/trabajos/naves-seguridad-ia-despues.jpg",
      imagenAntes: "/img/trabajos/naves-seguridad-ia-antes.jpg",
      opciones: [
        {
          nombre: "Básica — perímetro con 4 cámaras",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_seguridad_hora", horas: 11.25, label: "Instalación y cableado (4 cámaras, nave de hasta 500 m²)" },
            { ref: "camara_ip_industrial_exterior", cantidad: 4, label: "4 cámaras IP con visión nocturna" },
            { ref: "config_deteccion_ia_industrial_persona_vehiculo" },
            { ref: "notificaciones_whatsapp_alarma_industrial" },
            { ref: "material_industrial_seguridad_60" }
          ]
        },
        {
          nombre: "Inteligente — 8 cámaras, cubre accesos y muelles ⭐",
          destacada: true,
          lineas: [
            { ref: "mo_industrial_seguridad_hora", horas: 19.5, label: "Instalación y cableado (8 cámaras)" },
            { ref: "camara_ip_industrial_exterior", cantidad: 8, label: "8 cámaras IP con visión nocturna" },
            { ref: "config_deteccion_ia_industrial_matricula" },
            { ref: "notificaciones_whatsapp_alarma_industrial" },
            { ref: "material_industrial_seguridad_90" }
          ]
        },
        {
          nombre: "Completa — con reanálisis de alarmas por IA",
          destacada: false,
          lineas: [
            { ref: "mo_industrial_seguridad_hora", horas: 23.75, label: "Instalación y cableado (8 cámaras + 2 térmicas perimetrales)" },
            { ref: "camara_ip_industrial_exterior", cantidad: 8, label: "8 cámaras IP con visión nocturna" },
            { ref: "camara_termica_perimetral", cantidad: 2, label: "2 cámaras térmicas para detección perimetral (reducen falsos positivos por fauna o vegetación)" },
            { ref: "config_deteccion_ia_industrial_matricula" },
            { ref: "reanalisis_ia_alarmas" },
            { ref: "notificaciones_whatsapp_alarma_industrial" },
            { ref: "material_industrial_seguridad_100" }
          ]
        }
      ]
    }
  ],
  nota:
    "Todas las opciones ya asumen que tienes instalado el Mini-PC IA Central (E1, desde 590 €, según nivel) — no incluyen un mini-PC de grabación aparte. Seguridad IA para naves con varias cámaras en paralelo suele pedir el nivel IA PRO (950 €). Cifras orientativas, a confirmar en visita técnica. ¿Es para una vivienda? Consulta Seguridad IA dentro de la Plataforma IA Predictiva."
};

module.exports = { seguridadIANaves };
