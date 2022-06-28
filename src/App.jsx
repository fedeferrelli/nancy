import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Metodologia from "./components/Metodologia";
import Contacto from "./components/Contacto";


function App() {
  
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar/>
    <Hero/>
    <About/>
    <Servicios/>
    <Metodologia/>
    <Contacto/>
    
    </div>
  )
}

export default App
