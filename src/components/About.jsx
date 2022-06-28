import React from 'react';
import aboutData from '../utils/aboutData';

function About() {
    return (
        <main className="flex flex-col sm:flex-row">


     <div className="w-full sm:w-1/2  z-10 sm:h-screen h-48 overflow-hidden">   
         
    <div style={{  
  backgroundImage: "url(" + 'https://www.kaplaninternational.com/files/styles/hero_banner_k_mb/public/school/featured/kaplan-english-school-in-London-4.jpg?itok=WTnubTro' + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
}} className="saturate "></div></div>

<div className="w-full text-gray-900 flex flex-col justify-center my-8">
<h1 className="m-auto text-4xl font-sans uppercase font-bold sm:tracking-wider leading-none my-4 underline-offset-2">Quien Soy</h1>

<div className="h-full text-center px-8 flex  flex-col justify-center">



{aboutData.parrafos.map(parrafo=>(
    <p key={parrafo} className="max-w-prose m-auto tracking-wide font-extralight sm:text-2xl text-lg py-0">{parrafo}</p>
))}


<p className="max-w-prose m-auto tracking-wide font-light text-lg uppercase underline py-4">Saber mas</p>

</div>

</div>

        </main>
    )
}

export default About
