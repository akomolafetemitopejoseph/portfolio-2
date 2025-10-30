import React, { useState } from "react";
import imgletterj from "../assets/letterJ.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="">
      <nav className="flex lg: lg:flex justify-between text-center items-center px-3 py-5 lg:px-5 lg:pt-5  text-white">
        <div className="lg:flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="text-green-900 text-[15px]"
              src={imgletterj}
              alt="letterj"
            />
            <h1 className="capitalize bg-gradient-to-r from-emerald-900 via-green-600 to-stone-900 bg-clip-text text-transparent font-extrabold text-2xl">
              uncle joe.
            </h1>
          </div>
        </div>

        <div className="">
          <ul className="hidden lg:flex  justify-between text-center capitalize font-semibold text-xl gap-5 lg:gap-10">
            <Link to="/" smooth={true} duration={1000}>
              <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
                home
              </li>
            </Link>

            <Link to="/service" smooth={true} duration={1000}>
              <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
                services
              </li>
            </Link>

            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              resume
            </li>
            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              work
            </li>
            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              contact
            </li>
            <button className="capitalize bg-green-900 hover:bg-green-800 active:bg-green-900 font-semibold text-xl border-2 border-green-900 px-4 py-1 rounded cursor-pointer ">
              hire me
            </button>
          </ul>
        </div>

        <div className="flex lg:hidden justify-end mx-2.5 my-3 text-white z-10">
          {isMobile ? (
            <RxCross1 onClick={toggleMobile} className="text-3xl" />
          ) : (
            <FaBarsStaggered onClick={toggleMobile} className="text-3xl" />
          )}
        </div>
      </nav>

      {/* NOTE: FOR MOBILE SCREEN */}
      
      {isMobile && (
        <div className="fixed  z-10  right-0 top-20 w-[70%] lg:hidden h-full bg-gradient-to-r from-slate-700 to-gray-500 opacity-90 ">
          <ul className="grid grid-cols-1 lg:hidden text-white mt-5 p-5 leading-15 justify-between text-center capitalize font-semibold text-3xl gap-5 lg:gap-10">
            <Link to="/" smooth={true} duration={1000}>
              <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
                home
              </li>
            </Link>

            <Link to="/service" smooth={true} duration={1000}>
              <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
                services
              </li>
            </Link>

            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              resume
            </li>
            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              work
            </li>
            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              contact
            </li>
            <button className="capitalize bg-green-900 hover:bg-green-800 active:bg-green-900 font-semibold text-3xl border-2 border-green-900 px-4 py-3 rounded cursor-pointer ">
              hire me
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
