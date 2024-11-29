import React from 'react';

const TimelineSection = () => {
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
    <div className="w-full max-w-[1280px] mx-auto my-[40px] ">
      <h2 className="text-[20px] font-medium  mb-2 text-gray-800">Monthly News and Notices</h2>
      <div className="h-[1px] bg-gray-300 mb-7 "></div>

      {/* Notice and News Section */}
      <div className="border-l-4 border-gray-300  space-y-8">
        {notices.map((notice, index) => (
          <div key={index} className="bg-white p-1 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-between items-center mb-2">
            
              <span className="text-sm text-gray-500">{notice.month}</span>
            </div>
            <p className="text-gray-700">{notice.content}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[30px] ">
  <button className="p-2  rounded-[7px] bg-[#cd162c] text-white px-5 ">For More News</button>
</div>
    </div>
  );
};

export default TimelineSection;
