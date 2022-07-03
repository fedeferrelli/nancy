import React from "react";
import { Fade } from "react-awesome-reveal";


import email from "../utils/assets/email.svg";
import whatsapp from "../utils/assets/whatsapp.svg";
import telephone from "../utils/assets/phone.svg"
import instagram from "../utils/assets/instagram.svg" 

import ContactForm from "../utils/ContactForm";

function Contact() {


  return (
    <Fade duration="1000" triggerOnce className="w-full pb-4 bg-black">
      <main className="flex flex-col min-h-screen  w-full" name='contacto'>
        <section className="bg-alternative p-4 flex  flex-col w-full">
          <h1 className="m-auto text-3xl tracking-tight font-extrabold text-primary/90 sm:text-5xl   mt-10">
            Contacto
          </h1>

          <p className="m-auto mt-3 text-base tracking-wider text-primary/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-center font-light">
            Si queres podés enviarme un mensaje, contactarme por mail, instagram<span className="sm:hidden">, teléfono</span> o whatsApp.
          </p>
        </section>

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

        
      </main>
    </Fade>
  );
}

export default Contact;
