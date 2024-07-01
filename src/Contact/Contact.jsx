import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
        <section className="contact" id="contact" data-aos="zoom-in-up" data-aos-duration="1000">
            <h2 className='heading'>CONTACT <span id='abt-me'>Me</span></h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email Address'/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Mobile Number' />
                    <input type="text" placeholder='Email Subject'/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send" className='btn' />
            </form>
        </section>
    </>
  )
}

export default Contact