import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import imgmain from "../assets/myimage.jpg";

const HeroSection = () => {
  return (
    <main className="flex-1 text-center lg:flex gap-5 bg-gray-900 p-5 lg:p-15 text-white">
      <div className="flex justify-center mt-15">
        <img
          className=" w-[400px] lg:w-500 h-[400px] lg:h-120 rounded-full"
          src={imgmain}
          alt="heroimage"
        />
      </div>
      <div>
        <div>
          <div className="flex-1 lg:flex">
            <div>
              <h1 className="text-xl mt-10 lg:text-3xl font-semibold mb-10">
                Frontend Developer
              </h1>

              <h2 className="text-sm font-bold  mb-5 capitalize">Hello I'm</h2>
              <h1 className="text-3xl lg:text-7xl text-green-900 capitalize font-bold mb-10">
                akomolafe <br /> temitope joseph
              </h1>

              <p className="text-gray-400 text-[16px] lg:text-xl">
                I specialize in building clean, responsive, and high-performing
                websites. With expertise in React, Tailwind CSS, and JavaScript,
                I create seamless digital experiences that are both visually
                appealing and user-friendly. My focus is on translating ideas
                into functional, accessible, and reliable web solutions.
              </p>
              <div className=" flex items-center justify-center lg:flex lg:justify-evenly mt-10">
                <div className="grid grid-cols-1 justify-center items-center gap-5 lg:flex">
                  <button className="uppercase mb-3 hover:bg-green-800 transform duration-500 active:bg-green-900 font-semibold text-xl border-2 border-green-900 px-4 py-1 rounded cursor-pointer pt-3 pb-3 w-fit ">
                    download cv
                  </button>
                  <button className="uppercase mb-3 hover:bg-green-800 transform duration-500 active:bg-green-900 font-semibold text-xl border-2 border-green-900 px-4 py-1 rounded cursor-pointer pt-3 pb-3  w-fit">
                    certificate
                  </button>
                </div>
              </div>
              <div className="flex gap-10 text-center justify-center items-center  mt-10">
                <FaLinkedinIn className="text-2xl cursor-pointer hover:text-green-300 transform duration-500" />
                <FaGithub className="text-2xl cursor-pointer  hover:text-green-300 transform duration-500" />
                <BsTwitterX className="text-2xl cursor-pointer hover:text-green-300 transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
