// Asistente de /configurador — 3 pasos (vivienda, necesidad, control deseado)
// que recomienda un pack o servicio real del catálogo AHOMED y prepara el
// mensaje de WhatsApp con el resumen exacto de las respuestas.
// Vanilla JS, sin dependencias, coherente con calculadora-ia.js. La
// recomendación se calcula en el navegador contra el JSON embebido en la
// página (sin llamadas al servidor).
(function () {
  var wizard = document.getElementById("configurador-wizard");
  if (!wizard) return;

  var waNumber = wizard.dataset.wa || "";
  var steps = Array.from(wizard.querySelectorAll(".wizard-step"));
  var progressSteps = Array.from(wizard.querySelectorAll(".wizard-progress-step"));
  var currentStep = 1;

  var catalogoEl = document.getElementById("configurador-catalogo");
  var catalogo = { packs: [], servicios: [] };
  try {
    catalogo = JSON.parse(catalogoEl.textContent);
  } catch (e) {
    catalogo = { packs: [], servicios: [] };
  }

  var VIVIENDA_LABEL = {
    piso: "Piso",
    chalet: "Chalet",
    "segunda-residencia": "Segunda residencia",
    negocio: "Nave o negocio"
  };
  var NECESIDAD_LABEL = {
    seguridad: "Seguridad",
    confort: "Confort",
    ahorro: "Ahorro energético",
    familia: "Familia (mayores, niños y bebés, mascotas)"
  };

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  function pack(slug) {
    return catalogo.packs.find(function (p) { return p.slug === slug; });
  }
  function servicio(slug) {
    return catalogo.servicios.find(function (s) { return s.slug === slug; });
  }

  // Mapa de recomendación: siempre apunta a un pack o servicio real del
  // catálogo (nunca a algo inventado). El caso "ahorro" recomienda el
  // servicio de energía solar en vez de un pack, porque ningún pack actual
  // combina energía con el resto — se cotiza aparte.
  function recomendar(vivienda, necesidad) {
    if (vivienda === "negocio") {
      return { tipo: "pack", item: pack("negocio"), href: "/packs#negocio" };
    }
    if (vivienda === "segunda-residencia") {
      return { tipo: "pack", item: pack("alquiler-segunda-residencia-ia"), href: "/packs#alquiler-segunda-residencia-ia" };
    }
    if (necesidad === "ahorro") {
      var s = servicio("energia-solar");
      return { tipo: "servicio", item: s, href: "/servicios/energia-solar" };
    }
    if (necesidad === "seguridad" && vivienda === "chalet") {
      return { tipo: "pack", item: pack("chalet-seguro"), href: "/packs#chalet-seguro" };
    }
    if (vivienda === "piso" && necesidad === "seguridad") {
      return { tipo: "pack", item: pack("hogar-inteligente"), href: "/packs#hogar-inteligente" };
    }
    if (necesidad === "familia" || necesidad === "confort") {
      return { tipo: "pack", item: pack("hogar-inteligente"), href: "/packs#hogar-inteligente" };
    }
    // Por defecto: piso sin necesidad de IA marcada todavía → pack de entrada
    if (vivienda === "piso") {
      return { tipo: "pack", item: pack("piso-nuevo"), href: "/packs#piso-nuevo" };
    }
    return { tipo: "pack", item: pack("hogar-inteligente"), href: "/packs#hogar-inteligente" };
  }

  function getSelectedRadio(name) {
    var el = wizard.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }
  function getSelectedChecks(name) {
    return Array.from(wizard.querySelectorAll('input[name="' + name + '"]:checked')).map(function (c) { return c.value; });
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
    if (n === 4) renderResultado();
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderResultado() {
    var vivienda = getSelectedRadio("config-vivienda");
    var necesidad = getSelectedRadio("config-necesidad");
    var controles = getSelectedChecks("config-control");

    var rec = recomendar(vivienda, necesidad);
    var card = document.getElementById("wizard-result-card");
    var elWa = document.getElementById("wizard-whatsapp");

    if (!rec.item) {
      card.innerHTML =
        '<span class="wizard-result-eyebrow">Presupuesto a medida</span>' +
        "<h3>Hablemos de tu proyecto</h3>" +
        "<p>Con lo que nos cuentas, lo mejor es verlo en la visita técnica gratuita para darte un precio ajustado.</p>";
    } else {
      var esPack = rec.tipo === "pack";
      card.innerHTML =
        '<span class="wizard-result-eyebrow">' + (esPack ? "Pack recomendado" : "Servicio recomendado") + "</span>" +
        "<h3>" + rec.item.nombre + "</h3>" +
        "<p>" + rec.item.descripcion + "</p>" +
        '<span class="wizard-result-price">Desde ' + formatEuros(rec.item.desde) + "</span>" +
        '<a href="' + rec.href + '" class="link-arrow">Ver desglose completo →</a>' +
        '<div class="wizard-result-summary">' +
        (vivienda ? "Vivienda: " + (VIVIENDA_LABEL[vivienda] || vivienda) + "<br>" : "") +
        (necesidad ? "Prioridad: " + (NECESIDAD_LABEL[necesidad] || necesidad) + "<br>" : "") +
        (controles.length ? "Quiere controlar: " + controles.join(", ") : "") +
        "</div>";
    }

    var mensaje = "Hola, he usado el configurador de AHOMED y esto es lo que necesito:\n";
    mensaje += "Vivienda: " + (VIVIENDA_LABEL[vivienda] || "sin especificar") + "\n";
    mensaje += "Prioridad: " + (NECESIDAD_LABEL[necesidad] || "sin especificar") + "\n";
    if (controles.length) mensaje += "Quiero controlar: " + controles.join(", ") + "\n";
    if (rec.item) mensaje += "Solución recomendada: " + rec.item.nombre + " (desde " + formatEuros(rec.item.desde) + ")\n";
    mensaje += "¿Podéis darme un presupuesto?";

    elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
  }

  // Habilita/deshabilita "Siguiente" en pasos de una sola respuesta obligatoria
  function refreshNextButtons() {
    steps.forEach(function (s) {
      var stepNum = parseInt(s.dataset.step, 10);
      var nextBtn = s.querySelector("[data-wizard-next]");
      if (!nextBtn) return;
      if (stepNum === 1) nextBtn.disabled = !getSelectedRadio("config-vivienda");
      if (stepNum === 2) nextBtn.disabled = !getSelectedRadio("config-necesidad");
      // Paso 3 (control deseado) es opcional: nunca se deshabilita.
    });
  }

  wizard.addEventListener("change", refreshNextButtons);

  wizard.querySelectorAll("[data-wizard-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentStep < 4) showStep(currentStep + 1);
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
      refreshNextButtons();
      showStep(1);
    });
  });

  refreshNextButtons();
})();
