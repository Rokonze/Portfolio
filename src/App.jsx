import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import ScrollButton from "./components/ScrollButton"
import './index.css'

function App() {
  

  return (
    <>
      <div className="flex  flex-col items-center bg-gradient-to-b from-[#f4ebde] to-[#f9f4e8] h-[100%] pattern ">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
        <ScrollButton />
      </div>
      
    </>
  )
}

export default App
