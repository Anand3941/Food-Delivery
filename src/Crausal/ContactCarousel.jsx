import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const deliveryTeam = [
  {
    name: "Rohit Kumar",
    role: "Delivery Partner",
    image: "https://via.placeholder.com/150?text=Rohit",
  },
  {
    name: "Priya Singh",
    role: "Customer Support",
    image: "https://via.placeholder.com/150?text=Priya",
  },
  {
    name: "Anand Mohan",
    role: "Founder & Manager",
    image: "https://via.placeholder.com/150?text=Anand",
  },
];

const ContactCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ padding: "2rem", background: "#fff8f0" }}>
      <h2 style={{ textAlign: "center", color: "#e74c3c" }}>Meet Our Team</h2>
      <Slider {...settings}>
        {deliveryTeam.map((member, idx) => (
          <div key={idx} style={{ textAlign: "center", padding: "1rem" }}>
            <img
              src={member.image}
              alt={member.name}
              style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
            />
            <h4 style={{ marginTop: "1rem", color: "#2c3e50" }}>{member.name}</h4>
            <p style={{ color: "#7f8c8d" }}>{member.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContactCarousel;
