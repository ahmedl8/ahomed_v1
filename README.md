# AHOMED — Sitio web

Web de AHOMED, "Trabajos para tu casa, bien hechos" (Madrid y alrededores), construida en **Node.js + Express + EJS**, en español, inglés (`/en`) y francés (`/fr`).

Desde la v91 (agrupada en familias en la v92 y ampliada con fontanería, reformas y mantenimiento de chalets en la v93) la web ofrece **solo trabajos sencillos, sin capa de IA ni automatización**. WhatsApp se usa únicamente como canal de contacto (botón y mensaje prellenado), no hay mensajes automáticos.

## Servicios (11, en 4 familias)

Los servicios se presentan agrupados por lo que necesita el cliente (reparar, renovar, proteger y mantener) en la portada, en `/servicios` y en el menú. El orden dentro de cada familia lo marca el campo `numero` de cada servicio.

| Familia | Servicios |
|---|---|
| 01 Instalaciones y reparaciones | Electricidad · Fontanería (grifos, sanitarios, fugas, desatascos, puntos de agua y termos eléctricos; sin gas, calderas ni climatización) |
| 02 Reformas y acabados | Reforma integral (€/m²) · Reformas parciales (baño, cocina, suelo, piso para vender o alquilar) · Pintura · Pladur · Limpieza después de obra |
| 03 Seguridad y confort | Cámaras de vigilancia (sin cuota) · Motorización de persianas (y toldos) |
| 04 Exterior y mantenimiento | Jardinería · Mantenimiento de chalets (planes en €/mes y puesta a punto de segunda residencia) |

Fontanería y Mantenimiento de chalets no tienen fotos propias: sus tarjetas usan un panel con icono (`.service-card-media-icon`) en vez de imagen. Para mostrar "desde" con unidad (p. ej. `454 €/m²`, `67 €/mes`) se usa `desde` + `desdeUnidad` en la ficha.

**Añadir un servicio nuevo**: crea su ficha en `services` de `data/services.js` con su `familia`, su `numero` (orden) y su `icono` (`data/icons.js`), añade las partidas que necesite a `data/pricing-catalog.json`, sus textos en `locales/<en|fr>/content.json` y, si antes redirigía, quita su entrada de `REDIRECTS_301` en `server.js`. Aparece solo en portada, `/servicios`, menú, footer y sitemap. Una familia sin servicios no se muestra. Al arrancar, el servidor avisa por consola si algún servicio tiene una familia que no existe.

Cada servicio tiene su página (`/servicios/<slug>`) con "ideal para", un ejemplo de presupuesto con tres opciones (**Básica / Estándar / Completa**), extras habituales, enlaces a servicios relacionados y botón de WhatsApp por opción.

**Los precios son estimaciones orientativas de mercado** (estudio de precios de Madrid, nov-2026), no tarifas confirmadas: revisarlos en `data/pricing-catalog.json` antes de publicar. Puntos a decidir: si los importes llevan IVA (la web no lo indica), y la reforma integral (395 / 576 / 736 €/m²), que queda por debajo de las fuentes de Madrid.

## Requisitos y arranque

- Node.js 18 o superior

```bash
npm install
npm start      # http://localhost:3000
npm run dev    # con recarga (nodemon)
```

## Dónde se edita cada cosa

- `data/services.js` — los 11 servicios (textos, ejemplos, opciones), las 4 familias (`familias`), pasos de "cómo funciona" y datos de empresa (`empresa`: WhatsApp, email, zona, meta description).
- `data/pricing-catalog.json` — catálogo de componentes con precio (material, mano de obra por hora, dispositivos). Los servicios los referencian por `ref`.
- `data/pricing.js` — motor que convierte las líneas de cada opción en `{items, total}` y calcula el "desde" de cada servicio.
- `data/galeria.js` — `/galeria` se genera sola con los pares antes/después de los servicios.
- `data/icons.js` — iconos SVG de trazo (Lucide, licencia ISC), todos con el mismo peso y tamaño óptico; el color se define con `color` en el CSS del contenedor, no con `fill`. Para añadir uno: copia su contenido de lucide.dev dentro de un `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`.
- `locales/<es|en|fr>/common.json` — textos de interfaz (mismas claves en los 3 idiomas).
- `locales/<en|fr>/content.json` — traducciones de los textos de `data/*` (clave = ruta del dato; si falta, se muestra el español).

Para cambiar WhatsApp, email, zona o los meses de garantía (`garantiaMeses`), edita `empresa` en `data/services.js`.

### Datos legales (OBLIGATORIO antes de publicar)

`data/titular.js` es el único sitio donde se escriben el nombre completo, el NIF y el domicilio del titular. Mientras falte alguno, el aviso legal y la política de privacidad muestran el aviso de "datos pendientes" y el servidor lo avisa en consola al arrancar. Cuando están los tres, las páginas muestran la identificación completa en ES/EN/FR y el aviso desaparece. Revisa el texto final con tu gestor o asesor.

### Precios, IVA y márgenes

