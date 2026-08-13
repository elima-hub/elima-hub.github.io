/* ==========================================================================
   theme.js — Alternancia de tema con persistencia
   Se carga en <head> para evitar el parpadeo de color al abrir la página.
   ========================================================================== */

(function () {
  const CLAVE = "tema-portafolio";

  function temaInicial() {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado === "light" || guardado === "dark") return guardado;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function aplicar(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    const boton = document.getElementById("toggle-tema");
    if (boton) {
      const siguiente = tema === "dark" ? "claro" : "oscuro";
      boton.setAttribute("aria-label", `Cambiar a modo ${siguiente}`);
    }
  }

  aplicar(temaInicial());

  document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("toggle-tema");
    if (!boton) return;

    aplicar(document.documentElement.getAttribute("data-theme"));

    boton.addEventListener("click", () => {
      const actual = document.documentElement.getAttribute("data-theme");
      const nuevo = actual === "dark" ? "light" : "dark";
      localStorage.setItem(CLAVE, nuevo);
      aplicar(nuevo);
    });
  });
})();
