import React from 'react';
import ProjectCard from '../components/ProjectCard';
import code from '../assets/code_logo_no_bg.png';


// import custom css 

import './Pannel.css'

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
          <img src={code} alt="" className='codeImg' /> - WEB DEV
          I've worked on projects that cover both Front-End and back-End development, building dynamic interfaces and implementing server-side functionalities.
          I also handled databases and optimized project builds for better performance. These experiences will help me grow my skills in Full-stack development and problem-solving techniques.
        </p>

        <div className='project-gallery'>
          <ProjectCard
            title="Task Manager APP"
            // description="This is the first project description."
            backgroundImage="path/to/image1.jpg"
            link="/project1"
          />
          <ProjectCard
            title="Weather App"
            // description="This is the second project description."
            backgroundImage="path/to/image2.jpg"
            link="/project2"
          />
          <ProjectCard
            title="Music Player App"
            // description="This is the third project description."
            backgroundImage="path/to/image3.jpg"
            link="/project3"
          />
          <ProjectCard
            title="Dashbord App"
            // description="This is the fourth project description."
            backgroundImage="path/to/image4.jpg"
            link="/project4"
          />

          {/* <ProjectCard
            title="Project 5"
            description="This is the fifth project description."
            backgroundImage="path/to/image5.jpg"
            link="/project5"
          />
          <ProjectCard
            title="Project 6"
            description="This is the sixth project description."
            backgroundImage="path/to/image6.jpg"
            link="/project6"
          /> */}


        </div>
      </div>
    </div>
  );
};

export default Pannel;
