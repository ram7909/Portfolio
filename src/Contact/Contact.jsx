import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const submithandler = (e) => {
        e.preventDefault();
        console.log(name + number + email + subject + message);
        alert("Message Send Succesfully");
        setName('')
        setNumber('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

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
                    <form onSubmit={submithandler}>
                        <div className="input-box">
                            <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder='Mobile Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                            <input type="text" placeholder='Email Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <input type="submit" value="Send" className='btn' />
                    </form>
                </div>

            </section>
        </>
    )
}

export default Contact