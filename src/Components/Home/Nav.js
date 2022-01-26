import React, { useState } from "react";
import HCss from "./CSS/Nav.module.css";
import { useSelector } from "react-redux";
import NavEventsDiv from "./NavEventsDiv";
import { useDispatch } from "react-redux";
// import Darkmode from "darkmode-js";
import NavMobo from "./NavMobo";
import "./CSS/MoboPop.css";
import { Link } from "react-router-dom";
import img0 from "./../../ReqImg/LightDarkIcon.svg";
import img1 from "./../../ReqImg/FedLogo.svg";
import img2 from "./../../ReqImg/LightDarkIcon.svg";

export default function Nav(props) {
  const dispatch = useDispatch();
  // const [iniImg, setImg] = useState(img0);
  const isLightTheme = useSelector((state) => state.isLightTheme);

  const hamTog = async function (e) {
    if (document.getElementById("mDiv")) {
      document.getElementById("mDiv").style.display = "block";
    } else {
      document.getElementById("darkModeNavMobo").style.display = "block";
    }
  };
  const toggleLightMode = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <div
      className={HCss.HmDiv}
      id={isLightTheme === false ? "darkModeNavMoboW" : ""}
    >
      <NavMobo />
      <div className={HCss.hamburgwerDiv} onClick={hamTog}>
        <div
          className={HCss.hamLine1}
          id={isLightTheme === false ? "darkModeHam" : ""}
        ></div>
        <div
          className={HCss.hamLine2}
          id={isLightTheme === false ? "darkModeHam" : ""}
        ></div>
        <div
          className={HCss.hamLine3}
          id={isLightTheme === false ? "darkModeHam" : ""}
        ></div>
      </div>
      <div className={HCss.logoDiv}>
        <img src={img1} alt="FedLogo" />
        <Link to="/event" className="link"><p
          className={HCss.fedP}
          id={isLightTheme === false ? "darkModeTitle" : ""}
        >
          FED
        </p></Link>
      </div>
      <div className={HCss.rightDiv}>
        <div className={HCss.logoDivMobo}>
          <img src={img1} alt="FedLogo" />
          <Link to="/event" className="link"><p
            className={HCss.fedP}
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            FED
          </p></Link>
        </div>
        <div className={HCss.tabs}>
          <Link to="/event" className="link"><NavEventsDiv pTag="Events" New="New!" /></Link>
          <Link to="/construct" className="link"><p>Podcasts</p></Link>
          <Link to="/construct" className="link"><p>Blogs</p></Link>
          <Link to="/construct" className="link"><p>Our Team</p></Link>
          <Link to="/construct" className="link"><p>Join Us</p></Link>
          <Link to="/construct" className="link"><p>Design System</p></Link>
        </div>
        <div>
          <img
            id={isLightTheme === false ? "darkModeImg" : ""}
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
