import React from 'react';
import servicios from '../utils/services';
import {Link} from 'react-scroll'

function Servicios() {
    return (
        <main className="bg-gray-100 py-12 sm:py-36  sm:px-8" id='servicios'>

            <section className="flex flex-col sm:flex-row gap-4 max-w-[1240px] m-auto">


        {servicios.map(servicio =>(
            <div key={servicio.precio} className="w-11/12 sm:w-1/3 border-2 border-black  shadow-md shadow-slate-300 m-auto py-8 px-4 flex flex-col justify-evenly gap-6 font-sans">
               
                <div className="flex flex-col"> 
                    <h1 className="mx-auto text-xl">Clases Online</h1>
                    <div className="w-full text-2xl uppercase text-center">{servicio.tipo}</div>
                </div>

                <div className="flex flex-col mt-4"> 
                    <div className="w-full text-2xl uppercase text-center">{servicio.horas_semanales}</div>
                    <div className="w-full text-2xl text-center">${servicio.precio} x mes</div>
                </div>

                

                <button className="border-2 border-black/60 m-auto p-4 text-lg max-w-prose font-extralight bg-black text-white  sm:tracking-wide uppercase sm:hover:bg-black/20 sm:hover:text-black duration-700 w-11/12 sm:w-3/4">
                    <Link activeClass="active" to={'contacto'} spy={true} smooth={true} duration={1000}>consultar</Link></button>
            </div>
        ))}
        </section>
            
        </main>
    )
}

export default Servicios
