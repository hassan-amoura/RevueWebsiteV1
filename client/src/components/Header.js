
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span>Revue Consulting</span>
          </div>
          <nav className="nav">
            <button className="nav-link" onClick={() => scrollToSection('hero')}>Home</button>
            <button className="nav-link" onClick={() => scrollToSection('problem')}>Problem</button>
            <button className="nav-link" onClick={() => scrollToSection('solution')}>Solution</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
