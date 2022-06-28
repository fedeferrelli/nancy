import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Metodologia from "./components/Metodologia";


function App() {
  
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar/>
    <Hero/>
    <About/>
    <Servicios/>
    <Metodologia/>
    
    </div>
  )
}

export default App
