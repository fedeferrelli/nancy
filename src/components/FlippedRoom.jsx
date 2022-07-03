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
        <main className="w-full flex flex-col gap-10 text-lg" id="flipped">
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

<div className="h-auto flex flex-wrap justify-evenly gap-4">    

{flippedRoomData.pilares.map((pilar)=>(
    <div  key={pilar.title} className="sm:w-1/2 m-auto">
        
            <p className="px-4 w-auto m-auto text-gray-200 bg-black text-center">{pilar.title}</p>
    <p className="text-center p-4 border border-black ">{pilar.text}</p>
    </div>
))}

</div>

<p className="max-w-prose m-auto pt-8 pb-6 uppercase font-bold text-xl text-center">beneficios del modelo:</p>

<div className="sm:flex-wrap sm:flex justify-center gap-6 hidden">

{flippedRoomData.beneficios.map((beneficio)=>(
    <div  key={beneficio} className="sm:w-auto sm:p-2 sm:px-3 sm:rounded-full sm:border sm:border-black sm:shadow-lg">
        
            
    <p className="w-auto"> <BsFillCheckCircleFill className="inline m-auto w-20 sm:hidden"/> {beneficio}</p>
    </div>
))}

</div>

<div className="sm:hidden w-full border text-center p-4 border-black flex flex-col justify-between min-h-[175px]">


<div>
{flippedRoomData.beneficios[benefitNumber]}
</div>



<div className="w-full text-center flex text-4xl mt-4">
<BsFillArrowRightCircleFill className="m-auto w-20" onClick={nextBenefit}/>
</div>

</div>



</div>


</div>

<button className="border-2 border-black m-auto text-xl font-extralight text-black  sm:tracking-wide uppercase sm:hover:bg-black sm:hover:text-gray-200 duration-700 w-full sm:w-72 flex mt-4 mt-10 sm:mt-20" onClick={showLessMetodology}><div className='p-4 w-full h-full'> ver menos</div></button>

</section>

            
        </main>
    )
}

export default FlippedRoom
