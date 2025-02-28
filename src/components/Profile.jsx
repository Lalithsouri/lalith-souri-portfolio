import React, { useEffect } from 'react';
import '../styles/components/Profile.css';
import profilePic from '../assets/Souri.jpeg';
import linkedinIcon from '../assets/linkedincontact.png';
import githubIcon from '../assets/githubmain.png';

const Profile = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.63/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="profile">    
      <div className="section_pic-container">
        <img src={profilePic} alt="Souri's profile"/>
      </div>
      
      <div className="section_text">
        <p className="section_text_p1">Hello, This is</p>
        <h1 className="title">Lalith Souri</h1>
        <p className="section_text_p2">I'm a MERN Stack Developer</p>
        
        <div className="btn-container">
          <button 
            className="btn btn-color-1" 
            onClick={() => window.location.href = '#contact'}
          >
            Let's Connect
          </button>
        </div>
        
        <br />
        
        <div id="socials-container">
          <img 
            src={linkedinIcon} 
            alt="LinkedIn Profile"
            className="icon" 
            onClick={() => window.open('https://linkedin.com/in/souri9', '_blank')}
          />
          <img 
            src={githubIcon} 
            alt="GitHub Profile"
            className="icon" 
            onClick={() => window.open('https://github.com/Lalithsouri', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;