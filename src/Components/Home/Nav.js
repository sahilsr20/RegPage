import React from "react";
import HCss from "./CSS/Nav.module.css";
import NavEventsDiv from "./NavEventsDiv";

import img0 from "./../../ReqImg/LightDarkIcon.svg";
import img1 from "./../../ReqImg/FedLogo.svg";

export default function Nav() {
  return (
    <div className={HCss.HmDiv}>
      <div className={HCss.logoDiv}>
        <img src={img1} alt="FedLogo" />
        <p className={HCss.fedP}>FED</p>
      </div>
      <div className={HCss.rightDiv}>
        <NavEventsDiv />
        <p>Podcasts</p>
        <p>Blogs</p>
        <p>Our Team</p>
        <p>Join Us</p>
        <p>Design System</p>
        <img src={img0} alt="LightDarkImg" className={HCss.LightDarkImg} />
      </div>
    </div>
  );
}
