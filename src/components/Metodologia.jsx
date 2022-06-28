import React from "react";

import metodologiaData from "../utils/metodologiaData";

function Metodologia() {
  return (
    <div className="w-full h-screen  sm:h-screen shadow-md relative z-10">
      <div className="w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
        {/*     <img src='https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876' className='sepia'/> */}
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
      <div className=" w-full h-full bg-gradient-to-r from-blue-400/70 to-violet-200/80 px-4 flex flex-col justify-center items-center text-gray-900">
        <div className="text-6xl  font-sans uppercase font-bold   text-center  sm:tracking-wider leading-none mt-8">
        Método{" "}
        </div>

        <div className="text-centerflex flex flex-col">
          {metodologiaData.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose  mt-8 text-center tracking-wide font-extralight sm:text-2xl text-lg py-0"
            >
              {parrafo}
            </p>
          ))}

          <button className="border-2  border-slate-700 mt-8 m-auto p-4 text-xl font-extralight  sm:tracking-wide uppercase mb-6 hover:bg-gray-200/30 hover:text-gray-700 duration-700 w-10/12 sm:w-72">
            Saber mas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Metodologia;