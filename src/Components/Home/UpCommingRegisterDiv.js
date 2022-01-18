import React from "react";
import { Link } from "react-router-dom";
import RegCss from "./CSS/UpCommingRegisterDiv.module.css";
// import "./../../Pages/CSS/Test.css";
import "./CSS/MoboPop.css";
import { useSelector } from "react-redux";

import img0 from "./../../ReqImg/hammer.svg";

export default function UpCommingRegisterDiv(props) {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div
      className={RegCss.RegmDiv}
      id={isLightTheme === false ? "darkModeEventBoxbg" : ""}
    >
      <div class={RegCss.flexDiv}>
        <div className={RegCss.DateDiv}>
          <div className={RegCss.DatePDiv}>
            <p id={isLightTheme === false ? "darkModeTitle" : ""}>29</p>
            <p className={RegCss.monthName} id="darkMonthName">
              January
            </p>
          </div>
          <img
            src={img0}
            alt="HammerImg"
            className={RegCss.hammerImg}
            id="hideImg"
          />
        </div>
        <div className={RegCss.rightDiv}>
          <h1
            className={RegCss.h1Title}
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Lorem, ipsum.
          </h1>
          <p className={RegCss.des} id="darkDes">
            Ridiculus cras mi vivamus placera ridiculus cras mi vivamus placerat
            aliquam et id. Ut scelerisque in non integert aliquam et id. Ut
            scelerisque in non integer Ut scelerisque in non integert aliquam et
            id. Ut scelerisque in non integerut scelerisque in non integert
            aliquam et id. Ut scelerisque in non integer.
          </p>
          <div className={RegCss.LinkDiv}>
            <Link
              to="/"
              className={RegCss.regBtn}
              onClick={() => {
                props.showModal(true);
              }}
              id={isLightTheme === false ? "darkModeNavBtn" : ""}
            >
              {props.btnName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
