// Cierra el menú móvil al pulsar un enlace
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  if (!navToggle) return;

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.checked = false;
    });
  });
});
