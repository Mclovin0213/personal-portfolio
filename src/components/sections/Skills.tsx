import React from 'react';
import './Skills.css';
import { FaReact, FaCode, FaTools } from 'react-icons/fa';

const skills = {
  languages: [
    { name: 'Java', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Python', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'HTML', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'CSS', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'JavaScript', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Dart', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'C#', proficiency: 'Advanced', icon: <FaCode /> },
  ],
  frameworks: [
    { name: 'Flutter', proficiency: 'Advanced', icon: <FaReact /> },
    { name: 'React.js', proficiency: 'Advanced', icon: <FaReact /> },
    { name: 'Godot', proficiency: 'Intermediate', icon: <FaReact /> },
    { name: 'ASP.NET Core REST API', proficiency: 'Intermediate', icon: <FaReact /> },
    { name: 'Firebase', proficiency: 'Advanced', icon: <FaReact /> },
  ],
  tools: [
    { name: 'Git/GitHub', proficiency: 'Expert', icon: <FaTools /> },
    { name: 'Visual Studio', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Xcode', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Android Studio', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Google Play Console', proficiency: 'Intermediate', icon: <FaTools /> },
    { name: 'Apple App Store Connect', proficiency: 'Intermediate', icon: <FaTools /> },
    { name: 'Microsoft Office', proficiency: 'Advanced', icon: <FaTools /> },
  ],
  concepts: [
    { name: 'Data Structures', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Algorithms', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Object-Oriented Programming (OOP)', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Software Infrastructure', proficiency: 'Intermediate', icon: <FaCode /> },
    { name: 'REST APIs', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Mobile App Development', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Game Development', proficiency: 'Intermediate', icon: <FaCode /> },
    { name: 'Project Management', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'Debugging', proficiency: 'Advanced', icon: <FaCode /> },
    { name: 'API Integration', proficiency: 'Advanced', icon: <FaCode /> },
  ],
  softSkills: [
    { name: 'Communication', proficiency: 'Expert', icon: <FaTools /> },
    { name: 'Teaching', proficiency: 'Expert', icon: <FaTools /> },
    { name: 'Problem Solving', proficiency: 'Expert', icon: <FaTools /> },
    { name: 'Rapid Learning', proficiency: 'Expert', icon: <FaTools /> },
    { name: 'Leadership', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Collaboration', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Mentorship', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Sales', proficiency: 'Intermediate', icon: <FaTools /> },
    { name: 'Customer Interaction', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Time Management', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Organization', proficiency: 'Advanced', icon: <FaTools /> },
    { name: 'Adaptability', proficiency: 'Advanced', icon: <FaTools /> },
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
          <h3>Concepts</h3>
          {skills.concepts.map((skill, index) => (
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
          <h3>Soft Skills</h3>
          {skills.softSkills.map((skill, index) => (
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
