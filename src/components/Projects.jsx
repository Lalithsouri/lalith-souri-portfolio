import React from 'react';
import '../styles/components/Projects.css';
import wanderlustImg from '../assets/Project-w.PNG';
import interactiveCanadaImg from '../assets/in-can.PNG';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section_text_p1">My Recent</p>
      <h1 className="title">Projects</h1>
      
      <div className="about-details-container">
        <div className="about-containers"></div>
        
        <div className="details-container color-container">
          <div className="article-container">
            <img src={wanderlustImg} className="project-img" alt="Wanderlust project screenshot"/>
          </div>
          <h2 className="experience-sub-title project-title">Wanderlust</h2>
          <p>
            This website gives a quick overview to the user about tourism in alberta. The website mostly focuses on delivering the right information about the travel destinations, view points, and fun activities to do in Alberta through different seasons. This user-friendly website provides a booking system to the users who are new to Canada in order to let them choose the best and affordable accommodations to stay in alberta.
          </p>
          <br />
          <div className="btn-container">
            <button 
              className="btn btn-color-2 project-btn" 
              onClick={() => window.open('https://github.com/Lalithsouri/CS476-TourismWebsite', '_blank')}
            >
              GitHub
            </button>
          </div>
        </div>
        
        <br />
        
        <div className="details-container color-container">
          <div className="article-container">
            <img src={interactiveCanadaImg} className="project-img" alt="Interactive Canada project screenshot"/>
          </div>
          <h2 className="experience-sub-title project-title">Interactive Canada</h2>
          <p>
            This project idea is based on Model-View-Controller design architecture. The reason for making such a project is to aim to help the average user gain information about Canada. One potential use is for travelers to decide where to go within Canada, similarly to how it is difficult to decide on something to watch when having a movie night, it could be difficult to choose a holiday destination within Canada that values the users money and time. Essentially, the main goal is to provide the average user with new useful information that could potentially aid their studies, career, decisions, and more.
          </p>
          <br />
          <div className="btn-container">
            <button 
              className="btn btn-color-2 project-btn" 
              onClick={() => window.open('https://github.com/Lalithsouri/ENSE374-LaForge/tree/main', '_blank')}
            >
              GitHub
            </button>
            <button 
              className="btn btn-color-2 project-btn" 
              onClick={() => window.open('https://www.youtube.com/watch?v=EJHeItpuB0Y&ab_channel=HasaanToor', '_blank')}
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;