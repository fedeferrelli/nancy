import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Metodologia from "./components/Metodologia";

function App() {
  
  return (
    <div className="min-h-screen bg-black/90">
      <NavBar/>
    <Hero/>
    <About/>
    <Metodologia/>
    </div>
  )
}

export default App
