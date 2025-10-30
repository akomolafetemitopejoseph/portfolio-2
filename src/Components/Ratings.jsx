import React from "react";

const Ratings = () => {
  return (
    <main className="">
      <div className="w-full lg:h-full grid  grid-cols-2 justify-center items-center gap-5 lg:flex lg:justify-between lg:mt-3 px-5 py-5  lg:px-15 lg:pb-5 text-white ">
        <div className="flex justify-center items-center text-center mr-4 ">
          <h1 className="text-5xl sm:text-2xl lg:text-7xl font-bold">1</h1>
          <p className="text-[10px] lg:text-xl text-start font-semibold text-gray-300">
            year of <br />
            experience
          </p>
        </div>

        <div className="flex justify-center items-center text-center ml-4">
          <h1 className="text-5xl sm:text-2xl lg:text-7xl font-bold">1 </h1>
          <p className="text-[10px] lg:text-xl text-start font-semibold text-gray-300">
            Projects <br /> Completed
          </p>
        </div>

        <div className="flex justify-center items-center text-center mr-4">
          <h1 className="text-5xl sm:text-2xl lg:text-7xl font-bold">1 </h1>
          <p className="text-[10px] lg:text-xl text-start font-semibold text-gray-300">
            Technologies <br /> mastered
          </p>
        </div>

        <div className="flex justify-center items-center text-center ml-4">
          <h1 className="text-5xl sm:text-2xl lg:text-7xl font-bold">1 </h1>
          <p className="text-[10px] lg:text-xl text-start font-semibold text-gray-300">
            code <br /> commits
          </p>
        </div>
      </div>
    </main>
  );
};

export default Ratings;
