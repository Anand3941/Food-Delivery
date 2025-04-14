import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full sm:w-[90%] md:w-[280px] bg-[#FFF8EE] p-4 sm:p-5 rounded-xl flex flex-col gap-3 shadow-md hover:shadow-lg hover:border-2 border-green-300 transition-all duration-300 cursor-pointer mx-auto">
      {/* Image */}
      <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className="text-xl font-semibold text-gray-800">{name}</div>

      {/* Price & Type */}
      <div className="flex justify-between items-center text-green-500">
        <div className="text-base sm:text-lg font-semibold">Rs: {price}</div>
        <div className="flex items-center gap-2 text-base sm:text-lg font-semibold capitalize">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full py-2 mt-1 bg-green-200 rounded-lg text-gray-700 hover:bg-green-500 hover:text-white transition duration-300 font-medium"
        onClick={() => {
          dispatch(AddItem({ id, name, price, image, qty: 1 }));
          toast.success("Item Added");
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
