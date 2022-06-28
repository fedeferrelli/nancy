import React from 'react'

function Button({buttonText}) {
    return (
       
             <button className="border-2 m-auto p-4 text-xl max-w-prose font-extralight text-gray-200  sm:tracking-wide uppercase hover:bg-gray-200 hover:text-gray-700 duration-700 w-10/12 sm:w-72">{buttonText}</button>
            
       
    )
}

export default Button
