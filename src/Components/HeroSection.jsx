import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import imgmain from "../assets/myimage.jpg";
import { CiSaveDown1 } from "react-icons/ci";


const HeroSection = () => {
  return (
    <main className=" flex-1  text-center lg:flex gap-2 px-5 py-5  lg:px-10 lg:pt-10 text-white">
      <div className="flex justify-center mt-3 lg:mt-5">
        <img
          className=" w-[300px] lg:w-300 h-[300px] lg:h-100 rounded-full"
          src={imgmain}
          alt="heroimage"
        />
      </div>
      <div>
        <div>
          <div className="flex-1 lg:flex">
            <div>
              <h1 className="text-2xl mt-3 lg:text-2xl font-extrabold mb-3 lg:mb-5">
                Frontend Developer
              </h1>

              <h2 className="text-sm font-bold  mb-3 lg:mb-3 capitalize">
                Hello I'm
              </h2>
              <h1 className="text-2xl lg:text-2xl bg-gradient-to-r from-emerald-900 via-green-600 to-stone-900 bg-clip-text text-transparent capitalize font-extrabold mb-5 lg:mb-5">
                akomolafe <br /> temitope joseph
              </h1>
               
                <p className="text-gray-400 text-[17px] lg:text-l leading-5 lg:leading-7">
                  I specialize in building clean, responsive, and
                  high-performing websites. With expertise in React, Tailwind
                  CSS, and JavaScript, I create seamless digital experiences
                  that are both visually appealing and user-friendly. My focus
                  is on translating ideas into functional, accessible, and
                  reliable web solutions.
                </p>
              
              <div className=" flex justify-center lg:flex lg:justify-evenly mt-5 lg:mb-5">
                <div className="grid grid-cols-1 justify-center items-center gap-2 lg:flex">
                  <button className="uppercase mb-3 flex justify-center items-center gap-2 p-3  hover:bg-green-800 transform duration-500 active:bg-green-900 font-semibold text-xl lg:text-xl border-2 border-green-900 px-2 lg:px-3 lg:py-2 rounded cursor-pointer w-fit ">
                    download cv
                    <CiSaveDown1 />
                  </button>

                  <button className="uppercase mb-3 flex justify-center items-center gap-2 p-3 hover:bg-green-800 transform duration-500 active:bg-green-900 font-semibold text-xl lg:text-xl border-2 border-green-900 px-2 lg:px-3 lg:py-2 rounded cursor-pointer   w-fit">
                    certificate
                    <CiSaveDown1 />
                  </button>
                </div>
              </div>
              <div className="flex gap-5 text-center justify-center items-center  mt-2">
                <FaLinkedinIn className="text-xl lg:text-2xl cursor-pointer hover:text-green-300 transform duration-500" />
                <FaGithub className="text-xl lg:text-2xl cursor-pointer  hover:text-green-300 transform duration-500" />
                <BsTwitterX className="text-xl lg:text-2xl cursor-pointer hover:text-green-300 transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
