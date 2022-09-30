import React, {useEffect} from "react";
import Button from '../utils/Button';
import {Fade} from 'react-awesome-reveal'

import aboutData from "../utils/aboutData";

function About({spanish}) {

 var data;


  if(spanish){data=aboutData.spanish}
  else {data=aboutData.english}

  return (
    <div className="w-full sm:h-screen shadow-md relative z-10" id='about'>

      <div className="w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
        <div
          style={{
            backgroundImage:
              "url(" +
              "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/uk/london/destinations-london-banner-mobile-1024x553.jpg" +
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

      
      <div className="h-full bg-gradient-to-b from-black/95 via-black/75 to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white py-20">

      <Fade duration="2500" className="h-full">

        <div className="h-full flex flex-col justify-evenly items-center">
        
        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none pb-10">
         {data.titulo}
        </div>


        <div className="text-left flex flex-col m-auto gap-10 pb-10">
         {data.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose tracking-wide  sm:text-xl font-thin text-lg"
            >
              {parrafo}
            </p>
          ))}


        </div>

        <div className="mt-10 w-full">
        <Button buttonText={data.boton} link={'contacto'}/>
        </div>
        </div>
        </Fade>
      </div>
      
    </div>
  );
}

export default About;
