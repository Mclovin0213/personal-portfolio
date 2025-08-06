import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    company: 'Coding Mind Academy',
    title: 'Programming Instructor',
    dates: 'August 2024 – Present',
    location: 'Diamond Bar, California (Hybrid)',
    type: 'work',
    summary: 'Taught K-12 students various programming languages and frameworks including Python, Java, HTML, CSS, JavaScript, Flutter, Firebase, and Dart. Developed individualized lesson plans, debugged code live, and provided end-to-end support for app development. Directly contributed to the successful launch of 6+ mobile apps on Google Play and Apple App Store through collaborative coding, project mentoring, and co-authoring student research.'
  },
  {
    company: 'IntelliEvent',
    title: 'Development Intern',
    dates: 'May 2024 – June 2024',
    location: 'Riverside, California (Hybrid)',
    type: 'work',
    summary: 'Gained hands-on experience in a professional development environment, developing and maintaining web applications using React and ASP.NET C# REST API. Navigated technical documentation, troubleshot complex production-level code, and collaborated with a team of developers. Also gained sales experience by marketing software at a trade show and contributing to lead generation efforts.'
  },
  {
    company: 'Coding Mind Academy',
    title: 'Programming Instructor',
    dates: 'May 2023 – October 2023',
    location: 'Irvine, California',
    type: 'work',
    summary: 'Taught K-12 students multiple programming languages and frameworks including Python, Java, HTML, CSS, JavaScript, Flutter, Firebase, and Dart. Developed individualized lesson plans, debugged code live, and supported app development end-to-end. Directly contributed to the launch of 2+ mobile apps on Google Play and Apple App Store through collaborative coding, project mentoring, and co-authoring student research.'
  },
  {
    company: 'Little Caesars Pizza',
    title: 'Assistant Manager',
    dates: 'August 2021 – July 2022',
    location: 'Corona, California',
    type: 'work',
    summary: 'Supervised, motivated, and directed employees to complete tasks efficiently. Maintained proficiency in all store stations, ensuring ability to switch tasks as needed. Handled cash and card transactions, tracked inventory, created employee schedules, trained new employees, conducted interviews, and counted daily profits.'
  },
  {
    company: 'Visión2010',
    title: 'Event Staff',
    dates: 'January 2018 – March 2020',
    location: 'Riverside, California',
    type: 'work',
    summary: 'Worked at 30+ events, including weekly meetings, monthly seminars, and bi-yearly conferences. Managed concession stand operations: organized inventory, handled transactions, interacted with customers, and managed profits. Served as video/audio production assistant, managing microphone audio for event speakers.'
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
            className={`vertical-timeline-element--${exp.type}`}
            contentStyle={{
              background: 'var(--secondary-background)',
              color: 'var(--text-color-light)',
              border: '1px solid var(--border-color)',
              boxShadow: 'none',
              borderRadius: '6px',
              padding: '1.5rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid var(--secondary-background)' }}
            dateClassName="vertical-timeline-element-date"
            iconStyle={{ background: 'var(--accent-color-1)', color: 'var(--text-color-light)' }}
            icon={exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
          >
            <div className="experience-card-header">
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company} - {exp.location}</h4>
              <span className="vertical-timeline-element-date-icon"><FaCalendarAlt /> {exp.dates}</span>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">{exp.company} - {exp.location}</h4> */}
            <p className="vertical-timeline-element-description">
              {exp.summary}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
