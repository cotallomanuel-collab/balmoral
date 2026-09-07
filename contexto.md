# Contexto del proyecto — Balmoral

> Documento vivo. Recoge el estado real del proyecto y la bitácora de decisiones.
> Cualquier sesión futura debería poder leer **solo este archivo** y entender dónde está el proyecto.
>
> **Última auditoría completa:** 2026-09-06 (commit `42918ef`, rama `main`, árbol limpio).

---

## 1. Qué es el proyecto y stack técnico

Landing / sitio corporativo de **Balmoral Label Services**, una empresa de *label services*
musical. El commit inicial del contenido se describe a sí mismo como
`"Balmoral landing page demo"` (`772d40d`), y el `description` de la metadata en
[app/layout.js](app/layout.js#L15) sigue diciendo *"Balmoral Label Services — demo landing page."*
→ **Pendiente de confirmar:** si esto sigue siendo una demo/prototipo o ya se considera el sitio real.

Todo el texto del sitio está en **inglés**. Hay conmutadores de idioma (EN/FR en el footer, EN en el
header) pero **no hay i18n implementada** — son botones sin función.

### Stack (versiones instaladas y verificadas en `node_modules`)

| Paquete | Versión | Uso real en el código |
|---|---|---|
| `next` | 16.3.3 | App Router + Turbopack |
| `react` / `react-dom` | 19.2.8 | — |
| `tailwindcss` | 4.3.3 | Vía `@tailwindcss/postcss`, sin `tailwind.config` (config CSS-first) |
| `gsap` + `@gsap/react` | 3.15.0 / 2.1.2 | **Motor de animación principal.** SplitText, ScrollTrigger, timelines |
| `framer-motion` | 13.1.1 | **Solo en un sitio**: el cross-fade del logo del Hero |
| `three` | 0.184.0 | Simulación de fluidos WebGL del cursor (sección Technology, solo desktop) |
| `lenis` | 1.3.26 | Scroll suave, **solo desktop** |
| `matter-js` | 0.20.0 | ⚠️ **No se usa en ningún sitio.** Ver §6 |

**JavaScript puro, no TypeScript.** Alias de import `@/*` → raíz del repo ([jsconfig.json](jsconfig.json)).

### Configuración

- [next.config.mjs](next.config.mjs) — **vacío**, solo el objeto por defecto sin opciones.
- [postcss.config.mjs](postcss.config.mjs) — solo el plugin `@tailwindcss/postcss`.
- [eslint.config.mjs](eslint.config.mjs) — `eslint-config-next/core-web-vitals`.
- **No hay archivos `.env*`** de ningún tipo. El proyecto no consume variables de entorno.
- **No hay `.vercel/`, `vercel.json`, ni `.github/workflows` en el repo**, y el CLI de Vercel no
  está instalado en la máquina. Pero **el sitio sí está desplegado** — ver §2b. El proyecto está
  conectado a Vercel desde GitHub, no mediante `vercel link` local (por eso no hay `.vercel/`;
  además está en el `.gitignore`). El `public/vercel.svg` es un asset residual del template.
- Remoto de git: `https://github.com/cotallomanuel-collab/balmoral.git`, rama `main`.
- [README.md](README.md) sigue siendo **el README genérico de `create-next-app`**, sin tocar.

### Sistema de diseño (tokens en [app/globals.css](app/globals.css))

```
--pink:   #ff8fa6      --purple: #2a1b5d      --olive:  #5c5d2e
--background: #ffffff  --foreground: #14101f   --black:  #0a0a0a
```

- Tipografía base: `"Helvetica Neue", Helvetica, Arial, sans-serif` (fuente de sistema, no se carga).
- **EB Garamond italic** (`next/font/google`) se carga como variable `--font-eb-garamond-italic`
  y se usa en **un único sitio**: el párrafo de acento de la página About.
- Barras de scroll ocultas globalmente (`html`, `body`, `.carousel-scroll`).
- Ancho máximo de contenedor consistente: `max-w-[1900px]`.

---

## 2. Estructura de rutas y qué contiene cada una

App Router, sin route groups ni layouts anidados. **9 rutas, todas estáticas** (verificado en el
build: todas marcadas `○ (Static)`).

`app/layout.js` envuelve todo en `SmoothScroll` → `TransitionProvider`. **El Header y el Footer no
están en el layout**, los renderiza `TransitionProvider` ([components/transitions/TransitionProvider.jsx:60-62](components/transitions/TransitionProvider.jsx#L60-L62)),
de modo que quedan fuera del `<main>` que se anima en las transiciones de página.

| Ruta | Archivo | Tipo | Contenido |
|---|---|---|---|
| `/` | [app/page.js](app/page.js) | `"use client"` | Compone 5 secciones: Hero, Studios, Distribution, Techno, Newsletter |
| `/about` | [app/about/page.js](app/about/page.js) | `"use client"` | **Página única con diseño propio**: foto a pantalla completa + bloque de 3 piezas (título, cursiva, párrafo) en una columna común, anclado a la mitad inferior — maquetado según una referencia de doble página de revista (ver bitácora 2026-09-07) |
| `/studios` | [app/studios/page.js](app/studios/page.js) | server | `PageHero`, fondo `--purple` |
| `/what-we-do` | [app/what-we-do/page.js](app/what-we-do/page.js) | server | `PageHero`, fondo `--pink` |
| `/contact` | [app/contact/page.js](app/contact/page.js) | server | `PageHero`, fondo blanco |
| `/events` | [app/events/page.js](app/events/page.js) | server | `PageHero`, fondo `--olive` |
| `/innovation` | [app/innovation/page.js](app/innovation/page.js) | server | `PageHero`, fondo `--pink` |
| `/artists-and-labels` | [app/artists-and-labels/page.js](app/artists-and-labels/page.js) | server | `PageHero`, fondo blanco |
| `/_not-found` | (generada por Next) | — | 404 por defecto de Next, sin personalizar |

### Sobre el contenido: ¿real o relleno?

Todo el texto de las páginas es **prosa específica y coherente sobre Balmoral**, no lorem ipsum ni
placeholder genérico. El mensaje se repite consistentemente: independencia, el artista conserva
sus masters, no son una major, desde 2006, estudios en Londres.

**Ahora bien, no puedo confirmar que sea copy aprobado por el cliente.** Señales concretas que
sugieren que al menos parte es texto escrito para rellenar la maqueta:

- Los emails de [/contact](app/contact/page.js#L16-L17) (`hello@balmoral-labels.com`,
  `partnerships@balmoral-labels.com`) usan un dominio que no aparece en ningún otro sitio del repo
  y que no está configurado en ningún sitio. **Pendiente de confirmar si son direcciones reales.**
- "Our studios are based in **London**" ([/contact](app/contact/page.js#L18)) es el único dato
  geográfico concreto del sitio. **Pendiente de confirmar.**
- "since **2006**" aparece dos veces (Hero y StudiosSection). **Pendiente de confirmar.**
- Las 6 páginas de `PageHero` tienen exactamente la misma forma (eyebrow + título + 3-4 párrafos)
  y ningún contenido más allá del hero: no hay listados de servicios, ni roster, ni formulario de
  contacto, ni fotos de estudios. Son **páginas de una sola pantalla**.

> **Decisión pendiente del usuario:** confirmar qué textos son definitivos y cuáles hay que
> sustituir; y si las 6 páginas `PageHero` deben crecer con contenido propio o quedarse así.

---

## 2b. Despliegue (producción)

**URL de producción: https://balmoral-rouge.vercel.app** (facilitada por el usuario, 2026-09-07).

Alojado en Vercel (`server: Vercel`, edge `cdg1` = París). Sin dominio propio, solo el subdominio
`*.vercel.app` autogenerado. Al no haber `.vercel/` ni workflows en el repo, el proyecto está
importado en Vercel directamente desde GitHub.

**Producción está sincronizada con `main` (`42918ef`).** Lo verifiqué comparando la longitud del
texto renderizado de cada ruta entre local y producción: coinciden **exactamente** en las 9 rutas
(p. ej. home desktop 2260 y 2260; home móvil 2279 y 2279; `/innovation` móvil 734 y 734).
La cabecera `age: ~496.000 s` (≈5,7 días) sitúa el último despliegue alrededor del 2026-09-01,
que es la fecha del commit `42918ef`. **No hay deriva entre el repo y lo publicado.**

### Auditoría de producción (2026-09-07, Chromium headless, desktop 1440 y móvil 390)

- Las 8 rutas reales devuelven **200**; `/no-such-page` devuelve **404**.
- **0 `pageerror` y 0 peticiones fallidas** en las 18 cargas.
- **Consola limpia.** El warning `Image ... fill missing "sizes"` que sale en local **no aparece en
  producción**: es un aviso exclusivo del modo desarrollo de Next. (Los `GL Driver Message` son del
  renderer software del headless, no del sitio.)
- Funciona igual que en local: Lenis solo en desktop (clase `lenis` presente/ausente), fluid cursor
  solo en desktop (**1 canvas vs 0**), y la transición entre páginas navega correctamente a `/about`.

### Los fallos de §6 están confirmados **en vivo**, no solo en el código

- **El formulario de newsletter no envía nada.** Lo rellené y lo envié en producción: la única
  petición de red posterior fue la precarga de una imagen del carrusel (`carousel-10.jpeg`),
  ninguna llamada a ningún endpoint. Aun así **el sitio muestra "Thanks — you're on the list"**.
  Es decir: en producción hay un formulario que dice al visitante que se ha suscrito y **pierde
  su email**. Es el problema más grave del sitio publicado.
- **4 botones "Learn More" muertos** en la home.
- **Los 6 anclas del footer siguen rotas en vivo** (`#jobs`, `#brand-assets`, `#contact`,
  `#disclaimer`, `#privacy`, `#statement` → `getElementById() === null`).

### Diferencia importante de metadata

Las 6 páginas `PageHero` exportan `metadata` con su propio `<title>` (`"Studios | Balmoral"`, etc.).
**`/` y `/about` no lo hacen**, porque ambas son `"use client"` y un componente cliente no puede
exportar `metadata`. Ambas heredan el título raíz `"Balmoral | Label Services"`.
Verificado en navegador: el `<title>` de `/about` es efectivamente `Balmoral | Label Services`.

---

## 3. Componentes y qué hace cada uno

### Layout y navegación

| Componente | Qué hace | Usado en |
|---|---|---|
| [Header.jsx](components/Header.jsx) | Cabecera fija, logo, 4 links de nav (desktop), botones "Join Us" y "EN", y `MobileMenu` | `TransitionProvider` |
| [Footer.jsx](components/Footer.jsx) | Pie negro: links Jobs/Brand Assets/Contact, EN/FR, back-to-top, logo invertido, links legales, iconos sociales | `TransitionProvider` |
| [MobileMenu.jsx](components/MobileMenu.jsx) | Botón Menu/Close que expande un panel rosa con timeline GSAP (el botón crece a `min(88vw,360px)`×420, links entran con `rotateX`) | `Header` |
| [SmoothScroll.jsx](components/SmoothScroll.jsx) | Envuelve en `ReactLenis` **solo si es desktop**. En móvil devuelve `children` tal cual | `app/layout.js` |
| [transitions/TransitionProvider.jsx](components/transitions/TransitionProvider.jsx) | Contexto de navegación + Header/Footer + `<main>` animado. Al navegar: sale con GSAP (`y:-40, opacity:0`), `router.push`, `scrollTo(0,0)`, entra (`y:60→0`) | `app/layout.js` |
| [transitions/TransitionLink.jsx](components/transitions/TransitionLink.jsx) | `<Link>` de Next que hace `preventDefault()` y delega en el `navigate` del contexto | `Header`, `MobileMenu`, `StudiosSection` |
| [lib/navLinks.js](lib/navLinks.js) | Fuente única de los 4 links de nav: About, Studios, What We Do, Contact | `Header`, `MobileMenu` |
| [hooks/useIsDesktop.js](hooks/useIsDesktop.js) | `matchMedia(min-width: 768px)`. Devuelve `null` en el primer render (evita mismatch de hidratación) | `SmoothScroll`, `TechnoSection` |

### Secciones de la home

| Componente | Qué hace |
|---|---|
| [Hero.jsx](components/Hero.jsx) | Grid 2 columnas. Izquierda: 3 logos que rotan cada 2600 ms con cross-fade `clipPath` (Framer Motion). Derecha: "INDEPENDENCE / IS A STRENGTH" + párrafo + botón |
| [StudiosSection.jsx](components/StudiosSection.jsx) | "Allow us to re-introduce ourselves…" + 3 tarjetas de color enlazadas a `/studios`, `/innovation`, `/events` |
| [DistributionSection.jsx](components/DistributionSection.jsx) | Fondo rosa. "Distribution and beyond" + los 8 servicios rotados, **estáticos** (sin animación desde 2026-09-07, ver bitácora) |
| [TechnoSection.jsx](components/TechnoSection.jsx) | **Bifurca desktop/móvil.** Desktop: `FluidCursor` WebGL + títulos escalonados + `WordReveal`. Móvil: sin WebGL, `BlockReveal` con barras rosas. Debajo, el `ImageCarousel` |
| [NewsletterSection.jsx](components/NewsletterSection.jsx) | "Join the flock" + formulario de email. **Solo estado local**: `setSubmitted(true)`, no envía nada a ningún sitio |

### Componentes de animación de texto (todos GSAP + SplitText)

| Componente | Divide por | Efecto | Usado en |
|---|---|---|---|
| [Copy.jsx](components/Copy.jsx) | líneas (con máscara) | Líneas suben desde `y:100%`, stagger 0.08 | About, PageHero, Hero, Studios, Distribution, Newsletter |
| [WordReveal.jsx](components/WordReveal.jsx) | palabras | `yPercent:110→0` | TechnoSection (solo desktop) |
| [CascadeWord.jsx](components/CascadeWord.jsx) | caracteres | `yPercent:110→0`; expone los chars vía `onReady` | ⚠️ **Ya no se usa** desde 2026-09-07 |
| [BlockReveal.jsx](components/BlockReveal.jsx) | líneas | Barra de color barre de izq. a der., revela la línea, barre de vuelta | TechnoSection (solo móvil) |

### Otros

| Componente | Qué hace |
|---|---|
| [PageHero.jsx](components/PageHero.jsx) | Plantilla de las 6 páginas secundarias: eyebrow + h1 + N párrafos, con `bg`/`color` parametrizables |
| [ImageCarousel.jsx](components/ImageCarousel.jsx) | Carrusel horizontal, autoplay cada 3200 ms + arrastre con puntero. Acepta `images`, `bg`, `grayscale` |
| [fluid/FluidCursor.jsx](components/fluid/FluidCursor.jsx) | Monta la simulación con `import()` dinámico de Three.js. Capa `mix-blend-difference` |
| [fluid/FluidSimulation.js](components/fluid/FluidSimulation.js) | Solver Navier-Stokes en WebGL (advección, divergencia, presión, curl) con render targets de Three.js |
| [fluid/shaders.js](components/fluid/shaders.js) | Los shaders GLSL del solver |

### Componentes sin uso

**[CascadeWord.jsx](components/CascadeWord.jsx)** quedó sin usar el 2026-09-07, al quitar la
animación de DistributionSection (su único consumidor). **No se ha borrado** — pendiente de decidir
si se elimina o se reserva para otra sección. El resto de componentes sí se usan.

---

## 4. Qué animación hace cada librería

| Librería | Dónde | Qué anima |
|---|---|---|
| **GSAP** (`SplitText`, `ScrollTrigger`, timelines) | En todas las páginas | El 90% del movimiento del sitio: revelados de texto en scroll (`Copy`, `WordReveal`, `BlockReveal`), la apertura del menú móvil y las transiciones entre páginas |
| **Framer Motion** | Solo [Hero.jsx](components/Hero.jsx#L28-L45) | El cross-fade `clipPath` entre los 3 logos del hero. Es el **único** uso en todo el repo |
| **Three.js** | [TechnoSection](components/TechnoSection.jsx#L33) → `FluidCursor`, **solo desktop** | Simulación de fluidos que sigue al ratón; se mezcla con `mix-blend-difference` para invertir las letras a su paso |
| **Lenis** | [SmoothScroll.jsx](components/SmoothScroll.jsx), **solo desktop** | Scroll suave global. Desactivado a propósito en táctil (ver el comentario en el código y el commit `42918ef`) |
| **Matter.js** | — | **Nada. No se importa en ningún archivo.** Ver §6 |

**Verificado en navegador:**
- Desktop: `<html class="… lenis">`, 1 `<canvas>` dentro de `#technology`.
- Móvil (390×844): sin clase `lenis`, **0 canvas** en `#technology`. La bifurcación funciona.

---

## 5. Qué está cerrado y funcionando (con la verificación que lo confirma)

Todo lo siguiente está **comprobado ejecutando**, no solo leyendo código.

### `npm run build` — ✅ limpio, exit 0

```
▲ Next.js 16.3.3 (Turbopack)
✓ Compiled successfully in 2.8s
✓ Generating static pages (11/11) in 120ms
```
Las 9 rutas se prerenderizan como estáticas. Sin errores ni warnings.

### `npm run lint` — ⚠️ 0 errores, 2 warnings

```
components/ImageCarousel.jsx:54:6  warning  React Hook useEffect has a missing
                                            dependency: 'startAutoplay'   react-hooks/exhaustive-deps
components/fluid/shaders.js:5:1    warning  Assign object to a variable before
                                            exporting as module default   import/no-anonymous-default-export
```

### Navegador (Playwright headless, Chromium)

Recorrí las 9 rutas en **desktop (1440×900)** y **móvil (390×844, `is_mobile`+`has_touch`)`**,
haciendo scroll completo en cada una:

- **Las 8 rutas reales devuelven HTTP 200**; `/no-such-page` devuelve 404 correctamente.
- **0 errores de página (`pageerror`) en las 18 cargas.**
- **0 peticiones fallidas (`requestfailed`) en las 18 cargas.**
- Único warning de consola real: `Image ... has "fill" but is missing "sizes"` en la home,
  para los 3 logos del Hero y la mascota de Newsletter. (Los mensajes `GL Driver Message ...
  GPU stall due to ReadPixels` son del renderer software de headless, no del sitio.)

### Comportamientos concretos verificados

| Qué | Cómo lo comprobé | Resultado |
|---|---|---|
| Transición entre páginas | Click en "ABOUT" del nav | `opacity` de `<main>` = **0.1507** a mitad de transición → URL pasa a `/about` → `opacity` vuelve a **1** → `scrollY` = 0 ✅ |
| Lenis solo en desktop | Clase de `<html>` | Desktop: `"… lenis"` · Móvil: sin `lenis` ✅ |
| Fluid cursor solo en desktop | Contar `#technology canvas` | Desktop: **1** · Móvil: **0** ✅ |
| Autoplay del carrusel | `scrollLeft` antes/después de 4.2 s | **2305 → 2766**, avanza ✅ |
| Menú móvil | Click en "Menu" → screenshot → click en "Close" | Abre el panel rosa con los 4 links + Facebook/Instagram, y cierra ✅ |
| Botón back-to-top | Scroll al fondo → click | `scrollY` **4704 → 0** ✅ (funciona pese a que Lenis controla el scroll) |
| Sin JavaScript | Contexto con `java_script_enabled=False` | El texto se renderiza (2254 caracteres), el header y los links funcionan como `<a>` normales ✅ (el logo del Hero no aparece: depende de Framer Motion) |
| `prefers-reduced-motion` | Contexto con `reduced_motion="reduce"` | Carga sin errores, **pero las animaciones no se reducen** — ver §6 |

Capturas de la auditoría en:
`/private/tmp/claude-501/-Users-uri-Projects-balmoral/0083a15d-44c5-43a8-8768-3f66cb153851/scratchpad/`
(directorio temporal de sesión, se borrará).

---

## 6. Problemas y cabos sueltos detectados

Ordenados por severidad. Ninguno se ha tocado — esta pasada fue solo auditoría.

### 🔴 Alta

**1. Funcionalidad que no existe: el sitio no puede recibir un solo contacto.**
⚠️ **Esto está publicado y afecta a visitantes reales** — verificado en producción, ver §2b.
Todo lo que parece accionable es decorativo:
- El **formulario de newsletter** ([NewsletterSection.jsx:11-15](components/NewsletterSection.jsx#L11-L15))
  hace `setSubmitted(true)` y nada más. **No hay backend, ni API route, ni servicio de email.**
  El usuario ve "Thanks — you're on the list" sin que se guarde nada.
- **4 botones "Learn More"** (Hero, StudiosSection, DistributionSection, TechnoSection) sin `onClick`
  y sin `href`. Verificado en navegador: hay exactamente 4 en la home.
- Botones **"Join Us"** y **"EN"** del header, y **"EN"/"FR"** del footer: sin handler.
- **Los 6 links del footer apuntan a anclas inexistentes.** Comprobado en el DOM:
  `#jobs`, `#brand-assets`, `#contact`, `#disclaimer`, `#privacy`, `#statement` → los 6 dan
  `getElementById() === null`. Los 2 iconos sociales son `href="#"`.
  (Ojo: existe una ruta `/contact` real, pero el footer enlaza a `#contact`, no a ella.)

**2. `matter-js` es una dependencia muerta.**
Está en `package.json` (0.20.0, instalado) pero **no se importa en ningún archivo**.
El historial explica por qué: el commit `42918ef` eliminó `components/FallingWords.jsx` (157 líneas)
con el mensaje *"Replace falling-words physics with word/char mask reveals"*. Se quitó el componente
de física pero **no la dependencia**. Se puede desinstalar sin riesgo.

### 🟡 Media

**3. `/about` y `/` no tienen `<title>` propio.**
Ambas son `"use client"` y por eso no pueden exportar `metadata`; heredan
`"Balmoral | Label Services"`. Las otras 6 páginas sí tienen el suyo. Es una inconsistencia de SEO.
Además, **ninguna página define `description` propia** ni Open Graph / Twitter cards, y no hay
`sitemap`, `robots.txt` ni favicon propio (sigue el `favicon.ico` de `create-next-app`).

**4. Ninguna animación respeta `prefers-reduced-motion`.**
Grep sobre todo el código: el único `matchMedia` es el de `useIsDesktop`. Con
`reduced_motion="reduce"` el sitio sigue reproduciendo todo — incluido el **bucle infinito** de
`DistributionSection` (`repeat: -1`), que es el caso más problemático de accesibilidad.

**5. `TransitionLink` rompe la navegación estándar del navegador.**
Hace `e.preventDefault()` **siempre** ([TransitionLink.jsx:18](components/transitions/TransitionLink.jsx#L18)),
sin comprobar `e.metaKey`/`ctrlKey`/`button`. Consecuencia: **⌘-click, Ctrl-click y click central
no abren en pestaña nueva**. Afecta a los links del header, del menú móvil y de las 3 tarjetas.

**6. Imágenes muy pesadas sin optimizar en origen.**
`public/images/about/` pesa **7,7 MB** en 22 JPEG (~300-400 KB cada uno; `carousel-9.jpeg` pesa
706 KB). Los 21 del carrusel se referencian todos a la vez en
[TechnoSection.jsx:14-17](components/TechnoSection.jsx#L14-L17). `next/image` los sirve
optimizados, pero el peso en el repo y el coste de la primera optimización son altos.

**7. `about-bg.jpeg` y `carousel-16.jpeg` son el mismo archivo.**
Checksums MD5 idénticos (`67e0952de7a1884901bbc2cff7393aa2`), 401377 bytes ambos. Es la única
pareja duplicada. La foto de fondo del About aparece también dentro del carrusel de la home.

### 🟢 Baja

**8. Los 2 warnings de lint** de §5 (dependencia de `useEffect` en `ImageCarousel`, export anónimo
en `shaders.js`). Ninguno provoca fallo observable.

**9. `Image` con `fill` sin `sizes`.** Confirmado en consola para los 3 logos del Hero y la mascota
de Newsletter. En el código, la foto de fondo de `/about` también usa `fill` sin `sizes`.
`ImageCarousel` es el único que sí lo pasa (`sizes="45vw"`).

**10. Assets sin usar en `public/`.** `LOGO_BALMORAL.png` (56 KB) no se referencia desde ningún
sitio — el logo que se usa realmente es `RECURSOS_BALMORAL_011.png`. Y los 5 SVG del template
(`file`, `globe`, `next`, `vercel`, `window`) tampoco se usan.

**11. `README.md` es el genérico de `create-next-app`**, sin adaptar al proyecto.

**12. `/` y `/about` son `"use client"` sin necesitarlo.** Sus hijos ya son componentes cliente;
podrían ser componentes servidor (y así recuperar `metadata`, ver punto 3).

**13. El 404 no está personalizado** — no hay `app/not-found.js`, se usa el de Next por defecto,
que además aparece sin el Header ni el Footer con el estilo del sitio.

**14. En móvil, el `<h1>` de `/about` ocupa exactamente el ancho del viewport.**
Medido a 390 px: `left: 0, right: 390, width: 390` con `font-size: 50.7px` (`text-[13vw]`).
Se desborda del `px-4` de su contenedor y toca ambos bordes. **No causa scroll horizontal**
(`documentElement.scrollWidth === 390`), pero visualmente va de borde a borde.
**Pendiente de confirmar si es intencionado.**

---

## 7. Pendiente de contenido o decisiones del usuario

Lo que **no** puedo deducir del código y necesita confirmación:

1. **¿Es una demo o el sitio real?** El commit inicial y la metadata dicen "demo".
2. **¿Qué copy es definitivo?** En particular: los emails `@balmoral-labels.com`, "London",
   "since 2006", y los textos de las 6 páginas `PageHero`.
3. **¿A dónde deben llevar los 4 botones "Learn More"?** Cada uno está en una sección distinta,
   así que probablemente a `/studios`, `/what-we-do`, `/innovation`… pero no está escrito en ningún sitio.
4. **¿Qué hace "Join Us"?** ¿Formulario, `mailto:`, página nueva?
5. **¿El newsletter debe funcionar de verdad?** Si sí, hace falta decidir el servicio
   (Klaviyo/Mailchimp/API route propia) y las variables de entorno correspondientes.
6. **¿Hay que implementar FR de verdad, o quitar los conmutadores de idioma?**
7. **¿Existen las páginas Jobs / Brand Assets / Disclaimer / Privacy / Statement regarding AI?**
   El footer las promete pero no existen como rutas.
8. **¿Las 6 páginas `PageHero` se quedan siendo una sola pantalla** o crecen con contenido propio?
9. ~~¿Dónde se despliega?~~ **Resuelto (2026-09-07):** Vercel, https://balmoral-rouge.vercel.app.
   Queda pendiente: **¿se le va a poner dominio propio?** Ahora mismo es un subdominio
   `*.vercel.app` autogenerado. Y **¿es una URL pública o solo para revisión interna?** — porque
   si ya la ve gente de fuera, el formulario de newsletter que se traga los emails (§2b) pasa a
   ser urgente.
10. **¿Por qué se quitó la física de `FallingWords`?** El commit dice que se sustituyó por revelados
    de máscara, pero no si fue por rendimiento, por estética, o por problemas en móvil.
    (Relevante para decidir si se desinstala `matter-js` o se pensaba recuperar.)

---

## 8. Historial de commits (contexto de intención)

Solo 4 commits, todos de `cotallomanuel-collab`, entre el 28/08 y el 01/09 de 2026.

| Commit | Fecha | Qué añadió |
|---|---|---|
| `fd98c1b` | 2026-08-28 | **Initial commit from Create Next App.** Template limpio. Ya traía `AGENTS.md` y `CLAUDE.md` |
| `772d40d` | 2026-08-29 | **"Balmoral landing page demo".** Toda la home de una vez: Hero, Distribution, Techno, Newsletter, Header, Footer, `Copy`, la simulación de fluidos completa (`FluidSimulation` + shaders, 409 líneas) y `FallingWords` (física con Matter.js). Aquí entran las dependencias de animación |
| `a39eb0b` | 2026-08-30 | **Menú móvil, variante móvil de Technology, 6 páginas nuevas y transiciones GSAP.** Aparecen `PageHero`, `TransitionProvider`/`TransitionLink`, `useIsDesktop`, `BlockReveal`, `MobileMenu`, `StudiosSection`. Es el commit que introduce la bifurcación desktop/móvil como patrón |
| `42918ef` | 2026-09-01 | **Contenido real del About, cascadas de letras y arreglos de móvil.** **Elimina `FallingWords.jsx`** ("replace falling-words physics with word/char mask reveals"), añade `CascadeWord`, `WordReveal`, `ImageCarousel`, las 22 fotos, EB Garamond, `lib/navLinks.js`, y **desactiva Lenis en táctil** porque el scroll se quedaba atascado |

**Lectura de la intención de diseño** (basada solo en los mensajes de commit y el código):
el proyecto avanzó de *maqueta visual* → *sitio multipágina* → *contenido y pulido móvil*.
La dirección clara del último commit fue **cambiar física por revelados de texto controlados**
y **tratar el móvil como un caso aparte**, no como una versión reducida del desktop.

---

## 9. Bitácora de cambios

Cada ronda de correcciones se apunta aquí: **qué se pidió, qué se hizo, por qué.**

### 2026-09-06 — Auditoría inicial
- **Qué se pidió:** auditar el proyecto a fondo sin tocar código, con verificación real
  (build, lint, navegador desktop y móvil), y dejar este documento como contexto vivo.
- **Qué se hizo:** lectura completa de `app/`, `components/`, `hooks/`, `lib/`, `public/` y toda la
  configuración; `npm run build` y `npm run lint`; recorrido de las 9 rutas en Chromium a 1440×900
  y 390×844 capturando consola, errores de página y peticiones fallidas; verificación puntual de
  transiciones, Lenis, fluid cursor, carrusel, menú móvil, back-to-top, sin-JS y reduced-motion;
  medición de desbordes; checksums de las imágenes; revisión de los 4 commits.
  Se añadió `@contexto.md` a `CLAUDE.md`. **Ningún archivo de código modificado.**
- **Por qué:** establecer una base de contexto fiable antes de empezar a cambiar nada.

### 2026-09-07 — Localizado y auditado el despliegue de producción
- **Qué se pidió:** el link de Vercel del `main` de Balmoral.
- **Qué se hizo:** en la auditoría del día anterior no encontré config de despliegue en el repo
  (no hay `.vercel/`, `vercel.json` ni workflows, y el CLI no está instalado), así que se lo dije
  al usuario en vez de dar una URL inventada. **El usuario aportó la URL:
  https://balmoral-rouge.vercel.app.** Con ella audité producción igual que local: 9 rutas ×
  desktop/móvil, consola, errores y peticiones fallidas; comprobé Lenis, fluid cursor y
  transiciones; y probé el formulario de newsletter en vivo. Se añadió la §2b, se marcó el punto 1
  de §6 como confirmado en producción y se resolvió la pregunta 9 de §7.
  **Ningún archivo de código modificado.**
- **Por qué:** el documento no registraba que el sitio ya está publicado, y eso cambia la prioridad
  de los fallos: dejan de ser deuda de una maqueta y pasan a afectar a visitantes reales.
- **Hallazgo principal:** producción está sincronizada con `main` (`42918ef`), sin deriva, y no da
  ningún error. Pero el formulario de newsletter **está vivo, no envía nada a ningún sitio y aun
  así confirma al visitante que se ha suscrito**.
- **Contexto que dio el usuario:** el sitio está **aún en desarrollo visual**, así que los fallos
  funcionales de §6 no son urgentes por ahora.

### 2026-09-07 — "Distribution and beyond": servicios estáticos, sin efecto
- **Qué se pidió:** quitar por completo el efecto de desvanecido/desenfoque del bloque de 8
  servicios de la derecha. Todas las palabras fijas, nítidas, misma opacidad, mismo color y peso,
  **sin animación de entrada ni de salida, estáticas desde el primer momento**. Manteniendo la
  disposición actual (posiciones, tamaños y saltos de línea).
- **Qué se hizo:** en [DistributionSection.jsx](components/DistributionSection.jsx) se quitaron las
  **dos** fuentes de movimiento, no solo la evidente:
  1. El `useGSAP` con `repeat: -1` que animaba `opacity` y `filter: blur(14px)` encadenando frases
     (el bucle visible).
  2. El envoltorio `CascadeWord` de cada servicio, que hacía además un revelado letra a letra con
     `SplitText` al entrar en scroll (la animación de entrada).
  Cada servicio pasa a ser un `<span>` plano con **las mismas clases** que tenía `CascadeWord`
  (que renderizaba exactamente `<span ref className>`), así que la maquetación no se mueve.
  Se eliminaron los imports de `gsap`, `useGSAP`, `useRef` y `CascadeWord`, ya innecesarios.
  **No se tocó** el `Copy` del título de la columna izquierda (está fuera del bloque pedido).
- **Por qué:** petición directa del usuario, en fase de desarrollo visual.
- **Verificación:** `npm run build` limpio; `npm run lint` sin warnings nuevos (siguen los 2
  preexistentes). En navegador a **1920, 1440, 1280, 1024, 768, 390 y 320 px**, midiendo los
  estilos computados de las 8 palabras: `opacity: 1` en todas, **ninguna con `filter`**, un único
  color (`rgb(42,27,93)`), un único peso (900) y un único tamaño por breakpoint. Se tomó una
  muestra en t=0 y otra **12 s después**: idénticas en los 7 anchos, lo que demuestra que ya no
  queda ninguna animación en bucle. 0 errores de página.
- **Nota:** `CascadeWord` se queda sin usar a raíz de este cambio. **Pendiente de decidir** si se
  borra o se guarda para otra sección.
- **Discrepancia señalada al usuario:** en su lista escribió *"PR AND MEDIA"*, pero el texto real
  del código es **"PR and Marketing"**. Como pidió cambiar solo el efecto, **se mantuvo el texto
  original**. Pendiente de confirmar si quiere cambiarlo.

### 2026-09-07 — About: bloque de texto según referencia de revista
- **Qué se pidió:** rehacer el bloque de la página About tomando como referencia una doble página
  de revista (reportaje de Steven Meisel). En concreto: bajar el bloque a la mitad inferior de la
  foto; igualar el ancho de la cursiva y el párrafo a una columna común **más ancha** que la
  actual, para que el párrafo ocupe menos líneas; reducir mucho los huecos verticales para que los
  tres se lean como una sola pieza; poner la cursiva pegada bajo el título como subtítulo; bajar el
  tamaño del párrafo para marcar jerarquía; y mantener el título llenando esa columna sin
  desbordarla.
- **Qué se hizo** en [app/about/page.js](app/about/page.js):
  - Los tres elementos pasan a vivir dentro de **un único `div` de columna** (`w-full md:w-[74%]`)
    con los hijos a `w-full`. Antes cada uno tenía su propio ancho (`md:w-[62%]` la cursiva y
    `md:w-[48%]` el párrafo), que es lo que impedía que cuadrasen.
  - **74 % es el ancho que llena el título a `9vw`**, así que el título define la columna y los
    otros dos se ajustan a ella.
  - Los dos párrafos pasan a **`clamp()` con unidad `vw`** en vez de tamaños fijos: la columna
    escala con el viewport, así que un tamaño fijo hacía crecer el número de líneas al estrechar.
    Con `vw` el recuento se mantiene ≈3 líneas en desktop, como la referencia.
  - Huecos comprimidos: de `mt-10` + `gap-5` a `mt-1.5`/`mt-3.5` (8 px y 16 px reales en desktop).
  - Jerarquía: párrafo de `md:text-3xl lg:text-4xl` → `clamp(1rem,1.25vw,1.6rem)`; cursiva a
    `clamp(0.8rem,0.95vw,1.15rem)`.
  - Título en móvil de `13vw` → `11.5vw`, para que **deje de desbordar** su contenedor (era el
    punto 14 de §6 de esta auditoría, que queda resuelto de paso).
  - Los tres `Copy` pasan a **`animateOnScroll={false}`** — ver más abajo.
- **Problema detectado y corregido durante la verificación:** al bajar el bloque, los dos párrafos
  quedaron **invisibles al cargar**. `Copy` anima con `ScrollTrigger` en `start: "top 80%"`, y al
  moverse a la mitad inferior ya no cruzaban ese umbral hasta hacer scroll. Se detectó en captura
  de desktop 1440 (solo se veía el título). Arreglado con `animateOnScroll={false}` en los tres,
  el mismo patrón que ya usa [Hero.jsx](components/Hero.jsx). **Es un hero: debe verse al entrar.**
- **Verificación** en 1920, 1440, 1280, 1024, 768, 430, 390 y 320 px:
  - Ancho de cursiva == ancho de párrafo: **exacto en los 8**.
  - Los tres alineados al mismo eje: **sí en los 8**.
  - El título llena el **96-99 %** de la columna y **no la desborda en ninguno**. (Ojo al medirlo:
    `SplitText` envuelve el texto en `div`s de línea al 100 %, así que hay que medir el **nodo de
    texto** con un `Range`, no la caja del `h1` — medir la caja da un 100 % falso.)
  - Inicio del bloque: entre el **53 % y el 71 %** de la altura de la sección → mitad inferior en
    todos los anchos.
  - Párrafo: **3 líneas** de 1280 a 1920 (como la referencia), 4 a 1024, 5 a 768.
  - Cursiva: **1 línea** en desktop, o sea subtítulo real.
  - Texto visible sin hacer scroll: desfase de 0-2 px respecto a su caja en los 8 anchos.
  - Sin desbordamiento horizontal, 0 errores de página. `build` limpio y `lint` sin warnings nuevos.
