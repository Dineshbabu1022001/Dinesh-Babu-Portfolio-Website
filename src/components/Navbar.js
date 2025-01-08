import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export const Navbar = () => {
  const [showNavButtons, setShowNavButtons] = useState(false);

  const scrollToSection = (name) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowNavButtons(false); // Close the nav buttons after scrolling
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleButtonClick = () => {
    setShowNavButtons(!showNavButtons);
  };

  return (
    <div className='navbar'>
      <div className='nav-name'>
      &lt;Dinesh Babu N G /&gt;
      </div>
      <div className={`nav-buttons ${showNavButtons ? 'show' : ''}`}>
        <button className='nav-butt' onClick={() => scrollToSection('about')}>About</button>
        <button className='nav-butt' onClick={() => scrollToSection('Tech')}>Technology</button>
        <button className='nav-butt' onClick={() => scrollToSection('projects')}>Projects</button>
        <button className='nav-butt' onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
      <div className="nav-toggle" onClick={handleButtonClick}>
        <i className={`fa ${showNavButtons ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </div>
  );
};

export default Navbar;
