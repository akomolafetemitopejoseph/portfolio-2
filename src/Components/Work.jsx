import React from "react";
import ecommanceimg from "../assets/ewedsite.png";
import imgtool from "../assets/imgtools.png";
import portfolioimg from "../assets/porfolio.png";

const Work = () => {
  const myProject = [
    {
      id: 1,
      image: ecommanceimg,
      liveDemo: "live demo",
      repo: "Repo",
      react: "React",
      tailwind: "Tailwind",
      motion: "framer motion",
      redux: "React-Redux",
      reactCons: "React-Icons",
    },

    {
      id: 2,
      image: imgtool,
      liveDemo: "live demo",
      repo: "Repo",
      react: "React-scroll",
      tailwind: "Tailwind",
      motion: "framer motion",
      antd: "antd",
      aos: "AOS",
      reactCons: "React-Icons",
      reactScroll: "React-Scroll",
    },

    {
      id: 3,
      image: portfolioimg,
      liveDemo: "live demo",
      repo: "Repo",
      react: "React-scroll",
      tailwind: "Tailwind",
      motion: "framer motion",
      antd: "antd",
      aos: "AOS",
      reactCons: "React-Icons",
      reactScroll: "React-Scroll",
    },
  ];
  return (
    <div className="px-5 py-5  lg:px-10 lg:pt-10">
      <div>
        <h1 className="text-center text-2xl lg:text-4xl text-white font-bold capitalize">
          my projects
        </h1>
      </div>
      <div className="lg:flex gap-5">
        {myProject.map((project, index) => (
          <div className="border-2 border-green-300 mt-10" key={index}>
            <div>
              <img
                className="w-[400px] lg:w-[
              600px] h-[150px] lg:h-[250px]"
                src={project.image}
                alt=""
              />
            </div>
            {/* //NOTE: correction need to be made here ON THE E-COMMANCE PAGE*/}
            <div>
              <div>{project.liveDemo}</div>
              <h1>{project.repo}</h1>
              <div className="flex">
                <h1>{project.react}</h1>
                <h1>{project.tailwind}</h1>
                <h1>{project.reactScroll}</h1>
                <h1>{project.antd}</h1>
                <h1>{project.reactCons}</h1>
                <h1>{project.aos}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
