import React from 'react';
import {Link} from 'react-scroll'

function Button({buttonText, link, duration=1300}) {
    return (
       
             <button className="border-2 m-auto text-xl font-extralight text-gray-200  sm:tracking-wide uppercase sm:hover:bg-gray-200 sm:hover:text-gray-700 duration-700 w-full sm:w-72 flex"><Link className='p-4 w-full h-full' activeClass="active" to={link} spy={true} smooth={true} duration={duration} > {buttonText} </Link></button>
            
       
    )
}

export default Button
