// Paths SVG (viewBox 0 0 24 24) por clave de icono, usados en tarjetas de servicio.
const icons = {
  bolt: '<path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>',
  "home-wifi":
    '<path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/><path d="M12 8.5a4 4 0 0 0-2.83 1.17l.94.94a2.6 2.6 0 0 1 3.78 0l.94-.94A4 4 0 0 0 12 8.5z" fill="#fff" opacity="0"/>',
  solar:
    '<path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><circle cx="12" cy="12" r="4.5"/>',
  shield:
    '<path d="M12 2l8 3.5v6c0 5.2-3.4 9.8-8 10.5-4.6-.7-8-5.3-8-10.5v-6L12 2z"/>',
  network:
    '<path d="M12 2C6.5 2 2 6.5 2 12h2c0-4.4 3.6-8 8-8s8 3.6 8 8h2c0-5.5-4.5-10-10-10z" opacity=".35"/><path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4 4 4 0 0 1 4 4h2a6 6 0 0 0-6-6z" opacity=".65"/><circle cx="12" cy="16" r="2.4"/>',
  climate:
    '<path d="M3 9h18v2H3zM3 13h18v2H3z"/><circle cx="7" cy="18" r="1.4"/><circle cx="12" cy="18" r="1.4"/><circle cx="17" cy="18" r="1.4"/>',
  antenna:
    '<path d="M12 2l7 4.5-1 1.7L12 5 6 8.2l-1-1.7L12 2z"/><path d="M12 8v13M8 21h8"/>',
  wrench:
    '<path d="M22 6.5a4.5 4.5 0 0 1-6.02 4.24L8.4 18.32a2 2 0 1 1-2.83-2.83l7.58-7.58A4.5 4.5 0 0 1 19 2.5l-3.2 3.2 1.5 1.5L20.5 4a4.48 4.48 0 0 1 1.5 2.5z"/>',
  plumbing:
    '<path d="M7 3h10v4a5 5 0 0 1-3 4.58V15a2 2 0 0 0 2 2h2v2h-2a4 4 0 0 1-4-4v-3.42A5 5 0 0 1 7 7V3z"/><circle cx="7" cy="19" r="2"/>',
  pladur:
    '<path d="M3 6h18v3H3zM3 15h18v3H3z"/><path d="M6 9v6M18 9v6M12 9v6"/>',
  maintenance:
    '<path d="M12 3l1.7 3.5L17.5 7l-2.6 2.9.6 3.9L12 12l-3.5 1.8.6-3.9L6.5 7l3.8-.5L12 3z"/><path d="M6 15l-2 6 3-1 1 3 2-6"/><path d="M18 15l2 6-3-1-1 3-2-6"/>',
  ai: '<path d="M9 2h6l1 3h3v3l-3 1v6l3 1v3h-3l-1 3H9l-1-3H5v-3l3-1V9L5 8V5h3l1-3z"/><circle cx="12" cy="12" r="2.2" fill="#fff"/>'
};

module.exports = icons;
