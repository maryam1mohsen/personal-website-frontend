import React from 'react';
import './Portfolio.css'; 
const Portfolio = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="portfolio-item">
          <img src="images/pomodoro-limbo.png" alt="Project 1" />
          <div className="overlay">
            <a
              href="https://youtu.be/0tgVK3TUHvI?si=cgaHaAweRM_4x5pk"
              className="view-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="images/newborn.png" alt="Project 2" />
          <div className="overlay">
            <a
              href="https://drive.google.com/file/d/1rSRpO9IzwAzC0-LEj-qNLECJ3xJFSDe_/view?usp=drive_link"
              className="view-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="images/bh-bus.png" alt="Project 3" />
          <div className="overlay">
            <a
              href="https://drive.google.com/file/d/1VHvESt_pcchTX1Z9B_Nq2w12o2Jh0sUZ/view?usp=drive_link"
              className="view-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="images/scm-exh.png" alt="Project 4" />
          <div className="overlay">
            <a
              href="https://youtu.be/ZSYu9f0ofyU?si=CbQ-gJKkP-XsQXJM"
              className="view-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
