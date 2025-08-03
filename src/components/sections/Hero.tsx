import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Julian Avellaneda</h1>
        <p className="hero-subtitle">Software Engineer & Creator</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;