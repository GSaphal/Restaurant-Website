import React, { useRef } from "react";

const TakeOut = () => {
    const takeOutMenu = [
        { name: "Lunch time lunch", images: ["/images/takeou1.png"] },
        { name: "Dinner time lunch", images: ["/images/takeout2.png"] }
        
    ];

    // Create refs for each lunch item section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-[1290px] m-auto pt-5">
            {/* Grid of lunch item names */}
            <div className="mb-[20px] text-[30px] font-bold p-4">Takeout menu</div>
            <div className="grid grid-cols-4 gap-7 mb-[50px]">
                {takeOutMenu.map((takeOutItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-0.1 text-center text-white cursor-pointer"
                        onClick={() => scrollToSection(index)} // Scroll to section on click
                    >
                        {takeOutItem.name}
                    </div>
                ))}
            </div>

            {/* Name and images of each  item */}
            <div>
                {takeOutMenu.map((takeOutItem, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
                        className="mb-12 mt-[10px]"
                    >
                        {/*  item name */}
                        <h2 className="text-[22px] font-bold mb-2 text-center">{takeOutItem.name}</h2>
                        <div className="h-[1px] bg-gray-300 mb-4"></div>

                        {/*  item images */}
                        <div className="flex flex-col justify-center items-center gap-4 w-30 h-30">
                            {takeOutItem.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={`${takeOutItem.name} ${imgIndex + 1}`}
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

export default TakeOut;
