import React from 'react';
import './Projects.css'; 
import snakeGameImg from '../../img/PROJECT SNAKE GAME.png';
import stockMarketImg from '../../img/PROJECT STOCK MARKET.png';
import ecommerceImg from '../../img/PROJECT ECOMMERCE WEBSITE.png';
import folderImg from '../../img/folder.png'
import linkImg from '../../img/link.png'
import githubImg from '../../img/github.png'


const Projects = ({isDarkMode}) => {
  const projectData = [
    {
      id: 'project1',
      tech: 'C++',
      date: 'December 2023',
      github: 'https://github.com/26-Shiv-Gupta/Snake-Game',
      imgSrc: snakeGameImg,
      title: 'SNAKE GAME',
      description:
        'My Snake game project, written in C++, offers a classic gaming experience where players control a snake to collect food and grow in size.',
    },
    {
      id: 'project2',
      tech: 'Python, LSTM',
      date: 'April 2023 - June 2023',
      github: 'https://github.com/26-Shiv-Gupta/Stock_Market_analysis_and_prediction',
      imgSrc: stockMarketImg,
      title: 'STOCK MARKET ANALYSIS AND PREDICTION',
      description:
        'Implemented a Stock Market Analysis and Prediction tool utilizing Python, LSTM neural networks and financial data from Yahoo Finance. Developed for data preprocessing, model training, visualizing predictions.',
    },
    {
      id: 'project3',
      tech: 'HTML, CSS, JS',
      date: 'Oct 2023 - Nov 2023',
      github: 'https://github.com/26-Shiv-Gupta/Ecommerce-Website',
      imgSrc: ecommerceImg,
      title: 'ECOMMERCE WEBSITE',
      description:
        'Developed a dynamic eCommerce website using HTML, CSS, and JavaScript, ensuring a seamless user interface and responsive design.',
    },
  ];

  return (
    <div id="project-container" className="flex-both-center" data-theme = {isDarkMode ? "dark" : "light"}>
      <div id="project-container2" className="fade-border">
        <p>Some of my works</p>
        <h1>PROJECTS</h1>
        <div id="project-list" className="flex-space-evenly">
          {projectData.map((project) => (
            <div key={project.id} id={project.id} className="project">
              {/* <div className="project-hover-content flex-both-center">
                <h5>
                  Technology used: {project.tech} <br />
                  {project.date}
                </h5>
                <a
                  className="text-deco-none"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div> */}
              {/* <input type="button" value="know more" className="project-know-more" /> */}
              {/* <img src={project.imgSrc} alt={`${project.title} image`} /> */}
              <div className="project-about">
                {/* <h3 className="red">{project.title}</h3>
                <h5>{project.description}</h5> */}
                <div className='project-top'>
                  <a href='{}'> <i class='bx bx-folder red' ></i> </a>
                  <div className='github-demo'>
                    <a><i class='bx bx-link-external' ></i></a>
                    <a href={project.github}><i class='bx bxl-github'></i></a>
                  </div>
                </div>
                <div className='project-title'>
                  <h3>{project.title}</h3>
                </div>
                <div className='project-desc'>
                  <h4>{project.description}</h4>
                </div>
                <div className='project-tech-stack'>
                  <h6>{project.tech}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
