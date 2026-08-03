// Cierra el menú móvil al pulsar un enlace + control del submenú "Servicios" en móvil
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  if (!navToggle) return;

  const isMobile = function () {
    return window.matchMedia("(max-width: 860px)").matches;
  };

  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownLink = dropdown ? dropdown.querySelector(":scope > a") : null;

  if (dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {
      if (isMobile()) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      // El enlace "Servicios ▾" en móvil solo despliega el submenú, no cierra el menú
      if (isMobile() && link === dropdownLink) return;
      navToggle.checked = false;
      if (dropdown) dropdown.classList.remove("open");
    });
  });
});
