// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Import the CSS file if needed

const ProjectCard = ({ title, description, image , link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <h3 className="project-card-title">{link}</h3>
      <p className="project-card-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
