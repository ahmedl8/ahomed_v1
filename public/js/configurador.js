// Asistente de /configurador — 4 pasos (vivienda, qué te importa, qué
// controlar, nivel) fusionado con el motor de selección libre del creador
// (/crea-tu-instalacion): el paso 2 filtra qué servicios/modos reales
// aparecen en el paso 3, y el resultado final puede ser un pack existente,
// un pack a medida (suma en vivo de lo marcado) o un servicio/modo
// individual, según lo que la persona haya seleccionado. Vanilla JS, sin
// dependencias. Todo se calcula en el navegador contra el JSON embebido en
// la página (sin llamadas al servidor).
(function () {
  var wizard = document.getElementById("configurador-wizard");
  if (!wizard) return;

  var waNumber = wizard.dataset.wa || "";
  var steps = Array.from(wizard.querySelectorAll(".wizard-step"));
  var progressSteps = Array.from(wizard.querySelectorAll(".wizard-progress-step"));
  var TOTAL_STEPS = steps.length; // 5: vivienda, necesidad, controles, nivel, resultado
  var currentStep = 1;

  var catalogoEl = document.getElementById("configurador-catalogo");
  var catalogo = { packs: [], servicios: [], modos: [], necesidadCatalogo: {} };
  try {
    catalogo = JSON.parse(catalogoEl.textContent);
  } catch (e) {
    catalogo = { packs: [], servicios: [], modos: [], necesidadCatalogo: {} };
  }

  var iconosEl = document.getElementById("configurador-iconos");
  var ICONOS = {};
  try {
    ICONOS = iconosEl ? JSON.parse(iconosEl.textContent) : {};
  } catch (e) {
    ICONOS = {};
  }

  var i18nEl = document.getElementById("configurador-i18n");
  var I18N = {};
  try {
    I18N = i18nEl ? JSON.parse(i18nEl.textContent) : {};
  } catch (e) {
    I18N = {};
  }

  var VIVIENDA_LABEL = I18N.viviendaLabel || {
    piso: "Piso",
    chalet: "Chalet",
    "segunda-residencia": "Segunda residencia",
    negocio: "Nave o negocio"
  };
  var NECESIDAD_LABEL = I18N.necesidadLabel || {
    seguridad: "Seguridad",
    confort: "Confort",
    ahorro: "Ahorro energético",
    familia: "Familia (mayores, niños y bebés, mascotas)"
  };
  var NIVEL_LABEL = I18N.nivelLabel || { basica: "Básica", inteligente: "Inteligente", completa: "Completa" };
  var NIVEL_INDEX = { basica: 0, inteligente: 1, completa: 2 };

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
  function opcionNivel(p, nivel) {
    if (!p || !p.opciones || !p.opciones.length) return null;
    var idx = NIVEL_INDEX[nivel];
    return p.opciones[idx] || p.opciones[0];
  }

  var controlOptionsEl = document.getElementById("config-control-options");

  function iconoPara(slug) {
    return ICONOS[slug] || ICONOS._default || "necesitas-mejorar";
  }

  function tarjetaOpcionHTML(tipo, slug, nombre, desc, precio) {
    var icono = iconoPara(slug);
    return (
      '<label class="wizard-option">' +
      '<input type="checkbox" name="config-control" value="' + esc(tipo + ":" + slug) + '">' +
      '<span class="wizard-option-card">' +
      '<span class="wizard-option-icon wizard-option-icon-img"><picture>' +
      '<source srcset="/img/iconos/' + esc(icono) + '.webp" type="image/webp">' +
      '<img src="/img/iconos/' + esc(icono) + '.png" alt=""></picture></span>' +
      "<h4>" + esc(nombre) + "</h4>" +
      "<p>" + esc(desc || "") + (precio != null ? " · " + formatEuros(precio) : "") + "</p>" +
      "</span></label>"
    );
  }

  function actualizarPaso3(necesidades) {
    if (!controlOptionsEl) return;
    var vistos = {};
    var html = "";
    necesidades.forEach(function (nec) {
      var grupo = catalogo.necesidadCatalogo[nec];
      if (!grupo) return;
      (grupo.servicios || []).forEach(function (slug) {
        var key = "servicio:" + slug;
        if (vistos[key]) return;
        vistos[key] = true;
        var s = servicio(slug);
        if (!s) return;
        html += tarjetaOpcionHTML("servicio", slug, s.nombre, s.descripcion, s.desde);
      });
      (grupo.modos || []).forEach(function (slug) {
        var key = "modo:" + slug;
        if (vistos[key]) return;
        vistos[key] = true;
        var m = modo(slug);
        if (!m) return;
        html += tarjetaOpcionHTML("modo", slug, m.nombre, m.descripcion, m.esProyecto ? null : m.precioIncremento);
      });
    });
    controlOptionsEl.innerHTML = html;
  }

  function mejorCoincidencia(serviciosElegidos, modosElegidos) {
    var mejor = null;
    var mejorRatio = 0;
    catalogo.packs.forEach(function (p) {
      var tags = (p.servicios || []).concat(p.modos || []);
      if (!tags.length) return;
      var cubiertas = 0;
      (p.servicios || []).forEach(function (s) { if (serviciosElegidos.indexOf(s) !== -1) cubiertas++; });
      (p.modos || []).forEach(function (m) { if (modosElegidos.indexOf(m) !== -1) cubiertas++; });
      var ratio = cubiertas / tags.length;
      if (cubiertas >= 2 && ratio >= 0.5 && ratio > mejorRatio) {
        mejor = p;
        mejorRatio = ratio;
      }
    });
    return mejor;
  }

  function getSelectedRadio(name) {
    var el = wizard.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }
  function getSelectedChecks(name) {
    return Array.from(wizard.querySelectorAll('input[name="' + name + '"]:checked')).map(function (c) { return c.value; });
  }

  function getControlSeleccion() {
    var raw = getSelectedChecks("config-control");
    var servicios = [];
    var modos = [];
    raw.forEach(function (v) {
      var partes = v.split(":");
      if (partes[0] === "servicio") servicios.push(partes[1]);
      else if (partes[0] === "modo") modos.push(partes[1]);
    });
    return { servicios: servicios, modos: modos, raw: raw };
  }

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
    if (n === TOTAL_STEPS) renderResultado();
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function calcularPackAMedida(serviciosSlugs, modosSlugs) {
    var items = [];
    var total = 0;
    var necesitaMiniPc = false;

    serviciosSlugs.forEach(function (slug) {
      var s = servicio(slug);
      if (!s) return;
      items.push({ nombre: s.nombre, precio: s.desde });
      total += s.desde || 0;
    });

    modosSlugs.forEach(function (slug) {
      var m = modo(slug);
      if (!m) return;
      necesitaMiniPc = true;
      if (!m.esProyecto) {
        items.push({ nombre: m.nombre, precio: m.precioIncremento });
        total += m.precioIncremento || 0;
      } else {
        items.push({ nombre: m.nombre, precio: null });
      }
    });

    return { items: items, total: total, necesitaMiniPc: necesitaMiniPc };
  }

  function renderResultado() {
    var vivienda = getSelectedRadio("config-vivienda");
    var necesidades = getSelectedChecks("config-necesidad");
    var control = getControlSeleccion();
    var nivel = getSelectedRadio("config-nivel") || "inteligente";

    var card = document.getElementById("wizard-result-card");
    var elWa = document.getElementById("wizard-whatsapp");

    var necesidadesTexto = necesidades.map(function (n) { return NECESIDAD_LABEL[n] || n; }).join(", ");

    var packFijo = null;
    if (vivienda === "negocio") packFijo = { item: catalogo.seguridadIANaves, href: "/servicios/naves-fincas/seguridad-ia" };
    else if (vivienda === "segunda-residencia") packFijo = { item: pack("alquiler-segunda-residencia-ia"), href: "/soluciones#alquiler-segunda-residencia-ia" };

    var mensaje = I18N.mensajeIntro + "\n";
    mensaje += I18N.mensajeVivienda + ": " + (VIVIENDA_LABEL[vivienda] || I18N.sinEspecificar) + "\n";
    mensaje += I18N.mensajePrioridad + ": " + (necesidadesTexto || I18N.sinEspecificar) + "\n";

    if (packFijo && packFijo.item) {
      var opcionFija = opcionNivel(packFijo.item, nivel);
      var precioFijo = opcionFija ? opcionFija.total : null;
      card.innerHTML =
        '<span class="wizard-result-eyebrow">' + esc(I18N.packRecomendadoEyebrow) + "</span>" +
        "<h3>" + esc(packFijo.item.nombre) + "</h3>" +
        "<p>" + esc(packFijo.item.descripcion) + "</p>" +
        (opcionFija ? '<span class="wizard-result-nivel">' + esc(I18N.nivelPrefix) + ": " + esc(opcionFija.nombre) + "</span>" : "") +
        '<span class="wizard-result-price">' + (precioFijo != null ? formatEuros(precioFijo) : esc(I18N.consultar)) + "</span>" +
        '<a href="' + packFijo.href + '" class="link-arrow">' + esc(I18N.verDesgloseCompleto) + "</a>";
      mensaje += I18N.mensajeSolucionRecomendada + ": " + packFijo.item.nombre + (opcionFija ? " " + I18N.resultadoNivelSeparador + " " + opcionFija.nombre : "") + "\n";
      mensaje += I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
      return;
    }

    var totalSeleccion = control.servicios.length + control.modos.length;

    if (totalSeleccion === 0) {
      card.innerHTML =
        '<span class="wizard-result-eyebrow">' + esc(I18N.presupuestoMedidaEyebrow) + "</span>" +
        "<h3>" + esc(I18N.presupuestoMedidaTitle) + "</h3>" +
        "<p>" + esc(I18N.presupuestoMedidaBody) + "</p>";
      mensaje += I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
      return;
    }

    var match = mejorCoincidencia(control.servicios, control.modos);

    if (match) {
      var opcion = opcionNivel(match, nivel);
      var precio = opcion ? opcion.total : null;
      card.innerHTML =
        '<span class="wizard-result-eyebrow">' + esc(I18N.packRecomendadoEyebrow) + "</span>" +
        "<h3>" + esc(match.nombre) + "</h3>" +
        "<p>" + esc(match.descripcion) + "</p>" +
        (opcion ? '<span class="wizard-result-nivel">' + esc(I18N.nivelPrefix) + ": " + esc(opcion.nombre) + "</span>" : "") +
        '<span class="wizard-result-price">' + (precio != null ? formatEuros(precio) : esc(I18N.consultar)) + "</span>" +
        '<a href="/soluciones#' + match.slug + '" class="link-arrow">' + esc(I18N.verDesgloseCompleto) + "</a>";

      mensaje += I18N.mensajeQuiereControlar + ": " + control.raw.map(function (v) {
        var partes = v.split(":");
        var item = partes[0] === "servicio" ? servicio(partes[1]) : modo(partes[1]);
        return item ? item.nombre : v;
      }).join(", ") + "\n";
      mensaje += I18N.mensajeSolucionRecomendada + ": " + match.nombre + (opcion ? " " + I18N.resultadoNivelSeparador + " " + opcion.nombre : "") + "\n";
      mensaje += I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
      return;
    }

    var calculo = calcularPackAMedida(control.servicios, control.modos);
    var esIndividual = totalSeleccion === 1;

    if (esIndividual) {
      var soloTipo = control.raw[0].split(":")[0];
      var soloSlug = control.raw[0].split(":")[1];
      var item = soloTipo === "servicio" ? servicio(soloSlug) : modo(soloSlug);
      var href = soloTipo === "servicio" ? "/servicios/" + soloSlug : "/servicios/ia-predictiva/" + soloSlug;
      var precioItem = calculo.total;
      card.innerHTML =
        '<span class="wizard-result-eyebrow">' + esc(I18N.servicioRecomendadoEyebrow) + "</span>" +
        "<h3>" + esc(item.nombre) + "</h3>" +
        "<p>" + esc(item.descripcion || "") + "</p>" +
        '<span class="wizard-result-price">' + (precioItem ? formatEuros(precioItem) : esc(I18N.consultar)) + "</span>" +
        (calculo.necesitaMiniPc ? '<p class="wizard-result-summary">' + esc(I18N.requiereMiniPc) + "</p>" : "") +
        '<a href="' + href + '" class="link-arrow">' + esc(I18N.verDesgloseCompleto) + "</a>";

      mensaje += I18N.mensajeSolucionRecomendada + ": " + item.nombre + (precioItem ? " (" + formatEuros(precioItem) + ")" : "") + "\n";
      mensaje += I18N.mensajeCierre;
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
      return;
    }

    var itemsHTML = calculo.items.map(function (it) {
      return '<li>' + esc(it.nombre) + (it.precio != null ? ' — <strong>' + formatEuros(it.precio) + '</strong>' : '') + '</li>';
    }).join("");

    card.innerHTML =
      '<span class="wizard-result-eyebrow">' + esc(I18N.packAMedidaEyebrow) + "</span>" +
      "<h3>" + esc(I18N.packAMedidaTitle) + "</h3>" +
      '<ul class="wizard-result-items">' + itemsHTML + "</ul>" +
      '<span class="wizard-result-price">' + formatEuros(calculo.total) + "</span>" +
      (calculo.necesitaMiniPc ? '<p class="wizard-result-summary">' + esc(I18N.requiereMiniPc) + "</p>" : "") +
      '<a href="/crea-tu-instalacion" class="link-arrow">' + esc(I18N.masElementos) + "</a>";

    mensaje += I18N.mensajeQuiereControlar + ": " + calculo.items.map(function (it) { return it.nombre; }).join(", ") + "\n";
    mensaje += I18N.mensajePackAMedida + ": " + formatEuros(calculo.total) + "\n";
    mensaje += I18N.mensajeCierre;
    elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
  }

  function refreshNextButtons() {
    steps.forEach(function (s) {
      var stepNum = parseInt(s.dataset.step, 10);
      var nextBtn = s.querySelector("[data-wizard-next]");
      if (!nextBtn) return;
      if (stepNum === 1) nextBtn.disabled = !getSelectedRadio("config-vivienda");
      if (stepNum === 2) nextBtn.disabled = getSelectedChecks("config-necesidad").length === 0;
      if (stepNum === 4) nextBtn.disabled = !getSelectedRadio("config-nivel");
    });
  }

  wizard.addEventListener("change", function (e) {
    if (e.target && e.target.name === "config-necesidad") {
      actualizarPaso3(getSelectedChecks("config-necesidad"));
    }
    refreshNextButtons();
  });

  wizard.querySelectorAll("[data-wizard-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentStep < TOTAL_STEPS) showStep(currentStep + 1);
    });
  });
  wizard.querySelectorAll("[data-wizard-back]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentStep > 1) showStep(currentStep - 1);
    });
  });
  wizard.querySelectorAll("[data-wizard-restart]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      wizard.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(function (i) { i.checked = false; });
      var nivelDefault = wizard.querySelector('input[name="config-nivel"][value="inteligente"]');
      if (nivelDefault) nivelDefault.checked = true;
      actualizarPaso3([]);
      refreshNextButtons();
      showStep(1);
    });
  });

  refreshNextButtons();
})();
