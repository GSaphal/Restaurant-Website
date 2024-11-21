import React from 'react'

const Drink = () => {
    const drinkMenu = [
        {
          name: "Pizza",
          types: [
            { type: "Cheese", cost: 8 },
            { type: "Pepperoni", cost: 10 },
            { type: "Veggie", cost: 9 },
          ],
        },
        {
          name: "Burger",
          types: [
            { type: "Beef", cost: 6 },
            { type: "Chicken", cost: 7 },
            { type: "Veggie", cost: 5 },
          ],
        },
        {
          name: "Pasta",
          types: [
            { type: "Spaghetti", cost: 12 },
            { type: "Fettuccine", cost: 13 },
            { type: "Penne", cost: 11 },
          ],
        },
        {
          name: "Salad",
          types: [
            { type: "Caesar", cost: 5 },
            { type: "Greek", cost: 6 },
            { type: "Garden", cost: 4 },
          ],
        },
        {
          name: "Sandwich",
          types: [
            { type: "Ham & Cheese", cost: 7 },
            { type: "Turkey", cost: 8 },
            { type: "Veggie", cost: 6 },
          ],
        },
        {
          name: "Taco",
          types: [
            { type: "Beef", cost: 3 },
            { type: "Chicken", cost: 4 },
            { type: "Fish", cost: 5 },
          ],
        },
        {
          name: "Sushi",
          types: [
            { type: "Salmon", cost: 15 },
            { type: "Tuna", cost: 14 },
            { type: "California", cost: 13 },
          ],
        },
        {
          name: "Soup",
          types: [
            { type: "Tomato", cost: 4 },
            { type: "Chicken Noodle", cost: 5 },
            { type: "Minestrone", cost: 6 },
          ],
        },
        {
          name: "Steak",
          types: [
            { type: "Ribeye", cost: 25 },
            { type: "Sirloin", cost: 20 },
            { type: "Filet Mignon", cost: 30 },
          ],
        },
        {
          name: "Wrap",
          types: [
            { type: "Chicken Caesar", cost: 8 },
            { type: "Veggie", cost: 7 },
            { type: "Buffalo Chicken", cost: 9 },
          ],
        },
        {
          name: "Fries",
          types: [
            { type: "Regular", cost: 3 },
            { type: "Sweet Potato", cost: 4 },
            { type: "Loaded", cost: 5 },
          ],
        },
        {
          name: "Ice Cream",
          types: [
            { type: "Vanilla", cost: 4 },
            { type: "Chocolate", cost: 5 },
            { type: "Strawberry", cost: 5 },
          ],
        },
        {
          name: "Drinks",
          types: [
            { type: "Coke", cost: 2 },
            { type: "Sprite", cost: 2 },
            { type: "Water", cost: 1 },
            { type: "Iced Tea", cost: 3 },
            { type: "Lemonade", cost: 3 },
            { type: "Orange Juice", cost: 4 },
          ],
        },
    ];
    
    return (
        <div className="w-[1290px] m-auto pt-5">
            {/* Title */}
            <div className="mb-[20px] text-[30px] font-bold p-4">Drink menu</div>

            {/* Drink Categories (Pizza, Burger, Pasta, etc.) */}
            <div className="grid grid-cols-4 gap-7 mb-[50px]">
                {drinkMenu.map((drinkItem, index) => (
                    <div
                        key={index}
                        className="bg-[#d3b294] p-0.1 text-center text-white cursor-pointer"
                    >
                        {drinkItem.name}
                    </div>
                ))}
            </div>

            {/* Drink Types (Coke, Sprite, etc. under Drinks) */}
            <div>
  {drinkMenu.map((drinkItem, index) => (
    <div key={index}>
      {/* Category Header */}
      <div className="font-bold text-xl mb-4 bg-[#f7f7f7] text-black px-2 py-4 border-l border-red-500">
        {drinkItem.name}
      </div>

      {/* Grid of Items */}
      <div className="p-6 grid grid-cols-2 gap-x-20">
        {drinkItem.types.map((type, index) => (
          <div key={index} className="flex m-2">
            {/* Food Name */}
            <div className="flex-1">{type.type}</div>

            {/* Cost */}
            <div className="w-[100px] text-right">{type.cost} yen</div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

        </div>
    );
};

export default Drink;
