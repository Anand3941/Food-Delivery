import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import CardSidebar from "../component/CardSidebar";
import { toast } from "react-toastify";

const Sidebar = ({ toggleSidebar }) => {
  const cartItems = useSelector((state) => state.cart);

  let subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = subtotal + deliveryFee + taxes;

  return (
    <div className="md:w-[40vw] w-full h-[100vh] bg-white fixed top-0 right-0 shadow-xl overflow-y-auto transition-all duration-300">
      {/* Sidebar Header */}
      <header className="flex w-full items-center justify-between text-green-600 text-[18px] p-5 border-b border-green-300">
        <span className="font-semibold">Order Items</span>
        <RxCross2
          className="hover:text-gray-500 text-[22px] cursor-pointer"
          onClick={toggleSidebar}
        />
      </header>

      {/* Cart Items */}
      <div className="w-full mt-5 flex flex-col gap-4 p-5">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CardSidebar
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8 text-lg">Your cart is empty.</p>
        )}
      </div>

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <div className="border-t-2 border-gray-300 mt-5 flex flex-col gap-4 p-5 bg-white rounded-t-3xl shadow-inner">
          <div className="flex justify-between items-center">
            <span className="text-md text-gray-600 font-medium">Subtotal</span>
            <span className="text-green-600 font-semibold text-xl">Rs {subtotal}/-</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-md text-gray-600 font-medium">Delivery Fee</span>
            <span className="text-green-600 font-semibold text-xl">Rs {deliveryFee}/-</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-md text-gray-600 font-medium">Taxes</span>
            <span className="text-green-600 font-semibold text-xl">Rs {taxes}/-</span>
          </div>
          <div className="border-t-2 border-gray-200 pt-3 flex justify-between items-center font-bold text-lg">
            <span className="text-gray-700">Total</span>
            <span className="text-green-700">Rs {total}/-</span>
          </div>
          <button
            className="w-full p-3 mt-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-all"
            onClick={() => toast.success("Order Placed")}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
