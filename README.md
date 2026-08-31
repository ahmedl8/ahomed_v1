# AHOMED — Sitio web

Sitio web completo para AHOMED, "Soluciones integrales para el hogar", construido en **Node.js + Express + EJS**. Listo para ejecutar en local o desplegar en cualquier hosting que soporte Node.

## Contenido incluido

Todo el contenido (servicios, precios, ejemplos de presupuesto, packs) está organizado en **siete bloques**, para que un cliente nuevo entienda la oferta en una lectura rápida:

- **A · Seguridad y Accesos** — Seguridad (cámaras, alarmas, cerraduras, videoportero) + IA y Monitorización Inteligente (servicio destacado, con dos ejemplos completos: negocio y vivienda).
- **B · Instalaciones Base** — Electricidad, Domótica, Redes e informática, Climatización, Antenas.
- **C · Energía** — Energía solar.
- **D · Reformas** — Reparaciones y reformas, Fontanería, Pladur.
- **E · Plataforma IA Predictiva** — instalación base en dos niveles (IA START desde 590 € / IA PRO desde 950 €, según cuántos modos se activen) y **once modos**: Motor Meteorológico, Casa Presencial, IA de Sueño, Calidad del Aire, Cuidado de Mascotas, Cocina Inteligente, Personas Mayores, Modo Niños, Gestión de Paquetes, Seguridad IA y Acceso Inteligente. Cada modo se cotiza como incremento sobre la instalación base.
- **F · Mantenimiento** — contratos de revisión y reentrenamiento de IA para cualquier instalación AHOMED.
- **G · Naves y Fincas** — Electricidad, Redes e informática, Fontanería, Seguridad IA y Mantenimiento, pero con ejemplos, presupuestos y escala propios (cuadros trifásicos, WiFi industrial, riego de finca) — no son las mismas fichas que la versión para vivienda.
- **3 packs combinados**: Piso Nuevo, Chalet Seguro, Negocio.

Cada servicio y cada modo tiene su página propia con "ideal para", ejemplo real con 2-3 opciones (Esencial / Inteligente / Completa), extras habituales, cross-sell a otros servicios relacionados (clicable), y un botón de WhatsApp propio por cada opción de precio con el mensaje ya escrito. Los servicios con fotografías reales del trabajo muestran una comparativa antes/después.

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

Todo el contenido editable está centralizado en varios ficheros, no hace falta tocar las vistas para actualizar precios o textos:

- `data/services.js` — servicios de los bloques A-D, F y G (incluidas las versiones de Naves y Fincas), precios, ejemplos de presupuesto, packs, datos de la empresa (WhatsApp, email, zona, meta description por defecto). Cada servicio declara su `bloque` (slug de `data/bloques.js`), su `publico` (`casa`, `negocio` o `ambos`) y, si tiene una versión equivalente para el otro público, su `versionAlternativa` (slug del servicio hermano, para el aviso cruzado "¿Es para una nave/vivienda?").
- `data/ia-predictiva.js` — instalación base (dos niveles: IA START/IA PRO) y los once modos del bloque E, con su precio de incremento sobre la base.
- `data/naves-fincas.js` — Seguridad IA para Naves y Fincas (el resto de servicios de negocio vive ya en `data/services.js` junto a sus equivalentes de vivienda).
- `data/bloques.js` — metadatos de los siete bloques (nombre, letra, resumen, icono).
- `data/galeria.js` — trabajos mostrados en `/galeria` (actualmente con imágenes ilustrativas, no fotos propias — ver nota más abajo).
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

Faltan fotos propias para: punto de recarga wallbox, antena parabólica y antena TDT — se pueden añadir en cuanto haya material fotografiado, siguiendo el mismo patrón de nombres.

**Importante sobre `/galeria`**: por ahora usa imágenes ilustrativas (no fotos de trabajos reales de AHOMED todavía), y por eso está deliberadamente fuera del menú, del footer y del sitemap — la ruta sigue activa pero no se promociona en ningún sitio hasta que haya 2-3 trabajos reales documentados. En cuanto existan, sustituir las imágenes en `data/galeria.js`, quitar "ilustrativos" del texto en `views/galeria.ejs`, y volver a añadir el enlace en `views/partials/header.ejs`, `views/partials/footer.ejs` y la lista `staticUrls` de `server.js`.

## Estructura del proyecto

