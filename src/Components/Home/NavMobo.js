import React from "react";
import NavEventsDiv from "./NavEventsDiv";
import NavEventsMobo from "./NavEventsMobo";
import "./CSS/MoboPop.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavMobo() {
  const btnClose = async function (e) {
    if (document.getElementById("mDiv")) {
      document.getElementById("mDiv").style.display = "none";
    } else {
      document.getElementById("darkModeNavMobo").style.display = "none";
    }
  };
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div id={isLightTheme === false ? "darkModeNavMobo" : "mDiv"}>
      <div className="cont">
        <div className="closeBtnDiv">
          <button
            onClick={btnClose}
            className="closeBtnMobo"
            id={isLightTheme === false ? "darkX" : ""}
          >
            X
          </button>
        </div>
        <div>
        <Link to="/event" className="link"><NavEventsMobo pTag="Events" new="New!" /></Link>
        <Link to="/construct" className="link"><p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Podcasts
          </p></Link>
          <Link to="/construct" className="link"><p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Blogs
          </p></Link>
          <Link to="/construct" className="link"><p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Our Team
          </p></Link>
          <Link to="/construct" className="link"><p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Join us
          </p></Link>
          <Link to="/construct" className="link"><p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Design System
          </p></Link>
          {/* <NavEventsMobo pTag="Design System" /> */}
        </div>
      </div>
    </div>
  );
}
