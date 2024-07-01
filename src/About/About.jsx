import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="about-img" data-aos="fade-right" data-aos-duration="1000">
                    <img src="/Profile4.png" alt="" />
                </div>
                <div className="about-content" data-aos="fade-left" data-aos-duration="1000">
                    <h2 className="heading">ABOUT <span id='abt-me'>Me</span></h2>
                    <h3>MERN Stack Developer</h3>
                    <p>I'm a passionate MERN Stack Developer eager to turn ideas into captivating online experiences.I aim to create user friendly websites that leave a lasting impression.Let's collaborate to build something amazing together!</p>
                    <a href="/public/ram.pdf" className='btn'>Resume</a>
                </div>
            </section>
        </>
    )
}

export default About