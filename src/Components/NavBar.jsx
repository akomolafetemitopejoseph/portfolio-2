import React, { useState } from "react";
import imgletterj from "../assets/letterJ.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="">
      <nav
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex lg:flex justify-between fixed top-0 right-0 left-0 text-center items-center px-3 py-5 lg:px-10 lg:pt-5 z-50  text-white "
      >
        <div className="lg:flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="text-green-900 w-10 h-10"
              src={imgletterj}
              alt="letterj"
            />
            <h1 className="capitalize bg-gradient-to-r from-emerald-900 via-green-600 to-stone-900 bg-clip-text text-transparent font-extrabold text-2xl">
              uncle joe.
            </h1>
          </div>
        </div>

        <div className="">
          <ul className="hidden lg:flex text-green-900  justify-between text-center capitalize font-extrabold text-xl gap-5 lg:gap-10 z-100">
            <Link to="home" smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-green-700 hover:border-b-1 transition-all duration-400">
                home
              </li>
            </Link>

            <Link to="services" smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-green-700 hover:border-b-1 transition-all duration-400">
                services
              </li>
            </Link>

            <Link to="skills" smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-green-700 hover:border-b-1 transition-all duration-400">
                skills
              </li>
            </Link>

            <Link to="work" smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-green-700 hover:border-b-1">
                work
              </li>
            </Link>
            <Link to="testimonial" smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-green-700 hover:border-b-1">
                testimonial
              </li>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <li className="cursor-pointer hover:text-green-700 hover:border-b-1 transition-all duration-400">
                contact
              </li>
            </Link>
            <a href="https://wa.me/2349164127577">
              <button className="capitalize bg-green-900 hover:bg-green-800 active:bg-green-900 font-semibold text-xl text-white hover:text-green-200 border-2 border-green-900 px-4 py-1 rounded cursor-pointer transition-all duration-400">
                hire me
              </button>
            </a>
          </ul>
        </div>

        <div className="flex lg:hidden justify-end mx-2.5 my-3 text-green-400">
          {isMobile ? (
            <RxCross1 onClick={toggleMobile} className="text-3xl" />
          ) : (
            <FaBarsStaggered onClick={toggleMobile} className="text-3xl" />
          )}
        </div>
      </nav>

      {/* NOTE: FOR MOBILE SCREEN */}

      {isMobile && (
        <div className="fixed right-0 top-0 w-[70%]  lg:hidden h-full bg-gradient-to-r from-slate-700 to-gray-500 opacity-90 z-10">
          <ul className="grid grid-cols-1 lg:hidden text-white mt-5 p-5 leading-15 justify-between text-center capitalize font-semibold text-3xl gap-5 lg:gap-10">
            <Link to="home" smooth={true} duration={500}>
              <li className="hover:text-green-800 hover:border-b-1">home</li>
            </Link>

            <Link to="services" smooth={true} duration={500}>
              <li className=" hover:text-green-800 hover:border-b-1">
                services
              </li>
            </Link>

            <Link to="skills" smooth={true} duration={500}>
              <li className="hover:text-green-800 hover:border-b-1">skills</li>
            </Link>
            <Link to="work" smooth={true} duration={500}>
              <li className="hover:text-green-800 hover:border-b-1">work</li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className="hover:text-green-800 hover:border-b-1">contact</li>
            </Link>
            <button className="capitalize bg-green-900 hover:bg-green-800 active:bg-green-900 font-semibold text-3xl border-2 border-green-900 px-4 py-3 rounded">
              hire me
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
