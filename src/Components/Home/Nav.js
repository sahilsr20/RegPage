import React, { useState } from "react";
import HCss from "./CSS/Nav.module.css";
import {useSelector} from 'react-redux';
import NavEventsDiv from "./NavEventsDiv";
import { useDispatch } from "react-redux";
// import Darkmode from "darkmode-js";
import NavMobo from "./NavMobo";
import "./CSS/MoboPop.css";

import img0 from "./../../ReqImg/LightDarkIcon.svg";
import img1 from "./../../ReqImg/FedLogo.svg";
import img2 from "./../../ReqImg/LightDarkIcon.svg";

export default function Nav(props) {
  const dispatch = useDispatch();
  // const [iniImg, setImg] = useState(img0);
  const isLightTheme = useSelector((state) => state.isLightTheme)

  const hamTog = async function (e) {
    document.getElementById("mDiv").style.display = "block";
    document.getElementById("hideImg").style.opacity = "0";
  };
  const toggleLightMode = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <div className={HCss.HmDiv} id={isLightTheme === false? "darkModeNav" : ""}>
      <NavMobo />
      <div className={HCss.hamburgwerDiv} onClick={hamTog}>
        <div className={HCss.hamLine1} id="darkHamLine"></div>
        <div className={HCss.hamLine2} id="darkHamLine"></div>
        <div className={HCss.hamLine3} id="darkHamLine"></div>
      </div>
      <div className={HCss.logoDiv}>
        <img src={img1} alt="FedLogo" />
        <p className={HCss.fedP} id={isLightTheme === false? "darkModeTitle" : ""}>FED</p>
      </div>
      <div className={HCss.rightDiv}>
        <div className={HCss.logoDivMobo}>
          <img src={img1} alt="FedLogo" />
          <p className={HCss.fedP} id={isLightTheme === false? "darkModeTitle" : ""}>FED</p>
        </div>
        <div className={HCss.tabs}>
          <NavEventsDiv pTag="Events" New="New!" />
          <p>Podcasts</p>
          <p>Blogs</p>
          <p>Our Team</p>
          <p>Join Us</p>
          <p>Design System</p>
        </div>
        <div>
          <img
            src={img0}
            alt="LightDarkImg"
            className={HCss.LightDarkImg} 
            onClick={toggleLightMode}
          />
        </div>
      </div>
    </div>
  );
}
