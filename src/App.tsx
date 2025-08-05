import React, { useState, useEffect, useRef } from 'react';
import Starfield from 'react-starfield';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './App.css';
import Education from './components/sections/Education';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <div>
      <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <div id="about" ref={sectionRefs.about}><About /></div>
        <div id="education" ref={sectionRefs.education}><Education /></div>
        <div id="projects" ref={sectionRefs.projects}><Projects /></div>
        <div id="skills" ref={sectionRefs.skills}><Skills /></div>
        <div id="experience" ref={sectionRefs.experience}><Experience /></div>
        <div id="contact" ref={sectionRefs.contact}><Contact /></div>
      </main>
    </div>
  );
};

export default App;

