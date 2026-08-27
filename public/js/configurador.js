// Asistente único de /configurador — fusiona el antiguo wizard guiado de 4
// pasos con el antiguo "Crea tu instalación a medida" (/crea-tu-instalacion,
// retirado). Pasos 1-2 dan contexto (vivienda, qué te importa); paso 3 deja
// marcar libremente cualquier servicio Básico + cualquier modo de la
// Plataforma IA Predictiva, con total en vivo (igual que hacía el antiguo
// creador.js); paso 4 elige el nivel de precio. El resultado final es uno de
// tres: (a) un pack real si la combinación coincide bien, (b) una
// "combinación a medida" con el total sumado si no hay pack que encaje, o
// (c) la ficha de un único servicio/modo si solo se ha marcado uno. Si no se
// marca nada en el paso 3, se recomienda igualmente en base a la prioridad
// marcada en el paso 2 (comportamiento del wizard original, para quien solo
// quiere una orientación rápida sin entrar a elegir pieza a pieza).
// Vanilla JS, sin dependencias. Todo se calcula en el navegador contra el
// JSON embebido en la página (sin llamadas al servidor).
(function () {
  var wizard = document.getElementById("configurador-wizard");
  if (!wizard) return;

  var waNumber = wizard.dataset.wa || "";
  var steps = Array.from(wizard.querySelectorAll(".wizard-step"));
  var progressSteps = Array.from(wizard.querySelectorAll(".wizard-progress-step"));
  var TOTAL_STEPS = steps.length; // 5: vivienda, prioridades, picker libre, nivel, resultado
  var currentStep = 1;
  var preseleccionAplicada = false;

  var catalogoEl = document.getElementById("configurador-catalogo");
  var catalogo = { packs: [], servicios: [], modos: [], nivelesBase: [] };
  try {
    catalogo = JSON.parse(catalogoEl.textContent);
  } catch (e) {
    catalogo = { packs: [], servicios: [], modos: [], nivelesBase: [] };
  }

  var i18nEl = document.getElementById("configurador-i18n");
  var I18N = {};
  try {
    I18N = i18nEl ? JSON.parse(i18nEl.textContent) : {};
  } catch (e) {
    I18N = {};
  }

  var VIVIENDA_LABEL = I18N.viviendaLabel || {};
  var NECESIDAD_LABEL = I18N.necesidadLabel || {};
  var NIVEL_LABEL = I18N.nivelLabel || {};
  var NIVEL_INDEX = { esencial: 0, inteligente: 1, completa: 2 };

  // Sugerencias suaves: al llegar por primera vez al paso 3, se premarca lo
  // más representativo de cada prioridad elegida en el paso 2. El cliente
  // puede desmarcar o añadir lo que quiera después — es solo un punto de
  // partida, nunca una restricción.
  var PRIORIDAD_SUGERENCIAS = {
    seguridad: { servicios: ["seguridad"], modos: ["seguridad-ia"] },
    confort: { servicios: ["domotica", "climatizacion"], modos: ["motor-meteorologico"] },
    ahorro: { servicios: ["energia-solar"], modos: [] },
    familia: { servicios: [], modos: ["cuidado-mascotas", "personas-mayores", "modo-ninos"] }
  };

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  // Escapa HTML al insertar texto dentro de innerHTML.
  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function tiene(lista, valor) {
    return lista.indexOf(valor) !== -1;
  }

  function pack(slug) {
    return catalogo.packs.find(function (p) { return p.slug === slug; });
  }
  function servicio(slug) {
    return catalogo.servicios.find(function (s) { return s.slug === slug; });
  }
  function modo(slug) {
    return catalogo.modos.find(function (m) { return m.slug === slug; });
  }
  // Devuelve la opción de precio real de un pack para el nivel elegido,
  // con fallback a Esencial si por lo que sea no hay match.
  function opcionNivel(p, nivel) {
    if (!p || !p.opciones || !p.opciones.length) return null;
    var idx = NIVEL_INDEX[nivel];
    return p.opciones[idx] || p.opciones[0];
  }
  // Nivel de hardware del Mini-PC IA Central según cuántos modos se hayan
  // marcado — igual que hacía el antiguo creador.js (START para 1-2, PRO
  // para 3+), sin que el cliente tenga que elegirlo a mano.
  function nivelBasePorModos(numModos) {
    if (!catalogo.nivelesBase.length) return null;
    if (numModos >= 3) return catalogo.nivelesBase[catalogo.nivelesBase.length - 1];
    return catalogo.nivelesBase[0];
  }

  // Coincidencia con packs: cada pack declara qué servicios/modos cubre
  // (coincideCon). Puntuamos el solape entre eso y lo que el cliente ha
  // marcado; si al menos la mitad de las "etiquetas" del pack y al menos 2
  // de ellas están cubiertas, lo sugerimos. Heredado tal cual del antiguo
  // creador.js — es la pieza que evita reinventar a mano algo que ya
  // vendemos empaquetado y más barato.
  function mejorCoincidencia(serviciosElegidos, modosElegidos) {
    var mejor = null;
    var mejorRatio = 0;
    catalogo.packs.forEach(function (p) {
      var tags = (p.coincideCon.servicios || []).concat(p.coincideCon.modos || []);
      if (!tags.length) return;
      var cubiertas = 0;
      (p.coincideCon.servicios || []).forEach(function (s) { if (tiene(serviciosElegidos, s)) cubiertas++; });
      (p.coincideCon.modos || []).forEach(function (m) { if (tiene(modosElegidos, m)) cubiertas++; });
      var ratio = cubiertas / tags.length;
      if (cubiertas >= 2 && ratio >= 0.5 && ratio > mejorRatio) {
        mejor = p;
        mejorRatio = ratio;
      }
    });
    return mejor;
  }

  // Suma de una combinación libre (paso 3): básicos "desde" + base del
  // Mini-PC (si hay algún modo marcado) + incrementos de los modos. Misma
  // lógica que el antiguo creador.js — es una estimación con los precios de
  // partida de cada pieza, no un presupuesto cerrado (para eso está la
  // visita técnica gratuita).
  function calcularTotalMedida(serviciosSlugs, modosSlugs) {
    var totalBasicos = 0;
    serviciosSlugs.forEach(function (slug) {
      var s = servicio(slug);
      if (s) totalBasicos += s.desde || 0;
    });
    var totalModos = 0;
    modosSlugs.forEach(function (slug) {
      var m = modo(slug);
      if (m) totalModos += m.precioIncremento || 0;
    });
    var base = modosSlugs.length > 0 ? nivelBasePorModos(modosSlugs.length) : null;
    var totalBase = base ? base.total : 0;
    return {
      totalBasicos: totalBasicos,
      totalModos: totalModos,
      base: base,
      totalBase: totalBase,
      total: totalBasicos + totalBase + totalModos
    };
  }

  // Recomendación de respaldo cuando no se marca nada en el paso 3 — misma
  // lógica que tenía el wizard original de 4 preguntas, adaptada a que la
  // prioridad ahora es multi-selección.
  function recomendarPorPrioridades(vivienda, prioridades) {
    if (vivienda === "negocio") {
      return { branch: "pack", item: pack("negocio"), href: "/soluciones#negocio" };
    }
    if (vivienda === "segunda-residencia") {
      return { branch: "pack", item: pack("alquiler-segunda-residencia-ia"), href: "/soluciones#alquiler-segunda-residencia-ia" };
    }
    if (tiene(prioridades, "seguridad") && vivienda === "chalet") {
      return { branch: "pack", item: pack("chalet-seguro"), href: "/soluciones#chalet-seguro" };
    }
    if (vivienda === "piso" && tiene(prioridades, "seguridad")) {
      return { branch: "pack", item: pack("hogar-inteligente"), href: "/soluciones#hogar-inteligente" };
    }
    if (tiene(prioridades, "ahorro") && prioridades.length === 1) {
      return { branch: "servicio", item: servicio("energia-solar"), href: "/servicios/energia-solar" };
    }
    return { branch: "pack", item: pack("hogar-inteligente"), href: "/soluciones#hogar-inteligente" };
  }

  function recomendar(vivienda, prioridades, serviciosElegidos, modosElegidos) {
    if (vivienda === "negocio") {
      return { branch: "pack", item: pack("negocio"), href: "/soluciones#negocio" };
    }

    var total = serviciosElegidos.length + modosElegidos.length;
    if (total === 0) {
      return recomendarPorPrioridades(vivienda, prioridades);
    }

    var match = mejorCoincidencia(serviciosElegidos, modosElegidos);
    if (match) {
      return { branch: "pack", item: pack(match.slug), href: "/soluciones#" + match.slug };
    }

    if (total === 1 && serviciosElegidos.length === 1) {
      return { branch: "servicio", item: servicio(serviciosElegidos[0]), href: "/servicios/" + serviciosElegidos[0] };
    }
    if (total === 1 && modosElegidos.length === 1) {
      return { branch: "modo", item: modo(modosElegidos[0]), href: "/servicios/ia-predictiva/" + modosElegidos[0] };
    }

    return { branch: "medida", serviciosElegidos: serviciosElegidos, modosElegidos: modosElegidos };
  }

  function getSelectedRadio(name) {
    var el = wizard.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }
  function getSelectedChecks(name) {
    return Array.from(wizard.querySelectorAll('input[name="' + name + '"]:checked')).map(function (c) { return c.value; });
  }
  function getSelectedSlugs(cssClass) {
    return Array.from(wizard.querySelectorAll("." + cssClass + ":checked")).map(function (c) { return c.dataset.slug; });
  }

  // ---- Paso 3: picker libre con total en vivo ----
  var elPickerEmpty = document.getElementById("wizard-picker-empty");
  var elPickerTotal = document.getElementById("wizard-picker-total");
  var elPickerTotalAmount = document.getElementById("wizard-picker-total-amount");

  function actualizarPicker() {
    var serviciosSlugs = getSelectedSlugs("wizard-check-servicio");
    var modosSlugs = getSelectedSlugs("wizard-check-modo");
    var hayAlgo = serviciosSlugs.length + modosSlugs.length > 0;
    if (elPickerEmpty) elPickerEmpty.hidden = hayAlgo;
    if (elPickerTotal) elPickerTotal.hidden = !hayAlgo;
    if (hayAlgo && elPickerTotalAmount) {
      var totales = calcularTotalMedida(serviciosSlugs, modosSlugs);
      elPickerTotalAmount.textContent = formatEuros(totales.total);
    }
  }

  function aplicarPreseleccion() {
    if (preseleccionAplicada) return;
    preseleccionAplicada = true;
    // Si el cliente ya ha marcado algo a mano (p. ej. volvió atrás y volvió a
    // avanzar), no se toca nada.
    if (getSelectedSlugs("wizard-check-servicio").length || getSelectedSlugs("wizard-check-modo").length) return;
    var prioridades = getSelectedChecks("config-necesidad");
    prioridades.forEach(function (p) {
      var sug = PRIORIDAD_SUGERENCIAS[p];
      if (!sug) return;
      sug.servicios.forEach(function (slug) {
        var el = wizard.querySelector('.wizard-check-servicio[data-slug="' + slug + '"]');
        if (el) el.checked = true;
      });
      sug.modos.forEach(function (slug) {
        var el = wizard.querySelector('.wizard-check-modo[data-slug="' + slug + '"]');
        if (el) el.checked = true;
      });
    });
    actualizarPicker();
  }

  wizard.querySelectorAll(".wizard-check-servicio, .wizard-check-modo").forEach(function (c) {
    c.addEventListener("change", actualizarPicker);
  });

  // ---- Navegación entre pasos ----
  function showStep(n) {
    currentStep = n;
    steps.forEach(function (s) {
      s.classList.toggle("is-active", parseInt(s.dataset.step, 10) === n);
    });
    progressSteps.forEach(function (p) {
      var pn = parseInt(p.dataset.progressStep, 10);
      p.classList.toggle("is-active", pn === n);
      p.classList.toggle("is-done", pn < n);
    });
    if (n === 3) aplicarPreseleccion();
    if (n === TOTAL_STEPS) renderResultado();
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function resumenMensajeCabecera(vivienda, prioridades) {
    var mensaje = I18N.mensajeIntro + "\n";
    mensaje += I18N.mensajeVivienda + ": " + (VIVIENDA_LABEL[vivienda] || I18N.sinEspecificar) + "\n";
    var prioridadesTexto = prioridades.map(function (p) { return NECESIDAD_LABEL[p] || p; }).join(", ");
    mensaje += I18N.mensajePrioridad + ": " + (prioridadesTexto || I18N.sinEspecificar) + "\n";
    return mensaje;
  }

  function renderResultado() {
    var vivienda = getSelectedRadio("config-vivienda");
    var prioridades = getSelectedChecks("config-necesidad");
    var serviciosElegidos = getSelectedSlugs("wizard-check-servicio");
    var modosElegidos = getSelectedSlugs("wizard-check-modo");
    var nivel = getSelectedRadio("config-nivel") || "inteligente";

    var rec = recomendar(vivienda, prioridades, serviciosElegidos, modosElegidos);
    var card = document.getElementById("wizard-result-card");
    var elWa = document.getElementById("wizard-whatsapp");

    // ---- Branch "medida": combinación a medida sin pack que encaje ----
    if (rec.branch === "medida") {
      var totales = calcularTotalMedida(rec.serviciosElegidos, rec.modosElegidos);
      var nombresServicios = rec.serviciosElegidos.map(function (s) { var x = servicio(s); return x ? x.nombre : s; });
      var nombresModos = rec.modosElegidos.map(function (m) { var x = modo(m); return x ? x.nombre : m; });

      var htmlMedida =
        '<span class="wizard-result-eyebrow">' + esc(I18N.packAMedidaEyebrow) + "</span>" +
        "<h3>" + esc(I18N.packAMedidaEyebrow) + "</h3>" +
        "<p>" + esc(I18N.packAMedidaIntro) + "</p>" +
        '<div class="wizard-result-summary" style="text-align:left; border-top:none; margin-top:0; padding-top:0;">';
      if (totales.totalBasicos > 0) {
        htmlMedida += '<div class="calc-total-row"><span>' + esc(I18N.basicos) + "</span><span>" + formatEuros(totales.totalBasicos) + "</span></div>";
      }
      if (totales.base) {
        htmlMedida += '<div class="calc-total-row"><span>' + esc(totales.base.nombre) + "</span><span>" + formatEuros(totales.totalBase) + "</span></div>";
      }
      if (totales.totalModos > 0) {
        htmlMedida += '<div class="calc-total-row"><span>' + esc(I18N.modosIALabel) + "</span><span>+" + formatEuros(totales.totalModos) + "</span></div>";
      }
      htmlMedida += '<div class="calc-total-row calc-total-final"><span>' + esc(I18N.totalEstimado) + "</span><span>" + formatEuros(totales.total) + "</span></div>";
      htmlMedida += "</div>";
      htmlMedida += '<p style="font-size:0.85rem;color:var(--gray-500);margin-top:14px;">' + esc(I18N.disclaimer) + "</p>";
      card.innerHTML = htmlMedida;

      var mensajeMedida = resumenMensajeCabecera(vivienda, prioridades);
      if (nombresServicios.length) mensajeMedida += I18N.basicos + ": " + nombresServicios.join(", ") + "\n";
      if (nombresModos.length) mensajeMedida += I18N.modosIALabel + ": " + nombresModos.join(", ") + "\n";
      mensajeMedida += I18N.mensajeTotalEstimado + ": " + formatEuros(totales.total) + "\n";
      mensajeMedida += I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensajeMedida);
      return;
    }

    // ---- Branch "modo": un único modo IA marcado ----
    if (rec.branch === "modo" && rec.item) {
      var base1 = nivelBasePorModos(1);
      var precioModo = (base1 ? base1.total : 0) + (rec.item.precioIncremento || 0);
      var htmlModo =
        '<span class="wizard-result-eyebrow">' + esc(I18N.individualModoEyebrow) + "</span>" +
        "<h3>" + esc(rec.item.nombre) + "</h3>" +
        "<p>" + esc(rec.item.descripcion) + "</p>" +
        '<span class="wizard-result-price">' + formatEuros(precioModo) + "</span>" +
        '<p style="font-size:0.82rem;color:var(--gray-500);margin-top:-14px;margin-bottom:18px;">' + esc(I18N.sobreBase) + "</p>" +
        '<a href="' + rec.href + '" class="link-arrow">' + esc(I18N.verDesgloseCompleto) + "</a>";
      card.innerHTML = htmlModo;

      var mensajeModo = resumenMensajeCabecera(vivienda, prioridades);
      mensajeModo += I18N.mensajeSolucionRecomendada + ": " + rec.item.nombre + " (" + formatEuros(precioModo) + ")\n";
      mensajeModo += I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensajeModo);
      return;
    }

    // ---- Branch "pack" o "servicio" (comportamiento original) ----
    if (!rec.item) {
      card.innerHTML =
        '<span class="wizard-result-eyebrow">' + esc(I18N.presupuestoMedidaEyebrow) + "</span>" +
        "<h3>" + esc(I18N.presupuestoMedidaTitle) + "</h3>" +
        "<p>" + esc(I18N.presupuestoMedidaBody) + "</p>";
      var mensajeGenerico = resumenMensajeCabecera(vivienda, prioridades) + I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensajeGenerico);
      return;
    }

    var esPack = rec.branch === "pack";
    var opcion = esPack ? opcionNivel(rec.item, nivel) : null;
    var precio = esPack ? (opcion ? opcion.total : null) : rec.item.desde;
    var nivelNombre = opcion ? opcion.nombre : null;

    var html =
      '<span class="wizard-result-eyebrow">' + esc(esPack ? I18N.packRecomendadoEyebrow : I18N.servicioRecomendadoEyebrow) + "</span>" +
      "<h3>" + esc(rec.item.nombre) + "</h3>" +
      "<p>" + esc(rec.item.descripcion) + "</p>" +
      (nivelNombre ? '<span class="wizard-result-nivel">' + esc(I18N.nivelPrefix) + ": " + esc(nivelNombre) + "</span>" : "") +
      '<span class="wizard-result-price">' + (precio != null ? formatEuros(precio) : esc(I18N.consultar)) + "</span>" +
      '<a href="' + rec.href + '" class="link-arrow">' + esc(I18N.verDesgloseCompleto) + "</a>";

    card.innerHTML = html;

    var mensajeSolucion = rec.item.nombre + (nivelNombre ? " " + I18N.resultadoNivelSeparador + " " + nivelNombre : "") + (precio != null ? " (" + formatEuros(precio) + ")" : "");
    var mensaje = resumenMensajeCabecera(vivienda, prioridades);
    mensaje += I18N.mensajeSolucionRecomendada + ": " + mensajeSolucion + "\n";
    mensaje += I18N.mensajeCierre;
    elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
  }

  // Habilita/deshabilita "Siguiente" en pasos con respuesta obligatoria.
  function refreshNextButtons() {
    steps.forEach(function (s) {
      var stepNum = parseInt(s.dataset.step, 10);
      var nextBtn = s.querySelector("[data-wizard-next]");
      if (!nextBtn) return;
      if (stepNum === 1) nextBtn.disabled = !getSelectedRadio("config-vivienda");
      if (stepNum === 2) nextBtn.disabled = getSelectedChecks("config-necesidad").length === 0;
      // Paso 3 (picker libre) es opcional: nunca se deshabilita.
      if (stepNum === 4) nextBtn.disabled = !getSelectedRadio("config-nivel");
    });
  }

  wizard.addEventListener("change", refreshNextButtons);

  wizard.querySelectorAll("[data-wizard-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentStep >= TOTAL_STEPS) return;
      // Nave o negocio: catálogo reducido a un único pack — se salta el
      // picker libre (paso 3) y el nivel (paso 4), igual que hacía el
      // wizard original.
      if (currentStep === 2 && getSelectedRadio("config-vivienda") === "negocio") {
        showStep(TOTAL_STEPS);
        return;
      }
      showStep(currentStep + 1);
    });
  });
  wizard.querySelectorAll("[data-wizard-back]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentStep <= 1) return;
      if (currentStep === TOTAL_STEPS && getSelectedRadio("config-vivienda") === "negocio") {
        showStep(2);
        return;
      }
      showStep(currentStep - 1);
    });
  });
  wizard.querySelectorAll("[data-wizard-restart]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      wizard.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(function (i) { i.checked = false; });
      // El nivel "Inteligente" viene premarcado por defecto en el HTML
      // (checked), así que lo restauramos también al reiniciar.
      var nivelDefault = wizard.querySelector('input[name="config-nivel"][value="inteligente"]');
      if (nivelDefault) nivelDefault.checked = true;
      preseleccionAplicada = false;
      actualizarPicker();
      refreshNextButtons();
      showStep(1);
    });
  });

  refreshNextButtons();
  actualizarPicker();
})();
