import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_xd3xhk8', 'template_w3kt41c', form.current, {
          publicKey: '8zMdG59O_RJKFBQfk',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!');
            form.current?.reset(); // Clear the form after successful submission
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message. Please try again later.');
          },
        );
    }
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
