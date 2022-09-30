import React, { useState, useEffect } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import navBarData from "../utils/navBarData";

import { Link, link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

function NavBar({ spanish, setSpanish }) {
 
    const [data, setData] = useState({})

  useEffect(() => {
   
    const changeLanguage = () => {

        console.log(data)
      if (spanish) {
        setData(navBarData.spanish);
      } else {
        setData(navBarData.english);
      }
    };
    changeLanguage();
  }, [spanish]);

  const navbarLinks = [
    { item: data.about, link: "about", duration: 700 },
    { item: data.classes, link: "servicios", duration: 1300 },
    { item: data.method, link: "meto", duration: 1000 },
    { item: data.contact, link: "contacto", duration: 1600 },
  ];

  const [showNav, setshowNav] = useState(false);

  const changeLanguage = () => {
    setSpanish(!spanish);
  };

  return (
    <main>
      <div className="text-white fixed z-20 w-full ">
        <Fade duration="3000">
          <section className="sm:flex flex-row justify-end gap-10 pt-2  pr-8 hidden">
            {navbarLinks.map((navLink) => (
              <div
                key={navLink.link}
                className="uppercase hover:border-b-4 ease-in-out duration-300 cursor-pointer"
              >
                <Link
                  activeClass="active"
                  to={navLink.link}
                  spy={true}
                  smooth={true}
                  duration={navLink.duration}
                >
                  {" "}
                  {navLink.item}{" "}
                </Link>
              </div>
            ))}
          </section>
          <section className="sm:hidden flex pr-3 pt-3 justify-end">
            {!showNav ? (
              <section className="flex flex-row justify-end w-full p-3 py-0 ">
                <div onClick={() => changeLanguage()} className="hidden">
                  <div className="px-2 p-1 rounded-full m-auto bg-black/10">
                    {spanish ? "ENG" : "ESP"}
                  </div>
                </div>

                <div className="text-3xl p-2 bg-black/10 rounded-full">
                  <GiHamburgerMenu
                    className="text-3xl"
                    onClick={() => setshowNav(!showNav)}
                  />
                </div>
              </section>
            ) : (
              <div className="text-3xl p-2 bg-black/10 rounded-full mx-3">
                <GiCancel
                  className="text-3xl"
                  onClick={() => setshowNav(!showNav)}
                />
              </div>
            )}
          </section>

          <section>
            {showNav && (
              <section
                className="h-screen"
                onClick={() => setshowNav(!showNav)}
              >
                <div className="w-11/12 border m-auto flex flex-col gap-10 p-6 bg-white text-gray-600 text-lg font-bold mt-2">
                  {navbarLinks.map((navLink) => (
                    <div
                      key={navLink.item}
                      className="uppercase"
                      onClick={() => setshowNav(!showNav)}
                    >
                      <Link
                        activeClass="active"
                        to={navLink.link}
                        spy={true}
                        smooth={true}
                        duration={navLink.duration}
                        onClick={() => setshowNav(!showNav)}
                        className="h-full p-2"
                      >
                        {" "}
                        {navLink.item}{" "}
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </section>
        </Fade>
      </div>
    </main>
  );
}

export default NavBar;
