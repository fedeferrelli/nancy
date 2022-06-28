import React from "react";
import Button from '../utils/Button';

import aboutData from "../utils/aboutData";

function About() {
  return (
    <div className="w-full h-screen shadow-md relative z-10" id='about'>
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
      <div className=" w-full h-full bg-gradient-to-t from-black to-gray-900/70 px-4 flex flex-col justify-evenly items-center text-white">
        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none ">
          quien soy{" "}
        </div>

        <div className="text-center flex flex-col m-auto gap-10">
          {aboutData.parrafos.map((parrafo) => (
            <p
              key={parrafo}
              className="max-w-prose text-center tracking-wide font-extralight sm:text-2xl text-lg"
            >
              {parrafo}
            </p>
          ))}


        </div>
        <Button buttonText={'agenda una clase'} link={'contacto'}/>
      </div>
    </div>
  );
}

export default About;
