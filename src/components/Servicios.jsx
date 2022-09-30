import React from 'react';
import servicios from '../utils/services';
import {Link} from 'react-scroll';
import Button from '../utils/Button';

function Servicios() {
    return (
        <main className="bg-violet-300 py-12  sm:px-8" id='servicios'>

<div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none pb-10 text-gray-700">
        Que Podemos hacer{" "}
        </div>

            <section className="flex flex-wrap  sm:flex-row gap-4 sm:gap-10 max-w-[1000px] m-auto sm:mt-8">


        {servicios.map(servicio =>(
            <div key={servicio.precio} className="w-11/12 sm:w-auto border border-violet-400 shadow-lg shadow-slate-500 m-auto py-4 px-4 flex flex-wrap  justify-evenly gap-6 font-sans rounded-lg sm:rounded-full text-xl bg-violet-200 text-gray-700">
               
               {/*  <div className="flex flex-col"> 
                    <h1 className="mx-auto text-xl">Clases Online</h1>
                    <div className="w-full text-2xl uppercase text-center">{servicio.tipo}</div>
                </div> */}

                <div className="flex  text-center"> 
                    {servicio}
                    </div>

                

                
            </div>
        ))}
        </section>

        
          
          <div className="flex mt-12 sm:mt-24 w-full m-auto ">   
          <button className=" border-2 border-violet-400 m-auto p-4 text-lg max-w-prose font-extralight bg-violet-400 text-gray-700  sm:tracking-wide uppercase sm:hover:bg-violet-300 sm:hover:text-black duration-700 w-11/12 sm:w-72">
                    <Link activeClass="active" to={'contacto'} spy={true} smooth={true} duration={1000}>consultar</Link></button>
        </div>    
        </main>
    )
}

export default Servicios
