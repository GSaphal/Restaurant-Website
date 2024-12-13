import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import pageData from "../data/content.json";
import Title from "./title";
import HorizontalLine from "./line";

const TimelineSection = ({ isHidden = false }) => {
  const { news, newsInformation, newsSeeMore } = pageData.homepage;
  return (
    <div className="w-full max-w-[1280px] mx-auto my-20 ">
      <Title title={news["jp"]} />
      <HorizontalLine />
      <div className="space-y-6 pb-10">
        {newsInformation.map((notice, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-orange-100 to-yellow-100 shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-2 py-2">
              <FaRegCalendarAlt className="text-orange-500" />
              <span className="text-sm font-light text-gray-700">
                {notice.date["jp"]}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 pb-2">
              {notice.title["jp"]}
            </h2>
            <p className="text-gray-600 text-sm">{notice.content["jp"]}</p>
          </div>
        ))}
      </div>

      {!isHidden && (
        <div className="flex justify-center ">
          <Link to="/news">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md shadow-md transition-all">
              {newsSeeMore["jp"]}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TimelineSection;
