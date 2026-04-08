import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'Spice Blends', href: '#products' },
      { label: 'Extracts', href: '#products' },
      { label: 'Seasonings', href: '#products' },
      { label: 'Custom Blends', href: '#products' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'Press Kit', href: '#contact' },
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#contact' },
      { label: 'Shipping', href: '#contact' },
      { label: 'Returns', href: '#contact' },
    ],
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <svg id="logo" className='footer-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                <rect id="bg" x="0" y="0" width="140" height="140" rx="15" fill="#E0212A"></rect>
                <polygon id="diamond" points="70,2 138,70 70,138 2,70" fill="#ffffff"></polygon>
                <rect id="bar1" x="34" y="41" width="8" height="58" fill="#e0212a"></rect>
                <rect id="bar2" x="98" y="41" width="8" height="58" fill="#e0212a"></rect>
                <rect id="crossbar" x="34" y="66" width="72" height="7" fill="#e0212a"></rect>
              </svg>
              <span className="footer__logo-text">HANLE M&M </span>
            </a>
            <p className="footer__tagline">
              Eliminate sourcing friction. Connect with the right suppliers. Scale with confidence.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Instagram" id="social-instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="Twitter" id="social-twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694L2.896 21.75H.588l7.728-8.835L.461 2.25h6.679l4.882 6.453z"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="LinkedIn" id="social-linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__column-title">Products</h4>
              <ul className="footer__column-links">
                {footerLinks.products.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Company</h4>
              <ul className="footer__column-links">
                {footerLinks.company.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Support</h4>
              <ul className="footer__column-links">
                {footerLinks.support.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} HANLE M&M Pvt. Ltd. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
