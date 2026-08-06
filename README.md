# AHOMED — Sitio web (v2)

Sitio web completo para AHOMED, "Soluciones integrales para el hogar", construido en **Node.js + Express + EJS**. Listo para ejecutar en local o desplegar en cualquier hosting que soporte Node.

## Contenido incluido

Todo el contenido (servicios, precios, ejemplos de presupuesto, packs) está extraído de la *Guía de Servicios AHOMED 2026* y organizado en **seis bloques**, para que un cliente nuevo entienda la oferta en una lectura rápida:

- **A · Seguridad y Accesos** — Seguridad (cámaras, alarmas, cerraduras, videoportero) + IA y Monitorización Inteligente (servicio destacado, con dos ejemplos completos: negocio y vivienda).
- **B · Instalaciones Base** — Electricidad, Domótica, Redes e informática, Climatización, Antenas.
- **C · Energía** — Energía solar.
- **D · Reformas** — Reparaciones y reformas, Fontanería, Pladur.
- **E · Plataforma IA Predictiva** — instalación base (mini-PC + motor Python + dashboard) y **nueve modos**: Motor Meteorológico, Casa Presencial, IA de Sueño, Calidad del Aire, Cuidado de Mascotas, Cocina Inteligente, Personas Mayores, Modo Niños y Gestión de Paquetes. Cada modo se cotiza como incremento sobre la instalación base, o con precio de catálogo completo si se instala en solitario.
- **F · Mantenimiento** — contratos de revisión y reentrenamiento de IA para cualquier instalación AHOMED.
- **3 packs combinados**: Piso Nuevo, Chalet Seguro, Negocio.

Cada servicio y cada modo tiene su página propia con "ideal para", ejemplo real con 2-3 opciones (Básica / Recomendada / Premium), extras habituales y CTA directo a WhatsApp. Los servicios con fotografías reales del trabajo muestran una comparativa antes/después.

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

Todo el contenido editable está centralizado en cuatro ficheros, no hace falta tocar las vistas para actualizar precios o textos:

- `data/services.js` — servicios de los bloques A-D y F, precios, ejemplos de presupuesto, packs, datos de la empresa (WhatsApp, email, zona, meta description por defecto). Cada servicio declara su `bloque` (slug de `data/bloques.js`).
- `data/ia-predictiva.js` — instalación base y los nueve modos del bloque E, con su precio "solo" y su precio "incremento con plataforma".
- `data/bloques.js` — metadatos de los seis bloques (nombre, letra, resumen, icono).
- `data/icons.js` — iconos SVG usados en las tarjetas de servicio y de modo.

Para cambiar el número de WhatsApp, email o zona de servicio, edita el objeto `empresa` al final de `data/services.js`.

### Fotos antes/después

Las imágenes viven en `public/img/trabajos/` (pares `<nombre>-antes.jpg` / `<nombre>-despues.jpg`). Un ejemplo de servicio las muestra automáticamente en su ficha de detalle si declara ambos campos:

```js
ejemplo: {
  titulo: "...",
  imagen: "/img/trabajos/cuadro-electrico-despues.jpg",
  imagenAntes: "/img/trabajos/cuadro-electrico-antes.jpg",
  ...
}
```

Faltan fotos propias para: punto de recarga wallbox, antena parabólica, antena TDT y mantenimiento — se pueden añadir en cuanto haya material fotografiado, siguiendo el mismo patrón de nombres.

## Estructura del proyecto

```
ahomed-web/
├── server.js                    # Servidor Express, rutas y generación de sitemap.xml/robots.txt
├── package.json
├── data/
│   ├── services.js              # Servicios de los bloques A-D y F, packs, datos de empresa
│   ├── ia-predictiva.js         # Instalación base + los 9 modos del bloque E
│   ├── bloques.js               # Metadatos de los 6 bloques
│   └── icons.js                 # Paths SVG de iconos por servicio/modo
├── views/
│   ├── index.ejs                # Página de inicio
│   ├── servicios.ejs            # Listado de todos los servicios, agrupado por bloque
│   ├── bloque.ejs                # Página de un bloque individual (/servicios/bloque/:slug)
│   ├── packs.ejs
│   ├── sobre-mi.ejs
│   ├── contacto.ejs
│   ├── 404.ejs
│   ├── services/
│   │   ├── detalle.ejs          # Plantilla genérica de detalle de servicio (con foto antes/después)
│   │   ├── ia.ejs               # Plantilla especial para IA y Monitorización (2 ejemplos)
│   │   ├── ia-predictiva.ejs    # Plataforma IA Predictiva: instalación base + los 9 modos
│   │   └── ia-modo.ejs          # Ficha de un modo individual de la Plataforma IA Predictiva
│   └── partials/
│       ├── head.ejs             # Meta tags, Open Graph, canonical (por página)
│       ├── header.ejs           # Navegación + mega-menú por bloques + topbar + menú móvil
│       └── footer.ejs           # Footer + botón flotante de WhatsApp
└── public/
    ├── css/style.css            # Todos los estilos
    ├── js/main.js               # Menú móvil
    └── img/
        └── trabajos/            # Fotos antes/después usadas en las fichas de servicio
```

