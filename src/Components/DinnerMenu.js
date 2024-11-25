import React, { useRef } from "react";

const DinnerMenu = () => {
    const dinnerMenu = [
        { name: "Dinner Set", images: ["/images/dinner.jpg"] },
        { name: "Curry", images: ["/images/curry.jpg", "/images/curry2.jpg"] },
        { name: "Nan", images: ["/images/nan.jpg"] },
        { name: "Rice Soup", images: ["/images/ricesoup.jpg"] },
        { name: "Tandoori", images: ["/images/tandoori.jpg"] },
        {
            name: "Salad Knob",
            images: [
                "/images/saladknob.jpg",
                "/images/salad2.jpg",
                "/images/salad3.jpg",
                "/images/salad4.jpg",
                "/images/salad5.jpg",
            ],
        },
        { name: "Dessert", images: ["/images/dessert.jpg"] },
    ];

    // Create refs for each dinner item section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-[1280px] m-auto pt-5">
            {/* Grid of dinner item names */}
            <div className="mb-[20px] text-[30px] font-bold p-4">Dinner menu</div>
            <div className="grid grid-cols-4 gap-7 mb-[50px]">
                {dinnerMenu.map((dinnerItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-0.1 text-center text-white cursor-pointer"
                        onClick={() => scrollToSection(index)} // Scroll to section on click
                    >
                        {dinnerItem.name}
                    </div>
                ))}
            </div>

            {/* Name and images of each dinner item */}
            <div>
                {dinnerMenu.map((dinnerItem, index) => (
                    <div
                        key={index}
                        ref={(el) =>
                             (sectionRefs.current[index] = el)
                            } // Assign ref to each section
                        className="mb-12 mt-[10px]"
                    >
                        {/* Dinner item name */}
                        <h2 className="text-[22px] font-bold mb-2 text-center">{dinnerItem.name}</h2>
                        <div className="h-[1px] bg-gray-300 mb-4"></div>

                        {/* Dinner item images */}
                        <div className="flex flex-col justify-center items-center gap-4 w-30 h-30">
                            {dinnerItem.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={`${dinnerItem.name} ${imgIndex + 1}`}
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

export default DinnerMenu;
