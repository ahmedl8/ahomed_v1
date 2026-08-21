// Asistente de /configurador — 4 pasos (vivienda, necesidad, control deseado,
// nivel) que recomienda un pack o servicio real del catálogo AHOMED y
// prepara el mensaje de WhatsApp con el resumen exacto de las respuestas.
// Vanilla JS, sin dependencias, coherente con calculadora-ia.js. La
// recomendación se calcula en el navegador contra el JSON embebido en la
// página (sin llamadas al servidor).
(function () {
  var wizard = document.getElementById("configurador-wizard");
  if (!wizard) return;

  var waNumber = wizard.dataset.wa || "";
  var steps = Array.from(wizard.querySelectorAll(".wizard-step"));
  var progressSteps = Array.from(wizard.querySelectorAll(".wizard-progress-step"));
  var TOTAL_STEPS = steps.length; // 5: vivienda, necesidad, controles, nivel, resultado
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
  // v44: paso 4. Índice dentro de pack.opciones — los 3 niveles existen de
  // verdad en data/services.js para los 5 packs (Esencial/Inteligente/
  // Completa), así que aquí no se inventa ningún dato nuevo, solo se deja
  // elegir cuál de los 3 precios reales se muestra.
  var NIVEL_LABEL = { esencial: "Esencial", inteligente: "Inteligente", completa: "Completa" };
  var NIVEL_INDEX = { esencial: 0, inteligente: 1, completa: 2 };

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  function pack(slug) {
    return catalogo.packs.find(function (p) { return p.slug === slug; });
  }
  function servicio(slug) {
    return catalogo.servicios.find(function (s) { return s.slug === slug; });
  }
  // Devuelve la opción de precio real de un pack para el nivel elegido,
  // con fallback a Esencial si por lo que sea no hay match.
  function opcionNivel(p, nivel) {
    if (!p || !p.opciones || !p.opciones.length) return null;
    var idx = NIVEL_INDEX[nivel];
    return p.opciones[idx] || p.opciones[0];
  }

  // Mapa de recomendación: siempre apunta a un pack o servicio real del
  // catálogo (nunca a algo inventado). El caso "ahorro" recomienda el
  // servicio de energía solar en vez de un pack, porque ningún pack actual
  // combina energía con el resto — se cotiza aparte.
  //
  // v44: el paso 3 ("¿qué quieres controlar?") ahora entra en el cálculo.
  // Antes se guardaba y se mostraba en el resumen, pero no cambiaba la
  // recomendación — dos personas con la misma vivienda y necesidad recibían
  // siempre el mismo pack, marcaran lo que marcaran aquí. Ahora, cuando lo
  // marcado en el paso 3 apunta a algo que la recomendación principal no
  // cubre, se añade como complemento en vez de perderse. El paso 4 (nivel)
  // decide qué opción de precio del pack elegido se muestra.
  var CONTROL_CAMARAS = "Cámaras y accesos con IA";
  var CONTROL_SOLAR = "Energía solar";

  function tiene(lista, valor) {
    return lista.indexOf(valor) !== -1;
  }

  function recomendar(vivienda, necesidad, controles) {
    controles = controles || [];
    var quiereCamaras = tiene(controles, CONTROL_CAMARAS);
    var quiereSolar = tiene(controles, CONTROL_SOLAR);
    var principal;

    if (vivienda === "negocio") {
      principal = { tipo: "pack", item: pack("negocio"), href: "/soluciones#negocio" };
    } else if (vivienda === "segunda-residencia") {
      principal = { tipo: "pack", item: pack("alquiler-segunda-residencia-ia"), href: "/soluciones#alquiler-segunda-residencia-ia" };
    } else if (necesidad === "ahorro") {
      principal = { tipo: "servicio", item: servicio("energia-solar"), href: "/servicios/energia-solar" };
    } else if (necesidad === "seguridad" && vivienda === "chalet") {
      principal = { tipo: "pack", item: pack("chalet-seguro"), href: "/soluciones#chalet-seguro" };
    } else if (vivienda === "piso" && necesidad === "seguridad") {
      principal = { tipo: "pack", item: pack("hogar-inteligente"), href: "/soluciones#hogar-inteligente" };
    } else if (necesidad === "familia" || necesidad === "confort") {
      // Chalet + quiere cámaras/accesos con IA aunque la prioridad marcada
      // sea confort/familia: chalet-seguro cubre ese perímetro mejor que
      // el pack genérico de piso/hogar-inteligente.
      if (quiereCamaras && vivienda === "chalet") {
        principal = { tipo: "pack", item: pack("chalet-seguro"), href: "/soluciones#chalet-seguro" };
      } else {
        principal = { tipo: "pack", item: pack("hogar-inteligente"), href: "/soluciones#hogar-inteligente" };
      }
    } else {
      principal = { tipo: "pack", item: pack("hogar-inteligente"), href: "/soluciones#hogar-inteligente" };
    }

    // Complemento: si el paso 3 pide algo que la recomendación principal no
    // trae incluido, se sugiere aparte en vez de ignorarse.
    var complemento = null;
    if (quiereSolar && principal.item && principal.item.slug !== "energia-solar") {
      complemento = { tipo: "servicio", item: servicio("energia-solar"), href: "/servicios/energia-solar" };
    } else if (quiereCamaras && necesidad === "ahorro") {
      var slugCamaras = vivienda === "chalet" ? "chalet-seguro" : "hogar-inteligente";
      complemento = { tipo: "pack", item: pack(slugCamaras), href: "/soluciones#" + slugCamaras };
    }

    principal.complemento = complemento;
    return principal;
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
    if (n === TOTAL_STEPS) renderResultado();
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderResultado() {
    var vivienda = getSelectedRadio("config-vivienda");
    var necesidad = getSelectedRadio("config-necesidad");
    var controles = getSelectedChecks("config-control");
    var nivel = getSelectedRadio("config-nivel") || "inteligente";

    var rec = recomendar(vivienda, necesidad, controles);
    var card = document.getElementById("wizard-result-card");
    var elWa = document.getElementById("wizard-whatsapp");

    if (!rec.item) {
      card.innerHTML =
        '<span class="wizard-result-eyebrow">Presupuesto a medida</span>' +
        "<h3>Hablemos de tu proyecto</h3>" +
        "<p>Con lo que nos cuentas, lo mejor es verlo en la visita técnica gratuita para darte un precio ajustado.</p>";

      var mensajeGenerico = "Hola, he usado el configurador de AHOMED y esto es lo que necesito:\n";
      mensajeGenerico += "Vivienda: " + (VIVIENDA_LABEL[vivienda] || "sin especificar") + "\n";
      mensajeGenerico += "Prioridad: " + (NECESIDAD_LABEL[necesidad] || "sin especificar") + "\n";
      if (controles.length) mensajeGenerico += "Quiero controlar: " + controles.join(", ") + "\n";
      mensajeGenerico += "¿Podéis darme un presupuesto?";
      elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensajeGenerico);
      return;
    }

    var esPack = rec.tipo === "pack";
    // Los packs cotizan según el nivel elegido en el paso 4; el servicio
    // de energía solar no tiene niveles, así que usa su precio único.
    var opcion = esPack ? opcionNivel(rec.item, nivel) : null;
    var precio = esPack ? (opcion ? opcion.total : null) : rec.item.desde;
    var nivelNombre = opcion ? opcion.nombre : null;

    var html =
      '<span class="wizard-result-eyebrow">' + (esPack ? "Pack recomendado" : "Servicio recomendado") + "</span>" +
      "<h3>" + rec.item.nombre + "</h3>" +
      "<p>" + rec.item.descripcion + "</p>" +
      (nivelNombre ? '<span class="wizard-result-nivel">Nivel: ' + nivelNombre + "</span>" : "") +
      '<span class="wizard-result-price">' + (precio != null ? formatEuros(precio) : "Consultar") + "</span>" +
      '<a href="' + rec.href + '" class="link-arrow">Ver desglose completo →</a>';

    if (rec.complemento && rec.complemento.item) {
      html +=
        '<div class="wizard-result-complemento">' +
        '<span class="wizard-result-complemento-label">Encaja también con:</span> ' +
        '<a href="' + rec.complemento.href + '">' + rec.complemento.item.nombre + "</a>" +
        "</div>";
    }

    html +=
      '<div class="wizard-result-summary">' +
      (vivienda ? "Vivienda: " + (VIVIENDA_LABEL[vivienda] || vivienda) + "<br>" : "") +
      (necesidad ? "Prioridad: " + (NECESIDAD_LABEL[necesidad] || necesidad) + "<br>" : "") +
      (controles.length ? "Quiere controlar: " + controles.join(", ") + "<br>" : "") +
      (nivelNombre ? "Nivel: " + (NIVEL_LABEL[nivel] || nivel) : "") +
      "</div>";

    card.innerHTML = html;

    var mensajeSolucion = rec.item.nombre + (nivelNombre ? " — nivel " + nivelNombre : "") + (precio != null ? " (" + formatEuros(precio) + ")" : "");

    var mensaje = "Hola, he usado el configurador de AHOMED y esto es lo que necesito:\n";
    mensaje += "Vivienda: " + (VIVIENDA_LABEL[vivienda] || "sin especificar") + "\n";
    mensaje += "Prioridad: " + (NECESIDAD_LABEL[necesidad] || "sin especificar") + "\n";
    if (controles.length) mensaje += "Quiero controlar: " + controles.join(", ") + "\n";
    mensaje += "Solución recomendada: " + mensajeSolucion + "\n";
    if (rec.complemento && rec.complemento.item) mensaje += "También me interesa: " + rec.complemento.item.nombre + "\n";
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
      if (stepNum === 4) nextBtn.disabled = !getSelectedRadio("config-nivel");
    });
  }

  wizard.addEventListener("change", refreshNextButtons);

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
      // El nivel "Inteligente" viene premarcado por defecto en el HTML
      // (checked), así que lo restauramos también al reiniciar.
      var nivelDefault = wizard.querySelector('input[name="config-nivel"][value="inteligente"]');
      if (nivelDefault) nivelDefault.checked = true;
      refreshNextButtons();
      showStep(1);
    });
  });

  refreshNextButtons();
})();
