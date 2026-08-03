// Cierra el menú móvil al pulsar un enlace + control del submenú "Servicios" en móvil
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  if (!navToggle) return;

  const isMobile = function () {
    return window.matchMedia("(max-width: 860px)").matches;
  };

  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownLink = dropdown ? dropdown.querySelector("a") : null;

  // Bloquea el scroll de la página de fondo mientras el panel móvil está abierto,
  // así el scroll táctil se queda dentro del panel lateral.
  // Se usa position:fixed (en vez de solo overflow:hidden) para evitar que el
  // recálculo de la scrollbar descuadre momentáneamente el panel fixed en móvil.
  let savedScrollY = 0;
  const lockBodyScroll = function () {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + savedScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  };
  const unlockBodyScroll = function () {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, savedScrollY);
  };
  const syncBodyScroll = function () {
    if (isMobile() && navToggle.checked) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
  };
  navToggle.addEventListener("change", syncBodyScroll);

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
      syncBodyScroll();
    });
  });
});
