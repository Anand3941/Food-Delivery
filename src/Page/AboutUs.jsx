import React from 'react';
import leftBg from '../assets/aboutShape1_1.png';
import rightBg from '../assets/aboutShape1_4.png';
import leftDish from '../assets/aboutShape1_3.png';
import rightDish from '../assets/aboutShape1_6.png';
import { FaUtensils } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24">
      {/* Left Background Shape */}
      <div className="absolute left-0 top-0 h-full w-auto z-10 hidden md:block">
        <img
          src={leftBg}
          alt="Left Background"
          className="object-contain h-full"
        />
        <img
          src={leftDish}
          alt="Rotating Dish"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 object-contain rotate-animation"
        />
      </div>

      {/* Right Background Shape */}
      <div className="absolute right-0 top-0 h-full w-auto z-10 hidden md:block">
        <img
          src={rightBg}
          alt="Right Background"
          className="object-contain h-full"
        />
        <img
          src={rightDish}
          alt="Rotating Dish"
          className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-60 h-60 object-contain rotate-animation"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <div className="flex justify-center items-center gap-2 text-orange-500 font-bold text-sm uppercase mb-4">
          <FaUtensils />
          <span>About Us</span>
          <FaUtensils />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          Experience the Taste of <br /> Anand's Favorite Dishes
        </h1>

        <p className="text-orange-800 text-lg mt-6 mx-auto max-w-lg leading-relaxed">
          At Anand Food Delivery, we bring you mouth-watering dishes straight from local kitchens.
          Whether you crave traditional Indian flavors or fast food delights, we serve it hot and fast—
          right at your doorstep.
        </p>

        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md text-lg flex items-center gap-2 mx-auto transition transform hover:scale-105">
          ORDER NOW <span className="text-xl">➜</span>
        </button>
      </div>

      {/* Rotation Animation CSS */}
      <style>
        {`
          @keyframes rotate-180 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(180deg); }
          }
          .rotate-animation {
            animation: rotate-180 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
