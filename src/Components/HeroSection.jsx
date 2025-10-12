import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import imgmain from "../assets/myimage.jpg"

const HeroSection = () => {
  return (
    <main>
      <div>
        <div>
          <h1>Frontend Developer</h1>
          <div>
            <h2>Hello I'm</h2>
            <h1>akomolafe temitope joseph</h1>
            <p>
              I specialize in building clean, responsive, and high-performing
              websites. With expertise in React, Tailwind CSS, and JavaScript, I
              create seamless digital experiences that are both visually
              appealing and user-friendly. My focus is on translating ideas into
              functional, accessible, and reliable web solutions.
            </p>
          </div>
        </div>
        <div>
          <button>download cv</button>
          <button>certificate</button>
          <FaLinkedinIn />
          <FaGithub />
          <BsTwitterX />
        </div>
      </div>
      <div>
        <img src={imgmain} alt="heroimage" />
      </div>
    </main>
  );
};

export default HeroSection;
