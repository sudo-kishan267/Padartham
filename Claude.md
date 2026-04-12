# Padartham Website — Project Context for AI Assistants

> This file provides complete project context so any AI assistant can quickly understand the codebase, architecture, conventions, and current state of the project.

---

## 🏢 About the Project

**Padartham** (styled as "Padārtham" with a macron) is a **premium flavour, spice, and ingredient sourcing company** based in India. The website is a single-page marketing landing page for the brand, operated under the parent company **HANLE M&M Pvt. Ltd.**

**Key branding facts:**
- The project was originally called "Padhartam" and was rebranded to **"Padartham"** (note the letter order change)
- The ® symbol appears after the logo name
- A leaf SVG icon is part of the logo
- The tagline focuses on **eliminating sourcing friction** for factories and food manufacturers

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.4 | UI component library |
| Vite | 8.0.1 | Build tool & dev server |
| Vanilla CSS | — | All styling (no Tailwind, no CSS-in-JS) |
| Google Fonts | — | Outfit (headings), Inter (body), Jost, Nunito, Raleway (loaded but secondary) |
| ESLint | 9.39.4 | Linting |
| GitHub Pages | — | Deployment (via GitHub Actions) |

**No routing library** is used — this is a single-page site with anchor-based smooth scrolling.

---

## 📁 Project Structure

```
Padhartam Website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions → builds & deploys to GitHub Pages
├── public/
│   ├── favicon.svg             # Site favicon
│   └── icons.svg               # SVG icon sprite
├── src/
│   ├── assets/                 # Static images (AI-generated product/hero images)
│   │   ├── hero-bg.png         # Hero section background
│   │   ├── hero.png            # Hero image (currently unused in code)
│   │   ├── product-spice.png   # Product card: Royal Spice Blend
│   │   ├── product-vanilla.png # Product card: Madagascar Vanilla
│   │   ├── product-herbs.png   # Product card: Garden Herb Fusion
│   │   ├── product-saffron.png # Product card: Kashmir Saffron
│   │   ├── react.svg           # Default Vite template (unused)
│   │   └── vite.svg            # Default Vite template (unused)
│   ├── components/             # All page sections (each has .jsx + .css pair)
│   │   ├── Navbar.jsx / .css   # Fixed top nav, scroll-aware, hamburger menu
│   │   ├── Hero.jsx / .css     # Full-screen hero with stats bar
│   │   ├── Products.jsx / .css # 4-card product grid
│   │   ├── About.jsx / .css    # Two-column: image + story + feature icons
│   │   ├── Testimonials.jsx / .css # Carousel with dot navigation
│   │   ├── Contact.jsx / .css  # Two-column: info + form
│   │   └── Footer.jsx / .css   # Multi-column footer with socials
│   ├── App.jsx                 # Root component — assembles all sections, IntersectionObserver
│   ├── App.css                 # Empty (styles live in index.css + component CSS files)
│   ├── index.css               # 🎨 DESIGN SYSTEM — all tokens, resets, utilities, animations
│   └── main.jsx                # ReactDOM entry point
├── index.html                  # HTML shell with meta tags, Google Fonts, <div id="root">
├── vite.config.js              # Vite config — base path set to '/Padartham/' for GitHub Pages
├── package.json                # Dependencies & scripts
├── .gitignore
└── README.md                   # Project README
```

---

## 🎨 Design System (`index.css`)

All design tokens are defined as CSS custom properties in `:root`:

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0a3d3d` | Page background (dark teal) |
| `--color-bg-light` | `#0f5555` | Lighter background variant |
| `--color-bg-card` | `#0d4a4a` | Card backgrounds |
| `--color-bg-glass` | `rgba(10, 61, 61, 0.8)` | Glassmorphism panels |
| `--color-accent` | `#00D96F` | Primary accent (bright green) |
| `--color-accent-light` | `#1FFF88` | Hover/highlight accent |
| `--color-accent-dark` | `#00B559` | Darker accent variant |
| `--color-text` | `#ffffff` | Primary text |
| `--color-text-muted` | `#a0d4d4` | Secondary text |
| `--color-text-dim` | `#7ab5b5` | Tertiary/dim text |
| `--color-gradient-start` | `#00D96F` | Button gradient start |
| `--color-gradient-end` | `#007EA7` | Button gradient end (teal) |

> **Note:** The README mentions `#14452F` (deep forest green) as the primary brand color from an earlier design iteration. The actual CSS now uses a **dark teal/green** (`#0a3d3d`) background with **bright green** (`#00D96F`) accents. The README is slightly outdated on this point.

### Typography
- **Headings**: `'Outfit', sans-serif` — weights 300–800
- **Body**: `'Inter', sans-serif` — weights 300–600
- **Also loaded** (via `index.html`): Nunito (900), Raleway (500), Jost (400–600) — these are available but not currently assigned to any CSS variable

### Key Utility Classes
- `.container` — max-width 1200px centered
- `.section-label` — uppercase accent-colored label above section titles
- `.section-title` — responsive clamped heading
- `.section-subtitle` — muted description text
- `.btn-primary` — gradient pill button with hover lift + shine effect
- `.btn-secondary` — outlined pill button
- `.fade-in`, `.fade-in-left`, `.fade-in-right` — scroll-triggered animation classes

