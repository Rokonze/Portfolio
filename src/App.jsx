import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-[#f4ebde] to-[#f9f4e8] h-screen ">
        <Navbar />
        <Hero />
      </div>
      
    </>
  )
}

export default App
