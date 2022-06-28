import React from "react";

import aboutData from "../utils/aboutData";

function Hero_copy() {
  return (
    <div className="w-full h-screen shadow-md relative z-10">
      <div className="w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
        {/*     <img src='https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876' className='sepia'/> */}
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
      <div className=" w-full h-full bg-gradient-to-l from-red-800/70 to-blue-900/60 px-4 flex flex-col justify-center items-center text-gray-900">
        <div className="text-6xl  font-sans uppercase font-bold   text-center  sm:tracking-wider leading-none mt-8">
          quien soy{" "}
        </div>

        <div className="text-centerflex flex flex-col">
          {aboutData.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose  mt-8 text-center tracking-wide font-extralight sm:text-2xl text-lg py-0"
            >
              {parrafo}
            </p>
          ))}

          <button className="border-2  border-slate-700 mt-8 m-auto p-4 text-xl font-extralight  sm:tracking-wide uppercase mb-6 hover:bg-gray-200/30 hover:text-gray-700 duration-700 w-10/12 sm:w-72">
            Agenda una clase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero_copy;
