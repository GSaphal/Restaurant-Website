import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import pageData from "../data/content.json";

const BusinessHours = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { store } = pageData;

  const data = [
    { label: "会社名", value: store.name["jp"] },
    { label: "位置", value: store.address["jp"] },
    { label: "業務内容", value: store.businessContent["jp"] },
    { label: "代表", value: store.representative["jp"] },
    { label: "設立", value: store.dateEstablished["jp"] },
    { label: "資本", value: store.capital["jp"] },
    { label: "運営店舗", value: store.operatingStore["jp"] },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto mt-10 px-4">
      {/* Accordion Section */}
      <div className="flex flex-col items-center ">
        <h2 className="text-3xl font-bold text-gray-800 mr-8 mb-6 mt-4 text-center">
          {store.title["jp"]}
        </h2>
        <div className="h-[1px] bg-gray-300 mb-10  w-[100px] mx-auto"></div>
        {data.map((item, index) => (
          <div key={index} className="mb-4 w-full max-w-md">
            <button
              className="w-full text-left shadow-md px-6 py-3 font-medium text-sm bg-gray-200 hover:bg-gray-300 flex justify-between items-center rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <span className="text-gray-700">{item.label}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-sm text-gray-600" />
              ) : (
                <FaChevronDown className="text-sm text-gray-600" />
              )}
            </button>

            {activeIndex === index && (
              <div className="px-6 py-3 text-gray-700 bg-gray-100 mt-2 rounded-md shadow-sm">
                <p>{item.value}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Location Map */}
      <div className="mt-8">
        <iframe
          title="Map Location"
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.7012170761614!2d139.6574777546068!3d35.954278344248024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c73d11b7e537%3A0xd812e88095bad6b8!2zSmFwYW4sIOOAkjMzNy0wMDAzIFNhaXRhbWEsIE1pbnVtYSBXYXJkLCBGdWthc2FrdSwgMy1jaMWNbWXiiJLvvJHvvJLiiJIxNCDjgYTjgbXjgZjjg5Pjg6s!5e0!3m2!1sen!2sca!4v1733957497257!5m2!1sen!2sca"
          }
          className="w-full h-96 my-[20px] rounded-md shadow-md border-2 border-gray-200"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default BusinessHours;
