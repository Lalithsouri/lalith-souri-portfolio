import React from 'react';
import '../styles/components/About.css';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';

const About = () => {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience" className="icon"/>
              <h3>Experience</h3>
              <p>1 year <br />MERN Stack Developer</p>
            </div>
            
            <div className="details-container">
              <img src={educationIcon} alt="Education" className="icon"/>
              <h3>Education</h3>
              <p>B.Sc. Computer Science <br />University of Regina</p>
            </div>
          </div>
        </div>
      </div>
      
      <br />
      
      <div className="text-container">
        <p>
          I am a recent graduate with a Bachelor's degree in Computer Science, seeking job as a MERN stack developer with expertise in creating full-stack web applications that merge front-end experiences with back-end solutions. I am proficient in JavaScript, Node.js, React, MongoDB, and Express.js, I leverage modern frameworks like EJS and MVC architecture to build scalable, user-centric platforms such as tourism portals and interactive mapping tools. I am passionate about clean code, seamless integrations, and continuous learning. Eager to learn and adapt to new technologies to continuously enhance my skills.
        </p>
      </div>
    </section>
  );
};

export default About;