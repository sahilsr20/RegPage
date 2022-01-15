import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormOne from "./../Components/Form/FormOne";
import "./CSS/Test.css";

export default function Test() {
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="textDiv">
      <Sliders {...settings} className="slide">
        <div className="home">
          <FormOne />
        </div>
        <div className="News">News</div>
        <div className="Contact">Contact</div>
      </Sliders>
    </div>
  );
}
