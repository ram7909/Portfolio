import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <>
        <div className="education" id="education">
            <h2 className="heading head">Edu<span id='abt-me'>cation</span></h2>
            <div className="study">
                <div className="clg"  data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='class'>Bachelor of Computer Application</h1>
                    <p className='inst-name'>Govt. Holkar Sceince College, Indore</p>
                    <p className='duration'><i className="fa-regular fa-calendar-days"></i> 2023 - 2026</p>
                </div>
                <div className="clg" data-aos="fade-left" data-aos-duration="1000">
                    <h1 className='class'>12th (CBSE)</h1>
                    <p className='inst-name'>TSVPS, Petlawad</p>
                    <p className='duration'><i className="fa-regular fa-calendar-days"></i> 2023</p>
                </div>
                <div className="clg" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='class'>10th (CBSE)</h1>
                    <p className='inst-name'>TSVPS, Petlawad</p>
                    <p className='duration'><i className="fa-regular fa-calendar-days"></i> 2021</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Education