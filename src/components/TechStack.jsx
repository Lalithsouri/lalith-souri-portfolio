import React from 'react';
import '../styles/components/TechStack.css';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/reactjs.png';
import tailwindIcon from '../assets/tailwind.png';
import nodeIcon from '../assets/nodejs.png';
import mongodbIcon from '../assets/mongodb.png';
import githubIcon from '../assets/GitHub.png';

const TechStack = () => {
  const technologies = [
    { icon: htmlIcon, name: "HTML", experience: "3 Years Experience" },
    { icon: cssIcon, name: "CSS", experience: "3 Years Experience" },
    { icon: jsIcon, name: "JavaScript", experience: "3 Years Experience" },
    { icon: reactIcon, name: "React JS", experience: "Beginner Experience" },
    { icon: tailwindIcon, name: "Tailwind", experience: "Beginner Experience" },
    { icon: nodeIcon, name: "NodeJS", experience: "2 Years Experience" },
    { icon: mongodbIcon, name: "MongoDB", experience: "3 Years Experience" },
    { icon: githubIcon, name: "GitHub", experience: "3 Years Experience" }
  ];

  return (
    <section id="techstack">
      <br />
      <p className="section_text_p1">Explore My</p>
      <h1 className="title">Techstack</h1>
      
      <div className="techstack-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="techstack-sub-title">MERN Stack Development</h2>
            <div className="article-container">
              {technologies.map((tech, index) => (
                <article key={index}>
                  <img src={tech.icon} alt={`${tech.name} icon`} className="icon" />
                  <div>
                    <h3>{tech.name}</h3>
                    <p>{tech.experience}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;