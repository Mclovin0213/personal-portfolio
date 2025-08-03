import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:javellaneda0213@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/Mclovin0213" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="http://www.linkedin.com/in/julianavellaneda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      <div className="contact-form">
        <h3>Send me a message</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
