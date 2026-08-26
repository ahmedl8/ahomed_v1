// Banner de consentimiento de cookies.
// - Si ya hay una decisión guardada (aceptar/rechazar), no se muestra nada:
//   se aplica esa decisión directamente (carga GTM o no) y listo.
// - Si no hay decisión, se muestra el banner y se espera la respuesta.
// - Aceptar => guarda "accepted" y llama a window.__loadGTM() (definida en
//   partials/head.ejs), que arranca Google Tag Manager / Analytics.
// - Rechazar => guarda "rejected" y no carga nada de analítica.
(function () {
  var STORAGE_KEY = "ahomed_cookie_consent";

  function getStoredConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // Si localStorage no está disponible (modo privado estricto, etc.),
      // no persistimos la decisión pero seguimos pudiendo mostrar el banner
      // y respetar la elección durante esta sesión de página.
      return null;
    }
  }

  function storeConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* no-op */
    }
  }

  function applyConsent(value) {
    if (value === "accepted" && typeof window.__loadGTM === "function") {
      window.__loadGTM();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;

    var existing = getStoredConsent();
    if (existing === "accepted" || existing === "rejected") {
      applyConsent(existing);
    } else {
      // Sin decisión previa: mostrar el banner
      banner.style.display = "";
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");

    function decide(value) {
      storeConsent(value);
      applyConsent(value);
      banner.style.display = "none";
    }

    if (acceptBtn) acceptBtn.addEventListener("click", function () { decide("accepted"); });
    if (rejectBtn) rejectBtn.addEventListener("click", function () { decide("rejected"); });

    // Botón "Cambiar mi preferencia de cookies" en la página de política de
    // cookies: vuelve a mostrar el banner para que el usuario pueda decidir
    // de nuevo (no borra el consentimiento hasta que elija otra vez).
    var reopenBtn = document.getElementById("cookie-reopen");
    if (reopenBtn) {
      reopenBtn.addEventListener("click", function () {
        banner.style.display = "";
        banner.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    }
  });
})();
