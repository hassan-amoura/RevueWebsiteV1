import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero section">
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Scale Your Startup, Not Your Stress</span>
          </div>
          
          <h1 className="hero-title">
            Quality Engineering That Scales
            <span className="gradient-text"> With Your Growth</span>
          </h1>
          
          <p className="hero-subtitle">
            Transform your QA strategy from a bottleneck into a competitive advantage. 
            We help Series B startups build robust testing frameworks that understand 
            your bootstrap mentality while preparing for enterprise scale.
          </p>
          
          <div className="hero-cta">
            <button className="btn-primary" onClick={scrollToContact}>
              Start Your QA Transformation
            </button>
            <button className="btn-secondary">
              Learn Our Approach
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Startups Scaled</div>
            </div>
            <div className="stat">
              <div className="stat-number">90%</div>
              <div className="stat-label">Bug Reduction</div>
            </div>
            <div className="stat">
              <div className="stat-number">3x</div>
              <div className="stat-label">Faster Releases</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;