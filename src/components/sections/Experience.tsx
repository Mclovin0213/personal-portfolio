import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    title: 'Senior Software Engineer',
    dates: 'Jan 2022 - Present',
    responsibilities: [
      'Led the development of a new microservices-based architecture.',
      'Mentored junior engineers and conducted code reviews.',
      'Improved application performance by 30% through optimization.'
    ]
  },
  {
    company: 'Innovate Co.',
    title: 'Software Engineer',
    dates: 'Jun 2019 - Dec 2021',
    responsibilities: [
      'Developed and maintained features for a large-scale web application.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
      'Wrote and maintained unit and integration tests.'
    ]
  },
  {
    company: 'Data Systems',
    title: 'Junior Software Engineer',
    dates: 'Jul 2017 - May 2019',
    responsibilities: [
      'Assisted in the development of a data processing pipeline.',
      'Fixed bugs and implemented minor features.',
      'Learned and applied best practices in software development.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section" aria-label="My Professional Experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="timeline-date">{exp.dates}</p>
              <ul>
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
