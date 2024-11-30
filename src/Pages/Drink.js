import React, { useRef } from "react";

const DrinkMenu = () => {
    const drinkMenu = [
        { name: "Drink Menu", images: ["/images/drink1.jpg"] },
        { name: "Drink ", images: ["/images/drink2.jpg "] },
        
    ];

    // Create refs for each drink item section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="max-w-[1280px] w-full mx-auto pt-[100px] sm:pt-5">
            {/* Grid of drink item names */}
            <div className="mb-[20px] md:text-[30px] text-[20px] sm:text-[25px] font-bold py-3">Drink Menu</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-[50px]">
                {drinkMenu.map((drinkItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-2 rounded-lg hover:bg-[#b59c7e] text-center text-white cursor-pointer"
                        onClick={() => scrollToSection(index)} // Scroll to section on click
                    >
                        {drinkItem.name}
                    </div>
                ))}
            </div>

            {/* Name and images of each drink item */}
            <div>
                {drinkMenu.map((drinkItem, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionRefs.current[index] = el)} // Assigned ref to each section
                        className="mb-12 mt-[10px]"
                    >
                        {/* Drink item name */}
                        <h2 className="text-[22px] font-bold mb-2 text-center">{drinkItem.name}</h2>
                        <div className="h-[1px] bg-gray-300 mb-4"></div>

                        {/* Drink item images */}
                        <div className="flex flex-col justify-center items-center gap-4 w-30 h-30">
                            {drinkItem.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={`${drinkItem.name} ${imgIndex + 1}`}
                                    className="w-30 h-30 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DrinkMenu;
