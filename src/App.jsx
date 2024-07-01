import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Navbar from './Navbar/Navbar'
import Home from './Homes/Home'
import About from './About/About'
import Skill from './Skill/Skill'
import Education from './Education/Education'
import Project from './Projectss/Project'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Top from './Top/Top'
const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Navbar />
      <div className="main-page">
        <Home />
        <About />
        <Skill />
        <Education />
        <Project />
        <Contact />
        <Footer />
        <div className="t">
          <Top />
        </div>
      </div>
    </>
  )
}

export default App