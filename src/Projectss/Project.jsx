import React from 'react'
import './Project.css'
const Project = () => {
    return (
        <>
            <section className="project" id="project">
                <h2 className='heading'>LATEST <span id='abt-me'>Projects</span></h2>
                <div className="project-container">
                    <div className="project-box" data-aos="flip-left" data-aos-duration="1000">
                        <img src="/1.png" alt="" />
                        <div className="project-layer">
                            <h4>QUIZ APP</h4>
                            <p>A quiz app that features multiple-choice questions, tracks scores, provides instant feedback, and offers various categories for engaging learning.</p>
                            <a href="https://quiz-beta-sage.vercel.app/"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="project-box" data-aos="flip-up" data-aos-duration="1000">
                        <img src="/2.png" alt="" />
                        <div className="project-layer">
                            <h4>CALCULATOR</h4>
                            <p>A calculator app providing basic arithmetic functions, a clean interface, and instant results for quick and accurate calculations.</p>
                            <a href="https://calculator-html-css-javascript.vercel.app/"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="project-box" data-aos="flip-right" data-aos-duration="1000">
                        <img src="/p3.png" alt="" />
                        <div className="project-layer">
                            <h4>FLIPKART</h4>
                            <p>A Flipkart clone with product listings, user reviews, secure payments, and a responsive interface for seamless e-commerce shopping.</p>
                            <a href="https://flipkart-clone-rust.vercel.app/"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project