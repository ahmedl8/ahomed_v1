// i18n/content.js
// Applies per-language content translations onto the canonical Spanish data
// objects (services.js, packs, bloques, escenarios, galeria, ia-predictiva,
// naves-fincas). Translations are stored as flat "path -> text" dictionaries
// in /locales/<lang>/content.json, generated to mirror the structure walked
// here. Any string not present in the dictionary silently falls back to the
// original Spanish text, so partial/incremental translation is always safe.

const fs = require("fs");
const path = require("path");

const NON_TRANSLATABLE_KEYS = new Set([
  "slug", "icono", "imagen", "imagenAntes", "imagenDespues", "heroImagen", "video", "src", "poster",
  "href", "bloque", "grupo", "publico", "tipo", "versionAlternativa", "letra",
  "numero", "precio", "precioIncremento", "desde", "total", "destacada", "esProyecto",
  "whatsapp", "web", "email", "packSugerido", "modos", "media", "colorAcento",
  "servicios", "enlace", "familia"
]);

function keyFor(item) {
  if (item && typeof item === "object" && typeof item.slug === "string") return "slug:" + item.slug;
  return null;
}

function applyPath(node, nodePath, dict) {
  if (node == null) return node;
  if (typeof node === "string") {
    return Object.prototype.hasOwnProperty.call(dict, nodePath) ? dict[nodePath] : node;
  }
  if (Array.isArray(node)) {
    return node.map((item, i) => {
      const k = keyFor(item);
      const seg = k ? `[${k}]` : `[${i}]`;
      return applyPath(item, nodePath + seg, dict);
    });
  }
  if (typeof node === "object") {
    const out = {};
    for (const k of Object.keys(node)) {
      if (NON_TRANSLATABLE_KEYS.has(k)) {
        out[k] = node[k];
        continue;
      }
      out[k] = applyPath(node[k], nodePath ? `${nodePath}.${k}` : k, dict);
    }
    return out;
  }
  return node;
}

const cache = {};
function loadDict(lang) {
  if (lang === "es") return {};
  if (cache[lang]) return cache[lang];
  const file = path.join(__dirname, "..", "locales", lang, "content.json");
  let dict = {};
  try {
    dict = JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch (e) {
    dict = {};
  }
  cache[lang] = dict;
  return dict;
}

// rootName must match the key used when the dictionaries were generated
// (e.g. "services", "packs", "bloques", "escenarios", "galeria", "modos",
// "instalacionBase", "familiasIA", "seguridadIANaves", "ventajas", "comoFunciona", "empresa")
function translate(rootName, data, lang) {
  if (!lang || lang === "es") return data;
  const dict = loadDict(lang);
  return applyPath(data, rootName, dict);
}

module.exports = { translate, applyPath, NON_TRANSLATABLE_KEYS };
