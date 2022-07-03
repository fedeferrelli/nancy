import React, {useState} from "react";
import Button from "../utils/Button";
import {Fade} from 'react-awesome-reveal';
import {scroller} from 'react-scroll';
import FlippedRoom from "./FlippedRoom";

import ContactForm from "../utils/ContactForm";

import email from "../utils/assets/email.svg";
import whatsapp from "../utils/assets/whatsapp.svg";
import telephone from "../utils/assets/phone.svg"
import instagram from "../utils/assets/instagram.svg" 


import metodologiaData from "../utils/metodologiaData";

function Contact() {


  return (
    <div className="w-full sm:min-h-screen shadow-md relative z-10" id='contacto'>
      
      <div className="h-full bg-black px-4 flex flex-col justify-evenly items-center text-white py-14">

<Fade duration="2500" className="h-full">

  <div className="h-full flex flex-col justify-evenly items-center">

        <div className="text-6xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none pb-10">
        Contacto{" "}
        </div>

        <div className="flex flex-col m-auto gap-6">
          <p className="max-w-prose text-left tracking-wide sm:text-xl font-thin text-lg"
            >
             Si queres podés enviarme un mensaje, contactarme por mail, instagram<span className="sm:hidden">, teléfono</span> o whatsApp.
            </p>
          

        </div>

        <section className="flex flex-col  justify-center items-center">
          <div className="flex flex-row justify-evenly items-center w-full max-w-[450px] py-4">
            <a
              href="https://www.instagram.com/paufuster77/"
              target="blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=5492916491577&text=Hola,%20Pau.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A'
              target="blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" className="w-12" />
            </a>

            <a
              href="tel:+5492916491577"
              target="blank"
              rel="noreferrer"
              className="sm:hidden"
            >
              <img src={telephone} alt="telephone" />
            </a>

            <a
              href="mailto:paulafusterpravato@gmail.com"
              target="blank"
              rel="noreferrer"
            >
              <img src={email} alt="email" />
            </a>
          </div>

          <ContactForm />
        </section>
        
      </div>



      </Fade>
      </div>

    </div>
  );
}

export default Contact;