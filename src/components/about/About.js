import React, {useState} from 'react';
import './About.css';
import aboutPic from '../../img/about-pic.jpg';
import react_img from '../../img/React_logo.png'
import angular_img from '../../img/Angular logo.png'
import bootstrap_img from '../../img/Bootstrap logo.png'
import css_img from '../../img/CSS logo.png'
import nodejs_img from '../../img/NodeJs_logo.png'
import html_img from '../../img/html logo.png'
import js_img from '../../img/javascript logo.png'

const About = ({isDarkMode}) => {
  const [images] = useState([
    react_img,
    angular_img,
    bootstrap_img,
    css_img,
    nodejs_img,
    js_img,
    html_img,
]);
  return (
    <div id="about-container" className="flex-both-center" data-theme = {isDarkMode ? "dark" : "light"}>
      <div id="about-container2" className="fade-border flex-space-evenly">
        <div id="about-pic">
          <img src={aboutPic} alt="profile-pic" />
        </div>
        <div id="about-about">
          <h1>
            About <span className="red">Me</span>
          </h1>
          <p>
            Hi, My name is Shiv Gupta. I am a Computer Engineering Undergraduate from Galgotias
            University. I have good knowledge about Data Structures and Algorithms and I have solved
            multiple problems related to them. I did a web development internship at "The Sparks
            Foundation" where I worked on a Project Payment Integration system web page.
          </p>
          {/* <h4 id="skills-btn">Tech Stack</h4> */}
          <div className='tech-stack'>
            {images.map((image, index) => (
              <div key={index} className={`delay${index + 1}`}>
                <img src={image} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
