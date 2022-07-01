import React from 'react';
import Button from '../utils/Button';

function Hero() {
    return (
        <div className="w-full h-screen shadow-md relative z-10">
            <div className="w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
            <div style={{  
  backgroundImage: "url(" + 'https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876' + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
}} className="sepia"></div> 
            </div>
            <div className=" w-full h-full bg-gradient-to-b from-red-800/70 to-blue-900/60 px-4 flex flex-col justify-center items-center">

                <div className="m-auto text-[70px] text-white font-sans uppercase font-bold   text-center  sm:tracking-wider leading-none w-full">
                    <h1> nancy cendra</h1> 
                <h2 className='inline-block text-2xl max-w-prose font-extralight text-gray-200  sm:tracking-wide mt-6 sm:mt-2 text-center'>Take learning beyond the classroom and into the real world </h2> 

                </div>

               <div className='m-auto w-full'>
               
               <Button buttonText={'contactame'} link={'contacto'}/>
               
               </div>
               
               
               </div>

           
        </div>
    )
}

export default Hero
