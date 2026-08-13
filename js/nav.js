/* ==========================================================================
   nav.js — Menú móvil, sección activa, navbar y revelado al hacer scroll
/* ==========================================================================
   nav.js — Menú móvil, sección activa, navbar y revelado al hacer scroll
   ========================================================================== */

(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.getElementById("toggle-menu");
  const lista = document.getElementById("nav-lista");
  const enlaces = Array.from(lista.querySelectorAll(".nav__link"));

  /* --- Menú móvil --- */
  function cerrarMenu() {
    lista.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const abierto = lista.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(abierto));
  });

  enlaces.forEach((a) => a.addEventListener("click", cerrarMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) cerrarMenu();
  });

  /* --- Borde de la navbar y limpieza del indicador en el hero --- */
  const hero = document.getElementById("inicio");

  function actualizarNav() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);

    // En el hero ninguna sección del menú debe figurar como activa
    if (hero && window.scrollY < hero.offsetHeight * 0.55) {
      enlaces.forEach((a) => a.classList.remove("is-active"));
    }
  }
  actualizarNav();
  window.addEventListener("scroll", actualizarNav, { passive: true });

  /* --- Sección activa --- */
  const secciones = enlaces
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && secciones.length) {
    const spy = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          enlaces.forEach((a) =>
            a.classList.toggle(
              "is-active",
              a.getAttribute("href") === `#${entrada.target.id}`
            )
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    secciones.forEach((s) => spy.observe(s));
  }

  /* --- Revelado al entrar en viewport --- */
  const reducirMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function revelar() {
    const elementos = document.querySelectorAll(".reveal");

    if (reducirMovimiento || !("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas, obs) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("is-visible");
          obs.unobserve(entrada.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    elementos.forEach((el) => observador.observe(el));
  }

  revelar();
})();