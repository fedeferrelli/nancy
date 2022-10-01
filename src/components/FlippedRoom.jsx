import React, {useState} from 'react';
import flippedRoomData from '../utils/flippedRoomData';
import {BsFillCheckCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import {scroller} from 'react-scroll';
import {Fade} from 'react-awesome-reveal'


function FlippedRoom({setShowMore}) {

    const [benefitNumber, setBenefitNumber] = useState(0)

    const showLessMetodology = async() => {

      await setShowMore(false);
    
      scroller.scrollTo('meto', {
        duration: 700,
        smooth: true,
      })    
    };


    const nextBenefit = () => {
        const benefitLenght = flippedRoomData.beneficios.length;

        if (Number(benefitNumber) === Number(benefitLenght)-1)
        {setBenefitNumber(0)}
        else {setBenefitNumber(benefitNumber+1)}
    };


    return (
        <main className="w-full text-gray-700 flex flex-col gap-10 text-lg" id="flipped">
            <section className="w-11/12 border max-w-[1240px] m-auto py-10">

            <div className="text-4xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none ">
          Flipped Room{" "}
        </div>

<p className="max-w-prose m-auto pt-10">La tecnología y las actividades de aprendizaje son dos componentes clave de
este modelo. Ambos influencian el entorno de aprendizaje del estudiante de
manera fundamental.</p>

<p className="max-w-prose m-auto py-6 uppercase font-bold text-xl text-center"> pilares fundamentales:</p>

<div className="flex flex-col gap-10"> 

<div>

<div className="h-auto flex flex-wrap justify-evenly gap-8">    

{flippedRoomData.pilares.map((pilar)=>(
    <div  key={pilar.title} className="sm:w-1/2 m-auto">
        
            <p className="px-4 py-1 w-auto m-auto text-gray-200 bg-gray-800 text-center">{pilar.title}</p>
    <p className="text-center p-4 border border-gray-800 ">{pilar.text}</p>
    </div>
))}

</div>

<p className="hidden sm:block max-w-prose m-auto pt-8 pb-6 uppercase font-bold text-xl text-center">beneficios del modelo:</p>

<div className="sm:flex-wrap sm:flex justify-center gap-6 hidden">
    

{flippedRoomData.beneficios.map((beneficio)=>(
    <div  key={beneficio} className="sm:w-auto sm:p-2 sm:px-3 sm:rounded-full sm:border sm:border-black sm:shadow-lg">
        
            
    <p className="w-auto"> <BsFillCheckCircleFill className="inline m-auto w-20 sm:hidden"/> {beneficio}</p>
    </div>
))}

</div>

<div className="sm:hidden w-full border text-center p-4 mt-10  flex flex-col justify-between  ">

<p className="max-w-prose uppercase font-bold text-xl text-center sm:hidden">beneficios del modelo</p>

<div className="h-auto mt-2  w-full pt-2 overflow-auto whitespace-nowrap">

{flippedRoomData.beneficios.map(e=>(


<div key={e} className="w-full m-auto h-full inline-block rounded-lg mr-3 align-middle overflow-hidden text-gray-800 whitespace-normal">
    
    <div className="m-auto">

            <h1 className=" m-auto font font-semibold tracking-wide">{e}</h1>
            </div>
    
    </div>

))}

</div>







</div>



</div>


</div>

<button className="border border-gray-600 m-auto text-xl font-extralight text-black  sm:tracking-wide uppercase sm:hover:bg-gray-700 sm:hover:text-gray-200 duration-700 w-3/4 sm:w-72 flex mt-10 sm:mt-20" onClick={showLessMetodology}><div className='p-4 w-full h-full'> ver menos</div></button>

</section>

            
        </main>
    )
}

export default FlippedRoom
