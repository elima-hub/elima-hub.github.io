/* ==========================================================================
   projects.js — Datos y renderizado de proyectos
   Para agregar un proyecto: añade un objeto a PROYECTOS. Nada más.
   ========================================================================== */

const PROYECTOS = [
  {
    id: "billetera",
    nombre: "Billetera Virtual",
    resumen:
      "Simulador de billetera digital por terminal: recargas, retiros, transferencias entre usuarios y pago de servicios, con persistencia entre sesiones.",
    problema:
      "Modelar las operaciones de una billetera digital real —saldo, movimientos entre cuentas y pago de servicios— manteniendo el estado de cada usuario después de cerrar el programa.",
    rol: "Individual",
    anio: "2025",
    estado: "terminado",
    stack: ["Java SE", "POO", "SOLID", "Serialización", "Excepciones"],
    caracteristicas: [
      "Arquitectura por capas: app, modelo, servicio, repositorio, notificación, excepciones y ui",
      "Persistencia mediante serialización de objetos a usuarios.dat",
      "Jerarquía de excepciones propias para los errores de negocio",
      "Transferencias entre usuarios con validación de saldo",
    ],
    aprendizaje:
      "Aprendí a separar responsabilidades de verdad: que la interfaz no toque los datos y que el servicio no sepa cómo se guardan las cosas. Lo más difícil fue la persistencia — lograr que la serialización a usuarios.dat cargara y actualizara bien sin romper el estado entre sesiones, y aprender a manejar los errores con mis propias excepciones en vez de dejar que todo reventara.",
    repo: "https://github.com/elima-hub/billetera-virtual-java",
    imagenes: [
      "assets/img/proyectos/billetera.png",
      "assets/img/proyectos/billetera-2.png",
      "assets/img/proyectos/billetera-3.png",
    ],
  },
  {
    id: "keyvault",
    nombre: "KeyVault",
    resumen:
      "Bóveda digital de credenciales: guarda contraseñas, tarjetas, notas seguras e identidades organizadas en carpetas, con autenticación de usuarios.",
    problema:
      "Centralizar información sensible dispersa —contraseñas, tarjetas, documentos de identidad— en un espacio con acceso autenticado y organizado por carpetas.",
    rol: "En equipo · módulos de Identidades, Notas Seguras y Carpetas",
    anio: "2026",
    estado: "terminado",
    stack: ["Laravel", "Eloquent", "Breeze", "Blade", "Tailwind", "MySQL"],
    caracteristicas: [
      "Autenticación de usuarios con Laravel Breeze",
      "Módulos de identidades, notas seguras y carpetas (desarrollo propio)",
      "Modelado relacional con Eloquent ORM sobre MySQL",
      "Interfaz construida con Blade y Tailwind CSS",
    ],
    aprendizaje:
      "Aprendí a trabajar en equipo sobre un mismo repositorio y a construir con Laravel y Eloquent con autenticación real. Lo más difícil fue la coordinación: mantener mis módulos consistentes con los de mi compañero sin pisarnos el código ni duplicar lógica.",
    repo: "https://github.com/josehidalgoc-cpu/Proyecto-primer-parcial---Lenguajes-de-programaci-n",
    imagenes: [
      "assets/img/proyectos/keyvault.png",
      "assets/img/proyectos/keyvault-2.png",
      "assets/img/proyectos/keyvault-3.png",
    ],
  },
  {
    id: "prolog",
    nombre: "Sistema de Juego Medieval",
    resumen:
      "Base de conocimiento lógica para un juego de rol: consulta si un personaje o equipo puede completar una misión y simula combates desde formularios web.",
    problema:
      "Permitir que alguien sin conocer Prolog consulte una base de conocimiento compleja, sin escribir consultas a mano en la terminal.",
    rol: "Individual",
    anio: "2026",
    estado: "terminado",
    stack: ["SWI-Prolog", "Laravel 13", "PHP 8.4", "Blade", "Bootstrap 5"],
    caracteristicas: [
      "Base de conocimiento en Prolog con hechos y reglas del mundo del juego",
      "Puente PHP ↔ Prolog mediante shell_exec() aislado en PrologService",
      "Verificación de misiones por personaje o por equipo",
      "Simulación de combates y consulta de datos desde formularios web",
    ],
    aprendizaje:
      "Aprendí a pensar de forma declarativa: describir el mundo con hechos y reglas en lugar de escribir paso a paso qué hacer. El reto fue unir dos paradigmas que no se hablan entre sí — conectar PHP con SWI-Prolog usando shell_exec(), armar las consultas dinámicamente y capturar la salida en texto legible. Aislar toda esa comunicación en PrologService fue lo que me salvó el diseño.",
    repo: "https://github.com/elima-hub/videojuego-prolog-laravel",
    imagenes: [
      "assets/img/proyectos/prolog.png",
      "assets/img/proyectos/prolog-2.png",
      "assets/img/proyectos/prolog-3.png",
    ],
  },
  {
    id: "caballero",
    nombre: "El Caballero Perdido",
    resumen:
      "Platformer vertical 2D de pixel art medieval. Un caballero recolecta fragmentos de mapa en tres niveles de dificultad mientras la cámara asciende sola.",
    problema:
      "Construir un juego completo de punta a punta —control, cámara, estados, audio y menús— coordinando dos personas sobre el mismo repositorio.",
    rol: "En equipo · jugador, cámara, menús, estados de juego, audio y UI",
    anio: "2026",
    estado: "en progreso",
    stack: ["Unity", "C#", "Física 2D", "TextMeshPro", "Git"],
    caracteristicas: [
      "Movimiento, salto, ataque y sistema de vidas del jugador",
      "Estados de juego con GameManager, menú principal y tres finales",
      "Animación por script, sin usar el Animator de Unity",
      "Progreso guardado con PlayerPrefs y flujo de trabajo con ramas y pull requests",
    ],
    aprendizaje:
      "Aprendí a trabajar con Unity de forma colaborativa y a entender la relación entre los scripts y la interfaz: conceptos como Collider, Prefab y Canvas, además de la lógica del juego (generadores, ítems, enemigos, recolectables). Lo más difícil fue acoplarnos al ritmo de trabajo — cada idea nueva implicaba retroceder pasos e implementarla sobre lo ya hecho.",
    repo: "https://github.com/leooeleoel/LDP-2-Proyecto-1",
    imagenes: [
      "assets/img/proyectos/caballero.png",
      "assets/img/proyectos/caballero-2.png",
      "assets/img/proyectos/caballero-3.png",
    ],
  },
];

