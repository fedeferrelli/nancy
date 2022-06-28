import React from "react";
import Button from "../utils/Button";

function Contacto() {
  return (
    <div className="w-full h-screen  sm:h-screen shadow-md relative z-10" id='contacto'>
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
        Contacto{" "}
        </div>

        
<Button buttonText={'Enviar'}/>
      </div>
    </div>
  );
}

export default Contacto;