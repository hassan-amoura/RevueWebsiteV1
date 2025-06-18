import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just create a mailto link
    const subject = `QA Consultation Request from ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:hello@qualityscale.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-badge">Get Started</div>
            <h2 className="contact-title">
              Ready to Scale Your 
              <span className="gradient-text"> Quality Strategy</span>?
            </h2>
            <p className="contact-description">
              Let's discuss how we can help your Series B startup build a QA strategy 
              that scales with your growth ambitions. No enterprise overhead, just results.
            </p>
            
            <div className="contact-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-text">
                  <h4>Free Strategy Session</h4>
                  <p>30-minute consultation to assess your current QA challenges</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <div className="benefit-text">
                  <h4>Custom Roadmap</h4>
                  <p>Tailored QA transformation plan for your specific needs</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-text">
                  <h4>Fast Implementation</h4>
                  <p>See results in weeks, not months</p>
                </div>
              </div>
            </div>
            
            <div className="contact-direct">
              <p>Prefer to reach out directly?</p>
              <a href="mailto:hello@qualityscale.com" className="email-link">
                hello@qualityscale.com
              </a>
              <p className="response-time">We respond within 24 hours</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Your startup name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Tell us about your QA challenges</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="What QA challenges is your team facing? What's your current testing approach?"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">
                Start Your QA Transformation
              </button>
              
              <p className="form-note">
                By submitting this form, you agree to receive communications from QualityScale. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="gradient-text">QualityScale</span>
            </div>
            <p className="footer-text">
              Quality Engineering for Series B Startups
            </p>
            <div className="footer-links">
              <a href="mailto:hello@qualityscale.com">Contact</a>
              <span>•</span>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;