import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <section className="contact" id="contact" data-aos="zoom-in-up" data-aos-duration="1000">
                <h2 className='heading'>CONTACT <span id='abt-me'>Me</span></h2>
                <div className="contact-content">
                    <div className="cnt">
                        <div className="phone">
                            <i className="fa-solid fa-phone"></i>
                            <a href='tel:+91 9171961582'>+91 9171961582</a>
                        </div>
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <a href='mailto:ramcharanmain07@gmail.com'>ramcharanmain07@gmail.com</a>
                        </div>
                        <div className="social-media">
                            <a href="https://github.com/ram7909"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/ram795/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email Address' />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder='Mobile Number' />
                            <input type="text" placeholder='Email Subject' />
                        </div>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send" className='btn' />
                    </form>
                </div>

            </section>
        </>
    )
}

export default Contact