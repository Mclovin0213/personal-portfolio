import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About Me">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate and creative software engineer with a love for building beautiful and functional applications. I thrive on challenges and am always eager to learn new technologies and expand my skillset.
        </p>
      </div>
      <div className="about-image">
        <img src="https://via.placeholder.com/150" alt="Headshot" />
      </div>
    </section>
  );
};

export default About;