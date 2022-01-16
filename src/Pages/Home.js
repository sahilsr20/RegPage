import React, { useState } from "react";
import Nav from "./../Components/Home/Nav";
import Events from "../Components/Home/Events";
// import Sliders from "react-slick";
import Modal from "../Components/Form/Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/Test.css";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const closeBtnF = async function (e) {
    document.getElementById("textDiv").style.opacity = "0";
    document.getElementById("textDiv").style.visibility = "hidden";
  };

  return (
    <div className="HnDiv">
      <Nav />
      <Events
        showModal={setShowModal}
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
      {showModal && <Modal modal={setShowModal} />}
    </div>
  );
}
