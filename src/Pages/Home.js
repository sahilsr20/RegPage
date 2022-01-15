import React from "react";
import Nav from "./../Components/Home/Nav";
import Events from "../Components/Home/Events";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormOne from "./../Components/Form/FormOne";
import Frame31 from "./../Components/Form/Frame31";
import Frame30 from "./../Components/Form/Frame30";
import "./CSS/Test.css";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

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

  const closeBtnF = async function (e) {
    document.getElementById("textDiv").style.opacity = "0";
    document.getElementById("textDiv").style.visibility = "hidden";
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
      <div id="textDiv">
        <HighlightOffIcon fontSize="large" id="closeBtn" onClick={closeBtnF} />
        <Sliders {...settings} className="slide">
          <div className="home">
            <FormOne />
          </div>
          <div className="home">
            <Frame30 />
          </div>
          <div className="home">
            <Frame31 />
          </div>
        </Sliders>
      </div>
    </div>
  );
}
