import React, {useState} from 'react';
import {GiHamburgerMenu, GiCancel} from 'react-icons/gi';

import {Link, link} from 'react-scroll';
import {Fade} from 'react-awesome-reveal'

function NavBar() {

    const navbarLinks =[{item: 'Quién soy', link:'about', duration: 700},
    {item: 'Metodología', link:'meto', duration: 1000},
    {item: 'Servicios', link:'servicios', duration: 1300},
    {item: 'Contacto', link:'contacto', duration: 1600}]

    const [showNav, setshowNav] = useState(false)
   

    return (

        <main>
       

        <div className="text-white fixed z-20 w-full">
        <Fade duration='3000'>
        <section className="sm:flex flex-row justify-end gap-10 pt-2  pr-8 hidden">    
{navbarLinks.map(navLink =>(
    <div key={navLink.item} className="uppercase hover:border-b-4 ease-in-out duration-300 cursor-pointer">
        <Link activeClass="active" to={navLink.link} spy={true} smooth={true} duration={navLink.duration}> {navLink.item} </Link>
        
        </div>
))}</section>
            <section className="sm:hidden flex pr-3 pt-3 justify-end">
                
             {!showNav ?

             <div className="text-3xl p-2 bg-black/10 rounded-full">
             <GiHamburgerMenu className="text-3xl" onClick={()=>setshowNav(!showNav)}/></div> :

<div className="text-3xl p-2 bg-black/10 rounded-full">
             <GiCancel className="text-3xl" onClick={()=>setshowNav(!showNav)}/>
             </div>
            }   
                
                
          
            </section>

            <section>
                  
            {showNav &&
            
            <section className="h-screen" onClick={()=>setshowNav(!showNav)}>

<div className="w-11/12 border m-auto flex flex-col gap-10 p-6 bg-white text-gray-600 text-lg font-bold mt-2">

{navbarLinks.map(navLink =>(
    <div key={navLink.item} className="uppercase" onClick={()=>setshowNav(!showNav)} ><Link activeClass="active" to={navLink.link} spy={true} smooth={true} duration={navLink.duration} onClick={()=>setshowNav(!showNav)}> {navLink.item} </Link></div>))}


</div>
</section> }

            </section>

            </Fade>
        </div>
       
        </main>
    )
}

export default NavBar