/* -------------------------------------------------------------------------- */

const ICON_CODE =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>';

function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function etiquetaEstado(estado) {
  return estado === "terminado"
    ? '<span class="badge badge--done">Terminado</span>'
    : '<span class="badge badge--wip">En progreso</span>';
}

/* Sustituye la imagen por un marcador si el archivo aún no existe. */
function manejarImagenFaltante(img) {
  const marcador = document.createElement("div");
  marcador.className = "media-placeholder";
  marcador.setAttribute("aria-hidden", "true");
  marcador.innerHTML =
    "<span>Captura pendiente</span><span>" + img.dataset.filename + "</span>";
  img.replaceWith(marcador);
}

function crearTarjeta(p) {
  const article = document.createElement("article");
  article.className = "card reveal";

  article.innerHTML = `
    <div class="card__media">
      <img src="${p.imagenes[0]}" alt="Captura de ${escaparHtml(p.nombre)}"
           loading="lazy" data-filename="${p.imagenes[0].split("/").pop()}">
    </div>
    <div class="card__body">
      <div class="card__top">
        <h3 class="card__title">${escaparHtml(p.nombre)}</h3>
        ${etiquetaEstado(p.estado)}
      </div>
      <p class="card__desc">${escaparHtml(p.resumen)}</p>
      <div class="chips">
        ${p.stack
          .slice(0, 4)
          .map((t) => `<span class="chip">${escaparHtml(t)}</span>`)
          .join("")}
        ${
          p.stack.length > 4
            ? `<span class="chip chip--muted">+${p.stack.length - 4}</span>`
            : ""
        }
      </div>
      <p class="card__meta">${escaparHtml(p.rol.split(" · ")[0])} · ${p.anio}</p>
      <div class="card__actions">
        <button class="btn btn--sm btn--outline" data-proyecto="${p.id}">
          Ver detalles
        </button>
        <a class="btn btn--sm btn--ghost" href="${p.repo}"
           target="_blank" rel="noopener noreferrer">
          ${ICON_CODE} Código
        </a>
      </div>
    </div>
  `;

  const img = article.querySelector("img");
  img.addEventListener("error", () => manejarImagenFaltante(img));

  return article;
}

