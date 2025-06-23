
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="hero"
      className="hero section dark-theme"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-container">
        <h1 className="hero-title">
          Elevate Quality. <br /> Accelerate Growth.
        </h1>
        <p className="hero-subtitle">
          Revue helps growing tech startups implement scalable QA and software development strategies—so your team can deliver with confidence.
        </p>
        <button className="hero-button" onClick={scrollToContact}>
          Let's Talk
        </button>
      </div>
    </motion.section>
  );
};

export default Hero;
