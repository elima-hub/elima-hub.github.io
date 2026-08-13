# Portafolio — Eddy Lima

Sitio estático personal. Sin frameworks ni proceso de build: HTML, CSS y JavaScript
vanilla. Se publica directamente con GitHub Pages desde la rama principal.

**En vivo:** https://elima-hub.github.io

---

## Estructura

```
├── index.html              Documento único
├── css/
│   ├── variables.css       Tokens: color por modo, tipografía, espaciado
│   ├── base.css            Reset, tipografía, layout, accesibilidad
│   └── components.css      Navbar, hero, tarjetas, modal, footer, responsive
├── js/
│   ├── theme.js            Alternancia claro/oscuro con localStorage
│   ├── nav.js              Menú móvil, sección activa, revelado al scroll
│   └── projects.js         Datos de proyectos + tarjetas + modal
├── assets/
│   ├── img/
│   │   ├── perfil.jpg
│   │   ├── og-image.png
│   │   ├── proyectos/
│   │   └── badges/
│   └── cv/cv-eddy-lima.pdf
└── .nojekyll               Evita que GitHub Pages procese el sitio con Jekyll
```

---

## Agregar o editar un proyecto

Todo vive en el arreglo `PROYECTOS` de `js/projects.js`. Añadir un objeto ahí
genera la tarjeta y su modal automáticamente — no se toca el HTML.

```js
{
  id: "identificador-unico",
  nombre: "Nombre del proyecto",
  resumen: "Dos líneas para la tarjeta.",
  problema: "Qué problema resuelve.",
  rol: "Individual",              // o "En equipo · qué hiciste"
  anio: "2026",
  estado: "terminado",            // o "en progreso"
  stack: ["Java", "MySQL"],
  caracteristicas: ["...", "..."],
  aprendizaje: "Qué aprendiste o qué fue lo difícil.",
  repo: "https://github.com/...",
  imagenes: [
    "assets/img/proyectos/nombre.png",
    "assets/img/proyectos/nombre-2.png",
    "assets/img/proyectos/nombre-3.png"
  ]
}
```

---

## Assets pendientes

Las imágenes marcadas abajo son placeholders. Al reemplazar el archivo con el
mismo nombre, el sitio lo toma sin tocar código.

| Archivo | Estado | Especificación |
|---|---|---|
| `assets/cv/cv-eddy-lima.pdf` | **Falta** | PDF, menos de 2 MB |
| `assets/img/perfil.jpg` | Placeholder | Cuadrada, mínimo 400×400 |
| `assets/img/badges/aws-cloud-architecting.png` | Placeholder | PNG de la insignia |
| `assets/img/badges/aws-data-engineering.png` | Listo | — |
| `assets/img/og-image.png` | Placeholder | 1200×630, opcional |
| `assets/img/proyectos/billetera*.png` | **Faltan** | 16:9, ideal 1280×720 |
| `assets/img/proyectos/keyvault*.png` | **Faltan** | 16:9 |
| `assets/img/proyectos/prolog*.png` | **Faltan** | 16:9 |
| `assets/img/proyectos/caballero*.png` | **Faltan** | 16:9 |

Cada proyecto usa tres archivos: `nombre.png` (portada de la tarjeta) más
`nombre-2.png` y `nombre-3.png` (galería del modal). Mientras falten, la tarjeta
muestra un marcador con el nombre exacto del archivo esperado y la galería omite
las imágenes ausentes.

Comprimir antes de subir (por ejemplo con squoosh.app). Objetivo: menos de 300 KB
por imagen — GitHub Pages no optimiza imágenes.

---

## Desarrollo local

```bash
python3 -m http.server 8000
```

Abrir http://localhost:8000. Un servidor es necesario porque el sitio carga CSS y
JS como archivos separados.

---

## Decisiones técnicas

- **Sin frameworks.** El sitio no justifica el peso ni la complejidad de React o
  un generador estático. Todo el JavaScript suma menos de 300 líneas.
- **Un solo acento de color, dos calibraciones.** `#58A6FF` en oscuro y `#1A5FA8`
  en claro: mismo azul, ambos por encima de 4.5:1 de contraste (WCAG AA).
- **Los proyectos son datos, no marcado.** Un solo lugar para editarlos.
- **Sin barras de porcentaje en habilidades.** Los niveles se comunican por
  agrupación, que es más honesto y más informativo.
- **Movimiento mínimo.** Dos efectos: revelado al entrar en viewport y
  transiciones de hover. Ambos respetan `prefers-reduced-motion`.
