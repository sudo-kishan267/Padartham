import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Chef Maria Rossi',
    role: 'Executive Chef, Azure Restaurant',
    text: 'Padartham\'s spice blends have transformed our menu. The depth and authenticity of flavour is unmatched. Every dish we create now tells a richer story.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Food Product Director, NutriCorp',
    text: 'We\'ve been sourcing from Padartham for over 8 years. Their consistency, quality control, and innovation in flavour development make them our most trusted partner.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Home Baker & Food Blogger',
    text: 'The Kashmir saffron is absolutely divine! I\'ve never tasted such pure, intense saffron before. It elevates my desserts to a whole new level of luxury.',
    rating: 5,
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header fade-in">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Trusted by world-class chefs, food manufacturers, and passionate home cooks.
          </p>
        </div>

        <div className="testimonials__content fade-in">
          <div className="testimonial-card">
            <div className="testimonial-card__stars">
              {Array.from({ length: testimonials[active].rating }, (_, i) => (
                <span key={i} className="testimonial-card__star">★</span>
              ))}
            </div>
            <blockquote className="testimonial-card__text">
              "{testimonials[active].text}"
            </blockquote>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <div className="testimonial-card__name">{testimonials[active].name}</div>
                <div className="testimonial-card__role">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className="testimonials__nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`View testimonial ${index + 1}`}
                id={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