```
ahomed-web/
├── server.js                    # Servidor Express, CSP, negociación WebP, rutas, sitemap.xml/robots.txt
├── package.json
├── data/
│   ├── services.js              # Servicios A-D, F y G (casa + negocio), packs, datos de empresa
│   ├── ia-predictiva.js         # Instalación base (IA START/PRO) + los 11 modos del bloque E
│   ├── naves-fincas.js          # Seguridad IA para Naves y Fincas
│   ├── bloques.js               # Metadatos de los 7 bloques
│   ├── galeria.js               # Trabajos mostrados en /galeria
│   └── icons.js                 # Paths SVG de iconos por servicio/modo
├── views/
│   ├── index.ejs                # Página de inicio
│   ├── servicios.ejs            # Listado de todos los servicios, agrupado por bloque
│   ├── bloque.ejs               # Página de un bloque individual (/servicios/bloque/:slug)
│   ├── packs.ejs
│   ├── sobre-mi.ejs
│   ├── contacto.ejs
│   ├── faq.ejs                  # Preguntas frecuentes
│   ├── galeria.ejs              # Galería de trabajos (ver nota sobre imágenes ilustrativas arriba)
│   ├── 404.ejs
│   ├── services/
│   │   ├── detalle.ejs              # Plantilla genérica de detalle de servicio (con foto antes/después)
│   │   ├── ia-predictiva.ejs        # Plataforma IA Predictiva: instalación base + los 11 modos + calculadora
│   │   ├── ia-modo.ejs              # Ficha de un modo individual (2 opciones)
│   │   ├── ia-modo-proyecto.ejs     # Ficha de un modo con presupuesto "proyecto a medida" (Acceso Inteligente)
│   │   └── seguridad-ia-negocio.ejs # Seguridad IA para Naves y Fincas
│   └── partials/
│       ├── head.ejs             # Meta tags, Open Graph, canonical, JSON-LD LocalBusiness, GTM (por página)
│       ├── gtm-body.ejs         # Vacío a propósito: se retiró el <noscript> de GTM por saltarse el consentimiento (ver comentario en el archivo)
│       ├── header.ejs           # Navegación + mega-menú por bloques (Para tu Casa / Naves y Fincas) + topbar + menú móvil
│       ├── footer.ejs           # Footer + botón flotante de WhatsApp
│       └── option-card.ejs      # Tarjeta de opción de precio reutilizable (con CTA de WhatsApp por opción)
└── public/
    ├── css/
    │   ├── style.css            # Hoja de estilos fuente (editable)
    │   └── style.min.css        # Versión minificada, la que sirve la web — regenerar tras cada cambio
    ├── js/main.js                # Menú móvil, vídeos con overlay, tracking de selección de opción de precio
    └── img/
        ├── trabajos/             # Fotos antes/después usadas en las fichas de servicio
        ├── hero-casa-movil.jpg   # Imagen del hero de portada (vivienda + app de control)
        └── ahmed-sobre-mi.jpg    # Foto real usada en "Sobre mí" y en la home
```

## Rutas disponibles

| Ruta | Contenido |
|---|---|
| `/` | Inicio: hero (H1 real en HTML), por qué elegir AHOMED, servicios, IA destacada, packs, cómo funciona, quién viene a tu casa, CTA |
| `/servicios` | Listado completo de servicios, agrupado por los 7 bloques |
| `/servicios/bloque/:slug` | Página de un bloque (seguridad-accesos, instalaciones-base, energia, reformas, ia-predictiva, mantenimiento, seguridad-ia-naves-fincas) |
| `/servicios/naves-fincas/seguridad-ia` | Seguridad IA para Naves y Fincas (2 ejemplos: perímetro de nave, finca) |
| `/servicios/ia-predictiva` | Plataforma IA Predictiva: instalación base (IA START/PRO) + calculadora interactiva + los 11 modos |
| `/servicios/ia-predictiva/:modoSlug` | Ficha de un modo (motor-meteorologico, casa-presencial, ia-sueno, calidad-aire, cuidado-mascotas, cocina-inteligente, personas-mayores, modo-ninos, gestion-paquetes, seguridad-ia, acceso-inteligente) |
| `/servicios/ia-monitorizacion` | Redirección 301 a `/servicios/ia-predictiva/seguridad-ia` (compatibilidad con enlaces antiguos) |
| `/servicios/:slug` | Detalle de cada servicio de casa o negocio (electricidad, domotica, energia-solar, seguridad, redes-informatica, climatizacion, antenas, reparaciones-reformas, fontaneria, pladur, mantenimiento, y sus versiones `-nave` para Naves y Fincas) |
| `/packs` | Los 3 packs combinados |
| `/galeria` | Galería de trabajos (imágenes ilustrativas por ahora — no enlazada en menú/footer/sitemap, ver nota arriba) |
| `/preguntas-frecuentes` | FAQ |
| `/sobre-mi` | Presentación profesional, con foto real |
| `/contacto` | Datos de contacto (WhatsApp, `tel:`, email) |
| `/sitemap.xml` | Generado dinámicamente a partir de todas las rutas de contenido |
| `/robots.txt` | Permite indexación completa y apunta al sitemap |

