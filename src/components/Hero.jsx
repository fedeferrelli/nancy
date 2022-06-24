import React from 'react'

function Hero() {
    return (
        <div className="w-full h-96 shadow-md relative z-10">
            <div className="bg-green-400 w-full h-full absolute -z-10 bg-transparent overflow-hidden ">
            {/*     <img src='https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876' className='sepia'/> */}
            <div style={{  
  backgroundImage: "url(" + 'https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876' + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
}} className="sepia"></div> 
            </div>
            <div className=" w-full h-full bg-gradient-to-r from-red-800/70 to-blue-900/60 px-4  flex">
                <div className="m-auto text-[70px] text-white font-sans uppercase font-bold drop-shadow-xl shadow-white text-center  sm:tracking-wider leading-none">nancy cendra 
                <span className='block text-2xl max-w-prose font-extralight text-gray-200  sm:tracking-wide mt-6 sm:mt-2'>Take learning beyond the classroom and into the real world </span> <span className="text-4xl"></span>

                </div>
            </div>

           
        </div>
    )
}

export default Hero
