import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto text-center text-xl">
        <div
          className="bg-brightRed hover:bg-brightRedLight text-white p-3 shadow-2xl rounded shadow-red-300 flex md:justify-center md:flex-row text-center flex-col items-center
    "
        >
          <h1 className="text-center">Simplyfy how your Team works Today ?</h1>
          <a className=" text-orange-700 py-1 rounded-full text-center justify-center items-center text-[16px] lg:block w-fit hover:bg-orange-600 mx-auto text-xl px-3 mt-4 md:right-2 bg-white ">
            Get Started
          </a>
        </div>

        {/* footer */}
      </div>

      <div className="bg-black">
        <div className="bottom-0 w-screen min-h-14 grid md:grid-cols-4 grid-cols-2 p-3 mt-14 gap-6 text-md space-y-4 text-slate-500">
          <div>
            <h1 className="text-xl font-bold text-white">Company</h1>
            <p className="space-y-2">
              <p className="cursor-pointer hover:text-slate-400">About Us</p>
              <p className="cursor-pointer hover:text-slate-400">
                Our Services
              </p>
              <p className="cursor-pointer hover:text-slate-400">
                Privacy Policy
              </p>
              <p className="cursor-pointer hover:text-slate-400">
                Facilitate Programs
              </p>
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">Get Help</h1>
            <p className="space-y-2">
              <p className="cursor-pointer hover:text-slate-400">FAQ</p>
              <p className="cursor-pointer hover:text-slate-400">Shipping</p>
              <p className="cursor-pointer hover:text-slate-400">
                Order Status
              </p>
              <p className="cursor-pointer hover:text-slate-400">
                Return Policy
              </p>
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">Online Shop</h1>
            <p className="space-y-2">
              <p className="cursor-pointer hover:text-slate-400">Watch</p>
              <p className="cursor-pointer hover:text-slate-400">Bag</p>
              <p className="cursor-pointer hover:text-slate-400">Shoes</p>
              <p className="cursor-pointer hover:text-slate-400">Dress</p>
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">Follow Us On</h1>
            <div className="flex flex-wrap">
              <FaFacebookF className="mt-2 h-10 w-10 rounded-full bg-blue-700 text-white p-1 hover:scale-100 scale-75 transition-all duration-300 hover:bg-blue-600" />

              <FaTwitter className="mt-2 h-10 w-10 rounded-full bg-blue-700 text-white p-1 hover:scale-100 scale-75 transition-all duration-300 hover:bg-blue-600" />

              <FaInstagram className="mt-2 h-10 w-10 rounded-full bg-red-700 text-white p-1 hover:scale-100 scale-75 transition-all duration-300 hover:bg-red-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer