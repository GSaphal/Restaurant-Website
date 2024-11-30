import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TimelineSection = () => {
  const navigate = useNavigate();

  
  const notices = [
    {
      month: "October 2024",
      content: "Join us for our special Halloween-themed dishes. Available only this weekend!",
    },
    {
      month: "September 2024",
      content: "Our Autumn menu is now live with fresh seasonal ingredients. Come and try it!",
    },
    {
      month: "August 2024",
      content: "Our restaurant will be closed for vacation from August 12th to August 15th.",
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto my-20 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📢 Monthly News & Notices
      </h2>
      <div className="h-[1px] bg-gray-300  w-[180px] mx-auto"></div>

      {/* Notice Section */}
      <div className="space-y-6 p-10">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-orange-100 to-yellow-100 shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-3 mb-2">
              <FaRegCalendarAlt className="text-orange-500 text-xl" />
              <span className="text-lg font-semibold text-gray-700">{notice.month}</span>
            </div>
            <p className="text-gray-600 text-sm">{notice.content}</p>
          </div>
        ))}
      </div>

      {/* More News Button */}
      <div className="flex justify-center ">
        <button  onClick={() => navigate("/morenews")} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md shadow-md transition-all">
          See More
        </button>
      </div>
    </div>
  );
};

export default TimelineSection;
