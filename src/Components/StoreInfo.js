import React from 'react';

const StoreInfo = ({ storeInfo }) => {
  return (
    <div className="w-[1290px] pt-[40px]">
      {/* Store title */}
      <div className="font-bold text-gray-700 text-[20px] mb-[10px]">Store Information</div>
      
      {/* Thin line */}
      <div className="h-[1px] bg-gray-300 mb-4"></div>
      
      {/* Render images in a grid */}
      <div className="grid grid-cols-3 gap-4">
        {storeInfo.map((info, i) => (
          <div key={i}>
            {/* Display card image */}
            <div className="flex justify-center items-center">
              {info}
            </div>
            {/* Display the name (alt attribute) */}
            <div className="text-center mt-2 mb-[20px]">
              <figcaption className="items-center">{info.props.alt}</figcaption>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreInfo;
