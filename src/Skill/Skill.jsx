import React from 'react'
import './Skill.css'
const Skill = () => {
    return (
        <>
            <section className="skill" id="skill">
                <h2 className='heading'>MY <span id='abt-me'>Skill</span></h2>
                <div className="skl"  data-aos="zoom-out" data-aos-duration="1000">

                    <div className="card">
                        <i className="fa-brands fa-html5"></i>
                        <h3>HTML 5</h3>
                        <p>HTML defines web page structure and content layout.</p>
                    </div>
                    <div className="card">
                        <i className="fa-brands fa-css3-alt"></i>
                        <h3>CSS 3</h3>
                        <p>CSS styles the content with colors and fonts.</p>
                    </div>
                    <div className="card">
                        <i className="fa-brands fa-js"></i>
                        <h3>JavaScript</h3>
                        <p>JavaScript adds interactivity with dynamic content updates.</p>
                    </div>
                    <div className="card">
                        <i className="fa-brands fa-bootstrap"></i>
                        <h3>Bootstrap</h3>
                        <p>Bootstrap provides design templates and responsive components.</p>
                    </div>
                    <div className="card">
                        <i className="fa-brands fa-react"></i>
                        <h3>React</h3>
                        <p>React builds user interfaces with reusable components.</p>
                    </div>
                    <div className="card">
                        <i className="fa-brands fa-node-js"></i>
                        <h3>Node.js</h3>
                        <p>Node enables server-side scripting and backend logic.</p>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-database"></i>
                        <h3>MongoDB</h3>
                        <p>MongoDB manages document-oriented databases</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill