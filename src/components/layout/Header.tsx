import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-placeholder"></div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={isMenuOpen ? 'open' : ''}>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={toggleMenu}>About</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={toggleMenu}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={toggleMenu}>Skills</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={toggleMenu}>Experience</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} aria-label="Contact section" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
