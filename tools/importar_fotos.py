#!/usr/bin/env python3
"""Coloca las 3 fotos de un servicio (básica, recomendada, premium) en la web.

Uso (desde la carpeta ahomed/):
    python tools/importar_fotos.py <slug> basica.jpeg recomendada.jpeg premium.jpeg

Genera:
  public/img/ideas/<slug>-1|2|3 (.jpg y .webp)   -> bloque «Ideas» de la ficha
  public/img/trabajos/<slug>-card (.jpg/.webp)   -> tarjeta en /servicios (recorte 4:3 de la recomendada)
  public/img/hero-bloques/<slug> (.jpg/.webp)    -> cabecera de la ficha (la premium)
Después reinicia el servidor. Requiere Pillow (pip install pillow).
"""
import sys
from pathlib import Path
from PIL import Image

if len(sys.argv) != 5:
    sys.exit(__doc__)
slug, basica, recom, prem = sys.argv[1:]
img = Path(__file__).resolve().parent.parent / "public" / "img"

def guardar(im, destino):
    destino.parent.mkdir(parents=True, exist_ok=True)
    im.save(destino.with_suffix(".jpg"), quality=85, optimize=True)
    im.save(destino.with_suffix(".webp"), quality=80)

for n, f in enumerate((basica, recom, prem), 1):
    guardar(Image.open(f).convert("RGB"), img / "ideas" / f"{slug}-{n}")
r = Image.open(recom).convert("RGB")
w, h = r.size
nw = int(h * 4 / 3)
x = max((w - nw) // 2, 0)
guardar(r.crop((x, 0, x + min(nw, w), h)).resize((800, 600), Image.LANCZOS), img / "trabajos" / f"{slug}-card")
guardar(Image.open(prem).convert("RGB"), img / "hero-bloques" / slug)
print(f"Listo: {slug}. Reinicia el servidor (npm start).")
