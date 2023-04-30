import React from "react";
import logo from "../../src/assets/logo.png";
import moment from "moment/moment";

const NavTop = () => {
  return (
    <div>
      <div className="container mx-auto text-center mb-10">
        <img className="text-center mx-auto w-96 mt-10" src={logo} alt="" />
        <p className="mt-1 text-lg text-gray-400">
          Journalism Without Fear or Favour
        </p>
        <p className="mt-1 text-lg text-gray-400">
          {moment().format("dddd, MMMM Do YYYY")}
        </p>
      </div>
      <div className="container mx-auto bg-gray-100 py-3 px-4 flex items-center gap-4">
        <p className="bg-red-500 py-3 px-8 text-white ">Breaking</p>
        <div className="overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-xl mx-4">
              How violence and betrayals shaped Atiq Ahmed's life
            </span>
            <span className="text-xl mx-4">
              Northeast Diary: Monumental neglect of first Ahom king’s tumulus
            </span>
            <span className="text-xl mx-4">
              Flyer blames AI staff after kitten goes missing at Delhi airport
            </span>
            <span className="text-xl mx-4">
              Amicus curiae in Harpur case quits, 2nd in 80 days
            </span>
            <span className="text-xl mx-4">
              Barsu refinery project will not be imposed on locals: CM assures
              Pawar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
