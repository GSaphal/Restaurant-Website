import React, { useState } from "react";
import pageData from "../data/content.json";

const ShopInformation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { shop } = pageData;

  const data = [
    {
      label: shop.nearestStation.label["jp"],
      value: shop.nearestStation.value["jp"],
    },
    { label: shop.address.label["jp"], value: shop.address.value["jp"] },
    { label: shop.telFax.label["jp"], value: shop.telFax.value["jp"] },
    {
      label: shop.businessHours.label["jp"],
      value: shop.businessHours.value["jp"],
    },
    { label: shop.closed.label["jp"], value: shop.closed.value["jp"] },
    { label: shop.parking.label["jp"], value: shop.parking.value["jp"] },
  ];



  return (
    <div className="w-full max-w-[1280px] mx-auto mt-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <img
            src="/assets/store.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src="/assets/store1.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>  

      <div className="flex flex-col items-center ">
        <h2 className="text-3xl font-bold text-gray-800 mr-8 mb-6 mt-4 text-center">
          {shop.name["jp"]}
        </h2>
        <div className="h-[1px] bg-gray-300 mb-10  w-[100px] mx-auto"></div>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-4">
              {item.label}: {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full my-10 max-w-fit mx-auto">
        <img src="/assets/store2.jpeg" alt="Restaurant" className="w-full h-full object-cover rounded-md shadow-md" />
        </div>

    </div>
  );
};

export default ShopInformation;
