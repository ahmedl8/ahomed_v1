// Cierra el menú móvil al pulsar un enlace + control de los submenús
// "Para tu Casa" / "Naves y Fincas" en móvil (puede haber varios .nav-dropdown)
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  if (!navToggle) return;

  const isMobile = function () {
    return window.matchMedia("(max-width: 860px)").matches;
  };

  const dropdowns = Array.from(document.querySelectorAll(".nav-dropdown"));
  const dropdownLinks = dropdowns.map(function (d) { return d.querySelector("a"); });
  const closeAllDropdowns = function () {
    dropdowns.forEach(function (d) { d.classList.remove("open"); });
  };

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
      const dropdownIndex = dropdownLinks.indexOf(link);
      if (isMobile() && dropdownIndex !== -1) {
        // En móvil, "Para tu Casa ▾" / "Naves y Fincas ▾" solo despliegan su submenú: no navegan ni cierran el panel
        e.preventDefault();
        e.stopPropagation();
        dropdowns[dropdownIndex].classList.toggle("open");
        return;
      }
      navToggle.checked = false;
      closeAllDropdowns();
      syncBodyScroll();
    });
  });

  // Acordeón móvil dentro de cada dropdown: "Básicos — sin IA" / "Con IA" se
  // pliegan/despliegan por separado para no mostrar toda la lista de golpe.
  // En escritorio esto no hace nada (el CSS de escritorio ignora .open aquí).
  document.querySelectorAll(".dropdown-group-title").forEach(function (title) {
    title.addEventListener("click", function (e) {
      if (!isMobile()) return;
      e.preventDefault();
      e.stopPropagation();
      title.closest(".dropdown-group").classList.toggle("open");
    });
  });
});

// Overlay de "reproducir" sobre los vídeos de demostración de los modos IA,
// para que se distingan de una foto estática en cualquier navegador.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("video.modo-video").forEach(function (video) {
    const wrap = document.createElement("div");
    wrap.className = "video-frame";
    video.parentNode.insertBefore(wrap, video);
    wrap.appendChild(video);

    const overlay = document.createElement("button");
    overlay.type = "button";
    overlay.className = "video-play-overlay";
    overlay.setAttribute("aria-label", "Reproducir vídeo");
    overlay.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    wrap.appendChild(overlay);

    overlay.addEventListener("click", function () { video.play(); });
    video.addEventListener("play", function () { wrap.classList.add("is-playing"); });
    video.addEventListener("pause", function () { wrap.classList.remove("is-playing"); });
    video.addEventListener("ended", function () { wrap.classList.remove("is-playing"); });
  });
});
