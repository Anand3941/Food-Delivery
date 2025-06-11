import React from 'react';
import chickenFriedRice from '../assets/item1_1.png';
import chickenLegPiece from '../assets/item1_2.png';
import chickenPizza from '../assets/item1_3.png';
import eggCucumber from '../assets/item1_4.png';
import SpecialOffers from './SpecialOffers';

const foodItems = [
  {
    name: "Chicken Fried Rice",
    price: "$100.99",
    image: chickenFriedRice,
  },
  {
    name: "Chicken Leg Piece",
    price: "$20.99",
    image: chickenLegPiece,
  },
  {
    name: "Chicken Pizza",
    price: "$26.99",
    image: chickenPizza,
  },
  {
    name: "Egg And Cucumber",
    price: "$28.00",
    image: eggCucumber,
  },
];

const PopularFoodItems = () => {
  return (
    <section className="bg-[#f8f5ef] py-20 px-4">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wider">
          Best Food
        </p>
        <h2 className="text-4xl font-bold text-gray-900 ">
          Popular Food Items
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-pink-300 overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">The Registration Fee</p>
            <p className="text-xl font-bold text-rose-600 mt-2">{item.price}</p>
          </div>
        ))}
        
      </div>
     
    </section>
  );
};

export default PopularFoodItems;