## Próximos pasos sugeridos

1. **Galería de trabajos reales**: `/galeria` usa imágenes ilustrativas por ahora. En cuanto haya 2-3 trabajos propios documentados (fotos/vídeo), sustituir en `data/galeria.js` y reactivar el enlace — ver la nota detallada más arriba.
2. **Tienda** (dropshipping): se puede añadir como sección `/tienda` cuando se active esa fase. La estructura de rutas ya está preparada para añadirla sin reescribir el resto del sitio.
3. **Formulario de contacto propio**: de momento todo el contacto es directo por WhatsApp, `tel:` o email, sin backend de formularios ni base de datos. Es una decisión consciente para minimizar fricción, no un olvido — valorar solo si hay demanda real de gente que prefiera escribir por email/formulario antes que WhatsApp.
4. **Simplificar el mega-menú en móvil**: la navegación por bloques es potente pero densa. Con GTM ya activo, revisar en Analytics qué rutas usa realmente la gente antes de rediseñar la navegación a ciegas.
5. **Reseñas reales en Google Business**: el hero de portada no muestra cifras de clientes/valoración porque no existen todavía (evitar repetir esto con números inventados). En cuanto haya 3-5 reseñas reales, añadir un bloque de prueba social en la home (`"★★★★★ X,X/5 en Google · +X clientes"`) cerca del hero.
6. **Optimización de imágenes**: ya resuelto — el servidor sirve `.webp` automáticamente vía negociación de contenido en `server.js` cuando el navegador lo soporta, con fallback a `.jpg`/`.png` original. Pendiente solo generar `.webp` para cualquier imagen nueva que se añada (`public/img/`), no hay que tocar código.

## Notas técnicas

- El formato de precios en euros (`1.680 €`) se calcula con una función propia en `server.js` (`app.locals.fmt`), sin depender de `Intl.NumberFormat`, porque algunos runtimes Node no incluyen los datos de localización `es-ES` completos por defecto.
- Todos los CTAs de WhatsApp usan el enlace `https://wa.me/34671176482` con mensaje prellenado según el contexto (servicio, modo, pack o consulta general).
- Cada página define su propia `metaDescription` y hereda `og:title`/`og:description`/`canonical` automáticamente desde `partials/head.ejs` — no hay que tocar las vistas para que una página nueva tenga SEO correcto, basta con pasar `metaDescription` al `render()`.
- El sitio es totalmente responsive (breakpoints en 1024px, 860px y 640px) con menú hamburguesa y mega-menú de servicios agrupado por bloque en móvil.
- Sin frameworks de frontend (React, Vue, etc.) ni build step: HTML generado por EJS en el servidor, CSS y JS planos. Despliegue simple en cualquier VPS, Render, Railway, o similar que soporte Node.
- La web sirve `public/css/style.min.css` (minificado). El archivo fuente editable sigue siendo `public/css/style.css` — cualquier cambio de estilo se hace ahí, y luego se regenera el minificado con: `npx clean-css-cli -o public/css/style.min.css public/css/style.css`. No hace falta instalar nada como dependencia permanente, `npx` lo descarga solo para ese comando.
- La CSP (Content Security Policy) en `server.js` está configurada de forma explícita, no desactivada. Usa un nonce por petición (`res.locals.cspNonce`) para permitir el único script inline del sitio (el arranque de Google Tag Manager en `head.ejs`). Si se añade algún script inline nuevo en el futuro, hay que aplicarle el mismo atributo `nonce="<%= cspNonce %>"` o la CSP lo bloqueará.
- **Medición**: Google Tag Manager (contenedor `GTM-5D5WS88L`) está activo en todas las páginas, con una etiqueta de Google Analytics 4 (`G-EXZRJ12XRG`) ya configurada en el propio contenedor de GTM. Además del clic genérico en WhatsApp/Llamar (activador ya configurado en GTM), cada botón "Elegir esta opción por WhatsApp" empuja un evento `seleccion_opcion_precio` al `dataLayer` (ver `public/js/main.js`) con el servicio, la opción (Esencial/Inteligente/Completa) y el precio exacto — falta crear en GTM el trigger + la etiqueta GA4 que reciba ese evento para verlo en los informes de Analytics.
