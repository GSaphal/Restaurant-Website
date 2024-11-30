import React, { useRef } from "react";

const Dinner = () => {
    const dinnerMenu = [
        { name: "Nan", images: ["/images/dinnermenu1.jpg"] },
        { name: "Curry", images: ["/images/dinnermenu2.jpg"] },
        { name: "Snacks", images: ["/images/dinnermenu3.jpg"] },
        { name: "Snacks", images: ["/images/dinnermenu4.jpg"] },
        { name: "Salad", images: ["/images/dinnermenu5.jpg"] },
        { name: "Tandoori", images: ["/images/dinnermenu7.jpg"] },
        { name: "Snacks", images: ["/images/dinnersnacks.jpg"] },
        

        { name: "Dinner Set", images: ["/images/dinnerSet.jpg"] },
        { name: "Dessert", images: ["/images/dessert2.jpg"] },
        { name: "DinnerTakeout", images: ["/images/dinnerTakeout.jpg"] }
    ];

    // Create refs for each dinner item section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="max-w-[1280px] w-full mx-auto pt-[100px] sm:pt-5">
            {/* Grid of dinner item names */}
            <div className="mb-[20px] md:text-[30px] text-[20px] sm:text-[25px] font-bold py-4">Dinner menu</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-[50px]">
                {dinnerMenu.map((dinnerItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] rounded-lg hover:bg-[#b59c7e] p-2 text-center text-white cursor-pointer"
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
                        ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
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

export default Dinner;
