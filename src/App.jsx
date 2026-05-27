import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "./components/Header"
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Certificates from './components/Certificates'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      offset:100
    })
  },[])
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header/>
      <HeroSection/>
      <Education/>
      <Certificates/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App