import React from 'react';
import Categories from '../Category/Category';
import { food_items } from '../Category/food';
import { useSelector } from 'react-redux';

const Home = ({ setCate }) => {
  function filter(Category) {
    if (Category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === Category);
      setCate(newList);
    }
  }

  const items = useSelector((state) => state.cart);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="w-full flex justify-center items-center py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#FFC107] relative text-center">
          Our Menu
          <span className="block w-20 h-1 bg-[#FF5722] mx-auto mt-2 rounded-full transition-all duration-300 hover:w-28"></span>
        </h1>
      </div>

      {/* Category Grid */}
      <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        {Categories.map((item, index) => (
          <div
            key={index}
            className="w-[45%] sm:w-[140px] h-[150px] bg-[#FFF8EE] flex flex-col justify-center items-center 
                      p-4 gap-3 rounded-xl shadow-md hover:bg-[#E6F5EA] hover:shadow-lg 
                      text-gray-700 cursor-pointer transition-all duration-300"
            onClick={() => filter(item.name)}
          >
            <div className="text-[#00C853] text-3xl sm:text-4xl">
              {item.icon}
            </div>
            <div className="text-base sm:text-lg font-semibold text-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
