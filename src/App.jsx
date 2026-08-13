import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CameraInterface from './components/CameraInterface'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-base-800 text-white font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CameraInterface />
        <Experience />
        <Skills />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
