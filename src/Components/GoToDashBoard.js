import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa'; // Importing the upward arrow icon

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Show the button after scrolling 100px down
    } else {
      setIsVisible(false); // Hide the button when above 100px
    }
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 bg-[#f57224] text-white p-4 rounded-none shadow-lg  hover:bg-orange-600 focus:outline-none" 
          aria-label="Back to top"
        >
          {/* Using React Icon here */}
          <FaChevronUp className='text-lg '/>
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
