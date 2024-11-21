import React, { useState, useEffect } from 'react';

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Set interval to change the slide every 3 seconds
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // Cycle through slides
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-[1290px]">
      {/* Carousel */}
      <div className="relative overflow-hidden w-full h-[400px]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`, // Slide transition
          }}
        >
          {slides.map((s, index) => (
            <div key={index} className="flex-shrink-0 w-[1290px]">
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Below the Carousel (Immediately below with no extra space) */}
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
    </div>
  );
};

export default Banner;
