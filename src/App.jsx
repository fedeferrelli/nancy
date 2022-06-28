import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Metodologia from "./components/Metodologia";

import Hero_copy from "./components/Hero_copy";

function App() {
  
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar/>
    <Hero/>
    <Hero_copy/>
   {/*  <About/> */}
    <Metodologia/>
    </div>
  )
}

export default App
