import React, { useState } from "react";
import HCss from "./CSS/Nav.module.css";
import NavEventsDiv from "./NavEventsDiv";
import Darkmode from "darkmode-js";
import NavMobo from "./NavMobo";
import "./CSS/MoboPop.css";

import img0 from "./../../ReqImg/LightDarkIcon.svg";
import img1 from "./../../ReqImg/FedLogo.svg";
import img2 from "./../../ReqImg/LightDarkIcon.svg";

export default function Nav(props) {
  const [iniImg, setImg] = useState(img0);

  const options = {
    bottom: "64px",
    right: "unset",
    left: "32px",
    time: "0.5s",
    mixColor: "#fff",
    backgroundColor: "#fff",
    buttonColorDark: "#1E1E1E",
    buttonColorLight: "#fff",
    saveInCookies: false,
    autoMatchOsTheme: true,
  };

  const darkLight = async function (e) {
    const darkmode = new Darkmode(options);
    darkmode.toggle();
    if (darkmode.isActivated() == true) {
      setImg(img2);
    }
  };

  let s = 0;
  const hamTog = async function (e) {
    s++;
    if (s % 2 == 0) {
      document.getElementById('mDiv').style.display = "none";
      document.getElementById('hideImg').style.opacity = "1";
    } else {
      document.getElementById('mDiv').style.display = "block";
      document.getElementById('hideImg').style.opacity = "0";
    }
  }

  return (
    <div className={HCss.HmDiv} id="darkNav">
      <NavMobo />
      <div className={HCss.hamburgwerDiv} onClick={hamTog}>
        <div className={HCss.hamLine1} id="darkHamLine"></div>
        <div className={HCss.hamLine2} id="darkHamLine"></div>
        <div className={HCss.hamLine3} id="darkHamLine"></div>
      </div>
      <div className={HCss.logoDiv}>
        <img src={img1} alt="FedLogo" />
        <p className={HCss.fedP}>FED</p>
      </div>
      <div className={HCss.rightDiv}>
        <div className={HCss.logoDivMobo}>
          <img src={img1} alt="FedLogo" />
          <p className={HCss.fedP}>FED</p>
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
            src={iniImg}
            alt="LightDarkImg"
            className={HCss.LightDarkImg}
            onClick={darkLight}
          />
        </div>
      </div>
    </div>
  );
}