### Animation System
Scroll animations use the **IntersectionObserver** pattern:
1. Elements start with `.fade-in` / `.fade-in-left` / `.fade-in-right` (hidden state)
2. `App.jsx` sets up an observer that adds `.visible` class when elements enter viewport
3. CSS transitions handle the actual animation (opacity + transform over 0.8s)

---

## 🧩 Component Details

### Navbar (`Navbar.jsx`)
- **Scroll-aware**: adds `navbar--scrolled` class when `scrollY > 50`
- **Mobile menu**: hamburger toggle with `menuOpen` state
- **Logo**: "Padārtham" text with inline SVG leaf icon + ® symbol
- **CTA button**: "Get In Touch" links to `#contact`
- **Nav links**: Home, Products, About, Testimonials, Contact (anchor-based)

### Hero (`Hero.jsx`)
- Full-screen section with background image (`hero-bg.png`) + overlay
- **Badge**: "Crafted with Passion Since 2024"
- **Headline**: "Sourcing Aromas & Ingredients Simplified."
- **Description**: Focuses on B2B sourcing value proposition
- **Stats bar**: 200+ Unique Flavours | 25+ Years of Excellence | 50+ Countries Served
- **Scroll indicator**: animated line at bottom

### Products (`Products.jsx`)
- 4-card grid with staggered fade-in animations
- Products: Royal Spice Blend, Madagascar Vanilla, Garden Herb Fusion, Kashmir Saffron
- Each card has: image, tag badge, name, description, "Learn More" link
- Product data is hardcoded in the component

### About (`About.jsx`)
- Two-column layout: image (left) + content (right)
- Reuses `hero-bg.png` as the "about" image
- Experience badge overlay: "25+ Years of Excellence"
- 4 feature items with emoji icons: Naturally Sourced, Lab Tested, Award Winning, Sustainable

### Testimonials (`Testimonials.jsx`)
- **Carousel** with `active` state index
- 3 testimonials from: Chef Maria Rossi, James Chen, Priya Sharma
- Star ratings, blockquote text, avatar (first letter), author info
- Dot navigation buttons

### Contact (`Contact.jsx`)
- Two-column: info panel (left) + form (right)
- **Info**: address (Mumbai), email (hello@padartham.com), phone (+91 22 1234 5678)
- **Form fields**: name, email, subject, message (all required)
- **Submit handler**: currently just shows an `alert()` and resets form — no backend

### Footer (`Footer.jsx`)
- **Brand section**: HANLE M&M logo (SVG — red/white diamond "H" logo) + tagline
- **Social links**: Instagram, Twitter/X, LinkedIn (all `href="#"` — not connected)
- **Link columns**: Products, Company, Support (all anchor to page sections)
- **Bottom bar**: © HANLE M&M Pvt. Ltd. + Privacy Policy / Terms links (non-functional)

---

## 🚀 Deployment

- **Hosting**: GitHub Pages
- **Base path**: `/Padartham/` (set in `vite.config.js`)
- **CI/CD**: `.github/workflows/deploy.yml` — auto-deploys on push to `main`
  - Uses Node.js 24, runs `npm install` → `npm run build` → uploads `./dist`
- **Repository**: `sudo-kishan267/Padartham`

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server (default: `http://localhost:5173`) |
| `npm run build` | Production build → `./dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## ⚠️ Known Issues & Notes

1. **No backend** — The contact form uses `alert()` on submit. No email service or API is connected.
2. **Social links are placeholders** — All social media links point to `#`.

3. **Mixed JSX attribute syntax** — Some components use `class` instead of `className` and `stroke-width` instead of `strokeWidth` in SVG elements (e.g., in `Navbar.jsx`). React may warn about these.
4. **README color is outdated** — README says `#14452F` is the primary color, but the actual CSS uses `#0a3d3d` background + `#00D96F` accent.
5. **Extra Google Fonts loaded** — Nunito, Raleway, and Jost are loaded in `index.html` but only `Jost` is potentially used nowhere. This adds unnecessary network requests.
6. **No favicon setup** — `index.html` references `/vite.svg` as favicon, not the custom `favicon.svg` in `/public/`.

---

## 🔧 Conventions & Patterns

- **Component structure**: Each section is a self-contained component with co-located CSS (e.g., `Hero.jsx` + `Hero.css`)
- **CSS methodology**: BEM-like naming (`navbar__logo`, `product-card__image-wrap`)
- **No state management library** — Only React's built-in `useState` and `useEffect`
- **No TypeScript** — Pure JavaScript/JSX
- **Import style**: Named imports for React hooks, default imports for components
- **ID naming**: Interactive elements use descriptive IDs (`contact-form`, `menu-toggle`, `product-1`, etc.)

---

## 📝 History & Brand Evolution

1. **Original name**: "Padhartam" → rebranded to **"Padartham"**
2. **Original colors**: Amber/gold theme → rebranded to **green** (`#14452F` initially, then evolved to current teal/green palette)
3. **Parent company**: HANLE M&M Pvt. Ltd.
4. The folder on disk is still named "Padhartam Website" (old name), but the repo and all code reference "Padartham"
