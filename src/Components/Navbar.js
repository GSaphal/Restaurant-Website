import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import pageData from "../Data/content.json";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { sidebar } = pageData;

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
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 40,
        }}
        onClick={toggleMenu}
      ></div>
      <div
        className={`h-full bg-primary fixed top-0 transition-all duration-300 z-50 
          ${toggle ? "left-0" : "-left-full"} 
          w-[75%] sm:w-[320px]`} // Responsive width for mobile and larger screens
      >
        <div className="flex justify-end p-5">
          <RxCross1
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col">
          {sidebar.map((item, index) => (
            <div
              key={index}
              className="text-white mx-5 mt-2  mb-[15px] text-[15px] font-normal cursor-pointer"
              onClick={() => handleMenuItemClick(item.route)}
            >
              {item["jp"]}
            </div>
          ))}
        </div>
      </div>
      <header className="py-[20px] w-full bg-white z-50">
        <div className="w-full flex mx-auto items-center justify-between">
          <div
            className="text-md sm:text-md md:text-xl font-bold text-primary cursor-pointer"
            onClick={handleLogoClick}
          >
            ヘブン深作店
            {/* <img src="/logo.png" alt="logo" className="w-full h-16" /> */}
          </div>

          <div
            className="mt-3 flex flex-col items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <IoMenuOutline className="text-4xl" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
