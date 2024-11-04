import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Blob from './components/Blob'
import SkillsAndEducation from './components/SkillsAndEducation'

const App = () => {
  return (
    <>
    <div className="">
    <Navbar/> 
    <Home/>
    <About/>
    <SkillsAndEducation/>
    <Projects/>
    <Footer/>
    {/* <Blob/> */}
    </div>
    </>
  )
}

export default App
