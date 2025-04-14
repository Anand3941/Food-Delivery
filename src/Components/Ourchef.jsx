import React from "react";
import Chef from "../assets/cafeee.png";



const Ourchef = () => {
   
  return (
    <>
    <div className="bg-[#FFDFDF] w-full h-auto ">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-1">
        
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-lg text-red-500 font-semibold">TASTY AND CRUNCHY</h2>
          <h1 className="text-4xl font-bold text-gray-800">Our Chef</h1>
          
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
             onClick={() => navigate("/Home")}>
            View Our Menu
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-1 md:mt-0">
          <img src={Chef} alt="Chef" className="w-[50%] max-w-md rounded-lg " />
        </div>
      </div>
    </div>
  
    </>
  );
};

export default Ourchef;
