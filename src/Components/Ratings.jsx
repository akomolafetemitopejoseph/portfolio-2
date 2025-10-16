import React from "react";

const Ratings = () => {
  return (
    <main className="bg-gray-900">
      <div className="grid grid-cols-2 w-1/2 lg:w-full mx-auto gap-10  lg:flex lg:justify-between p-5 lg:p-15 text-white ">
        <div className="flex justify-center items-center text-center mr-8 ">
          <h1 className="text-7xl font-bold">1</h1>
          <p className="text-l text-start font-semibold text-gray-300">
            year of experience
          </p>
        </div>

        <div className="flex justify-center items-center text-center ml-8">
          <h1 className="text-7xl font-bold">1 </h1>
          <p className="text-l text-start font-semibold text-gray-300">
            Projects <br /> Completed
          </p>
        </div>

        <div className="flex justify-center items-center text-center mr-8">
          <h1 className="text-7xl font-bold">1 </h1>
          <p className="text-l text-start font-semibold text-gray-300">
            Technologies <br /> mastered
          </p>
        </div>

        <div className="flex justify-center items-center text-center ml-8">
          <h1 className="text-7xl font-bold">1 </h1>
          <p className="text-l text-start font-semibold text-gray-300">
            code <br /> commits
          </p>
        </div>
      </div>
    </main>
  );
};

export default Ratings;
