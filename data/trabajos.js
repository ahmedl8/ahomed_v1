// Fotos reales de instalaciones y reformas de AHOMED, en /img/trabajos/.
const trabajos = [
  {
    slug: "cocina-reforma",
    imagen: "/img/trabajos/cocina-reforma-despues.jpg",
    imagenAntes: "/img/trabajos/cocina-reforma-antes.jpg",
    titulo: "Reforma integral de cocina",
    categoria: "Reparaciones y reformas",
    descripcion: "Cocina completamente renovada: armarios nuevos, encimera, electrodomésticos integrados e iluminación LED. Cambiamos la distribución para ganar una isla central con zona de desayuno."
  },
  {
    slug: "naves-seguridad-ia",
    imagen: "/img/trabajos/naves-seguridad-ia-despues.jpg",
    imagenAntes: "/img/trabajos/naves-seguridad-ia-antes.jpg",
    titulo: "Seguridad con IA en nave industrial",
    categoria: "IA y Monitorización Inteligente",
    descripcion: "Cámara PTZ con IA, foco de seguridad e iluminación perimetral en el acceso a una nave industrial. El sistema detecta personas y vehículos y avisa por WhatsApp en tiempo real, descartando falsas alarmas."
  },
  {
    slug: "solar-tejado",
    imagen: "/img/trabajos/solar-tejado-despues.jpg",
    imagenAntes: "/img/trabajos/solar-tejado-antes.jpg",
    titulo: "Placas solares en tejado",
    categoria: "Energía solar",
    descripcion: "Placas solares instaladas sobre tejado de teja cerámica para autoconsumo, con inversor y estructura de fijación adaptada a la inclinación del tejado."
  },
  {
    slug: "bano-reforma",
    imagen: "/img/trabajos/bano-reforma-despues.jpg",
    imagenAntes: "/img/trabajos/bano-reforma-antes.jpg",
    titulo: "Reforma de baño completo",
    categoria: "Fontanería",
    descripcion: "Baño renovado de arriba a abajo: plato de ducha a ras de suelo, mampara, mueble de baño en madera, espejo con luz LED integrada y toallero eléctrico."
  },
  {
    slug: "fincas-seguridad-ia",
    imagen: "/img/trabajos/fincas-seguridad-ia-despues.jpg",
    imagenAntes: "/img/trabajos/fincas-seguridad-ia-antes.jpg",
    titulo: "Vigilancia inteligente en finca rural",
    categoria: "IA y Monitorización Inteligente",
    descripcion: "Cámara con IA, foco de seguridad y punto de conexión alimentado por energía solar en el acceso a una finca rural. Detecta personas y vehículos, y descarta avisos por fauna o vegetación en movimiento."
  },
  {
    slug: "monitor-ia",
    imagen: "/img/trabajos/monitor-ia-despues.jpg",
    imagenAntes: "/img/trabajos/monitor-ia-antes.jpg",
    titulo: "Videovigilancia con detección de personas y vehículos por IA",
    categoria: "IA y Monitorización Inteligente",
    descripcion: "Sustitución de un sistema de videovigilancia antiguo, con imagen granulada y sin analítica, por un sistema de 9 cámaras con grabador NVR y detección de personas, vehículos y paquetes por IA, con acceso desde el móvil."
  },
  {
    slug: "camara-exterior",
    imagen: "/img/trabajos/camara-exterior-despues.jpg",
    imagenAntes: "/img/trabajos/camara-exterior-antes.jpg",
    titulo: "Cámara IP exterior instalada",
    categoria: "Seguridad",
    descripcion: "Cableado antiguo expuesto sustituido por una cámara IP tipo domo con instalación oculta, cableada por el interior del muro hasta la caja de conexiones.",
    video: "/video/camara-exterior.mp4",
    videoPoster: "/img/trabajos/camara-exterior-video-poster.jpg"
  },
  {
    slug: "videoportero",
    imagen: "/img/trabajos/videoportero-despues.jpg",
    imagenAntes: "/img/trabajos/videoportero-antes.jpg",
    titulo: "Videoportero inteligente instalado",
    categoria: "Seguridad",
    descripcion: "Cambio de un portero automático antiguo (solo audio) por un videoportero inteligente con pantalla, visión de la entrada e imagen en tiempo real desde el móvil.",
    video: "/video/videoportero.mp4",
    videoPoster: "/img/trabajos/videoportero-video-poster.jpg"
  },
  {
    slug: "cerradura",
    imagen: "/img/trabajos/cerradura-despues.jpg",
    imagenAntes: "/img/trabajos/cerradura-antes.jpg",
    titulo: "Cerradura inteligente instalada",
    categoria: "Seguridad",
    descripcion: "Sustitución de la cerradura tradicional de llave por una cerradura inteligente con teclado numérico y apertura desde el móvil, manteniendo el bombín como acceso de emergencia."
  },
  {
    slug: "cuadro-electrico",
    imagen: "/img/trabajos/cuadro-electrico-despues.jpg",
    imagenAntes: "/img/trabajos/cuadro-electrico-antes.jpg",
    titulo: "Cuadro eléctrico renovado",
    categoria: "Electricidad",
    descripcion: "Cuadro eléctrico antiguo, sin espacio ni orden, sustituido por uno nuevo con diferenciales, magnetotérmicos identificados por circuito y espacio libre para ampliaciones futuras."
  },
  {
    slug: "rack-comunicaciones",
    imagen: "/img/trabajos/rack-comunicaciones-despues.jpg",
    imagenAntes: "/img/trabajos/rack-comunicaciones-antes.jpg",
    titulo: "Armario de comunicaciones y rack de red",
    categoria: "Redes e informática",
    descripcion: "Cableado de red desordenado y router a la vista sustituido por un armario de comunicaciones con rack, switch, ONT y router organizados, y tomas de red repartidas por la vivienda."
  },
  {
    slug: "solar-terraza",
    imagen: "/img/trabajos/solar-terraza-despues.jpg",
    imagenAntes: "/img/trabajos/solar-terraza-antes.jpg",
    titulo: "Kit solar de terraza",
    categoria: "Energía solar",
    descripcion: "Kit solar de autoconsumo con estructura de suelo instalado sobre la terraza, sin obra ni perforaciones en la cubierta."
  },
  {
    slug: "aire-acondicionado",
    imagen: "/img/trabajos/aire-acondicionado-despues.jpg",
    imagenAntes: "/img/trabajos/aire-acondicionado-antes.jpg",
    titulo: "Aire acondicionado con control desde el móvil",
    categoria: "Climatización",
    descripcion: "Cambio de un aire acondicionado antiguo por un split nuevo con control desde el móvil, con programación de horarios y temperatura por estancia."
  },
  {
    slug: "persianas",
    imagen: "/img/trabajos/persianas-despues.jpg",
    imagenAntes: "/img/trabajos/persianas-antes.jpg",
    titulo: "Persianas motorizadas",
    categoria: "Domótica",
    descripcion: "Persiana manual de cinta sustituida por una persiana motorizada con mando y control desde el móvil, sin obra en la fachada."
  },
  {
    slug: "enchufes",
    imagen: "/img/trabajos/enchufes-despues.jpg",
    imagenAntes: "/img/trabajos/enchufes-antes.jpg",
    titulo: "Enchufes inteligentes",
    categoria: "Domótica",
    descripcion: "Enchufes e interruptores antiguos sustituidos por enchufes inteligentes con control desde el móvil y programación de horarios de encendido y apagado."
  },
  {
    slug: "toldo",
    imagen: "/img/trabajos/toldo-despues.jpg",
    imagenAntes: "/img/trabajos/toldo-antes.jpg",
    titulo: "Toldo motorizado con control por app",
    categoria: "Domótica",
    descripcion: "Toldo manual sustituido por uno motorizado con luz LED integrada y control por app, con cierre automático ante viento fuerte."
  },
  {
    slug: "piscina",
    imagen: "/img/trabajos/piscina-despues.jpg",
    imagenAntes: "/img/trabajos/piscina-antes.jpg",
    titulo: "Piscina con automatización y control por app",
    categoria: "Domótica",
    descripcion: "Automatización de la filtración, iluminación y limpieza de la piscina, con monitorización del estado del agua desde el móvil."
  },
  {
    slug: "riego",
    imagen: "/img/trabajos/riego-despues.jpg",
    imagenAntes: "/img/trabajos/riego-antes.jpg",
    titulo: "Riego automático de jardín",
    categoria: "Domótica",
    descripcion: "Riego automático por zonas con sensor de humedad del suelo y programación desde el móvil, ajustando el riego según la previsión de lluvia."
  },
  {
    slug: "pintura-reforma",
    imagen: "/img/trabajos/pintura-reforma-despues.jpg",
    imagenAntes: "/img/trabajos/pintura-reforma-antes.jpg",
    titulo: "Pintura y reforma de habitación",
    categoria: "Reparaciones y reformas",
    descripcion: "Habitación con paredes desconchadas y humedad, reformada de arriba a abajo: alisado y saneado de paredes, pintura nueva, suelo laminado e iluminación empotrada.",
    video: "/video/pintura-reforma.mp4",
    videoPoster: "/img/trabajos/pintura-reforma-video-poster.jpg"
  },
  {
    slug: "reforma-general",
    imagen: "/img/trabajos/reforma-general-despues.jpg",
    imagenAntes: "/img/trabajos/reforma-general-antes.jpg",
    titulo: "Reforma general de vivienda",
    categoria: "Reparaciones y reformas",
    descripcion: "Reforma integral de salón y cocina en un solo espacio abierto: nueva instalación eléctrica, suelo laminado, iluminación indirecta en techo y cocina con isla.",
    video: "/video/reforma-general.mp4",
    videoPoster: "/img/trabajos/reforma-general-video-poster.jpg"
  }
];

module.exports = { trabajos };
