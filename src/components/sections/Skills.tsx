import React, { useState } from 'react';
import './Skills.css';
import { FaReact, FaCode, FaTools } from 'react-icons/fa';

interface Skill {
  name: string;
  proficiency: string; // This will be replaced by percentage
  icon: React.ReactNode;
  percentage: number; // New field for percentage
}

const skills: { [key: string]: Skill[] } = {
  languages: [
    { name: 'Java', proficiency: 'Advanced', icon: <FaCode />, percentage: 85 },
    { name: 'Python', proficiency: 'Advanced', icon: <FaCode />, percentage: 90 },
    { name: 'HTML', proficiency: 'Advanced', icon: <FaCode />, percentage: 95 },
    { name: 'CSS', proficiency: 'Advanced', icon: <FaCode />, percentage: 90 },
    { name: 'JavaScript', proficiency: 'Advanced', icon: <FaCode />, percentage: 88 },
    { name: 'Dart', proficiency: 'Advanced', icon: <FaCode />, percentage: 80 },
    { name: 'C#', proficiency: 'Advanced', icon: <FaCode />, percentage: 75 },
  ],
  frameworks: [
    { name: 'Flutter', proficiency: 'Advanced', icon: <FaReact />, percentage: 85 },
    { name: 'React.js', proficiency: 'Advanced', icon: <FaReact />, percentage: 88 },
    { name: 'Godot', proficiency: 'Intermediate', icon: <FaReact />, percentage: 60 },
    { name: 'ASP.NET Core REST API', proficiency: 'Intermediate', icon: <FaReact />, percentage: 70 },
    { name: 'Firebase', proficiency: 'Advanced', icon: <FaReact />, percentage: 80 },
  ],
  tools: [
    { name: 'Git/GitHub', proficiency: 'Expert', icon: <FaTools />, percentage: 95 },
    { name: 'Visual Studio', proficiency: 'Advanced', icon: <FaTools />, percentage: 85 },
    { name: 'Xcode', proficiency: 'Advanced', icon: <FaTools />, percentage: 80 },
    { name: 'Android Studio', proficiency: 'Advanced', icon: <FaTools />, percentage: 85 },
    { name: 'Google Play Console', proficiency: 'Intermediate', icon: <FaTools />, percentage: 70 },
    { name: 'Apple App Store Connect', proficiency: 'Intermediate', icon: <FaTools />, percentage: 70 },
    { name: 'Microsoft Office', proficiency: 'Advanced', icon: <FaTools />, percentage: 90 },
  ],
  concepts: [
    { name: 'Data Structures', proficiency: 'Advanced', icon: <FaCode />, percentage: 85 },
    { name: 'Algorithms', proficiency: 'Advanced', icon: <FaCode />, percentage: 85 },
    { name: 'Object-Oriented Programming (OOP)', proficiency: 'Advanced', icon: <FaCode />, percentage: 90 },
    { name: 'Software Infrastructure', proficiency: 'Intermediate', icon: <FaCode />, percentage: 70 },
    { name: 'REST APIs', proficiency: 'Advanced', icon: <FaCode />, percentage: 88 },
    { name: 'Mobile App Development', proficiency: 'Advanced', icon: <FaCode />, percentage: 85 },
    { name: 'Game Development', proficiency: 'Intermediate', icon: <FaCode />, percentage: 65 },
    { name: 'Project Management', proficiency: 'Advanced', icon: <FaCode />, percentage: 80 },
    { name: 'Debugging', proficiency: 'Advanced', icon: <FaCode />, percentage: 90 },
    { name: 'API Integration', proficiency: 'Advanced', icon: <FaCode />, percentage: 85 },
  ],
  softSkills: [
    { name: 'Communication', proficiency: 'Expert', icon: <FaTools />, percentage: 95 },
    { name: 'Teaching', proficiency: 'Expert', icon: <FaTools />, percentage: 90 },
    { name: 'Problem Solving', proficiency: 'Expert', icon: <FaTools />, percentage: 95 },
    { name: 'Rapid Learning', proficiency: 'Expert', icon: <FaTools />, percentage: 90 },
    { name: 'Leadership', proficiency: 'Advanced', icon: <FaTools />, percentage: 85 },
    { name: 'Collaboration', proficiency: 'Advanced', icon: <FaTools />, percentage: 88 },
    { name: 'Mentorship', proficiency: 'Advanced', icon: <FaTools />, percentage: 80 },
    { name: 'Sales', proficiency: 'Intermediate', icon: <FaTools />, percentage: 70 },
    { name: 'Customer Interaction', proficiency: 'Advanced', icon: <FaTools />, percentage: 85 },
    { name: 'Time Management', proficiency: 'Advanced', icon: <FaTools />, percentage: 88 },
    { name: 'Organization', proficiency: 'Advanced', icon: <FaTools />, percentage: 85 },
    { name: 'Adaptability', proficiency: 'Advanced', icon: <FaTools />, percentage: 90 },
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
