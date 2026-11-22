# Fotos de la web — cómo se colocan y qué falta

**Regla:** ninguna foto con personas trabajando. Solo trabajos terminados y sugerencias/ideas.
Las fotos con personas están en `_imagenes-retiradas/` (fuera de `public/`, no se publican).

## Método (3 fotos por servicio: básica, recomendada, premium)
```
python tools/importar_fotos.py <slug> basica.jpeg recomendada.jpeg premium.jpeg
```
Genera solo las ideas (`public/img/ideas/<slug>-1..3`), la tarjeta (recorte 4:3 de la recomendada) y la
cabecera (la premium). Reinicia el servidor (`npm start`). Si falta algún archivo, la web usa la foto
interina o el icono del servicio; nada se rompe. También puedes soltar a mano hasta 6 ideas por servicio
(`ideas/<slug>-1.jpg … -6.jpg`, 16:9).

Estilo común para generar: fotografía de interiorismo realista, luz natural suave, vivienda española de clase
media en Madrid, acabado impecable, sin personas, sin texto, sin logotipos ni marcas.
Mientras sean imágenes de IA se mantiene el aviso «imágenes ilustrativas».

## Estado por servicio (slug)
| Servicio | Estado |
|---|---|
| `banos`, `cocinas`, `suelos-revestimientos`, `armarios-carpinteria`, `ventanas-cerramientos` | **Completos** (3 fotos cada uno) |
| `fontaneria`, `limpieza-post-obra`, `reformas-parciales`, `reforma-integral` | **Completos** (v103: 3 fotos, tarjeta y cabecera) |
| `electricidad` | Faltan las 3 (cabecera retirada; la tarjeta usa el cuadro eléctrico) |
| `pladur` | Faltan las 3 (cabecera retirada) |
| `jardineria` | Faltan las 3 (tarjeta y cabecera provisionales) |
| `mantenimiento-chalets` | Faltan las 3 (tarjeta provisional, sin cabecera) |
| `pintura`, `camaras-vigilancia`, `motorizacion-persianas` | Faltan las 3 (ya tienen tarjeta y cabecera provisionales) |

Desde la v103 `data/services.js` busca primero la foto que deja el importador (`trabajos/<slug>-card.jpg`,
`hero-bloques/<slug>.jpg`) y, si no existe, usa la foto provisional de siempre; no hay que tocar código al
importar un servicio nuevo.

Sugerencias de contenido (básica → premium) para los que faltan:
- Electricidad: cuadro ordenado → iluminación empotrada en salón → iluminación de diseño con mecanismos modernos.
- Pladur: falso techo liso → foseado con LED perimetral → techo con downlights y tabique con hornacina.
- Pintura: salón en blanco → tono cálido con pared de acento → acabados decorativos.
- Jardinería y chalets: jardín cuidado de chalet adosado → con riego y setos perfilados → con zona de estar y piscina; sin personas.
- Cámaras y persianas: cámara en fachada / persiana motorizada en salón → app con varias cámaras / persianas y toldo → instalación integrada en una vivienda de diseño.
