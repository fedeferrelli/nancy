import React from 'react';
import {Link} from 'react-scroll'

function Button({buttonText, link=null}) {
    return (
       
             <button className="border-2 m-auto text-xl max-w-prose font-extralight text-gray-200 flex sm:tracking-wide uppercase sm:hover:bg-gray-200 sm:hover:text-gray-700 duration-700 w-10/12 sm:w-72"><Link className='p-4 w-full' activeClass="active" to={link} spy={true} smooth={true} duration={1300} > {buttonText} </Link></button>
            
       
    )
}

export default Button
