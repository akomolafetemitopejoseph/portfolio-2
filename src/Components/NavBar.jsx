import React from "react";
import imgletterj from "../assets/letterJ.png";

function NavBar() {
  return (
    <div className="bg-gray-900">
      <nav className="flex justify-between text-center items-center p-5 lg:p-15 text-white">
        <div className="flex justify-center items-center">
          <div className="">
            <img className="text-green-900" src={imgletterj} alt="letterj" />
          </div>
          <h1 className="capitalize font-extrabold text-2xl">uncle joe.</h1>
        </div>

        <div className="">
          <ul className="flex  justify-between text-center capitalize font-semibold text-xl gap-5 lg:gap-10">
            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              home
            </li>
            <li className="cursor-pointer hover:text-green-800 hover:border-b-1">
              services
            </li>
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
      </nav>
    </div>
  );
}

export default NavBar;
