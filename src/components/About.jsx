import React from 'react';
import aboutData from '../utils/aboutData';

function About() {
    return (
        <main className="flex flex-col sm:flex-row">


     <div className="w-full sm:w-1/2  z-10 sm:h-96 h-48 overflow-hidden">       
    <div style={{  
  backgroundImage: "url(" + 'https://www.kaplaninternational.com/files/styles/hero_banner_k_mb/public/school/featured/kaplan-english-school-in-London-4.jpg?itok=WTnubTro' + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
}} className="sepia-0"></div></div>

<div className="w-full sm:w-1/2 text-white flex flex-col justify-center">
<h1 className="m-auto text-4xl text-white font-sans uppercase font-bold   text-center  sm:tracking-wider leading-none my-4">Quien Soy</h1>

<div className="h-full text-center px-8 flex flex-col justify-center">



{aboutData.parrafos.map(parrafo=>(
    <p key={parrafo} className="max-w-prose m-auto tracking-wide font-extralight text-lg py-4">{parrafo}</p>
))}


<p className="max-w-prose m-auto tracking-wide font-light text-lg uppercase underline py-4">Saber mas</p>

</div>

</div>

        </main>
    )
}

export default About
