// i18n/ui.js
// Simple key -> string dictionary for site chrome (nav, footer, buttons,
// generic labels) that isn't part of the data files. Spanish text always
// lives directly in the views as the fallback, so a missing key in fr/en
// just falls back to the key name itself (visibly wrong, easy to spot)
// rather than crashing a render.
const fs = require("fs");
const path = require("path");

const cache = {};
function loadDict(lang) {
  if (cache[lang]) return cache[lang];
  const file = path.join(__dirname, "..", "locales", lang, "common.json");
  let dict = {};
  try {
    dict = JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch (e) {
    dict = {};
  }
  cache[lang] = dict;
  return dict;
}

function t(key, lang) {
  if (!lang || lang === "es") {
    const es = loadDict("es");
    return Object.prototype.hasOwnProperty.call(es, key) ? es[key] : key;
  }
  const dict = loadDict(lang);
  if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  // Fallback a español si falta la traducción, y a la propia clave si tampoco existe en español
  const es = loadDict("es");
  return Object.prototype.hasOwnProperty.call(es, key) ? es[key] : key;
}

// Igual que t(), pero sustituye placeholders {nombre} por los valores dados en
// `vars`, reemplazando TODAS las ocurrencias de cada uno (no solo la primera).
function tv(key, lang, vars) {
  let str = t(key, lang);
  if (!vars) return str;
  for (const [k, v] of Object.entries(vars)) {
    str = str.split(`{${k}}`).join(v);
  }
  return str;
}

module.exports = { t, tv };
