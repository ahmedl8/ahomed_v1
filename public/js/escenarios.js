// Pestañas de la sección "Vive AHOMED" de la home: al pulsar un escenario
// (Llegar a casa, Salir, Noche...) muestra su panel de acciones y oculta el
// resto. Vanilla JS, sin dependencias.
(function () {
  var tabs = document.querySelectorAll(".escenario-tab");
  if (!tabs.length) return;

  var panels = document.querySelectorAll("[data-escenario-panel]");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.dataset.escenario;

      tabs.forEach(function (t) { t.classList.toggle("is-active", t === tab); });
      panels.forEach(function (p) {
        var isTarget = p.dataset.escenarioPanel === target;
        p.classList.toggle("is-active", isTarget);
        // Si el panel deja de estar activo y tenía un vídeo reproduciéndose,
        // lo paramos: si no, sigue sonando de fondo aunque esté oculto.
        if (!isTarget) {
          var video = p.querySelector(".escenario-video");
          if (video && !video.paused) video.pause();
        }
      });
    });
  });
})();
