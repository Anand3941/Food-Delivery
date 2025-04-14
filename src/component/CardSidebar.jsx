import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";

function CardSidebar ({name,id,price,image,qty}) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] p-2 shadow-lg rounded-lg flex justify-between items-center bg-white">
      {/* Left Side - Image & Name */}
      <div className="w-[60%] h-full flex gap-3 items-center">
        {/* Image Section */}
        <div className="w-[60%] h-[100%] overflow-hidden rounded-lg">
          <img src={image} alt="Food Item" className="w-full h-full object-cover" />
        </div>

        {/* Item Details & Quantity Control */}
        <div className="flex flex-col gap-3">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          {/* Quantity Selector */}
          <div className="w-[100px] h-[40px] flex justify-between items-center rounded-lg shadow-lg border-2 border-green-400 overflow-hidden text-green-400">
            <button className="w-[30%] h-full bg-white text-xl hover:bg-gray-200 flex justify-center items-center"onClick={() => qty>1 ? dispatch(DecrementQty(id)):1} >-</button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-xl">{qty}</span>
            <button className="w-[30%] h-full bg-white text-xl hover:bg-gray-200 flex justify-center items-center" onClick={() => dispatch(IncrementQty(id))}>+</button>
          </div>
        </div>
      </div>

      {/* Right Side - Price & Delete Button */}
      <div className="flex flex-col justify-between items-center">
        <span className="text-xl text-green-400 font-semibold">{price}</span>
        <RiDeleteBin6Line className="w-[30px] h-[30px] text-red-400 cursor-pointer hover:text-red-600" onClick={()=> dispatch(RemoveItem(id))} />
      </div>
    </div>
  );
};

export default CardSidebar;
