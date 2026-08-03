# AHOMED — Sitio web (v1)

Sitio web completo para AHOMED, "Soluciones integrales para el hogar", construido en **Node.js + Express + EJS**. Listo para ejecutar en local o desplegar en cualquier hosting que soporte Node.

## Contenido incluido

Todo el contenido (servicios, precios, ejemplos de presupuesto, packs) está extraído directamente de la *Guía de Servicios AHOMED 2026*:

- **11 categorías de servicio**: Electricidad, Domótica, Energía solar, Seguridad, Redes e informática, Climatización, Antenas, Reparaciones y reformas, Fontanería, Pladur, Mantenimiento y contratos.
- **IA y Monitorización Inteligente** como servicio destacado, con dos ejemplos completos (negocio y vivienda).
- **3 packs combinados**: Piso Nuevo, Chalet Seguro, Negocio.
- Cada servicio tiene su página propia con "ideal para", ejemplo real con 2-3 opciones (Básica / Recomendada / Premium), extras habituales y CTA directo a WhatsApp.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y arranque

```bash
npm install
npm start
```

La web quedará disponible en **http://localhost:3000**

Para desarrollo con recarga automática (requiere `nodemon`, incluido en devDependencies):

```bash
npm run dev
```

## Configuración

Todo el contenido editable está centralizado en dos ficheros, no hace falta tocar las vistas para actualizar precios o textos:

- `data/services.js` — servicios, precios, ejemplos de presupuesto, packs, datos de la empresa (WhatsApp, email, zona).
- `data/icons.js` — iconos SVG usados en las tarjetas de servicio.

Para cambiar el número de WhatsApp, email o zona de servicio, edita el objeto `empresa` al final de `data/services.js`.

## Estructura del proyecto

```
ahomed-web/
├── server.js              # Servidor Express y rutas
├── package.json
├── data/
│   ├── services.js        # Contenido: servicios, precios, packs, datos de empresa
│   └── icons.js            # Paths SVG de iconos por servicio
├── views/
│   ├── index.ejs           # Página de inicio
│   ├── servicios.ejs       # Listado de todos los servicios
│   ├── packs.ejs
│   ├── trabajos.ejs        # Trabajos reales (placeholders listos para fotos/vídeos)
│   ├── sobre-mi.ejs
│   ├── contacto.ejs
│   ├── 404.ejs
│   ├── services/
│   │   ├── detalle.ejs     # Plantilla genérica de detalle de servicio
│   │   └── ia.ejs          # Plantilla especial para IA (2 ejemplos)
│   └── partials/
│       ├── head.ejs
│       ├── header.ejs      # Navegación + topbar + menú móvil
│       └── footer.ejs      # Footer + botón flotante de WhatsApp
└── public/
    ├── css/style.css       # Todos los estilos
    ├── js/main.js          # Menú móvil
    └── img/                # Logo y favicon
```

## Rutas disponibles

| Ruta | Contenido |
|---|---|
| `/` | Inicio: hero, servicios, IA destacada, packs, cómo funciona, ventajas, trabajos reales, CTA |
| `/servicios` | Listado completo de servicios |
| `/servicios/:slug` | Detalle de cada servicio (electricidad, domotica, energia-solar, seguridad, redes-informatica, climatizacion, antenas, reparaciones-reformas, fontaneria, pladur, mantenimiento) |
| `/servicios/ia-monitorizacion` | Página especial de IA y Monitorización con los dos ejemplos completos |
| `/packs` | Los 3 packs combinados |
| `/trabajos-reales` | Galería de trabajos (placeholders, listo para añadir fotos/vídeos reales) |
| `/sobre-mi` | Presentación profesional |
| `/contacto` | Datos de contacto + CTA WhatsApp |

## Próximos pasos sugeridos (no incluidos en esta v1)

Siguiendo tu propio plan de estrategia (Fase 1-2), quedan fuera de esta v1 a propósito, para no invertir tiempo antes de tener validación real:

1. **Sección "Trabajos reales"**: sustituir los placeholders por fotos/vídeos reales según los vayas grabando.
2. **Tienda** (dropshipping): se puede añadir como sección `/tienda` cuando actives esa fase (mes 3 según tu plan). La estructura de rutas ya está preparada para añadirla sin reescribir el resto del sitio.
3. **Formulario de contacto propio**: de momento todo el contacto es directo por WhatsApp (como pide tu estrategia), sin backend de formularios ni base de datos.
4. **Google Business Profile / SEO**: añadir metadatos estructurados (schema.org LocalBusiness) cuando el dominio esté publicado.
5. **Analítica**: añadir Google Analytics o Plausible para medir de dónde vienen los contactos (dato clave según tu plan de mes 1-2).

## Notas técnicas

- El formato de precios en euros (`1.680 €`) se calcula con una función propia en `server.js` (`app.locals.fmt`), sin depender de `Intl.NumberFormat`, porque algunos runtimes Node no incluyen los datos de localización `es-ES` completos por defecto.
- Todos los CTAs de WhatsApp usan el enlace `https://wa.me/34671176482` con mensaje prellenado según el contexto (servicio, pack, consulta general).
- El sitio es totalmente responsive (breakpoints en 1024px, 860px y 640px) con menú hamburguesa en móvil.
- Sin frameworks de frontend (React, Vue, etc.) ni build step: HTML generado por EJS en el servidor, CSS y JS planos. Despliegue simple en cualquier VPS, Render, Railway, o similar que soporte Node.
