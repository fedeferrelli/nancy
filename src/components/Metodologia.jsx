import React, {useState} from "react";
import Button from "../utils/Button";
import {Fade} from 'react-awesome-reveal';
import {scroller} from 'react-scroll';
import FlippedRoom from "./FlippedRoom";


import metodologiaData from "../utils/metodologiaData";

function Metodologia({setShowMore}) {

/* const [showMore, setShowMore] = useState(false)

console.log(showMore) */




const showMoreMetodology = async() => {

    await setShowMore(true);

  scroller.scrollTo('flipped', {
    duration: 700,
    smooth: true,
  
  })
}






  return (
    <div className="w-full sm:h-screen shadow-md relative z-10" id='meto'>
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
      <div className="h-full bg-gradient-to-b from-black/95 via-black/75 to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white py-20">

<Fade duration="2500" className="h-full">

  <div className="h-full flex flex-col justify-evenly items-center">

        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none pb-10">
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

        <div className="mt-10 w-3/4">
        
        <button className="border-2 m-auto text-xl font-extralight text-gray-200  sm:tracking-wide uppercase sm:hover:bg-gray-200 sm:hover:text-gray-700 duration-700 w-full sm:w-72 flex" onClick={showMoreMetodology}><div className='p-4 w-full h-full'> saber mas</div></button>
        </div>
      </div>



      </Fade>
      </div>

    </div>
  );
}

export default Metodologia;