import React, { useRef } from "react";

const Party = () => {
    const partyMenu = [
        {
            name: "Women's Association Course",
            image: "/images/womenCourse.jpg",
            cost: "3,280 yen",
            details: {
                appetizer: [
                    "Kashunut",
                    "Alcoachal",
                    "Branched beans",
                    "Papad",
                ],
                salad: [
                    "Green salad",
                    "Spicy chicken salad",
                    "Cold tomato",
                    "Raw spring roll",
                ],
                main: [
                    "Spicy chicken wings",
                    "Maraitikka",
                    "Potocara",
                    "Samosa",
                ],
                curry: "You can choose two types of curry you like from the menu.",
                nanOrRice: [
                    "Plain nan",
                    "Rice",
                    "Fleasure freedom!",
                    "*One piece of Nan that you like for 4 people or more!",
                    "*I can't take home strange things.",
                ],
                dessert: [
                    "Vanilla ice cream",
                    "Strawberry ice cream",
                    "Mango Melba",
                ],
            },
        },
        {
            name: "Haven and Overseas Course",
            image: "/images/SpecialCourse.jpg",
            cost: "3,850 yen",
            details: `
            Includes 5 dishes from Haven, 6 dishes from Overseas, all-you-can-drink, curry ＋ all-you-can-eat Nan Rice, dessert.

            ・Branched beans
            ・Green salad
            ・Momo
            ・Fried
            ・Chicken Tikka
            ・1 kind of curry you like
            ・Nan or rice (refillable freedom)

            ・Samosa
            ・Spicy chicken salad
            ・Cumin potato
            ・Tandori chicken
            ・Seek Kabab
            ・1 kind of curry you like
            ・Nan or rice (refillable freedom)
            `,
        },
        {
            name: "Special Course",
            image: "/images/HeavenCourse.jpg",
            cost: "4,400 yen",
            details: {
                appetizer: [
                    "Kashunut",
                    "Alcoachal",
                    "Branched beans",
                    "Papad",
                ],
                salad: [
                    "Green salad",
                    "Spicy chicken salad",
                    "Cold tomato",
                    "Raw spring roll",
                ],
                main: [
                    "Spicy chicken wings",
                    "Maraitikka",
                    "Potocara",
                    "Samosa",
                ],
                curry: "You can choose two types of curry you like from the menu.",
                nanOrRice: [
                    "Plain nan",
                    "Rice",
                    "Fleasure freedom!",
                    "*One piece of Nan that you like for 4 people or more!",
                    "*I can't take home strange things.",
                ],
                dessert: [
                    "Vanilla ice cream",
                    "Strawberry ice cream",
                    "Mango Melba",
                ],
            },
        },
    ];

    // Created refs for each section
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="max-w-[1280px] w-full mx-auto pt-[100px] sm:pt-5">
            {/* Title */}
            <div className="mb-[20px] md:text-[30px] text-[20px] sm:text-[25px] font-bold py-3">Party Menu</div>

            {/* Grid of item names */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-[50px]">
                {partyMenu.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-3 rounded-lg hover:bg-[#b59c7e] text-center text-white cursor-pointer"
                        onClick={() => scrollToSection(index)} // Scroll to section on click
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            {/* Party Menu Item Sections */}
            <div>
                {partyMenu.map((item, index) => {
                    // If it is the combined course (Haven + Overseas)
                    if (item.name === "Haven and Overseas Course") {
                        return (
                            <div
                                key={index}
                                ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
                                className="flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-100 rounded-lg shadow-lg mb-12"
                            >
                                {/* Image Spanning Both Cards */}
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={item.image}
                                        alt="Haven + Overseas Course"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                {/* Cards on the Right */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    {/* Haven Course Card */}
                                    <div className="p-4 bg-gray-100 rounded-lg ">
                                        <h3 className="font-bold text-xl">Haven Course</h3>
                                        <div className="text-[22px] font-bold text-[#d33b3b]">One person: 3,499 yen</div>
                                        <div className="h-[1px] bg-gray-300 mt-4"></div>  {/*Divider Line */}
                                        <p className="text-gray-600 mt-4">5 dishes, all-you-can-drink, curry + all-you-can-eat Nan Rice, dessert</p>
                                        <ul className="list-disc text-gray-600 pl-6">
                                            <li>Branched beans</li>
                                            <li>Green salad</li>
                                            <li>Momo</li>
                                            <li>Fried</li>
                                            <li>Chicken Tikka</li>
                                            <li>1 kind of curry you like</li>
                                            <li>Nan or rice (refillable freedom)</li>
                                        </ul>
                                    </div>

                                    {/* Overseas Course Card */}
                                    <div className="p-4 bg-gray-100 rounded-lg ">
                                        <h3 className="font-bold text-xl">Overseas Course</h3>
                                        <div className="text-[22px] font-bold text-[#d33b3b]">One person: 3,999 yen</div>
                                        <div className="h-[1px] bg-gray-300 mt-4"></div> {/*Divider Line */}
                                        <p className="text-gray-600 mt-4">6 dishes, all-you-can-drink, curry + all-you-can-eat Nan Rice, dessert</p>
                                        <ul className="list-disc text-gray-600 pl-6">
                                            <li>Samosa</li>
                                            <li>Spicy chicken salad</li>
                                            <li>Cumin potato</li>
                                            <li>Tandori chicken</li>
                                            <li>Seek Kabab</li>
                                            <li>1 kind of curry you like</li>
                                            <li>Nan or rice (refillable freedom)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    // Regular course display (Women Course and Special Course)
                    return (
                        <div
                            key={index}
                            ref={(el) => (sectionRefs.current[index] = el)} // ref to each section
                            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-100 rounded-lg shadow-lg mb-12"
                        >
                            {/* Image on the Left */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Information on the Right */}
                            <div className="w-full md:w-1/2 space-y-6">
                                {/* Title */}
                                <h2 className="text-[22px] font-bold text-gray-800">{item.name}</h2>

                                {/* Cost */}
                                <div className="text-[22px] font-bold text-[#d33b3b]">
                                    One person: {item.cost}
                                </div>

                                {/* Divider */}
                                <div className="h-[1px] bg-gray-300"></div>

                                {/* Details */}
                                {item.details && (
                                    <div>
                                        {item.details.appetizer && (
                                            <div>
                                                <h4 className="font-bold">Appetizer</h4>
                                                <ul className="list-disc pl-6">
                                                    {item.details.appetizer.map((appetizer, i) => (
                                                        <li key={i}>{appetizer}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.salad && (
                                            <div>
                                                <h4 className="font-bold">Salad</h4>
                                                <ul className="list-disc pl-6">
                                                    {item.details.salad.map((salad, i) => (
                                                        <li key={i}>{salad}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.main && (
                                            <div>
                                                <h4 className="font-bold">Main</h4>
                                                <ul className="list-disc pl-6">
                                                    {item.details.main.map((main, i) => (
                                                        <li key={i}>{main}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.curry && (
                                            <div>
                                                <h4 className="font-bold">Curry</h4>
                                                <p>{item.details.curry}</p>
                                            </div>
                                        )}
                                        {item.details.nanOrRice && (
                                            <div>
                                                <h4 className="font-bold">Nan or Rice</h4>
                                                <ul className="list-disc pl-6">
                                                    {item.details.nanOrRice.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.dessert && (
                                            <div>
                                                <h4 className="font-bold">Dessert</h4>
                                                <ul className="list-disc pl-6">
                                                    {item.details.dessert.map((dessert, i) => (
                                                        <li key={i}>{dessert}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Party;
