import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Science (BS) in Computer Software Engineering',
    institution: 'California Baptist University',
    year: '2020 – 2025'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section" aria-label="Education History">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon">
              {/* Placeholder for education icon */}
              🎓
            </div>
            <div className="education-details">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
