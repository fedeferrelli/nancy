import React, {useState} from "react";
import Button from "../utils/Button";
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-scroll';
import FlippedRoom from "./FlippedRoom";

import metodologiaData from "../utils/metodologiaData";

function Metodologia({setShowMore}) {

/* const [showMore, setShowMore] = useState(false)

console.log(showMore) */


  return (
    <div className="w-full h-screen  sm:h-screen shadow-md relative z-10" id='meto'>
      <div className="w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
        <div
          style={{
            backgroundImage:
              "url(" +
              "https://www.nyhabitat.com/sp/blog/wp-content/uploads/2017/01/Descubra-East-London-Cultura-contempor%C3%A1nea-vibrante-tour-autob%C3%BAs-dos-pisos.jpg" +
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
      <div className="h-full bg-gradient-to-b from-black via-black/80 to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white">

<Fade duration="2500" className="h-full">

  <div className="h-full flex flex-col justify-evenly items-center">

        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none ">
        Método{" "}
        </div>

        <div className="flex flex-col m-auto gap-6">
          {metodologiaData.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose text-left tracking-wide sm:text-xl font-thin text-lg"
            >
              {parrafo}
            </p>
          ))}

        </div>

       
        
        <Button buttonText={'saber más'} link={'flipped'} duration={700}/>

      </div>



      </Fade>
      </div>

    </div>
  );
}

export default Metodologia;