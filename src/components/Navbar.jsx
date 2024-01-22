import React, { useState } from 'react'

const Navbar = () => {

  const [click, getClick] = useState(false);

  return (
    <div className="container mx-auto p-2 text-md my-2 md:text-2xl rounded flex justify-between items-center w-3/4">
      <div className="h-12 w-12 md:w-14 md:h-14 flex justify-center items-center object-fill font-bold cursor-pointer">
        <img
          className="object-fill"
          src="https://images-platform.99static.com//979ew2eYmqF1PQhuf9MFQTjWn84=/0x0:1058x1058/fit-in/500x500/projects-files/49/4991/499142/20cfa402-5689-4eea-be2e-08406663e87d.jpg"
          alt="Logo"
        />
        manage
      </div>
      <div className="lg:flex space-x-6 hidden ">
        <a href="" className="hover:text-darkGrayishBlue">
          Pricing
        </a>
        <a href="" className="hover:text-darkGrayishBlue">
          Products
        </a>
        <a href="" className="hover:text-darkGrayishBlue">
          About Us
        </a>
        <a href="" className="hover:text-darkGrayishBlue">
          Careers
        </a>
        <a href="" className="hover:text-darkGrayishBlue">
          Community
        </a>
      </div>
      <a className="bg-orange-500 text-white px-2 py-1 rounded-full text-center justify-center items-center text-[16px] hidden lg:block hover:bg-orange-600">
        Get Products
      </a>

      <div className="focus:outline-none block relative lg:hidden ">
        <button id='menuBtn'
          onClick={() => {
            return getClick(!click);
          }}
        >
          <span className="w-5 bg-slate-600 h-1 rounded-full absolute top-[25%]"></span>
          <span className="w-5 bg-slate-600 h-1 rounded-full absolute top-[50%]"></span>
          <span className="w-5 bg-slate-600 h-1 rounded-full absolute top-[75%]"></span>
        </button>

        {click && (
          <div className="absolute flex flex-col space-y-4 bg-transparent rounded-lg mt-3 right-2 font-bold bg-red-300 p-3 text-center transition-all duration-100 z-3" id='menu'>
            <a href="#" className="hover:text-darkGrayishBlue mt-2">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Products
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar