import React from 'react';
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
  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
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
