import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Julian Avellaneda</h1>
        <p className="hero-subtitle">Software Engineer & Creator</p>
        <div className="social-links">
        <a href="https://github.com/Mclovin0213" target="_blank" rel="noopener noreferrer">
          <FaGithub /> <span className="social-link-text">GitHub</span>
        </a>
        <a href="http://www.linkedin.com/in/julianavellaneda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <FaLinkedin /> <span className="social-link-text">LinkedIn</span>
        </a>
        </div>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;