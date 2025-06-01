import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
