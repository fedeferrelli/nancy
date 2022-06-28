import React from 'react';
import servicios from '../utils/services';
import Button from '../utils/Button';

function Servicios() {
    return (
        <main className="bg-gray-100 py-12 flex flex-col sm:flex-row gap-4 sm:px-8" id='servicios'>


        {servicios.map(servicio =>(
            <div key={servicio.precio} className="w-11/12 sm:w-1/3 border-2 border-black  shadow-md shadow-slate-300 m-auto py-8 px-4 flex flex-col justify-evenly gap-6 font-sans">
                <h1 className="mx-auto text-xl">Clases Online</h1>
                <div className="w-full text-2xl uppercase text-center">{servicio.tipo}</div>

                <div className="w-full text-2xl uppercase text-center">{servicio.horas_semanales} hora semanales</div>

                <div className="w-full text-2xl text-center">${servicio.precio} mensuales</div>

                <button className="border-2 border-black/60 m-auto p-4 text-lg max-w-prose font-extralight bg-black text-white  sm:tracking-wide uppercase hover:bg-black/20 hover:text-black duration-700 w-11/12 sm:w-3/4">consultar</button>
            </div>
        ))}
            
        </main>
    )
}

export default Servicios
