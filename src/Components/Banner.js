import React, { useState, useEffect } from "react";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      src: "/assets/banner/banner1.png",
    },
    {
      src: "/assets/banner/banner2.png",
    },
  ];

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
      <div className="relative overflow-hidden max-w-[1280px] w-full mx-auto h-auto">
        <div
          className="pt-4 flex transition-transform duration-1000 will-change-transform ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`, // Slide transition
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover sm:object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-4 pt-5">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)} // When a dot is clicked, go to that slide
            className={`w-3 h-3 rounded-full cursor-pointer mt-4 ${
              current === index ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Banner;
