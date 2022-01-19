import React, { useState, useEffect } from "react";
import Nav from "./../Components/Home/Nav";
import Events from "../Components/Home/Events";
import Modal from "../Components/Form/Modal";
import Footer from "./../Components/Home/Footer";
import { useSelector, useDispatch } from "react-redux";
import "./CSS/Test.css";

export default function Home() {
  const isLightTheme = useSelector((state) => state.isLightTheme);

  const dispatch = useDispatch();
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 400) {
      dispatch({ type: "isMobile", isMobile: true });
    } else {
      dispatch({ type: "isMobile", isMobile: false });
    }
  }, []);

  const isMobile = useSelector((state) => state.isMobile);
  const [showModal, setShowModal] = useState(false);

  const closeBtnF = async function (e) {
    document.getElementById("textDiv").style.opacity = "0";
    document.getElementById("textDiv").style.visibility = "hidden";
  };

  let inlineStyle = showModal ? { overflow: "hidden", maxHeight: "115vh" } : {};
  return (
    <div
      style={inlineStyle}
      className="HnDiv"
      id={isLightTheme === false ? "darkModeBody" : ""}
    >
      <Nav />
      <div className="marginDown">
        <Events
          showModal={setShowModal}
          eventName="Upcoming Events"
          btnName0="Register Now 🚀"
          btnName1="Register Now 🚀"
        />
        <Events
          eventName="Past Events"
          btnName0="Coming Soon 🚀"
          btnName1="Coming Soon 🚀"
        />
        <Events
          eventName="Coming Soon"
          btnName0="Coming Soon 🚀"
          btnName1="Coming Soon 🚀"
        />
        {showModal && <Modal modal={setShowModal} />}
        <Footer />
      </div>
    </div>
  );
}
