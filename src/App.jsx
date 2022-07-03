import React, {useState} from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Metodologia from "./components/Metodologia";
import Contacto from "./components/Contacto";
import FlippedRoom from "./components/FlippedRoom";


function App() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar/>
    <Hero/>
    <About/>
    <Servicios/>
    <Metodologia setShowMore={setShowMore}/>
    {showMore &&
<FlippedRoom setShowMore={setShowMore}/> }
    <Contacto/>
    
    </div>
  )
}

export default App
