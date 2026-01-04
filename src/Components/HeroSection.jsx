import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import imgmain from "../assets/myimage.jpg";
import { CiSaveDown1 } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import temitopeCv from "../assets/temitopeCV2.pdf";
import certificate from "../assets/frontendCert.pdf";

const HeroSection = () => {
  return (
    <main
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
      id="home"
      className=" flex-1 lg:justify-center text-center lg:flex gap-20 px-5 py-5  lg:px-10 lg:pt-10 text-white"
    >
      <div className="flex justify-center mt-20">
        <img
          className=" w-[300px] lg:w-100 h-[300px] lg:h-100 rounded-full border-8 border-green-950 shadow-green-950 shadow-2xl"
          src={imgmain}
          alt="heroimage"
        />
      </div>
      <div>
        <div>
          <div className="flex-1 lg:flex mt-10 lg:mt-20">
            <div>
              <h1 className="text-2xl mt-3 lg:text-2xl font-extrabold mb-3 lg:mb-5 underline underline-offset-5 decoration-10 under ">
                Frontend Developer
              </h1>

              <TypeAnimation
                sequence={[
                  "Hi, i'm Temitope Joseph.",
                  1000,
                  "A Frontend Developer crafting",
                  1000,
                  "responsive web experiences.",
                  1000,
                  "Blending technology with creativity.",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{
                  fontSize: "16px",
                  textAlign: "center",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />

              <div className=" flex justify-center lg:flex lg:justify-evenly mt-5 lg:mb-5">
                <div className="grid grid-cols-1 justify-center items-center gap-2 lg:flex">
                  <a href={temitopeCv} download>
                    <button className="uppercase mb-3 flex justify-center items-center gap-2 p-3  hover:bg-green-800 transform duration-500 active:bg-green-900 font-semibold text-xl lg:text-xl border-2 border-green-900 px-2 lg:px-3 lg:py-2 rounded cursor-pointer w-fit ">
                      download cv
                      <CiSaveDown1 />
                    </button>
                  </a>
                  <a href={certificate} download>
                    <button className="uppercase mb-3 flex justify-center items-center gap-2 p-3 hover:bg-green-800 transform duration-500 active:bg-green-900 font-semibold text-xl lg:text-xl border-2 border-green-900 px-2 lg:px-3 lg:py-2 rounded cursor-pointer   w-fit">
                      certificate
                      <CiSaveDown1 />
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex gap-5 text-center justify-center items-center  mt-2">
                <a href="https://www.linkedin.com/in/akomolafe-temitope-95b88527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedinIn className="text-xl lg:text-2xl cursor-pointer hover:text-green-300 transform duration-500" />
                </a>
                <a href="https://github.com/akomolafetemitopejoseph"></a>
                <FaGithub className="text-xl lg:text-2xl cursor-pointer  hover:text-green-300 transform duration-500" />
                <a href="https://x.com/AkomolafeTemi19">
                  <BsTwitterX className="text-xl lg:text-2xl cursor-pointer hover:text-green-300 transform duration-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
