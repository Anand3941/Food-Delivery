import React from 'react';
import chili from '../assets/popularDishesShape1_2.png';
import bottomLeftShape from '../assets/popularDishesShape1_1.png';

import chickenFriedRice from '../assets/item1_1.png';
import chinesePasta from '../assets/item1_2.png';
import chickenPizza from '../assets/item1_3.png';
import chickenNoodles from '../assets/item1_4.png';
import grilledChicken from '../assets/item1_4.png'; // Updated image

import { FaHeart, FaShoppingBasket, FaEye } from 'react-icons/fa';

const dishes = [
  {
    title: 'Chicken Fried Rice',
    price: '$100.99',
    image: chickenFriedRice,
  },
  {
    title: 'Chinese Pasta',
    price: '$15.99',
    image: chinesePasta,
  },
  {
    title: 'Chicken Pizza',
    price: '$26.99',
    image: chickenPizza,
  },
  {
    title: 'Chicken Noodles',
    price: '$39.00',
    image: chickenNoodles,
    isHighlighted: true,
  },
  {
    title: 'Grilled Chicken',
    price: '$20.99',
    image: grilledChicken,
  },
];

const BestSellingDishes = () => {
  return (
    <section className="relative bg-[#F6F3EF] py-16 px-4 md:px-10">
      {/* Top Right Chili Image */}
      <img
        src={chili}
        alt="Chili"
        className="absolute right-4 top-4 w-28 md:w-36 pointer-events-none"
      />

      {/* Bottom Left Shape */}
      <img
        src={bottomLeftShape}
        alt="Decor"
        className="absolute bottom-0 left-4 w-28 md:w-30 pointer-events-none"
      />

      {/* Section Header */}
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h4 className="text-orange-500 font-bold flex items-center justify-center gap-2 uppercase">
          <span className="text-xl">🍽</span> Popular Dishes
        </h4>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Best Selling Dishes
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore our top-selling mouth-watering recipes, loved by foodies everywhere!
        </p>
      </div>

      {/* Dish Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className={`w-full max-w-[220px] mx-auto relative group rounded-2xl p-5 flex flex-col items-center justify-center shadow-md transition-transform duration-300 ${
              dish.isHighlighted
                ? 'bg-[#09162A] text-white'
                : 'bg-white text-slate-900 hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200'
            } hover:scale-105`}
          >
            {/* Heart Icon */}
            <div className="absolute top-4 right-4 text-red-600 text-xl opacity-80 group-hover:opacity-100">
              <FaHeart />
            </div>

            {/* Hot Badge */}
            {dish.isHighlighted && (
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase">
                🔥 Hot
              </span>
            )}

            {/* Dish Image */}
            <img
              src={dish.image}
              alt={dish.title}
              className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300"
            />

            {/* Title & Info */}
            <h3 className="font-bold text-lg text-center">{dish.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
              The Registration Fee
            </p>
            <p
              className={`mt-2 font-bold text-lg ${
                dish.isHighlighted ? 'text-white' : 'text-red-600'
              }`}
            >
              {dish.price}
            </p>

            {/* Action Icons for Highlighted */}
            {dish.isHighlighted && (
              <div className="flex gap-3 mt-4 text-white text-lg opacity-80 group-hover:opacity-100">
                <FaShoppingBasket className="cursor-pointer hover:text-orange-500" />
                <FaEye className="cursor-pointer hover:text-orange-500" />
              </div>
            )}
          </div>
        ))}
      </div>

   
    </section>
  );
};

export default BestSellingDishes;