import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Principal from './components/Principal'
import ClassesOffered from './components/ClassesOffered'
import WhyChooseUs from './components/WhyChooseUs'
import TeachingMethodology from './components/TeachingMethodology'
import Facilities from './components/Facilities'
import SchoolLife from './components/SchoolLife'
import Achievements from './components/Achievements'
import FAQ from './components/FAQ'
import AdmissionProcess from './components/AdmissionProcess'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Principal />
      <ClassesOffered />
      <WhyChooseUs />
      <TeachingMethodology />
      <Facilities />
      <SchoolLife />
      <Achievements />
      {/* <FAQ /> */}
      <AdmissionProcess />
      <FinalCTA />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App
