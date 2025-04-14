import React from "react";
import image6 from "../assets/image6.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const PopularDis = () => {
  const images = [image6, image2, image3, image4, image5];

  return (
    <div className="bg-[#FFF8EE] w-full h-auto px-4 py-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h3 className="text-base md:text-lg font-semibold text-black">Food Items</h3>
        <h1 className="text-red-500 text-2xl md:text-4xl font-bold mt-1">Popular Dishes</h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full ${
              index === images.length - 1
                ? "col-span-2 sm:col-span-1 justify-self-center"
                : ""
            }`}
          >
            <img
              src={image}
              alt={`Dish ${index + 1}`}
              className="rounded-xl shadow-md w-full h-36 sm:h-40 md:h-48 object-cover hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDis;
