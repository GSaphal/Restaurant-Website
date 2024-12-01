import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Navbar = ({ menuItems }) => {
  const [toggle, setToggle] = useState(false);
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const toggleMenu = () => {
    setToggle(!toggle); // Toggle between true (open) and false (close)
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleMenuItemClick = (route) => {
    navigate(route); // Navigate to the specified route
    setToggle(false); // Optionally close the menu after navigation
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: semi-transparent black
          zIndex: 40, // Ensure it appears below the side menu
        }}
        onClick={toggleMenu} // Close the menu when clicking outside
      ></div>

      {/* Side Menu */}
      <div
        className={`h-full bg-[#f57224] fixed top-0 transition-all duration-300 z-50 
          ${toggle ? "left-0" : "-left-full"} 
          w-[75%] sm:w-[320px]`} // Responsive width for mobile and larger screens
      >
        <div className="flex flex-col mt-[30px] ">
          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-white mx-5 mt-2  mb-[15px] text-[15px] font-normal cursor-pointer"
              onClick={() => handleMenuItemClick(item.route)}
            >
              {item.text}
            </div>
          ))}
        </div>
        {/* <div className="p-4">
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
        </div> */}
      </div>

      {/* Conditionally Render Header */}
      {!toggle && (
        <header className="py-[20px] w-full bg-white z-50 fixed-navbar">
          <div className="px-7 sm:px-2 md:px-20 lg:px-28 w-full flex mx-auto items-center justify-between">
            {/* Logo as Text */}
            <div
              className="text-[18px] pt-4 sm:text-[16px] md:text-[20px] font-bold text-green-800 cursor-pointer"
              onClick={handleLogoClick}
            >
              Heaven Fukasaku
            </div>
            {/* Right Side of Header Section */}
            <div
              className="mt-3 flex flex-col items-center cursor-pointer"
              onClick={toggleMenu}
            >
              {toggle ? (
                <RxCross1 className="text-3xl" />
              ) : (
                <IoMenuOutline className="text-4xl" />
              )}
              <span className="text-[10px] -mt-2">Menu</span>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
