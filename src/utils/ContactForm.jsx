import React, { useState, useRef } from "react"
import {CgSpinnerTwoAlt} from 'react-icons/cg'; 

import emailjs from "@emailjs/browser";

function ContactForm() {
  const [showOK, setShowOK] = useState(false);
 const [showSpinner, setShowSpinner] = useState(true) 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    setShowOK(true);

    emailjs
      .sendForm(
        "service_ptrg1qg",
        "template_zbopz7c",
        form.current,
        "user_gbl4xl6Z4YWWGOY7je4Gb"
      )
      .then(
        (result) => {
          console.log(result.text);
         
        },
        (error) => {
          console.log(error.text);
        }
      );

      setShowSpinner(false)
  };

  const AcceptAndScrollToTop = () => {
    setShowOK(false);
   
  };

  return (
    <div className="m-auto sm:max-w-[450px] w-full">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="sm:text-sm m-auto flex flex-col justify-center items-center py-4"
      >
        {showOK && (
          <div className="absolute z-50 text-center flex flex-col justify-center items-center shadow-md shadow-gray-200 bg-gray-200 sm:max-w-[450px] w-11/12 h-96 ">

            {showSpinner ? 

            <div>
              <CgSpinnerTwoAlt className="text-gray-700 text-5xl animate-spin"/>
            </div>
            :
            <div className="w-full h-auto flex flex-col justify-center sm:w-3/4 sm:h-auto border  p-10 text-black ">
              <h1 className="text-xl mb-4">
                <span className="text-3xl block ">
                  Gracias
                </span>{" "}
                por comunicarte conmigo
              </h1>
              <h2>
               me pondré en contacto a la brevedad
              </h2>
              <button
                className="w-full py-3 uppercase mt-8 text-lg font-bold ease-in-out duration-300"
                onClick={AcceptAndScrollToTop}
              >
                OK
              </button>
            </div>
                }
          </div>
        )}
        <h1 className="max-w-prose text-left tracking-wide sm:text-2xl font-thin text-2xl">
         Enviame un mensaje
        </h1>

        <p className="mt-8 w-full border border-t-transparent border-violet-400 ">
          <label
            htmlFor="nombre"
            className="w-full px-4 ease-in-out duration-300"
          >
           Nombre
          </label>

          <input
            id="nombre"
            name="nombre"
            type="mail"
            className="w-full h-8 sm:h-6 px-4 bg-transparent  outline-none"
          ></input>
        </p>

        <p className="mt-8 w-full border border-slate-400 border-t-transparent">
          <label
            htmlFor="mail"
            className="w-full px-4 ease-in-out duration-300"
          >
            Dirección de correo *
          </label>

          <input
            id="mail"
            name="email"
            type="email"
            required
            className="w-full h-8 sm:h-6 px-4 bg-transparent  outline-none"
          ></input>
        </p>

        <p className="mt-8 w-full border border-slate-400 border-t-transparent">
          <label
            htmlFor="asunto"
            className="w-full px-4 ease-in-out duration-300"
          >
           Asunto
          </label>

          <input
            id="asunto"
            name="asunto"
            type="text"
            className="w-full h-8 sm:h-6 px-4 bg-transparent  outline-none"
          ></input>
        </p>

        <p className="mt-8 w-full border border-slate-400 border-t-transparent">
          <label
            htmlFor="mensaje"
            className="w-full px-4 ease-in-out duration-300"
          >
           Mensaje *
          </label>

          <textarea
            id="mensaje"
            name="mensaje"
            rows="3"
            required
            className="w-full px-4 pt-1 bg-transparent  outline-none"
          ></textarea>
        </p>

  

<input
          type="submit"
          value="enviar mensaje"
          className="w-full uppercase mt-10 text-secondary text-xl font-extralight sm:tracking-wide p-4
          sm:hover:bg-gray-200 sm:hover:text-gray-700  ease-in-out duration-700 cursor-pointer border"
        ></input>

      </form>
    </div>
  );
}

export default ContactForm;
