import React, {useState} from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Metodologia from "./components/Metodologia";

import FlippedRoom from "./components/FlippedRoom";
import Contact from "./components/Contact";


function App() {
  const [showMore, setShowMore] = useState(false);
  const [spanish, setSpanish] = useState(true);
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar spanish={spanish} setSpanish={setSpanish}/>
    <Hero/>
    <About spanish={spanish} setSpanish={setSpanish}/>
    <Servicios/>
    <Metodologia setShowMore={setShowMore}/>
    {showMore &&
<FlippedRoom setShowMore={setShowMore}/> }
    <Contact/>
    
    </div>
  )
}

export default App
