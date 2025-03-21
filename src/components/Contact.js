import React, { useState, useEffect } from 'react';
import { ContactContent } from './ContactContent';
import Chatbot from './Chatbot';

export const Contact = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : '.'));
    }, 500); // Change dots every 500ms
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <p className='contact-heading' style={{ position: 'relative', left: '10px' }}>
        Get in Touch<span style={{ marginLeft: '5px', fontSize: '50px' }}>{dots}</span>
      </p>
      <div id='contact' className='contact'>
        <div className='contact-writeup'>
          <p className='contact-description'>
            Are you looking for a developer who hustles hard but stays humble? A curious soul who
            bobs their head to any music? A foodie who will venture out for amazing cuisine with
            you? ✨ If so, do get in touch!
          </p>
          <ContactContent />
          <Chatbot/>
        </div>

        <div className='end-page'>
          <div className='column'>
            <p style={{ textAlign: 'center' }}>💌 Contact me</p>
            <p>dineshbabu1022001@gmail.com</p>
            <p>+91 6379414240</p>
          </div>
          <div className='column'>
            <p style={{ textAlign: 'center' }}>🤝 stay connected</p>
            <div className='social-links'>
              <a href='https://www.linkedin.com/in/dinesh-babu-n-g-2bb529268/'>LinkedIn</a> ||
              <a href='https://github.com/Dineshbabu1022001'>GitHub</a> ||
              <a href='https://drive.google.com/file/d/1oVu8faZ4KFOVE_FqzBQfRAwnzTf8T0nA/view?usp=sharing'>
                Resume
              </a>
            </div>
          </div>
          <div className='column'>
            <p style={{ textAlign: 'center' }}>Made with ❤️</p>
            <p>Last updated Jan, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
