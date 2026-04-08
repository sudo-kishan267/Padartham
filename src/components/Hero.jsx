import './Hero.css';
import heroBg from '../assets/hero-bg.png';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img src={heroBg} alt="Premium spices and flavours" className="hero__bg-img" />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__badge fade-in">
          <span className="hero__badge-dot"></span>
          Crafted with Passion Since 2024
        </div>
        
        <h1 className="hero__title fade-in">
          Sourcing
          <span className="hero__title-accent"><br />Aromas & Ingredients</span>
          <br />
           Simplified.
        </h1>

        <p className="hero__desc fade-in">
         Connect with verified suppliers, streamline your sourcing process, 
         and get the exact ingredients your factory needs—without the 
         complexity. From confectionery to food manufacturing, 
         we've got you covered.
        </p>

        <div className="hero__actions fade-in">
          <a href="#products" className="btn-primary">
            <span>Explore Our Flavours</span>
            <span>→</span>
          </a>
          <a href="#about" className="btn-secondary">
            Our Story
          </a>
        </div>

        <div className="hero__stats fade-in">
          <div className="hero__stat">
            <span className="hero__stat-number">200+</span>
            <span className="hero__stat-label">Unique Flavours</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Countries Served</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
