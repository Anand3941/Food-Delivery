import React from 'react';
import Slider from 'react-slick';
import first from "../assets/burgercrausalll.png";
import second from "../assets/chikencrousa.png";
import third from "../assets/downloadpizza50.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offercrausal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div style={{ width: '100%',  margin: 'auto',marginTop:'40px' }}>
      <Slider {...settings}>
        <div>
          <img src={first} alt="Burger Offer" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={second} alt="Chicken Offer" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={third} alt="Soup Offer" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
      </Slider>
    </div>
  );
};

export default Offercrausal;
