import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info fade-in-left">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let's Create Something Extraordinary</h2>
            <p className="section-subtitle">
              Whether you're a chef looking for unique ingredients, a manufacturer seeking 
              premium flavour solutions, or simply a flavour enthusiast — we'd love to hear from you.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <h4 className="contact__detail-title">Visit Us</h4>
                  <p className="contact__detail-text">123 Spice Market Road,<br />Mumbai, India 400001</p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📧</span>
                <div>
                  <h4 className="contact__detail-title">Email Us</h4>
                  <p className="contact__detail-text">hello@padartham.com</p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📞</span>
                <div>
                  <h4 className="contact__detail-title">Call Us</h4>
                  <p className="contact__detail-text">+91 22 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form fade-in-right" onSubmit={handleSubmit} id="contact-form">
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">Full Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-subject">Subject</label>
              <input 
                type="text" 
                id="contact-subject" 
                name="subject" 
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea 
                id="contact-message" 
                name="message" 
                placeholder="Tell us about your requirements..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn-primary contact__submit" id="contact-submit">
              <span>Send Message</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
