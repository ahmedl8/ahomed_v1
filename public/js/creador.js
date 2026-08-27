// Creador de instalación a medida (/crea-tu-instalacion).
// Igual que calculadora-ia.js pero para toda la casa: suma servicios Básicos
// + Mini-PC IA (si aplica) + modos IA, en vivo, sin llamadas al servidor.
// Además compara la selección contra el catálogo de packs (embebido en JSON
// en la página) para avisar cuando lo que el cliente está montando a mano se
// parece ya a un pack existente — así no reinventa algo que vendemos
// empaquetado, a menudo con mejor margen para AHOMED y mejor precio para él.
(function () {
  var picker = document.querySelector(".creador-picker");
  if (!picker) return;

  var waNumber = picker.dataset.wa || "";
  var checksServicios = picker.querySelectorAll(".creador-check-servicio");
  var checksModos = picker.querySelectorAll(".creador-check-modo");
  var nivelRadios = picker.querySelectorAll(".creador-nivel-radio");
  var nivelHint = document.getElementById("creador-nivel-hint");

  var elEmptyHint = document.getElementById("creador-empty-hint");
  var elRowBasicos = document.getElementById("creador-row-basicos");
  var elTotalBasicos = document.getElementById("creador-total-basicos");
  var elRowBase = document.getElementById("creador-row-base");
  var elBaseLabel = document.getElementById("creador-base-label");
  var elTotalBase = document.getElementById("creador-total-base");
  var elRowModos = document.getElementById("creador-row-modos");
  var elTotalModos = document.getElementById("creador-total-modos");
  var elTotal = document.getElementById("creador-total");
  var elWa = document.getElementById("creador-whatsapp");

  var elMatch = document.getElementById("creador-match");
  var elMatchBody = document.getElementById("creador-match-body");
  var elMatchLink = document.getElementById("creador-match-link");

  var catalogoEl = document.getElementById("creador-catalogo");
  var packs = [];
  try {
    packs = catalogoEl ? JSON.parse(catalogoEl.textContent) : [];
  } catch (e) {
    packs = [];
  }

  var i18nEl = document.getElementById("creador-i18n");
  var I18N = {};
  try {
    I18N = i18nEl ? JSON.parse(i18nEl.textContent) : {};
  } catch (e) {
    I18N = {};
  }
  var MINI_PC_CENTRAL = I18N.miniPcCentral || "Mini-PC IA Central";

  var nivelElegidoManualmente = false;

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  // Sustituye {numModos} por el valor real en un texto de I18N.
  function conNumModos(str, numModos) {
    return (str || "").split("{numModos}").join(numModos);
  }

  function nivelActivo() {
    var checked = picker.querySelector(".creador-nivel-radio:checked");
    return checked || nivelRadios[0];
  }

  // Coincidencia con packs: cada pack declara qué servicios/modos cubre
  // (coincideCon en data/services.js). Puntuamos el solape entre eso y lo
  // que el cliente ha marcado; si al menos la mitad de las "etiquetas" del
  // pack y al menos 2 de ellas están cubiertas, lo sugerimos.
  function mejorCoincidencia(serviciosElegidos, modosElegidos) {
    var mejor = null;
    var mejorRatio = 0;
    packs.forEach(function (p) {
      var tags = p.servicios.concat(p.modos);
      if (!tags.length) return;
      var cubiertas = 0;
      p.servicios.forEach(function (s) { if (serviciosElegidos.indexOf(s) !== -1) cubiertas++; });
      p.modos.forEach(function (m) { if (modosElegidos.indexOf(m) !== -1) cubiertas++; });
      var ratio = cubiertas / tags.length;
      if (cubiertas >= 2 && ratio >= 0.5 && ratio > mejorRatio) {
        mejor = p;
        mejorRatio = ratio;
      }
    });
    return mejor;
  }

  function update() {
    var totalBasicos = 0;
    var serviciosElegidos = [];
    var nombresServicios = [];
    checksServicios.forEach(function (c) {
      if (c.checked) {
        totalBasicos += parseInt(c.dataset.precio, 10) || 0;
        serviciosElegidos.push(c.dataset.slug);
        nombresServicios.push(c.dataset.nombre);
      }
    });

    var totalModos = 0;
    var modosElegidos = [];
    var nombresModos = [];
    checksModos.forEach(function (c) {
      if (c.checked) {
        totalModos += parseInt(c.dataset.precio, 10) || 0;
        modosElegidos.push(c.dataset.slug);
        nombresModos.push(c.dataset.nombre);
      }
    });

    var numModos = modosElegidos.length;

    // Auto-sugerencia de nivel PRO a partir de 3 modos, igual que en la
    // calculadora de la Plataforma IA Predictiva.
    if (!nivelElegidoManualmente && nivelRadios.length > 1) {
      var proRadio = nivelRadios[nivelRadios.length - 1];
      var startRadio = nivelRadios[0];
      if (numModos >= 3 && !proRadio.checked) proRadio.checked = true;
      else if (numModos > 0 && numModos < 3 && !startRadio.checked) startRadio.checked = true;
    }

    var nivel = nivelActivo();
    var baseTotal = numModos > 0 ? (parseInt(nivel.value, 10) || 0) : 0;
    var nombreNivel = nivel.dataset.nombre || MINI_PC_CENTRAL;

    var total = totalBasicos + baseTotal + totalModos;

    var hayAlgo = serviciosElegidos.length > 0 || numModos > 0;
    elEmptyHint.hidden = hayAlgo;

    elRowBasicos.hidden = totalBasicos === 0;
    elTotalBasicos.textContent = formatEuros(totalBasicos);

    elRowBase.hidden = baseTotal === 0;
    elBaseLabel.textContent = nombreNivel;
    elTotalBase.textContent = formatEuros(baseTotal);

    elRowModos.hidden = totalModos === 0;
    elTotalModos.textContent = "+" + formatEuros(totalModos);

    elTotal.textContent = formatEuros(total);

    if (nivelHint) {
      if (numModos === 0) {
        nivelHint.textContent = "";
      } else if (numModos >= 3) {
        nivelHint.textContent = conNumModos(I18N.nivelHintPro, numModos);
      } else {
        nivelHint.textContent = I18N.nivelHintStart || "";
      }
    }

    // Coincidencia con pack
    var match = mejorCoincidencia(serviciosElegidos, modosElegidos);
    if (match && hayAlgo) {
      elMatch.hidden = false;
      if (match.desde <= total) {
        elMatchBody.textContent = match.nombre + ", " + I18N.matchMejorPrecio + " " + formatEuros(match.desde) + ".";
      } else {
        var diferencia = match.desde - total;
        elMatchBody.textContent = match.nombre + " — " + I18N.matchDiferenciaPrefix + " " + formatEuros(diferencia) + " " + I18N.matchDiferenciaSuffix;
      }
      elMatchLink.href = "/soluciones#" + match.slug;
    } else {
      elMatch.hidden = true;
    }

    var mensaje = I18N.mensajeIntro + "\n";
    if (nombresServicios.length) {
      mensaje += I18N.mensajeBasicos + ": " + nombresServicios.join(", ") + "\n";
    }
    if (numModos > 0) {
      mensaje += nombreNivel + " + " + I18N.mensajeModosIA + ": " + nombresModos.join(", ") + "\n";
    }
    if (!hayAlgo) {
      mensaje += I18N.mensajeSinNada + "\n";
    }
    mensaje += I18N.mensajeTotalEstimado + ": " + formatEuros(total);
    if (match) mensaje += "\n" + I18N.mensajeSeParece + ": " + match.nombre;

    if (elWa) {
      // v48: faltaba el prefijo de país "34" (sí lo llevan configurador.js y
      // calculadora-ia.js) — sin él, wa.me no resuelve al número correcto.
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
    }
  }

  nivelRadios.forEach(function (r) {
    r.addEventListener("change", function () {
      nivelElegidoManualmente = true;
      update();
    });
  });
  checksServicios.forEach(function (c) { c.addEventListener("change", update); });
  checksModos.forEach(function (c) { c.addEventListener("change", update); });

  update();
})();
