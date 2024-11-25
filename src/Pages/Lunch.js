import React, { useRef } from "react";

const Lunch = () => {
    const lunchMenu = [
        { name: "Lunch Set", images: ["/images/LunchSet.jpg"] },
        { name: "Lunch Plate", images: ["/images/LunchPlate.jpg"] },
        { name: "Side Menu", images: ["/images/sidemenu.jpg"] },
        { name: "Curry on the spot", images: ["/images/curryonthespot.jpg"] },
        { name: "Lunch time discount", images: ["/images/LunchDiscount.jpg"] }
    ];

    // Create refs for each lunch item section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-[1280px] w-full mx-auto pt-5">
            {/* Grid of lunch item names */}
            <div className="mb-[20px] text-[30px] font-bold p-4">Lunch menu</div>
            <div className="grid grid-cols-4 gap-7 mb-[50px]">
                {lunchMenu.map((lunchItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-0.1 text-center text-white cursor-pointer"
                        onClick={() => scrollToSection(index)} // Scroll to section on click
                    >
                        {lunchItem.name}
                    </div>
                ))}
            </div>

            {/* Name and images of each lunch item */}
            <div>
                {lunchMenu.map((lunchItem, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
                        className="mb-12 mt-[10px]"
                    >
                        {/* Lunch item name */}
                        <h2 className="text-[22px] font-bold mb-2 text-center">{lunchItem.name}</h2>
                        <div className="h-[1px] bg-gray-300 mb-4"></div>

                        {/* Lunch item images */}
                        <div className="flex flex-col justify-center items-center gap-4 w-30 h-30">
                            {lunchItem.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={`${lunchItem.name} ${imgIndex + 1}`}
                                    className="w-30 h-30 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lunch;
