import React from 'react';
import metodologiaData from '../utils/metodologiaData';

function Metodologia() {
    return (
        <main className="flex flex-col sm:flex-row">


     <div className="w-full sm:w-1/2  z-10 sm:h-96 h-48 overflow-hidden sm:order-2">       
    <div style={{  
  backgroundImage: "url(" + 'https://content.r9cdn.net/rimg/dimg/8a/d8/29dcb2f0-city-28501-17579c53c1d.jpg?crop=true&width=1366&height=768&xhint=1560&yhint=1280' + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
}} className="sepia-0"></div></div>

<div className="w-full sm:w-1/2 text-white flex flex-col justify-center">
<h1 className="m-auto text-4xl text-white font-sans uppercase font-bold   text-center  sm:tracking-wider leading-none my-4">Metodo de aprendizaje</h1>

<div className="h-full text-center px-8 flex flex-col justify-center">



{metodologiaData.parrafos.map(parrafo=>(
    <p key={parrafo} className="max-w-prose m-auto tracking-wide font-extralight text-lg py-4">{parrafo}</p>
))}


<p className="max-w-prose m-auto tracking-wide font-light text-lg uppercase underline py-4">Saber mas</p>

</div>

</div>

        </main>
    )
}

export default Metodologia