- Todos los importes se muestran **sin IVA** (textos `footer.disclaimer`, `home.options.footnote` y `detalle_servicio.nota_orientativa` en los 3 idiomas). Si decides mostrarlos con IVA, cambia esos tres textos y recalcula el catálogo.
- Reformas parciales y reforma integral terminan cada opción con una línea de **gastos generales y margen de empresa (15 %)**, calculada sobre las líneas anteriores (`GG_REFORMAS` en `data/services.js`, componente `gg_margen_reformas` en el catálogo; el motor admite líneas con `porcentaje`). Los "€/m²" de reforma integral en los nombres de las opciones están escritos a mano (454/662/846): actualízalos si cambias el porcentaje o las partidas.

### Textos de ejemplos, garantía y coordinación

- Las imágenes de los ejemplos son ilustrativas y así se rotulan (`partials/example-photos.ejs`, claves `detalle_servicio.antes/despues/imagenes_ilustrativas`). Cuando haya fotos propias, sustitúyelas y cambia el rótulo.
- Garantía y quién ejecuta el trabajo: `partials/garantia-colaboradores.ejs` (todas las fichas) y FAQ 6 y 12. El plazo sale de `empresa.garantiaMeses` (12 meses por defecto: confírmalo).
- Bloque de reformas con solicitud guiada por WhatsApp (sin formulario): `partials/reforma-cta.ejs`, en portada y en las fichas de reformas parciales e integral.

### Imágenes

Las fotos están en `public/img/` (`trabajos/<nombre>-antes.jpg` / `-despues.jpg`, `hero-bloques/`, `hero-trabajos.jpg`). El servidor sirve `.webp` automáticamente si existe junto al `.jpg`/`.png`. Las imágenes de `/galeria` son recreaciones, no fotos de trabajos ya ejecutados (la página lo dice y no está enlazada en menú ni footer). Faltan fotos propias para jardinería, persianas, limpieza, fontanería y mantenimiento de chalets en alta resolución; por eso esos servicios no tienen foto grande en la cabecera (fontanería y mantenimiento de chalets usan un panel con icono en la tarjeta).

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
| `/` | Portada: cuatro familias de servicios, tres opciones, cómo funciona, profesionales, quién hace el trabajo |
| `/servicios` | Los servicios agrupados por familia (anclas `#instalaciones`, `#reformas`, `#seguridad-confort`, `#exterior`) |
| `/servicios/<slug>` | electricidad, fontaneria, reforma-integral, reformas-parciales, pintura, pladur, limpieza-post-obra, camaras-vigilancia, motorizacion-persianas, jardineria, mantenimiento-chalets |
| `/para-profesionales` | Colaboración con reformas, constructoras, interiorismo y fincas |
| `/galeria` | Recreaciones antes/después (fuera del menú) |
| `/preguntas-frecuentes` | FAQ (con FAQPage JSON-LD) |
| `/sobre-mi`, `/contacto` | Presentación y contacto directo (WhatsApp, teléfono, email) |
| `/aviso-legal`, `/privacidad`, `/cookies` | Legales |
| `/sitemap.xml`, `/robots.txt` | Generados dinámicamente (cada URL en ES/EN/FR) |

Las URLs antiguas (bloques, IA predictiva, configurador, packs, domótica, seguridad, etc.; `reparaciones-reformas` → reformas parciales, `mantenimiento` → mantenimiento de chalets) responden con **301** a la sección más cercana (ver `REDIRECTS_301` en `server.js`), también con prefijo `/en` y `/fr`.

## Notas técnicas

- Precios con formato `1.680 €` mediante `app.locals.fmt` (sin depender de `Intl`).
- Cada página define su `metaDescription` y hereda Open Graph, canonical y hreflang desde `partials/head.ejs`. La imagen por defecto para compartir es `/img/hero-trabajos.jpg`.
- Todos los enlaces internos usan `pathHref(...)` para conservar el idioma.
- CSS: la web sirve `public/css/style.min.css`. Edita `style.css` y regenera con `npx clean-css-cli -o public/css/style.min.css public/css/style.css`.
- CSP explícita con nonce por petición; cualquier script inline nuevo necesita `nonce="<%= cspNonce %>"`.
- `express.static` va con `redirect: false` para que `/en` y `/fr` (portada) no redirijan a `/en/` y `/fr/`.
- Medición: Google Tag Manager `GTM-5D5WS88L` con GA4 `G-EXZRJ12XRG`. Cada botón "Elegir esta opción por WhatsApp" empuja el evento `seleccion_opcion_precio` al `dataLayer` (`public/js/main.js`); falta el trigger + etiqueta GA4 en GTM para verlo en informes.
- Portada: las 4 familias se reparten en dos columnas (`.family-col`, familias 01+03 y 02+04) para que no queden huecos; en móvil se ordenan 01-04 con `.family-order-N`.
- `.two-col > *`, `.options-stack > *` llevan `min-width:0` para evitar desborde horizontal en móvil.
- Sin testimonios ni cifras de clientes (todavía no hay reseñas reales), sin formulario de contacto (WhatsApp es suficiente) y sin enlaces a redes sociales inventados.

## Próximos pasos sugeridos

1. Sustituir las recreaciones por fotos reales en cuanto haya 2-3 trabajos documentados.
2. Confirmar los precios orientativos con costes reales (sobre todo reforma integral y mantenimiento de chalets), el 15 % de margen y el tratamiento del IVA con tu gestor.
3. Añadir reseñas reales de Google Business cuando existan.
4. Crear en GTM el trigger/etiqueta para `seleccion_opcion_precio`.
