import React from "react";
import Button from "../utils/Button";

function Contacto() {
  return (
    <div className="w-full h-screen  sm:h-screen bg-black" id='contacto'>
      <div className=" w-full h-full bg-gradient-to-t from-black to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white">

        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none ">
        Contacto{" "}
        </div>

        
<Button buttonText={'Enviar'} link={'nowhere'}/>
      </div>
    </div>
  );
}

export default Contacto;