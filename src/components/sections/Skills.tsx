import React, { useState } from 'react';
import './Skills.css';
import { FaReact, FaCode, FaTools } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  percentage: number; // New field for percentage
}

const skills: { [key: string]: Skill[] } = {
  languages: [
    { name: 'Java', icon: <FaCode />, percentage: 85 },
    { name: 'Python', icon: <FaCode />, percentage: 90 },
    { name: 'HTML', icon: <FaCode />, percentage: 95 },
    { name: 'CSS', icon: <FaCode />, percentage: 90 },
    { name: 'JavaScript', icon: <FaCode />, percentage: 88 },
    { name: 'Dart', icon: <FaCode />, percentage: 80 },
    { name: 'C#', icon: <FaCode />, percentage: 75 },
  ],
  frameworks: [
    { name: 'Flutter', icon: <FaReact />, percentage: 85 },
    { name: 'React.js', icon: <FaReact />, percentage: 88 },
    { name: 'Godot', icon: <FaReact />, percentage: 60 },
    { name: 'ASP.NET Core REST API', icon: <FaReact />, percentage: 70 },
    { name: 'Firebase', icon: <FaReact />, percentage: 80 },
  ],
  tools: [
    { name: 'Git/GitHub', icon: <FaTools />, percentage: 95 },
    { name: 'Visual Studio', icon: <FaTools />, percentage: 85 },
    { name: 'Xcode', icon: <FaTools />, percentage: 80 },
    { name: 'Android Studio', icon: <FaTools />, percentage: 85 },
    { name: 'Google Play Console', icon: <FaTools />, percentage: 70 },
    { name: 'Apple App Store Connect', icon: <FaTools />, percentage: 70 },
    { name: 'Microsoft Office', icon: <FaTools />, percentage: 90 },
  ],
  concepts: [
    { name: 'Data Structures', icon: <FaCode />, percentage: 85 },
    { name: 'Algorithms', icon: <FaCode />, percentage: 85 },
    { name: 'Object-Oriented Programming (OOP)', icon: <FaCode />, percentage: 90 },
    { name: 'Software Infrastructure', icon: <FaCode />, percentage: 70 },
    { name: 'REST APIs', icon: <FaCode />, percentage: 88 },
    { name: 'Mobile App Development', icon: <FaCode />, percentage: 85 },
    { name: 'Game Development', icon: <FaCode />, percentage: 65 },
    { name: 'Project Management', icon: <FaCode />, percentage: 80 },
    { name: 'Debugging', icon: <FaCode />, percentage: 90 },
    { name: 'API Integration', icon: <FaCode />, percentage: 85 },
  ],
  softSkills: [
    { name: 'Communication', icon: <FaTools />, percentage: 95 },
    { name: 'Teaching', icon: <FaTools />, percentage: 90 },
    { name: 'Problem Solving', icon: <FaTools />, percentage: 95 },
    { name: 'Rapid Learning', icon: <FaTools />, percentage: 90 },
    { name: 'Leadership', icon: <FaTools />, percentage: 85 },
    { name: 'Collaboration', icon: <FaTools />, percentage: 88 },
    { name: 'Mentorship', icon: <FaTools />, percentage: 80 },
    { name: 'Sales', icon: <FaTools />, percentage: 70 },
    { name: 'Customer Interaction', icon: <FaTools />, percentage: 85 },
    { name: 'Time Management', icon: <FaTools />, percentage: 88 },
    { name: 'Organization', icon: <FaTools />, percentage: 85 },
    { name: 'Adaptability', icon: <FaTools />, percentage: 90 },
  ],
};

const Skills: React.FC = () => {
  const [showAll, setShowAll] = useState<{ [key: string]: boolean }>({
    languages: false,
    frameworks: false,
    tools: false,
    concepts: false,
    softSkills: false,
  });

  const toggleShowAll = (category: string) => {
    setShowAll(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const renderSkillCategory = (categoryName: string, categorySkills: Skill[]) => {
    const displayedSkills = showAll[categoryName] ? categorySkills : categorySkills.slice(0, 5);
    const hasMore = categorySkills.length > 5;

    return (
      <div className="skill-category">
        <h3>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
        {displayedSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <h4>{skill.name}</h4>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-progress-container">
              <div className="skill-progress-bar" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
        {hasMore && (
          <button className="show-more-button" onClick={() => toggleShowAll(categoryName)}>
            {showAll[categoryName] ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section" aria-label="My Skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {renderSkillCategory('languages', skills.languages)}
        {renderSkillCategory('frameworks', skills.frameworks)}
        {renderSkillCategory('tools', skills.tools)}
        {renderSkillCategory('concepts', skills.concepts)}
        {/* {renderSkillCategory('softSkills', skills.softSkills)} */}
      </div>
    </section>
  );
};

export default Skills;
