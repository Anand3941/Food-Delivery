import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import deliveryRoute from "../assets/deliveryitem.png";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const confettiEmojis = ["🍕", "🍔", "🥗", "✨", "🍟", "🍩"];

  return (
    <div
      className="relative flex justify-center items-center w-full py-12"
      style={{ backgroundColor: "#FFF8EE" }}
    >
      {/* Floating Confetti */}
      <div className="absolute w-full h-full pointer-events-none overflow-hidden">
        {confettiEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], x: [0, 5, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-8 py-10 rounded-3xl shadow-xl bg-white border border-orange-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Delivery Route Image */}
        <img
          src={deliveryRoute}
          alt="Delivery Route"
          className="mb-6 object-contain"
          style={{ height: "180px", width: "180px" }}
        />

        {/* Animated Checkmark */}
        <motion.div
          className="flex items-center justify-center w-24 h-24 rounded-full bg-green-500 shadow-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.3 }}
        >
          <GiCheckMark size={35} className="text-white" />
        </motion.div>

        <h2 className="text-3xl font-semibold text-[#333] mt-6">Order Confirmed!</h2>

        <p className="text-lg text-center text-[#555] mt-4 max-w-xs">
          Your delicious meal is on the way! Estimated delivery in{" "}
          <span className="font-semibold text-orange-500">18 minutes</span> 🍽️
        </p>

        {/* Manual Redirect Option */}
        <div
          onClick={() => navigate("/Home")}
          className="mt-6 px-6 py-2 bg-orange-100 text-orange-700 text-md rounded-full shadow-lg text-center hover:bg-amber-50 cursor-pointer"
        >
          Redirecting to home shortly...
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
