import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="mt-10 lg:mt-15">
        <h1
          className="text-center  text-xl 
          md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-5 text-white"
        >
          Technical Skills
        </h1>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 m-2 lg:m-5 text-white px-5 lg:px-2 py-5 lg:mt-1 ">
        <div className="pb-3 lg:p-5 mt-2 ">
          <h1 className="flex justify-between text-sm lg:text-2xl  space-30 mb-2">
            React <span>70%</span>
          </h1>
          <div className=" h-3 bg-gray-100 rounded-2xl">
            <div className="w-[70%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 mt-2">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            Tailwind <span>78%</span>
          </h1>
          <div className="h-3 bg-gray-100 rounded-2xl">
            <div className="w-[78%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 mt-2">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            JavaScript <span>50%</span>
          </h1>
          <div className="h-3 bg-gray-100 rounded-2xl">
            <div className="w-[50%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 mt-2">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            Modern CSS <span>78%</span>
          </h1>
          <div className=" h-3 bg-gray-100 rounded-2xl">
            <div className="w-[78%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 mt-2">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            UI/UX Design <span>70%</span>
          </h1>
          <div className=" h-3 bg-gray-100 rounded-2xl">
            <div className="w-[70%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 lg:mt-2">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            Responsive Design <span>70%</span>
          </h1>
          <div className=" h-3 bg-gray-100 rounded-2xl">
            <div className="w-[70%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 lg:mt-4">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            Web Animation <span>70%</span>
          </h1>
          <div className=" h-3 bg-gray-100 rounded-2xl">
            <div className="w-[70%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>

        <div className="pb-3 lg:p-5 lg:mt-4">
          <h1 className="flex justify-between text-sm lg:text-2xl mb-2">
            Git <span>75%</span>
          </h1>
          <div className=" h-3 bg-gray-100 rounded-2xl">
            <div className="w-[75%] h-full bg-gradient-to-r from-green-700 to-green-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
