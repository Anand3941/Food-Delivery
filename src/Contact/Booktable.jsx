import React, { useState } from "react";
import about from "../assets/about-img.png";

const Booktable = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Reset form after showing message
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
      });
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-orange-100 shadow-2xl rounded-lg overflow-hidden">

        {/* Left Side - Image */}
        <div
          className="md:w-1/2 bg-center"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: "75%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-orange-100 to-orange-300">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-4">🍽️ Reserve Your Table</h2>
          <p className="text-gray-600 text-center mb-6">Plan ahead for a delightful dining experience!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              required
            />

            <div className="flex space-x-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                required
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              required
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              Book Now
            </button>
          </form>

          {/* ✅ Simple Success Popup Here */}
          {showSuccess && (
            <div className="mt-6 p-4 text-green-800 bg-green-100 border border-green-300 rounded-md text-center shadow-sm transition-all duration-300">
              🎉 Your table has been booked successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booktable;
