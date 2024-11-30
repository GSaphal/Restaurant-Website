import React, { useRef } from "react";

const Lunch = () => {
    const lunchMenu = [
        { name: "Lunch Set", images: ["/images/LunchSet.jpg"] },
        { name: "Lunch Plate", images: ["/images/LunchPlate.jpg"] },
        { name: "Side Menu", images: ["/images/sidemenu.jpg"] }, 
        { name: "Lunch time discount", images: ["/images/LunchDiscount.jpg"] },
        { name: "Lunch Takeout", images: ["/images/lunchTakeout.jpg"] }
    ];

    // Create refs for each lunch item section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className=" max-w-[1280px] w-full mx-auto  pt-[100px] sm:pt-5">
            {/* Grid of lunch item names */}
            <div className="mb-[20px] md:text-[30px] text-[20px] sm:text-[25px] font-bold py-3">Lunch menu</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-[50px]">
                {lunchMenu.map((lunchItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-2 rounded-lg hover:bg-[#b59c7e] text-center text-white cursor-pointer"
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

export default Lunch;
