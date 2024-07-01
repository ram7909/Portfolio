import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './Home.css'
const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Developer', 'React Developer', 'Backend Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typedRef.current = new Typed('#change-text', options);
    return () => {
      typedRef.current.destroy();
    };
  }, []);
  return (
    <>
      <section className="home" id="home">
        <div className="home-content" data-aos="fade-right" data-aos-duration="1000">
          <h3>Hi, I'm</h3>
          <h1>Ramcharan Patidar</h1>
          <h3>And I'm a <span id='change-text'></span></h3>
          <p>Transforming concepts into functional code with precision</p>
          <div className="social-media">
            <a href="https://github.com/ram7909"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ram795/"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <a href='/public/ram.pdf' className='btn'>Resume</a>
        </div>
        <div className="home-img" data-aos="fade-left" data-aos-duration="1000">
          <img src="/public/Profile3.jpg" alt="" />
        </div>
      </section>
    </>
  )
}

export default Home