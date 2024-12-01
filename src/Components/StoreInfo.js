import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StoreInfo = ({ storeInfo }) => {
  const navigate = useNavigate(); 

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array to run only on mount (initial page load)

  const handleClick = (route) => {
    navigate(route); 
    window.scrollTo(0, 0); 
  };

  return (
    <div className="w-full mx-auto max-w-[1280px] pt-[40px] ">
      <div className="font-extralight text-gray-700 text-2xl  mb-[10px]">Store Information</div>

      {/* Line */}
      <div className="h-[1px] bg-gray-300 mb-7"></div> 

      {/* images in a grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {storeInfo.map((info, index) => (
          <div
            key={index}
            className="relative rounded-[15px] overflow-hidden bg-gray-100 hover:shadow-lg cursor-pointer"
            onClick={() => handleClick(info.route)} // Use handleClick to navigate
          >
            {/* Display image */}
            <img
              src={info.image.props.src}
              alt={info.image.props.alt}
              className="h-full w-full object-contain"
            />
            
            <div className="image-overlay w-full h-full absolute top-0 flex items-end py-2 pl-3 text -[25px] font-bold text-white">
              {info.image.props.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreInfo;
