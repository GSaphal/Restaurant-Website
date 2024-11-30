import React, { useRef } from "react";

const DrinkMenu = () => {
    const drinkMenu = [
        { name: "Beer", items: [
            { name: "Raw beer", price: "399 yen" },
            { name: "Bottle beer Sappolo/Asahi", price: "499 yen" },
            { name: "King Fisher (India)", price: "599 yen" },
            { name: "Mustan (Nepal)", price: "599 yen" },
            { name: "Shinha (Thailand)", price: "599 yen" },
            { name: "Corona (Mexico)", price: "599 yen" },
        ]},
        { name: "Beer Cocktail", items: [
            { name: "Cassis beer", price: "449 yen" },
            { name: "Lemon beer", price: "499 yen" },
            { name: "Cindy Gough", price: "599 yen" },
        ]},
        { name: "Wine", items: [
            { name: "House wine (red/white) Glass", price: "349 yen" },
            { name: "House wine (red/white) Decanta", price: "899 yen" },
            { name: "Glover (Indian red/white)", price: "1,999 yen" },
            { name: "Tutuivre (French red/white)", price: "2,099 yen" },
        ]},
        { name: "Whiskey", items: [
            { name: "Corner single", price: "299 yen" },
            { name: "Corner double", price: "549 yen" },
            { name: "Corner bottle", price: "2,199 yen" },
        ]},
        { name: "Sake", items: [
            { name: "Yakayama", price: "649 yen" },
            { name: "Big wind (sprice)", price: "449 yen" },
        ]},
        { name: "Sour", items: [
            { name: "Shu Hai Sour", price: "350 yen" },
            { name: "Lemon Sour", price: "350 yen" },
            { name: "Raw squeezed lemon sour", price: "380 yen" },
            { name: "Raw squeezed grapefruit sour", price: "380 yen" },
            { name: "Sequa Sur Sour", price: "350 yen" },
            { name: "Yuzu honey sour", price: "350 yen" },
            { name: "Ume dried sour", price: "350 yen" },
            { name: "Mandarin orange sour", price: "350 yen" },
            { name: "Lassie Sour", price: "350 yen" },
            { name: "Mango Lassie Sour", price: "350 yen" },
            { name: "Mango sour", price: "350 yen" },
            { name: "Lime sour", price: "350 yen" },
            { name: "Prime mango sour", price: "350 yen" },
            { name: "Grape sour", price: "350 yen" },
            { name: "White peach sour", price: "350 yen" },
        ]},
        { name: "Cocktail", items: [
            { name: "Cassis orange", price: "449 yen" },
            { name: "Cassis Wollon", price: "449 yen" },
            { name: "Cassis soda", price: "449 yen" },
            { name: "Cassis Lassie", price: "449 yen" },
            { name: "Cassis Mango", price: "449 yen" },
            { name: "Cassis milk", price: "449 yen" },
            { name: "Gin tonic", price: "449 yen" },
            { name: "Gin pack", price: "449 yen" },
            { name: "Gin lime", price: "449 yen" },
            { name: "Moscomur", price: "449 yen" },
            { name: "Screw driver", price: "449 yen" },
            { name: "Fuzzy nable", price: "449 yen" },
            { name: "Malibu coller", price: "449 yen" },
            { name: "Marippeach", price: "449 yen" },
            { name: "Karoo Amiruk", price: "449 yen" },
            { name: "Karoo Alassici", price: "449 yen" },
            { name: "Karoo Achike", price: "449 yen" },
            { name: "Peach fizz", price: "449 yen" },
            { name: "Reggae punch", price: "449 yen" },
            { name: "Mojito", price: "449 yen" },
        ]},
        { name: "Highball", items: [
            { name: "Horn highball", price: "399 yen" },
            { name: "Cork highball", price: "399 yen" },
            { name: "Yuzu highball", price: "399 yen" },
            { name: "Ginger highball", price: "399 yen" },
            { name: "Nepalese highball", price: "399 yen" },
            { name: "Indian highball", price: "399 yen" },
        ]},
        { name: "Tea Split", items: [
            { name: "Wollong Hai", price: "350 yen" },
            { name: "Green tea high", price: "350 yen" },
            { name: "Jasmine tea high", price: "350 yen" },
        ]},
        { name: "Hoppy", items: [
            { name: "White/black set", price: "449 yen" },
            { name: "Medium (shochu)", price: "199 yen" },
            { name: "Outside (hoppy white/black)", price: "298 yen" },
        ]},
        { name: "Ume Sake", items: [
            { name: "Lock", price: "399 yen" },
            { name: "Soda split", price: "399 yen" },
            { name: "Milk", price: "429 yen" },
        ]},
        { name: "Shochu", items: [
            { name: "Black atomis island (Glass)", price: "399 yen" },
            { name: "Black atomis island (Bottle)", price: "1,999 yen" },
            { name: "One person (potato) Glass", price: "499 yen" },
            { name: "One person (potato) Bottle", price: "2,499 yen" },
            { name: "Kari potato (Glass)", price: "399 yen" },
            { name: "Kari potato (Bottle)", price: "2,199 yen" },
            { name: "Softening (Glass)", price: "399 yen" },
            { name: "Softening (Bottle)", price: "2,099 yen" },
            { name: "Training (Glass)", price: "399 yen" },
            { name: "Training (Bottle)", price: "1,999 yen" },
            { name: "Shima beauty (pot) Glass", price: "499 yen" },
            { name: "Shima beauty (pot) Bottle", price: "2,499 yen" },
            { name: "Triangle (Glass)", price: "379 yen" },
            { name: "Triangle (Bottle)", price: "1,799 yen" },
            { name: "Good place (wheat) Glass", price: "499 yen" },
            { name: "Good place (wheat) Bottle", price: "2,499 yen" },
        ]},
        { name: "Non-alcohol", items: [
            { name: "Non-alcoholic beer", price: "399 yen" },
            { name: "Cassis orange", price: "449 yen" },
            { name: "Cassis soda", price: "449 yen" },
            { name: "Cassis Wollon", price: "449 yen" },
        ]},
        { name: "Soft Drink", items: [
            { name: "Lassie", price: "299 yen" },
            { name: "Mango lassie", price: "299 yen" },
            { name: "Strawberry lassie", price: "299 yen" },
            { name: "Blueberry lassie", price: "299 yen" },
            { name: "Coconut lassie", price: "299 yen" },
            { name: "Orange lassie", price: "299 yen" },
            { name: "Mango juice", price: "299 yen" },
            { name: "Orange juice", price: "249 yen" },
            { name: "Cola", price: "249 yen" },
            { name: "Ginger ale", price: "249 yen" },
            { name: "Carpis", price: "299 yen" },
            { name: "Carpis soda", price: "299 yen" },
            { name: "Masala Chai", price: "249 yen" },
            { name: "Coffee (hot/ice)", price: "249 yen" },
            { name: "Wollong tea", price: "249 yen" },
            { name: "Jasmine tea", price: "249 yen" },
            { name: "Green tea", price: "249 yen" },
        ]},
        { name: "Other", items: [
            { name: "Water", price: "199 yen" },
            { name: "Service", price: "Service" },
            { name: "Carbonic acid", price: "Service" },
            { name: "Cut lemon", price: "199 yen" },
            { name: "Woelon tea pot", price: "349 yen" },
            { name: "Mineral water", price: "199 yen" },
        ]}
    ];

    const drinkRefs = useRef([]);
    const handleScroll = (index) => {
        if (drinkRefs.current[index]) {
            window.scrollTo({
                top: drinkRefs.current[index].offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="container mx-auto pt-[100px] sm:pt-5">
            <div className="text-center mb-5">
                <h2 className="text-[30px] font-semibold">Drink Menu</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {drinkMenu.map((category, index) => (
                    <div
                        key={category.name}
                        className="cursor-pointer text-lg bg-[#d3b294] text-white px-4 py-2 m-2 border rounded-lg shadow-sm  hover:bg-[#b59c7e]"
                        onClick={() => handleScroll(index)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
            <div className="mt-8">
                {drinkMenu.map((category, index) => (
                    <div
                        key={category.name}
                        ref={(el) => (drinkRefs.current[index] = el)}
                        className="mb-8"
                    >
                        <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 border rounded-lg shadow-md"
                                >
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p>{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DrinkMenu;
