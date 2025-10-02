import React, { useState } from 'react';
import './ProjectDetailModal.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  fullDescription: string;
  challenges: string;
  solutions: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  if (!project) {
    return null;
  }

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>X</button>
        <h2>{project.title}</h2>
        <p><strong>Description:</strong> {project.fullDescription}</p>
        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>
        <p><strong>Solutions:</strong> {project.solutions}</p>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
