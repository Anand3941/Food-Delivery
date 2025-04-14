import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Social Links */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">🍕 Foodie</h2>
          <p className="mt-2 text-gray-400">
            Fresh & Fast Delivery <br /> Taste the best food anytime.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["Home", "Menu", "Offers", "Contact", "About Us"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-orange-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400">Stay Updated</h3>
          <p className="text-gray-400 mt-2">Subscribe to get special offers & discounts!</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-gray-800 text-white rounded-l-md border border-gray-600 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 mt-6 border-t border-gray-700 text-gray-400">
        &copy; {new Date().getFullYear()} Foodie. All Rights Reserved.@Anand jha
      </div>
    </footer>
  );
};

export default Footer;
