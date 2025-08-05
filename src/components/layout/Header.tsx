import React, { useState, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} aria-label="Contact section">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
