import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Company", href: "#our-company" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} id="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-text">            
            Pad&#257;rtham
            <svg
              class="leaf"
              viewBox="0 0 28 52"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(30deg)" }}
            >
              <path
                d="M14,52 C14,52 28,34 22,16 C18,4 14,0 14,0 C14,0 10,4 6,16 C0,34 14,52 14,52 Z"
                fill="#0e7742"
              />
              <path
                d="M14,52 C14,52 22,36 18,20 C16,10 14,2 14,2 C14,2 12,10 10,20 C6,36 14,52 14,52 Z"
                fill="#00B559"
                opacity="0.4"
              />
              <line
                x1="14"
                y1="4"
                x2="14"
                y2="50"
                stroke="#0c5832"
                stroke-width="1"
                opacity="0.6"
              />
            </svg>
            <span class="reg">&#174;</span>
          </span>
        </a>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta btn-primary">
          <span>Get In Touch</span>
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