## Rutas disponibles

| Ruta | Contenido |
|---|---|
| `/` | Inicio: hero, servicios, IA destacada, packs, cómo funciona, ventajas, CTA |
| `/servicios` | Listado completo de servicios, agrupado por los 6 bloques |
| `/servicios/bloque/:slug` | Página de un bloque (seguridad-accesos, instalaciones-base, energia, reformas, ia-predictiva, mantenimiento) |
| `/servicios/:slug` | Detalle de cada servicio (electricidad, domotica, energia-solar, seguridad, redes-informatica, climatizacion, antenas, reparaciones-reformas, fontaneria, pladur, mantenimiento) |
| `/servicios/ia-monitorizacion` | Página especial de IA y Monitorización con los dos ejemplos completos |
| `/servicios/ia-predictiva` | Plataforma IA Predictiva: instalación base + los 9 modos |
| `/servicios/ia-predictiva/:modoSlug` | Ficha de un modo (motor-meteorologico, casa-presencial, ia-sueno, calidad-aire, cuidado-mascotas, cocina-inteligente, personas-mayores, modo-ninos, gestion-paquetes) |
| `/packs` | Los 3 packs combinados |
| `/sobre-mi` | Presentación profesional |
| `/contacto` | Datos de contacto + CTA WhatsApp |
| `/sitemap.xml` | Generado dinámicamente a partir de todas las rutas de contenido |
| `/robots.txt` | Permite indexación completa y apunta al sitemap |

## Próximos pasos sugeridos (no incluidos en esta v2)

1. **Galería de trabajos reales**: cuando haya fotos/vídeos propios suficientes (más allá de los ya usados en las fichas de servicio), valorar una sección dedicada tipo portfolio.
2. **Tienda** (dropshipping): se puede añadir como sección `/tienda` cuando se active esa fase. La estructura de rutas ya está preparada para añadirla sin reescribir el resto del sitio.
3. **Formulario de contacto propio**: de momento todo el contacto es directo por WhatsApp, sin backend de formularios ni base de datos.
4. **schema.org LocalBusiness**: los meta tags Open Graph y canonical ya están incluidos por página; falta añadir el JSON-LD de LocalBusiness cuando el dominio esté publicado (dirección, horario, geolocalización).
5. **Analítica**: añadir Google Analytics o Plausible para medir de dónde vienen los contactos.
6. **Optimización de imágenes**: convertir los JPG de `public/img/trabajos/` a WebP con tamaños responsive (actualmente se sirven a resolución original).

## Notas técnicas

- El formato de precios en euros (`1.680 €`) se calcula con una función propia en `server.js` (`app.locals.fmt`), sin depender de `Intl.NumberFormat`, porque algunos runtimes Node no incluyen los datos de localización `es-ES` completos por defecto.
- Todos los CTAs de WhatsApp usan el enlace `https://wa.me/34671176482` con mensaje prellenado según el contexto (servicio, modo, pack o consulta general).
- Cada página define su propia `metaDescription` y hereda `og:title`/`og:description`/`canonical` automáticamente desde `partials/head.ejs` — no hay que tocar las vistas para que una página nueva tenga SEO correcto, basta con pasar `metaDescription` al `render()`.
- El sitio es totalmente responsive (breakpoints en 1024px, 860px y 640px) con menú hamburguesa y mega-menú de servicios agrupado por bloque en móvil.
- Sin frameworks de frontend (React, Vue, etc.) ni build step: HTML generado por EJS en el servidor, CSS y JS planos. Despliegue simple en cualquier VPS, Render, Railway, o similar que soporte Node.
