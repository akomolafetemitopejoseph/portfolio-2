import React from "react";

const Ratings = () => {
  return (
    <main className="">
      <div className="grid lg:flex lg:justify-between mt-5 pb-5 lg:mr-15 lg:ml-15 text-white ">
        <div className="flex justify-center items-center text-center mr-8 ">
          <h1 className="text-7xl font-bold">1</h1>
          <p className="text-l text-start font-semibold text-gray-300">
            year <br />
            of experience
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
