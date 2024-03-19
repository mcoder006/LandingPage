import React, { useState } from 'react'

const Navbar = () => {

  const [click, getClick] = useState(false);

  return (
    <div className="container flex items-center justify-between w-3/4 p-2 mx-auto my-2 rounded text-md md:text-2xl">
      <div className="flex items-center justify-center object-fill w-12 h-12 font-bold cursor-pointer md:w-14 md:h-14">
        <img
          className="object-fill"
          src="https://images-platform.99static.com//979ew2eYmqF1PQhuf9MFQTjWn84=/0x0:1058x1058/fit-in/500x500/projects-files/49/4991/499142/20cfa402-5689-4eea-be2e-08406663e87d.jpg"
          alt="Logo"
        />
        manage
      </div>
      <div className="hidden space-x-6 lg:flex ">
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

      <div className="relative block focus:outline-none lg:hidden ">
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
          <div className="absolute flex flex-col p-3 mt-3 space-y-4 font-bold text-center transition-all origin-top rounded-lg bg-neutral-500 right-2" id='menu'>
            <a href="#" className="mt-2 hover:text-darkGrayishBlue">
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