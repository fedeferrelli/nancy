import React from "react";
import servicios from "../utils/services";
import { Link } from "react-scroll";
import Button from "../utils/Button";

function Servicios() {
  return (
    <main className="bg-slate-300 py-12  sm:px-8" id="servicios">
      <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none pb-10 text-gray-700">
        Que Podemos hacer{" "}
      </div>

      <section className="flex flex-wrap  sm:flex-row gap-4 sm:gap-10 max-w-[1000px] m-auto sm:mt-8">
        {servicios.map((servicio) => (
          <div
            key={servicio}
            className="w-11/12 sm:w-auto border border-slate-400 shadow-lg shadow-slate-500 m-auto py-4 px-4 flex flex-wrap  justify-evenly gap-6 font-sans rounded-lg sm:rounded-full text-xl bg-slate-200 text-gray-700"
          >
            {/*  <div className="flex flex-col"> 
                    <h1 className="mx-auto text-xl">Clases Online</h1>
                    <div className="w-full text-2xl uppercase text-center">{servicio.tipo}</div>
                </div> */}

            <div className="flex  text-center">{servicio}</div>
          </div>
        ))}
      </section>

      <div className="flex mt-12 sm:mt-24 w-11/12 m-auto ">
        <button className="text-center border border-gray-600 m-auto text-xl font-extralight text-black  sm:tracking-wide uppercase sm:hover:bg-gray-700 sm:hover:text-gray-200 duration-700 w-3/4 sm:w-72 flex ">
          <Link
            activeClass="active"
            className="w-full p-4 "
            to={"contacto"}
            spy={true}
            smooth={true}
            duration={1000}
          >
            consultar
          </Link>
        </button>
      </div>
    </main>
  );
}

export default Servicios;
