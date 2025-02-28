import React from 'react';
import '../styles/components/Navbar.css';
import resumePDF from '../assets/resume.pdf'; // Import the PDF

const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">Souri</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;