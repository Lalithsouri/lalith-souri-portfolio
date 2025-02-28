import React from 'react';
import '../styles/components/Contact.css';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedincontact.png';

const Contact = () => {
  return (
    <section id="contact">
      <p className="section_text_p1">Let's Connect!</p>
      <h1 className="title">Contact Me</h1>
      
      <div className="contact-info-header-container">
        <div className="contact-info-container">
          <img src={emailIcon} alt="Email icon" className="icon contact-icon" />
          <p>
            <a href="mailto:lalithsouri9@gmail.com">lalithsouri9@gmail.com</a>
          </p>
        </div>
        
        <div className="contact-info-container">
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
          <p>
            <a href="https://linkedin.com/in/souri9" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;