import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom"; 

const Navbar = ({ menuItems }) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setToggle(!toggle); // Toggle between true (open) and false (close)
  };

  const handleLogoClick = () => {
    navigate("/"); 
  };
  const handleMenuItemClick = (route) => {
    navigate(route); // Navigate to the specified route
    setToggle(false); // Optionally close the menu after navigation
  };


  return (
    <>
      {/* Side Menu */}
      <div
        className="w-[320px] h-full bg-[#cd162c] fixed top-0 transition-all duration-300 z-50"
        style={{
          left: toggle ? "0" : "-100%",
        }}
      >
        <div className="flex flex-col mt-[15px]">
          {/*  menu items */}
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-white mx-5 mt-2 mb-[15px] text-[15px] font-normal cursor-pointer"
              onClick={() => handleMenuItemClick(item.route)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="flex items-center bg-white rounded-md border border-gray-300">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-white border-l border-gray-300 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className=" py-[20px] w-full bg-white z-50 fixed-navbar">
        <div className="px-7 sm:px-2 md:px-20 lg:px-28 w-full flex  mx-auto items-center justify-between ">
          <div className="w-[160px] sm:w-[320px] cursor-pointer " onClick={handleLogoClick}> {/* Add onClick to logo */}
            <img
              src="images/logo.jpg"
              alt="logo"
              className="w-full"
            />
          </div>
          {/* Right side of Header Section */}
          <div
            className=" mt-2 flex flex-col items-center cursor-pointer "
            onClick={toggleMenu} 
          >
            {/* icon change based on the toggle state */}
            {toggle ? <RxCross1 className="text-3xl" /> : <IoMenuOutline className="text-4xl" />}
            <span className="text-[11px] -mt-2">
              Menu
            </span>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Navbar;