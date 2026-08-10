// Calculadora de la Plataforma IA Predictiva.
// Suma el Mini-PC IA elegido (START o PRO) + los modos marcados, sugiere PRO
// automáticamente a partir de 3 modos seleccionados, actualiza el total en
// vivo y prepara un enlace de WhatsApp con el resumen exacto de la selección.
// Vanilla JS, sin dependencias — coherente con el resto del sitio.
(function () {
  var wrap = document.querySelector(".calc-wrap");
  if (!wrap) return;

  var waNumber = wrap.dataset.wa || "";
  var nivelRadios = wrap.querySelectorAll(".calc-nivel-radio");
  var checks = wrap.querySelectorAll(".calc-check");
  var elBase = document.getElementById("calc-base");
  var elBaseLabel = document.getElementById("calc-base-label");
  var elExtra = document.getElementById("calc-extra");
  var elTotal = document.getElementById("calc-total");
  var elWa = document.getElementById("calc-whatsapp");
  var elHint = document.getElementById("calc-nivel-hint");

  var nivelElegidoManualmente = false;

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  function nivelActivo() {
    var checked = wrap.querySelector(".calc-nivel-radio:checked");
    return checked || nivelRadios[0];
  }

  function update() {
    var extra = 0;
    var elegidos = [];
    var numModos = 0;
    checks.forEach(function (c) {
      if (c.checked) {
        extra += parseInt(c.dataset.precio, 10) || 0;
        elegidos.push(c.dataset.nombre);
        numModos++;
      }
    });

    // Si el cliente marca 3 o más modos y no ha elegido nivel a mano,
    // sugerimos automáticamente el nivel PRO (último radio de la lista).
    if (!nivelElegidoManualmente && nivelRadios.length > 1) {
      var quiereSugerirPro = numModos >= 3;
      var proRadio = nivelRadios[nivelRadios.length - 1];
      var startRadio = nivelRadios[0];
      if (quiereSugerirPro && !proRadio.checked) {
        proRadio.checked = true;
      } else if (!quiereSugerirPro && !startRadio.checked) {
        startRadio.checked = true;
      }
    }

    var nivel = nivelActivo();
    var base = parseInt(nivel.value, 10) || 0;
    var nombreNivel = nivel.dataset.nombre || "Mini-PC IA Central";

    var total = base + extra;
    elBase.textContent = formatEuros(base);
    elBaseLabel.textContent = nombreNivel;
    elExtra.textContent = "+" + formatEuros(extra);
    elTotal.textContent = formatEuros(total);

    if (elHint) {
      if (numModos >= 3) {
        elHint.textContent = "Con " + numModos + " modos, recomendamos IA PRO para que todo corra fluido a la vez.";
      } else {
        elHint.textContent = "Con 1-2 modos, IA START va sobrado.";
      }
    }

    var mensaje = "Hola, quiero un presupuesto para la Plataforma IA Predictiva.\n" +
      nombreNivel + ": " + formatEuros(base);
    if (elegidos.length) {
      mensaje += "\nModos: " + elegidos.join(", ");
    } else {
      mensaje += "\n(todavía sin modos añadidos)";
    }
    mensaje += "\nTotal estimado: " + formatEuros(total);

    elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
  }

  nivelRadios.forEach(function (r) {
    r.addEventListener("change", function () {
      nivelElegidoManualmente = true;
      update();
    });
  });

  checks.forEach(function (c) {
    c.addEventListener("change", update);
  });

  update();
})();
