import React from 'react';

const Menu = ({ menuCards }) => {
  return (
    <div className="w-[1290px] pt-[40px]">
      {/* Menu title */}
      <div className='font-bold text-gray-700 text-[20px] mb-[10px]'>menu</div>
      
      {/* Thin line */}
      <div className="h-[1px] bg-gray-300 mb-4"></div>
      
      {/* Render menu cards in a grid */}
      <div className="grid grid-cols-3 gap-4">
        {menuCards.map((card, index) => (
          <div key={index}>
            {/* Display card image */}
            <div className="flex justify-center items-center">
              {card}
            </div>
            
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
