import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'

function App() {

  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default App
