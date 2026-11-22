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
**Los 16 servicios están completos** (3 fotos cada uno, con tarjeta y cabecera): `electricidad`, `fontaneria`,
`reformas-parciales`, `reforma-integral`, `banos`, `cocinas`, `suelos-revestimientos`, `armarios-carpinteria`,
`pintura`, `pladur`, `jardineria`, `mantenimiento-chalets`, `limpieza-post-obra`, `camaras-vigilancia`,
`motorizacion-persianas` y `ventanas-cerramientos` (v107).

`data/services.js` busca primero la foto que deja el importador (`trabajos/<slug>-card.jpg`,
`hero-bloques/<slug>.jpg`) y, si no existe, usa la foto provisional de siempre; no hay que tocar código al
importar un servicio nuevo o al sustituir una foto. El encuadre vertical de cada cabecera se ajusta con
`heroPosicion` (p. ej. `"50% 45%"`) en la ficha del servicio, porque la franja de la cabecera es muy apaisada.
