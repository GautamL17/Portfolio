import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Blob from './components/Blob'

const App = () => {
  return (
    <>
    <div className="relative overflow-hidden h-screen">
    <Navbar/> 
    <Home/>
    <About/>
    <Projects/>
    <Footer/>
    <Blob/>
    </div>
    </>
  )
}

export default App
