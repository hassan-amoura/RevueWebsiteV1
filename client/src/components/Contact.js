
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
    const subject = `QA Consultation Request from ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:hello@qualityscale.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact section dark-theme">
      <div className="container">
        <h2 className="section-title">Start the Conversation</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
          <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
