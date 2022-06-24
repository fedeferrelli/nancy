import React, {useState} from 'react';
import {GiHamburgerMenu, GiCancel} from 'react-icons/gi'

function NavBar() {

    const navbarLinks =[{item: 'Quién soy', link:'fede'},
    {item: 'Metodología', link:'meto'},
    {item: 'Servicios', link:'servicios'},
    {item: 'Contacto', link:'contacto'}]

    const [showNav, setshowNav] = useState(false)
   

    return (

        <main>
        <div className="text-white fixed z-20 w-full">
        <section className="sm:flex flex-row justify-end gap-10 pt-2  pr-8 hidden">    
{navbarLinks.map(navLink =>(
    <div key={navLink.item} className="uppercase hover:border-b-4 ease-in-out duration-300 cursor-pointer">{navLink.item}</div>
))}</section>
            <section className="sm:hidden flex pr-3 pt-3 justify-end ">
                
             {!showNav ?
             <GiHamburgerMenu className="text-3xl" onClick={()=>setshowNav(!showNav)}/> :

             <GiCancel className="text-3xl" onClick={()=>setshowNav(!showNav)}/>
            }   
                
                
          
            </section>

            <section>
                  
            {showNav && 

<div className="w-11/12 border m-auto flex flex-col gap-10 p-6 bg-white text-gray-600 text-lg font-bold mt-2">

{navbarLinks.map(navLink =>(
    <div key={navLink.item} className="uppercase" onClick={()=>setshowNav(!showNav)} >{navLink.item}</div>))}


</div> }

            </section>
        </div>
     
        </main>
    )
}

export default NavBar
