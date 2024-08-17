import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between border-none bg-transparent h-auto pb-3 text-center mt-3 ml-[5%] md:ml-[5%]  mr-[5%] ">
        <div className="flex items-center bg-transparent rounded-full relative">
          <select className="border-none outline-none font-bold bg-gray-200 rounded-l-full w-[140px] h-[50px] text-center">
            <option value="all-categories">All Categories</option>
          </select>
          <input
            type="text"
            placeholder="Search anything..."
            className="border outline-none flex-grow h-[50px] w-[300px] pr-[45px] rounded-r-full ml-0"
          />
          <button className="absolute right-0 top-0 h-[50px] w-[50px] bg-[#4B3EC4] border-none rounded-full cursor-pointer flex items-center justify-center">
            <i className="fa fa-search text-white"></i>
          </button>
        </div>

        <div className="flex">
          <button className="bg-gray-200 rounded-full w-[45px] h-[45px] mb-1 mt-3"></button>
          <div className="flex flex-col items-start md:mb-0">
            <span className="text-gray-500 text-l rounded-lg pl-3 pr-2 pt-1 pb-1">Hotline 24/7</span>
            <span className="font-bold text-[#4B3EC4] text-xl pl-3">(025) 3886 25 16</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 relative">
          <i className="fa fa-heart text-gray-700 text-3xl"></i>
          <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-purple-600 rounded-full text-center leading-tight">2</span>
        </div>
      </div>
      <hr className="border-t-5 border-gray-300 mt-3 mb-4 ml-[5%] md:ml-[5%] lg:ml-[5%] w-[90%] sm:w-[85%] md:w-[85%] lg:w-[75%]" />
    </div>
  );
}

export default Navbar;
