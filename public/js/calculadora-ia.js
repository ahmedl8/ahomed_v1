// Calculadora de la Plataforma IA Predictiva.
// Suma el Mini-PC IA Central (obligatorio) + los modos marcados, actualiza el
// total en vivo y prepara un enlace de WhatsApp con el resumen exacto de la
// selección. Vanilla JS, sin dependencias — coherente con el resto del sitio.
(function () {
  var wrap = document.querySelector(".calc-wrap");
  if (!wrap) return;

  var base = parseInt(wrap.dataset.base, 10) || 0;
  var waNumber = wrap.dataset.wa || "";
  var checks = wrap.querySelectorAll(".calc-check");
  var elExtra = document.getElementById("calc-extra");
  var elTotal = document.getElementById("calc-total");
  var elWa = document.getElementById("calc-whatsapp");

  function formatEuros(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
  }

  function update() {
    var extra = 0;
    var elegidos = [];
    checks.forEach(function (c) {
      if (c.checked) {
        extra += parseInt(c.dataset.precio, 10) || 0;
        elegidos.push(c.dataset.nombre);
      }
    });

    var total = base + extra;
    elExtra.textContent = "+" + formatEuros(extra);
    elTotal.textContent = formatEuros(total);

    var mensaje = "Hola, quiero un presupuesto para la Plataforma IA Predictiva.\n" +
      "Mini-PC IA Central: " + formatEuros(base);
    if (elegidos.length) {
      mensaje += "\nModos: " + elegidos.join(", ");
    } else {
      mensaje += "\n(todavía sin modos añadidos)";
    }
    mensaje += "\nTotal estimado: " + formatEuros(total);

    elWa.href = "https://wa.me/34" + waNumber + "?text=" + encodeURIComponent(mensaje);
  }

  checks.forEach(function (c) {
    c.addEventListener("change", update);
  });

  update();
})();
