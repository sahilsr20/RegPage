import React from "react";
import Nav from "./../Components/Home/Nav";
import Events from "../Components/Home/Events";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormOne from "./../Components/Form/FormOne";
import "./CSS/Test.css";

export default function Home() {
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
    <div className="HnDiv">
      <Nav />
      <Events
        eventName="Upcoming Events"
        btnName0="Register Now 🚀"
        btnName1="Register Now 🚀"
      />
      <Events
        eventName="Past Events"
        btnName0="Comming Soon 🚀"
        btnName1="Comming Soon 🚀"
      />
      <Events
        eventName="Comming Soon"
        btnName0="Comming Soon 🚀"
        btnName1="Comming Soon 🚀"
      />
      <div className="textDiv">
        <Sliders {...settings} className="slide">
          <div className="home">
            <FormOne />
          </div>
          <div className="home">News</div>
          <div className="home">Contact</div>
        </Sliders>
      </div>
    </div>
  );
}
