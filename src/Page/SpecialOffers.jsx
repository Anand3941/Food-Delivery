import React from 'react';
import spicyChicken from '../assets/offerThumb1_1.png';
import specialFood from '../assets/offerThumb1_2.png';
import chickenRoll from '../assets/offerThumb1_3.png';

const offers = [
  {
    title: "SPICY FRIED CHICKEN",
    subtitle: "ON THIS WEEK",
    note: "Limited Time Offer",
    buttonColor: "bg-red-600",
    image: spicyChicken,
  },
  {
    title: "TODAY SPECIAL FOOD",
    subtitle: "WELCOME Anand Food Delivery",
    note: "Limited Time Offer",
    buttonColor: "bg-orange-500",
    image: specialFood,
  },
  {
    title: "SPECIAL CHICKEN ROLL",
    subtitle: "ON THIS WEEK",
    note: "Limited Time Offer",
    buttonColor: "bg-red-600",
    image: chickenRoll,
  },
];

const SpecialOffers = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8f5ef] to-[#e6e2d9] py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative bg-black text-white rounded-xl overflow-hidden shadow-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
          >
            {/* 50% OFF Tag */}
            <div className="absolute top-5 right-5 bg-yellow-300 text-black text-sm font-bold px-3 py-1 rounded-full shadow-lg z-10">
              50% OFF
            </div>

            {/* Text */}
            <div className="z-10">
              <p className="text-red-500 font-bold text-sm uppercase">{offer.subtitle}</p>
              <h3 className="text-3xl font-extrabold mt-2 leading-tight tracking-wide">
                {offer.title}
              </h3>
              <p className="text-orange-400 text-sm font-medium mt-2">{offer.note}</p>
            </div>

            {/* Button */}
            <div className="mt-6 z-10">
              <button
                className={`px-6 py-3 ${offer.buttonColor} text-white rounded-md font-semibold flex items-center gap-2 hover:brightness-110 transition`}
              >
                ORDER NOW <span className="text-xl">➔</span>
              </button>
            </div>

            {/* Food Image */}
            <div className="absolute bottom-0 right-0 w-40 h-40 z-0 opacity-90 pointer-events-none">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
