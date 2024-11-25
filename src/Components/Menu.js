import React from 'react';

const Menu = ({ menuCards }) => {
  return (
    <div className="w-[1280px] w-full mx-auto pt-[40px]">
      {/* Menu title */}
      <div className='font-bold text-gray-700 text-[20px] mb-[10px]'>menu</div>
      
      {/* Thin line */}
      <div className="h-[1px] bg-gray-300 mb-7"></div>
      
      {/* Render menu cards in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {menuCards.map((card, index) => ( 
          <div key={index}>
            {/* Display card image */}
            <div className="flex justify-center items-center">
              {card}
            </div>
            {/* Display the name (alt attribute) */}
            <div className="text-center mt-2 mb-[20px]">
              <figcaption className='items-center'>{card.props.alt}</figcaption>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
