import React from 'react';
import './Home.css';
import profileImg from '../../img/profile-pic.jpg';
import resume from '../../img/Resume.pdf';

const Home = () => {
  return (
    <div id="front-container" className="flex-space-evenly">
      <div id="profile-pic" className="fade-border">
        <img src={profileImg} alt="Profile" />
      </div>
      <div id="profile-content">
        <h1>
          Hi, I am <span className="red">Shiv Gupta</span>
        </h1>
        <h4>A Coder & Frontend Developer</h4>
        <p>
          Passionate coder and frontend developer with a knack for crafting immersive user
          experiences. Transforming ideas into elegant and responsive designs that seamlessly blend
          form and function.
        </p>
        <a href={resume} download="Resume-ShivGupta">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
