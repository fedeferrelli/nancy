import React from "react";
import Button from '../utils/Button';
import {Fade} from 'react-awesome-reveal'

import aboutData from "../utils/aboutData";

function About() {
  return (
    <div className="w-full sm:h-screen shadow-md relative z-10" id='about'>

      <div className="w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
        <div
          style={{
            backgroundImage:
              "url(" +
              "https://www.kaplaninternational.com/files/styles/hero_banner_k_mb/public/school/featured/kaplan-english-school-in-London-4.jpg?itok=WTnubTro" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
          className="sepia-0"
        ></div>
      </div>

      
      <div className="h-full bg-gradient-to-b from-black via-black/80 to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white py-10">

      <Fade duration="2500" className="h-full">

        <div className="h-full flex flex-col justify-evenly items-center">
        
        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none pb-10">
          quien soy{" "}
        </div>

        <div className="text-left flex flex-col m-auto gap-10 pb-10">
          {aboutData.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose tracking-wide  sm:text-xl font-thin text-lg"
            >
              {parrafo}
            </p>
          ))}


        </div>

        
        <Button buttonText={'agenda una clase'} link={'contacto'}/>
      
        </div>
        </Fade>
      </div>
      
    </div>
  );
}

export default About;
