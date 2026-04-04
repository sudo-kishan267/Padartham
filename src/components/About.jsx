import './About.css';
import heroBg from '../assets/hero-bg.png';

function About() {
  const features = [
    { icon: '🌿', title: 'Naturally Sourced', desc: 'Ingredients from certified organic farms worldwide' },
    { icon: '🔬', title: 'Lab Tested', desc: 'Every batch tested for purity and consistency' },
    { icon: '🏆', title: 'Award Winning', desc: 'Recognized by international culinary associations' },
    { icon: '♻️', title: 'Sustainable', desc: 'Eco-friendly packaging and ethical sourcing' },
  ];

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__image-col fade-in-left">
          <div className="about__image-wrap">
            <img src={heroBg} alt="Our craftsmanship" className="about__image" />
            <div className="about__image-accent"></div>
          </div>
          <div className="about__experience-badge">
            <span className="about__experience-number">25+</span>
            <span className="about__experience-text">Years of<br/>Excellence</span>
          </div>
        </div>

        <div className="about__content fade-in-right">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">A Legacy of Flavour Craftsmanship</h2>
          <p className="section-subtitle" style={{ marginBottom: '20px' }}>
            Born from a family tradition of spice trading, Padartham has grown from a 
            small artisan workshop into a globally recognized flavour house. We believe 
            that every dish tells a story — and the right flavour makes that story 
            unforgettable.
          </p>
          <p className="about__text">
            Our master blenders combine generations of expertise with modern food science 
            to create flavour profiles that inspire chefs, food manufacturers, and home 
            cooks across 50+ countries.
          </p>

          <div className="about__features">
            {features.map((feature) => (
              <div className="about__feature" key={feature.title}>
                <span className="about__feature-icon">{feature.icon}</span>
                <div>
                  <h4 className="about__feature-title">{feature.title}</h4>
                  <p className="about__feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
