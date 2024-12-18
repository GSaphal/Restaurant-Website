import React from "react";
import { Link } from "react-router-dom";
import pageData from "../data/content.json";
import MenuCard from "./cards/menu";
import Title from "./title";
import HorizontalLine from "./line";

const Menu = () => {
  const { menuItems, menu } = pageData.homepage;
  return (
    <div className="w-full max-w-[1280px] mx-auto  mt-4 px-4 sm:px-6 md:px-8">
      {/* Title Section */}
      <Title title={menu["jp"]} />
      <HorizontalLine />

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {menuItems.map((menu, index) => (
          <Link to={menu.route} key={index}>
            <MenuCard key={index} name={menu.name["jp"]} src={menu.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
