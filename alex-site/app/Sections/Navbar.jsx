import React from "react";

function Navbar() {
  return (
    <div className="relative nav h-20 w-full bg-bgblack text-bgwhite ">
      <div className="nav__container flex justify-between px-4">
        <div className="text-bgwhite font-serif my-4 text-5xl font-bold">ALEX<span className="text-red">L</span>DORY</div>
        <ul className="flex space-x-6 my-6 text-xl items-center">
          <li className="hover:text-red">Testimonials</li>
          <li className="hover:text-red">Coaching</li>
          <li className="hover:text-red">About</li>

          
          <li className="">
            <button className="p-1 px-4 rounded-xl hover:bg-[#8B0000] bg-red">Contact Me</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
