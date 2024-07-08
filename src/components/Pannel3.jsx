// src/components/Pannel.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Me from '../assets/me-duh.png';
import './Pannel.css'; // Import the CSS file

const Pannel = () => {
  return (
    <div className='pannel rajdhani-regular'>
      {/* Top content */}
      <div className='pannel-identity'>
        <h2>PROJECTS SCREEN</h2>
        <p>A brief self description about me and stuff</p>
      </div>

      {/* Bottom content */}
      <div className='project-container'>
      <p>
       <span>LOGO HERE - WEB DEV</span>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit ad amet ducimus non vel distinctio, asperiores quae qui sequi!
       </p>
       
        <div className='project-gallery'>
          <ProjectCard 
            title="Project 1" 
            description="This is the first project description." 
            image="path/to/image1.jpg" 
          />
          <ProjectCard 
            title="Project 2" 
            description="This is the second project description." 
            image="path/to/image2.jpg" 
          />
          <ProjectCard 
            title="Project 3" 
            description="This is the third project description." 
            image="path/to/image3.jpg" 
          />
          <ProjectCard 
            title="Project 4" 
            description="This is the fourth project description." 
            image="path/to/image4.jpg" 
          />
          <ProjectCard 
            title="Project 5" 
            description="This is the fifth project description." 
            image="path/to/image5.jpg" 
          />
          <ProjectCard 
            title="Project 6" 
            description="This is the sixth project description." 
            image="path/to/image6.jpg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Pannel;
