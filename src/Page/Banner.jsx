import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/Wall Bg1.jpg";
import chickenBucket1 from "../assets/bannerThumb1_1.png";
import chickenBucket2 from "../assets/bannerThumb1_2.png";
import chickenBucket3 from "../assets/bannerThumb1_3.png";

const banners = [
  {
    image: chickenBucket1,
    title: "SPICY FRIED CHICKEN",
    discount: "50%",
  },
  {
    image: chickenBucket2,
    title: "CHICAGO DEEP PIZZA KING",
    discount: "40%",
  },
  {
    image: chickenBucket3,
    title: "CHICAGO DEEP BURGER KING",
    discount: "30%",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="w-full h-[80vh] md:h-screen"
    >
      {banners.map((item, index) => (
        <SwiperSlide key={index}>
          <section
            className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Text Section */}
            <div className="z-10 text-[#2B2D42] w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <p className="text-[#003049] text-sm md:text-lg font-semibold uppercase tracking-widest">
                Welcome{" "}
                <span className="bg-gradient-to-r from-[#D62828] to-[#F77F00] px-2 py-1 rounded-md text-white shadow-sm">
                  Anand Food Delivery
                </span>
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2 mb-6">
                {item.title.split(" ").slice(0, 2).join(" ")} <br />
                {item.title.split(" ").slice(2).join(" ")}
              </h1>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="bg-[#D62828] hover:bg-[#F77F00] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md">
                  ORDER NOW ➔
                </button>
                <button
                  onClick={() => navigate("/Booktable")}
                  className="bg-[#D62828] hover:bg-[#F77F00] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
                >
                  Book Table ➔
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[80%] md:w-[90%] max-w-[500px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-5 right-5 bg-[#EAE2B7] text-[#003049] rounded-full px-5 py-3 font-bold text-lg md:text-xl shadow-xl rotate-[-12deg] border-2 border-[#D62828]">
                {item.discount}
                <br />
                <span className="text-xs font-bold">OFF</span>
              </div>
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/20 z-0" />
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
