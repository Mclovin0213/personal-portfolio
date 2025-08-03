import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Example',
    year: '2022'
  },
  {
    degree: 'Master of Science in Artificial Intelligence',
    institution: 'Another University of Example',
    year: '2024'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section" aria-label="Education History">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution} - {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
