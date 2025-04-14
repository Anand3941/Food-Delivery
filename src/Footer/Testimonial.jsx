import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rohan Sharma",
    review:
      "Aanand Food Delivery has completely changed the way I enjoy my meals! The food is always fresh, delicious, and delivered on time. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sneha Verma",
    review:
      "Excellent service and amazing variety of dishes! The packaging keeps the food fresh, and the delivery is always prompt. Love it!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Gupta",
    review:
      "Best food delivery service in town! Affordable prices, quick service, and mouth-watering food. Will definitely order again.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { name, review, image } = testimonials[currentIndex];

  return (
    <div className="bg-[#FFF8EE] py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto transition-all duration-500">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto border-4 border-green-300"
          />
          <p className="text-gray-600 italic mt-4 mb-2">"{review}"</p>
          <h3 className="text-lg font-semibold text-green-700 mt-2">{name}</h3>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevTestimonial}
            className="bg-green-200 hover:bg-green-300 p-3 rounded-full text-green-800 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-green-200 hover:bg-green-300 p-3 rounded-full text-green-800 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
