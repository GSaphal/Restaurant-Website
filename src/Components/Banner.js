import React, { useState, useEffect } from 'react';

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // Cycle through slides
    }, 5000); // Change slide every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Carousel */}
      <div className="relative overflow-hidden w-[1280px] w-full mx-auto h-auto">
        <div
          className="flex transition-transform duration-1000 will-change-transform ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`, // Slide transition
          }}
        >
          {slides.map((s, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Below the Carousel */}
      <div className="flex justify-center gap-6 pt-[10px]">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)} // When a dot is clicked, go to that slide
            className={`w-1.5 h-1.5 rounded-full cursor-pointer ${
              current === index ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Banner;
