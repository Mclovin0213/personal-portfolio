import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaTools } from 'react-icons/fa';

const skills = {
  languages: [
    { name: 'JavaScript', proficiency: 'Expert', icon: <FaCode /> },
    { name: 'TypeScript', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Python', proficiency: 'Intermediate', icon: <FaCode /> },
  ],
  frameworks: [
    { name: 'React', proficiency: 'Expert', icon: <FaReact /> },
    { name: 'Node.js', proficiency: 'Advanced', icon: <FaNodeJs /> },
    { name: 'Express', proficiency: 'Advanced', icon: <FaServer /> },
  ],
  databases: [
    { name: 'MongoDB', proficiency: 'Advanced', icon: <FaDatabase /> },
    { name: 'PostgreSQL', proficiency: 'Intermediate', icon: <FaDatabase /> },
  ],
  tools: [
    { name: 'Git & GitHub', proficiency: 'Expert', icon: <FaTools /> },
    { name: 'Docker', proficiency: 'Intermediate', icon: <FaTools /> },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section" aria-label="My Skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          {skills.languages.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p className="skill-proficiency">{skill.proficiency}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          {skills.frameworks.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p className="skill-proficiency">{skill.proficiency}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          {skills.databases.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p className="skill-proficiency">{skill.proficiency}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          {skills.tools.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p className="skill-proficiency">{skill.proficiency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
