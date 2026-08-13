// Naves y Fincas — vertical de negocio, independiente de la Plataforma IA
// Predictiva residencial (bloque E). De los once modos de esa plataforma,
// solo Seguridad IA tiene sentido fuera de una vivienda: los otros diez
// (sueño, mascotas, niños y bebés, cocina, mayores, acceso a puerta/garaje...) son domésticos. Por eso
// Seguridad IA para Naves y Fincas vive aquí como producto propio, a escala
// perimetral/industrial, aunque reutiliza el mismo Mini-PC IA Central y el
// mismo motor Python que la plataforma residencial.

const seguridadIANaves = {
  slug: "seguridad-ia-naves-fincas",
  imagen: "/img/trabajos/naves-seguridad-ia-despues.jpg",
  numero: null,
  publico: "negocio",
  nombre: "Seguridad IA para Naves y Fincas",
  titular: "Vigilancia perimetral que descarta falsas alarmas por sí sola",
  subtitulo: "Detección de personas y vehículos a gran escala",
  icono: "ai",
  resumen:
    "El mini-PC central analiza un frame cada 1-2 segundos de cada cámara con YOLO26 y aprende a distinguir personas y vehículos reales de falsas alarmas por fauna, vegetación o sombras. Pensado para el perímetro y los accesos de una nave, almacén o finca — no para el interior de una vivienda. Solo avisa por WhatsApp cuando de verdad importa.",
  idealPara: ["Naves industriales y almacenes", "Fincas rurales y agrícolas con vigilancia perimetral", "Talleres y locales con acceso de vehículos"],
  extras: ["Reentrenamiento del modelo (ver bono de mantenimiento)", "Ampliación a panel de monitorización a medida (dashboard propio)", "Integración con CCTV cableado ya instalado", "Cámaras térmicas perimetrales (reducen falsos positivos por fauna o vegetación)"],
  tambienInstalaron: ["Panel de monitorización a medida", "Integración con iluminación de seguridad perimetral", "Red de datos cableada para las cámaras"],
  esProyecto: true,
  ejemplos: [
    {
      titulo: "Nave industrial de 450 m²",
      subtitulo: "Cámaras IA para nave o almacén",
      imagen: "/img/trabajos/naves-seguridad-ia-despues.jpg",
      imagenAntes: "/img/trabajos/naves-seguridad-ia-antes.jpg",
      opciones: [
        {
          nombre: "Esencial — perímetro con 4 cámaras",
          destacada: false,
          items: [
            ["Instalación y cableado (4 cámaras, nave de hasta 500 m²)", 450],
            ["4 cámaras IP con visión nocturna", 480],
            ["Configuración del modelo de detección IA (persona/vehículo, descarta falsos positivos)", 380],
            ["Notificaciones por WhatsApp ante alarma real", 90],
            ["Material y conectorizado", 60]
          ],
          total: 1460
        },
        {
          nombre: "Inteligente — 8 cámaras, cubre accesos y muelles",
          destacada: true,
          items: [
            ["Instalación y cableado (8 cámaras)", 780],
            ["8 cámaras IP con visión nocturna", 960],
            ["Configuración del modelo de detección IA (persona/vehículo/matrícula)", 480],
            ["Notificaciones por WhatsApp ante alarma real", 90],
            ["Material y conectorizado", 90]
          ],
          total: 2400
        },
        {
          nombre: "Completa — con reanálisis de alarmas por IA",
          destacada: false,
          items: [
            ["Instalación y cableado (8 cámaras + 2 térmicas perimetrales)", 950],
            ["8 cámaras IP con visión nocturna", 960],
            ["2 cámaras térmicas para detección perimetral (reducen falsos positivos por fauna o vegetación)", 2300],
            ["Configuración del modelo de detección IA (persona/vehículo/matrícula)", 480],
            ["Reanálisis automático de alarmas con IA (descarta falsos positivos antes de avisar)", 380],
            ["Notificaciones por WhatsApp ante alarma real", 90],
            ["Material y conectorizado", 100]
          ],
          total: 5260
        }
      ]
    }
  ],
  nota:
    "Todas las opciones ya asumen que tienes instalado el Mini-PC IA Central (950 €, obligatorio) — no incluyen un mini-PC de grabación aparte. Cifras orientativas, a confirmar en visita técnica. ¿Es para una vivienda? Consulta Seguridad IA dentro de la Plataforma IA Predictiva."
};

module.exports = { seguridadIANaves };
