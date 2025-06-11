import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../assets/logo9.png";
import imga from "../assets/food 1.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { LuClock, LuShoppingBag } from "react-icons/lu";

import Sidebar from "../Page/Sidebar";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Item", path: "/item" },
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Red Bar */}
      <div className="bg-red-500 p-1 md:flex items-center justify-between hidden">
        <div className="flex items-center text-white">
          <LuClock className="mr-2" /> 7.30 AM - 9.30 PM
        </div>
        <div className="flex items-center text-white">
          <FaPhone className="mr-2" /> +91 9153664868
        </div>
        <button
          className="rounded-xl bg-[#FF5722] text-white px-5 py-1 mr-9 hover:bg-[#E64A19] transition"
          onClick={() => navigate("/Register")}
        >
          Register
        </button>
      </div>

      {/* Main Header */}
      <div className="bg-[#1E2A38]">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center py-1 px-4 md:px-8">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-auto cursor-pointer"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-semibold text-white">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 border-b-2 ${
                  location.pathname === item.path
                    ? "text-[#5DADE2] border-[#5DADE2]"
                    : "border-transparent hover:text-[#5DADE2] hover:border-[#5DADE2]"
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Cart + Info (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className="w-[50px] h-[50px] bg-[#2A435D] flex justify-center items-center shadow-lg rounded-xl relative cursor-pointer"
              onClick={toggleSidebar}
            >
              <span className="absolute top-0 right-2 text-green-500 font-semibold text-sm">
                {items.length}
              </span>
              <LuShoppingBag className="w-[24px] h-[24px] text-green-500" />
            </div>
            <div className="text-white font-semibold flex items-center gap-2">
              <div>
                Delivery Order <br />
                <span className="text-[#5DADE2]">+91 9153664868</span>
              </div>
              <img src={imga} alt="Food" className="w-10 h-10" />
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button
              className="rounded-xl bg-[#FF5722] text-white px-6 py-2 hover:bg-[#E64A19] transition"
              onClick={() => navigate("/Loginpage")}
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
            onClick={closeMenu}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-[#1E2A38] text-white z-[9999] shadow-2xl p-6 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={closeMenu}
              />
            </div>

            <ul className="space-y-4 font-semibold">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    location.pathname === item.path
                      ? "text-[#5DADE2]"
                      : "hover:text-[#5DADE2]"
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    closeMenu();
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            {/* <button
              className="mt-6 w-full rounded-xl bg-[#FF5722] text-white px-6 py-2 hover:bg-[#E64A19] transition"
              onClick={() => {
                navigate("/Loginpage");
                closeMenu();
              }}
            >
              Login
            </button> */}
          </div>
        </>
      )}

      {/* Floating Cart (Mobile) */}
      <div
        className="fixed bottom-4 right-4 z-[9999] md:hidden bg-[#2A435D] rounded-full p-3 shadow-xl cursor-pointer"
        onClick={toggleSidebar}
      >
        <div className="relative">
          <LuShoppingBag className="text-green-500 w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </div>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/40"
            onClick={toggleSidebar}
          />
          <div className="fixed top-0 right-0 w-full md:w-[40vw] h-screen bg-white z-[9999] shadow-2xl transition-transform duration-300 ease-in-out">
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
        </>
      )}
    </>
  );
};

export default Navber;
