import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto p-2 text-xl mt-4 rounded md:grid md:grid-cols-2 min-h-96 text-center max-h-auto">
      {/* Left Item */}

      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 md:mt-7">
        <h1 className="capitalize font-bold md:text-4xl md:text-left text-center">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in a view.
        </p>

        <div className="flex justify-center md:justify-start">
          <a className="bg-orange-500 text-white px-3 py-2 rounded-full text-center justify-center items-center text-[16px] hover:bg-orange-600 ">
            Get Products
          </a>
        </div>
      </div>

      {/* Right Item  Image */}
      <div className="h-full w-full">
        <img
          className="h-full w-full"
          src="https://freewebillustrations.com/static/images/intro.svg"
          alt="Intro Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