/* --------------------------------------------------------------------------
   Modal
   -------------------------------------------------------------------------- */
const modal = document.getElementById("modal-proyecto");
const modalPanel = modal.querySelector(".modal__panel");
let ultimoFoco = null;

function abrirModal(p) {
  ultimoFoco = document.activeElement;

  modalPanel.innerHTML = `
    <div class="modal__head">
      <div>
        <h3 id="modal-titulo">${escaparHtml(p.nombre)}</h3>
        <p class="card__meta">${escaparHtml(p.rol)} · ${p.anio}</p>
      </div>
      <button class="icon-btn" data-cerrar aria-label="Cerrar detalles">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="modal__body">
      <div class="modal__block">
        <h4>QUÉ RESUELVE</h4>
        <p>${escaparHtml(p.problema)}</p>
      </div>
      <div class="modal__block">
        <h4>CARACTERÍSTICAS</h4>
        <ul>${p.caracteristicas.map((c) => `<li>${escaparHtml(c)}</li>`).join("")}</ul>
      </div>
      <div class="modal__block">
        <h4>QUÉ APRENDÍ</h4>
        <p>${escaparHtml(p.aprendizaje)}</p>
      </div>
      <div class="modal__block">
        <h4>TECNOLOGÍAS</h4>
        <div class="chips">
          ${p.stack.map((t) => `<span class="chip">${escaparHtml(t)}</span>`).join("")}
        </div>
      </div>
      <div class="modal__gallery">
        ${p.imagenes
          .map(
            (src, i) =>
              `<img src="${src}" alt="Captura ${i + 1} de ${escaparHtml(
                p.nombre
              )}" loading="lazy" data-filename="${src.split("/").pop()}">`
          )
          .join("")}
      </div>
      <div class="modal__actions">
        <a class="btn btn--primary" href="${p.repo}" target="_blank" rel="noopener noreferrer">
          ${ICON_CODE} Ver repositorio
        </a>
        <button class="btn btn--outline" data-cerrar>Cerrar</button>
      </div>
    </div>
  `;

  modalPanel.querySelectorAll(".modal__gallery img").forEach((img) => {
    img.addEventListener("error", () => img.remove());
  });

  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
  modalPanel.querySelector("[data-cerrar]").focus();
}

function cerrarModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  if (ultimoFoco) ultimoFoco.focus();
}

/* Mantiene el foco dentro del modal mientras está abierto. */
function atraparFoco(e) {
  if (e.key !== "Tab" || !modal.classList.contains("is-open")) return;

  const focusables = modalPanel.querySelectorAll(
    'a[href], button, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;

  const primero = focusables[0];
  const ultimo = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === primero) {
    e.preventDefault();
    ultimo.focus();
  } else if (!e.shiftKey && document.activeElement === ultimo) {
    e.preventDefault();
    primero.focus();
  }
}

/* --------------------------------------------------------------------------
   Inicialización
   -------------------------------------------------------------------------- */
const contenedor = document.getElementById("lista-proyectos");
PROYECTOS.forEach((p) => contenedor.appendChild(crearTarjeta(p)));

contenedor.addEventListener("click", (e) => {
  const boton = e.target.closest("[data-proyecto]");
  if (!boton) return;
  const proyecto = PROYECTOS.find((p) => p.id === boton.dataset.proyecto);
  if (proyecto) abrirModal(proyecto);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest("[data-cerrar]")) cerrarModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) cerrarModal();
  atraparFoco(e);
});
