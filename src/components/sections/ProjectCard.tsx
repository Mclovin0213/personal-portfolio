import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoUrl, repoUrl, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
