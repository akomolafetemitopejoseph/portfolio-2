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
    <div className="px-5 py-5  sm:px-10 sm:pt-10">
      <div>
        <h1 className="text-center text-2xl sm:text-4xl text-white font-bold capitalize">
          my projects
        </h1>
      </div>
      <div className="sm:flex gap-5">
        {myProject.map((project, index) => (
          <div className="border-1 hover:w-200 border-green-200 rounded-2xl mt-10" key={index}>
            <div>
              <img
                className="w-full sm:w-[
              600px] h-[150px] sm:h-[250px] rounded-tr-2xl rounded-tl-2xl"
                src={project.image}
                alt=""
              />
            </div>
            {/* //NOTE: correction need to be made here ON THE E-COMMANCE PAGE*/}
            <div className="m-5">
              <div className="text-white hover:text-green-100 font-bold text-xl sm:text-2xl mt-5 sm:mt-10 capitalize cursor-pointer">
                {project.liveDemo}
              </div>
              <h1 className="text-white hover:text-green-100 mt-5 font-bold text-xl sm:text-xl capitalize cursor-pointer">
                {project.repo}
              </h1>
              <div className="grid grid-cols-2 gap-2 mt-5">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-base text-l capitalize px-2 py-2 text-center leading-5 cursor-pointer hover:text-green-900 rounded-xl"
                >
                  {project.react}
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-base text-l capitalize px-2 py-2 text-center leading-5 cursor-pointer hover:text-green-900 rounded-xl"
                >
                  {project.tailwind}
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-base text-l capitalize px-2 py-2 text-center leading-5 cursor-pointer hover:text-green-900 rounded-xl"
                >
                  {project.reactScroll}
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-base text-l capitalize px-2 py-2 text-center leading-5 cursor-pointer hover:text-green-900 rounded-xl"
                >
                  {project.antd}
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-base text-l capitalize px-2 py-2 text-center leading-5 cursor-pointer hover:text-green-900 rounded-xl"
                >
                  {project.reactCons}
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80 font-medium rounded-base text-l capitalize px-2 py-2 text-center leading-5 cursor-pointer hover:text-green-900 rounded-xl"
                >
                  {project.aos}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Work;
