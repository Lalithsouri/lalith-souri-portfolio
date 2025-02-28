// HamburgerNav.jsx
import React, { useState, useEffect } from 'react';
import '../styles/components/HamburgerNav.css';
import resumePDF from '../assets/resume.pdf'; // Import the PDF

const HamburgerNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".menu-links");
      const menuIcon = document.querySelector(".hamburger-icon");
      
      if (menu && menuIcon && isMenuOpen && 
          !menu.contains(event.target) && 
          !menuIcon.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav id="hamburger-nav">
      <div className="logo">Souri</div>
      <div className="hamburger-menu">
        <div 
          className="hamburger-icon" 
          onClick={toggleMenu}
          style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
        >
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
      <ul className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#techstack" onClick={toggleMenu}>Tech Stack</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li><a href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerNav;