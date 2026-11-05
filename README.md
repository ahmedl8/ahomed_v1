# AHOMED — Sitio web

Web de AHOMED, "Trabajos para tu casa, bien hechos" (Madrid y alrededores), construida en **Node.js + Express + EJS**, en español, inglés (`/en`) y francés (`/fr`).

Desde la v91 la web ofrece **solo trabajos sencillos, sin capa de IA ni automatización**. WhatsApp se usa únicamente como canal de contacto (botón y mensaje prellenado), no hay mensajes automáticos.

## Servicios (7)

1. Electricidad — cuadros, enchufes, iluminación, averías
2. Pintura — viviendas y locales
3. Pladur — tabiques y falsos techos
4. Cámaras de vigilancia — grabación local
5. Motorización de persianas (y toldos)
6. Jardinería — césped, poda y riego
7. Limpieza después de obra

Cada servicio tiene su página (`/servicios/<slug>`) con "ideal para", un ejemplo de presupuesto con tres opciones (**Básica / Estándar / Completa**), extras habituales, enlaces a servicios relacionados y botón de WhatsApp por opción.

**Los precios son estimaciones orientativas de mercado**, no tarifas confirmadas: revisarlos en `data/pricing-catalog.json` antes de publicar.

## Requisitos y arranque

- Node.js 18 o superior

```bash
npm install
npm start      # http://localhost:3000
npm run dev    # con recarga (nodemon)
```

## Dónde se edita cada cosa

- `data/services.js` — los 7 servicios (textos, ejemplos, opciones), pasos de "cómo funciona" y datos de empresa (`empresa`: WhatsApp, email, zona, meta description).
- `data/pricing-catalog.json` — catálogo de componentes con precio (material, mano de obra por hora, dispositivos). Los servicios los referencian por `ref`.
- `data/pricing.js` — motor que convierte las líneas de cada opción en `{items, total}` y calcula el "desde" de cada servicio.
- `data/galeria.js` — `/galeria` se genera sola con los pares antes/después de los servicios.
- `data/icons.js` — iconos SVG.
- `locales/<es|en|fr>/common.json` — textos de interfaz (mismas claves en los 3 idiomas).
- `locales/<en|fr>/content.json` — traducciones de los textos de `data/*` (clave = ruta del dato; si falta, se muestra el español).

Para cambiar WhatsApp, email o zona, edita `empresa` en `data/services.js`.

### Imágenes

Las fotos están en `public/img/` (`trabajos/<nombre>-antes.jpg` / `-despues.jpg`, `hero-bloques/`, `hero-trabajos.jpg`). El servidor sirve `.webp` automáticamente si existe junto al `.jpg`/`.png`. Las imágenes de `/galeria` son recreaciones, no fotos de trabajos ya ejecutados (la página lo dice y no está enlazada en menú ni footer). Faltan fotos propias para jardinería, persianas y limpieza en alta resolución; por eso esos servicios no tienen foto grande en la cabecera.

## Estructura

```
├── server.js              # Express, CSP con nonce, idioma por prefijo, WebP, rutas, redirecciones 301, sitemap, robots
├── data/                  # services.js, pricing.js, pricing-catalog.json, galeria.js, icons.js
├── i18n/                  # ui.js (t/tv) y content.js (traducción de datos)
├── locales/               # es / en / fr
├── views/
│   ├── index.ejs, servicios.ejs, para-profesionales.ejs, sobre-mi.ejs, contacto.ejs
│   ├── faq.ejs, galeria.ejs, legal-*.ejs, 404.ejs
│   ├── services/detalle.ejs
│   └── partials/          # head, header, footer, option-card, cookie-banner, gtm-body
└── public/                # css (style.css + style.min.css), js, img
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Portada: servicios, tres opciones, cómo funciona, profesionales, quién hace el trabajo |
| `/servicios` | Los 7 servicios |
| `/servicios/<slug>` | electricidad, pintura, pladur, camaras-vigilancia, motorizacion-persianas, jardineria, limpieza-post-obra |
| `/para-profesionales` | Colaboración con reformas, constructoras, interiorismo y fincas |
| `/galeria` | Recreaciones antes/después (fuera del menú) |
| `/preguntas-frecuentes` | FAQ (con FAQPage JSON-LD) |
| `/sobre-mi`, `/contacto` | Presentación y contacto directo (WhatsApp, teléfono, email) |
| `/aviso-legal`, `/privacidad`, `/cookies` | Legales |
| `/sitemap.xml`, `/robots.txt` | Generados dinámicamente (cada URL en ES/EN/FR) |

Las URLs antiguas (bloques, IA predictiva, configurador, packs, domótica, seguridad, fontanería, etc.) responden con **301** a la sección más cercana (ver `REDIRECTS_301` en `server.js`), también con prefijo `/en` y `/fr`.

## Notas técnicas

- Precios con formato `1.680 €` mediante `app.locals.fmt` (sin depender de `Intl`).
- Cada página define su `metaDescription` y hereda Open Graph, canonical y hreflang desde `partials/head.ejs`. La imagen por defecto para compartir es `/img/hero-trabajos.jpg`.
- Todos los enlaces internos usan `pathHref(...)` para conservar el idioma.
- CSS: la web sirve `public/css/style.min.css`. Edita `style.css` y regenera con `npx clean-css-cli -o public/css/style.min.css public/css/style.css`.
- CSP explícita con nonce por petición; cualquier script inline nuevo necesita `nonce="<%= cspNonce %>"`.
- `express.static` va con `redirect: false` para que `/en` y `/fr` (portada) no redirijan a `/en/` y `/fr/`.
- Medición: Google Tag Manager `GTM-5D5WS88L` con GA4 `G-EXZRJ12XRG`. Cada botón "Elegir esta opción por WhatsApp" empuja el evento `seleccion_opcion_precio` al `dataLayer` (`public/js/main.js`); falta el trigger + etiqueta GA4 en GTM para verlo en informes.
- Sin testimonios ni cifras de clientes (todavía no hay reseñas reales), sin formulario de contacto (WhatsApp es suficiente) y sin enlaces a redes sociales inventados.

## Próximos pasos sugeridos

1. Sustituir las recreaciones por fotos reales en cuanto haya 2-3 trabajos documentados.
2. Confirmar los precios orientativos con costes reales.
3. Añadir reseñas reales de Google Business cuando existan.
4. Crear en GTM el trigger/etiqueta para `seleccion_opcion_precio`.
