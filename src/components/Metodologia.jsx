import React from "react";
import Button from "../utils/Button";

import metodologiaData from "../utils/metodologiaData";

function Metodologia() {
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
      <div className=" w-full h-full bg-gradient-to-t from-black to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white">

        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none ">
        Método{" "}
        </div>

        <div className="text-center flex flex-col m-auto gap-6">
          {metodologiaData.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose text-center tracking-wide font-extralight sm:text-2xl text-lg"
            >
              {parrafo}
            </p>
          ))}

        </div>
        
<Button buttonText={'saber mas'}/>
      </div>
    </div>
  );
}

export default Metodologia;