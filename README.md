# Padartham — Premium Flavours & Spices 🌿

> Crafting extraordinary flavours from the finest ingredients.

Padartham is a modern, responsive landing page for a premium flavour and spice company. Built with React and Vite, the site showcases the brand's products, story, customer testimonials, and contact information with a polished, elegant design.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI component library |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| Vanilla CSS | Custom styling & animations |
| Google Fonts (Outfit, Inter) | Typography |

---

## 📁 Project Structure

```
padhartam-website/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero / landing section
│   │   ├── Products.jsx     # Product showcase
│   │   ├── About.jsx        # About the company
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Site footer
│   ├── App.jsx              # Root component with scroll animations
│   ├── index.css            # Global styles & design tokens
│   └── main.jsx             # App entry point
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
└── package.json
```

---

## ✨ Features

- **Responsive Design** — Fully mobile-friendly layout
- **Scroll Animations** — Intersection Observer–powered fade-in effects
- **Sections** — Navbar, Hero, Products, About, Testimonials, Contact, Footer
- **Brand Colors** — Deep forest green (`#14452F`) as the primary brand color
- **Modern Typography** — Outfit & Inter from Google Fonts
- **SEO Ready** — Meta description and semantic HTML

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the dev server with hot module replacement
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🎨 Design Highlights

- **Primary color**: `#14452F` (deep forest green)
- **Font**: `Outfit` (headings) · `Inter` (body)
- **Animations**: CSS fade-in transitions triggered on scroll via `IntersectionObserver`

---

## 📄 License

This project is private and proprietary to Padartham.
