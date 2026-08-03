// Cierra el menú móvil al pulsar un enlace + control del submenú "Servicios" en móvil
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  if (!navToggle) return;

  const isMobile = function () {
    return window.matchMedia("(max-width: 860px)").matches;
  };

  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownLink = dropdown ? dropdown.querySelector("a") : null;

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (isMobile() && link === dropdownLink) {
        // En móvil, "Servicios ▾" solo despliega el submenú: no navega ni cierra el panel
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("open");
        return;
      }
      navToggle.checked = false;
      if (dropdown) dropdown.classList.remove("open");
    });
  });
});
