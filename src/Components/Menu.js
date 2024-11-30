import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Menu = ({ menuCards }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (route) => {
    navigate(route); // Programmatically navigate to the route
    window.scrollTo(0, 0); // Ensure the page scrolls to the top after navigating
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto pt-[40px]">
      {/* Menu title */}
      <div className="font-bold text-gray-700 text-2xl  mb-[10px]">Menu</div>
      
      {/* Thin line */}
      <div className="h-[1px] bg-gray-300 mb-7"></div>
      
      {/* Render menu cards in a grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {menuCards.map((card, index) => (
          <div 
            key={index} 
            className="rounded-[15px] overflow-hidden relative bg-gray-100 hover:shadow-lg cursor-pointer"
            onClick={() => handleClick(card.route)} // Use handleClick to navigate
          >
            {/* Display card image */}
            <img
              src={card.image.props.src}
              alt={card.image.props.alt}
              className="h-full w-full object-fill"
            />
            {/* Display the name (alt attribute) */}
            <div className="image-overlay w-full h-full absolute top-0 flex items-end py-2 pl-3 text -[25px] font-bold text-white ">
              {card.image.props.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
