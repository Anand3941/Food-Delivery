import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

import first from "../assets/23.webp";
import second from "../assets/Chef.png";
import third from "../assets/Intersect.png";
import four from "../assets/image1.png";

const items = [
  {
    id: 1,
    image: first,
    title: "Best In Town",
    description: "Ek quick aur convenient service hai jo aapke favorite food ko doorstep tak deliver karti hai. 🍽️🚚",
  },
  {
    id: 2,
    image: four,
    title: "Best In Town",
    description: "Ek reliable service hai jo tasty food ko fast delivery ke saath aap tak pahunchata hai. 🍔🚀",
  },
  {
    id: 3,
    image: third,
    title: "Best In Town",
    description: "Ek suvidhajanak service hai jo restaurant se seedha swadisht bhojan aapke darwaze tak pahunchata hai.",
  },
  {
    id: 4,
    image: second,
    title: "Best In Town",
    description: "Ek tez aur aasaan seva hai jo aapke pasandida khaane ko ghar tak pahunchata hai. 🍕🚴‍♂️",
  },
];

const Crausal = () => {
  const navigate = useNavigate();
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="relative mx-auto overflow-hidden w-full bg-[#FFF8EE] mb-6">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((item) => (
            <div
              key={item.id}
              className="embla__slide min-w-full h-[400px] md:h-[360px] flex flex-col md:flex-row items-center justify-between px-4 py-4"
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-lg md:text-2xl font-bold text-red-500">{item.title}</h2>
                <p className="text-black mt-2 text-xl md:text-3xl font-bold leading-snug">
                  <span className="text-red-500">Anand Food Delivery</span> {item.description}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="rounded-xl bg-[#FF5722] text-white px-6 py-2 hover:bg-[#E64A19] transition">
                    Order Now
                  </button>
                  <button
                    className="rounded-xl bg-[#FF5722] text-white px-6 py-2 hover:bg-[#E64A19] transition"
                    onClick={() => navigate("/Booktable")}
                  >
                    Book Table
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[70%] max-h-[390px] object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crausal;
