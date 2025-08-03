import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: 'https://via.placeholder.com/300',
    demoUrl: '#',
    repoUrl: '#',
    technologies: ['React', 'TypeScript', 'CSS'],
    fullDescription: 'This is a more detailed description of Project One, explaining the problem it solves and the features it includes.',
    challenges: 'One of the main challenges was implementing a complex state management solution.',
    solutions: 'We used Redux Toolkit to simplify state management and improve performance.'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: 'https://via.placeholder.com/300',
    demoUrl: '#',
    repoUrl: '#',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    fullDescription: 'This is a more detailed description of Project Two, explaining the problem it solves and the features it includes.',
    challenges: 'Building a scalable and secure API was a key challenge.',
    solutions: 'We implemented JWT for authentication and followed RESTful principles for the API design.'
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    imageUrl: 'https://via.placeholder.com/300',
    demoUrl: '#',
    repoUrl: '#',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    fullDescription: 'This is a more detailed description of Project Three, explaining the problem it solves and the features it includes.',
    challenges: 'Integrating with a third-party API with limited documentation was a major hurdle.',
    solutions: 'We developed a robust error handling and logging system to identify and resolve issues quickly.'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section" aria-label="My Projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => handleProjectClick(project)} />
        ))}
      </div>
      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects;