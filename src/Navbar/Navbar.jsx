import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActivelink] = useState('#home')

  const handleSetActiveLink = (link) => {
    setActivelink('link')
    setToggle(false)
  }

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className='header' data-aos="fade-down" data-aos-duration="1000">
      <a href="#" className='logo'>Ramcharan Patidar</a>
      <i className={`fa ${toggle ? 'fa-xmark' : 'fa-bars'}`} id='menu-icon' onClick={handleToggle}
      ></i>
      <nav className={`navbar ${toggle ? 'active' : ''}`}>
        {/* <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a> */}

        <a
          href="#home"
          className={activeLink === '#home' ? 'active' : ''}
          onClick={() => handleSetActiveLink('#home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeLink === '#about' ? 'active' : ''}
          onClick={() => handleSetActiveLink('#about')}
        >
          About
        </a>
        <a
          href="#skill"
          className={activeLink === '#skill' ? 'active' : ''}
          onClick={() => handleSetActiveLink('#skill')}
        >
          Skill
        </a>
        <a
          href="#project"
          className={activeLink === '#project' ? 'active' : ''}
          onClick={() => handleSetActiveLink('#project')}
        >
          Project
        </a>
        <a
          href="#contact"
          className={activeLink === '#contact' ? 'active' : ''}
          onClick={() => handleSetActiveLink('#contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
