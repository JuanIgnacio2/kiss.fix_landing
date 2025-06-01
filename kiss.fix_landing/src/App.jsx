import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'

function App() {

  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <Footer />
    </div>
  )
}

export default App
