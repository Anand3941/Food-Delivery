import React from 'react';
import pizza from '../assets/ctaThumb1_1.png'; // Pizza image
import tomato from '../assets/ctaShape1_3.png'; // bottom-right tomatoes image
import leaf from '../assets/ctaShape1_1.png'; // top-left leaf image
import smallLeaf from '../assets/ctaShape1_2 (1).png'; // small leaf at bottom-left
import { FaArrowRight } from 'react-icons/fa';

const TodaySpecialFood = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-orange-900 text-white py-20 px-6 lg:px-24 overflow-hidden">
      {/* Decorative Leaf - Top Left */}
      <img src={leaf} alt="Leaf" className="absolute top-4 left-4 w-28 pointer-events-none" />

      {/* Small Leaf - Bottom Left */}
      <img src={smallLeaf} alt="Small Leaf" className="absolute bottom-4 left-6 w-20 pointer-events-none" />

      {/* Decorative Tomatoes - Bottom Right */}
      <img src={tomato} alt="Tomatoes" className="absolute bottom-0 right-4 w-32 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="z-10">
          <h4 className="text-red-500 font-semibold text-lg mb-2">WELCOME <span className='bg-amber-400 font-extrabold text-lg rounded-md px-2 py-1
        '>Anand Food Delivery</span></h4>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            TODAY SPACIAL FOOD
          </h1>
          <p className="text-orange-400 text-xl mb-6">Limits Time Offer</p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md text-white font-semibold flex items-center gap-2">
            ORDER NOW <FaArrowRight />
          </button>
        </div>

        {/* Pizza Section */}
        <div className="relative flex justify-center">
          <img src={pizza} alt="Pizza" className="w-full max-w-md md:max-w-lg lg:max-w-xl" />
          
          
        </div>
      </div>
    </section>
  );
};

export default TodaySpecialFood;