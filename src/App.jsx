import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/> 
    <Home/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App