import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import './index.css'

function App() {
  

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-[#f4ebde] to-[#f9f4e8] h-[100%] pattern ">
        <Navbar />
        <Hero />
        <About />
      </div>
      
    </>
  )
}

export default App
