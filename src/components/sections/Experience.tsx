import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const experiences = [
  {
    company: 'Coding Mind Academy',
    title: 'Programming Instructor',
    dates: 'August 2024 – Present (1 year 1 month)',
    location: 'Diamond Bar, California, United States (Hybrid)',
    responsibilities: [
      'Teach K–12 students multiple programming languages and frameworks including Python, Java, HTML, CSS, JavaScript, Flutter, Firebase, and Dart.',
      'Develop individualized lesson plans tailored to student needs and skill levels.',
      'Debug code live with students and provide end-to-end support for app development.',
      'Directly contributed to the successful launch of 6+ mobile apps on Google Play and Apple App Store through collaborative coding, project mentoring, and co-authoring student research.'
    ]
  },
  {
    company: 'IntelliEvent',
    title: 'Development Intern',
    dates: 'May 2024 – June 2024 (2 months)',
    location: 'Riverside, California, United States (Hybrid)',
    responsibilities: [
      'Gained hands-on experience in a professional development environment.',
      'Used React and ASP.NET C# REST API to develop and maintain web applications.',
      'Navigated technical documentation and troubleshot complex problems with production-level code.',
      'Collaborated with a team of developers, attending daily meetings and providing weekly progress reports.',
      'Gained sales experience by marketing software at a trade show, delivering a 90-second pitch to potential clients.',
      'Contributed to lead generation efforts by making cold calls to prospective customers.'
    ]
  },
  {
    company: 'Coding Mind Academy',
    title: 'Programming Instructor',
    dates: 'May 2023 – October 2023 (6 months)',
    location: 'Irvine, California, United States',
    responsibilities: [
      'Taught K–12 students multiple programming languages and frameworks including Python, Java, HTML, CSS, JavaScript, Flutter, Firebase, and Dart.',
      'Developed individualized lesson plans, debugged code live, and supported app development end-to-end.',
      'Directly contributed to the launch of 2+ mobile apps on Google Play and Apple App Store through collaborative coding, project mentoring, and co-authoring student research.'
    ]
  },
  {
    company: 'Little Caesars Pizza',
    title: 'Assistant Manager',
    dates: 'August 2021 – July 2022 (1 year)',
    location: 'Corona, California, United States',
    responsibilities: [
      'Supervised, motivated, and directed employees to complete tasks efficiently.',
      'Maintained proficiency in all store stations, ensuring ability to switch tasks as needed.',
      'Handled cash and card transactions, tracked inventory, created employee schedules, trained new employees, conducted interviews, and counted daily profits.'
    ]
  },
  {
    company: 'Visión2010',
    title: 'Event Staff',
    dates: 'January 2018 – March 2020 (2 years 3 months)',
    location: 'Riverside, California, United States (On-site)',
    responsibilities: [
      'Worked at 30+ events, including weekly meetings, monthly seminars, and bi-yearly conferences.',
      'Managed concession stand operations: organized inventory, handled transactions, interacted with customers, and managed profits.',
      'Served as video/audio production assistant, managing microphone audio for event speakers.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section" aria-label="My Professional Experience">
      <h2>Experience</h2>
      <VerticalTimeline lineColor="var(--border-color)">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'var(--secondary-background)',
              color: 'var(--text-color-light)',
              border: '1px solid var(--border-color)',
              boxShadow: 'none'
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--secondary-background)' }}
            date={exp.dates}
            iconStyle={{ background: 'var(--accent-color-1)', color: 'var(--text-color-light)' }}
            icon={<div className="timeline-icon"></div>}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.company} - {exp.location}</h4>
            <ul>
              {exp.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
