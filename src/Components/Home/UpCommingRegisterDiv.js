import React from "react";
import { Link } from "react-router-dom";
import RegCss from "./CSS/UpCommingRegisterDiv.module.css";
import "./../../Pages/CSS/Test.css";
import "./CSS/MoboPop.css";

import img0 from "./../../ReqImg/hammer.svg";

export default function UpCommingRegisterDiv(props) {
  return (
    <div className={RegCss.RegmDiv} id="darkUpCommingRegisterDiv">
      <div class={RegCss.flexDiv}>
        <div className={RegCss.DateDiv}>
          <div className={RegCss.DatePDiv}>
            <p>29</p>
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
          <h1 className={RegCss.h1Title} id="darkh1Title">
            Lorem, ipsum.
          </h1>
          <p className={RegCss.des} id="darkDes">
            Ridiculus cras mi vivamus placera ridiculus cras mi vivamus placerat
            aliquam et id. Ut scelerisque in non integert aliquam et id. Ut
            scelerisque in non integer Ut scelerisque in non integert aliquam et
            id. Ut scelerisque in non integerut scelerisque in non integert
            aliquam et id. Ut scelerisque in non integer. Ridiculus cras mi
            vivamus placera ridiculus cras mi vivamus placerat aliquam et id. Ut
            scelerisque in non integert aliquam et id. Ut scelerisque in non
            integer Ut scelerisque in non integert aliquam et id. Ut scelerisque
            in non integerut scelerisque in non integert aliquam et id. Ut
            scelerisque in non integer. Ridiculus cras mi vivamus placera
            ridiculus cras mi vivamus placerat aliquam et id. Ut scelerisque in
            non integert aliquam et id. Ut scelerisque in non integer Ut
            scelerisque in non integert aliquam et id. Ut scelerisque in non
            integerut scelerisque in non integert aliquam et id. Ut scelerisque
            in non integer.
          </p>
          <div className={RegCss.LinkDiv}>
            <Link
              to="/"
              className={RegCss.regBtn}
              onClick={() => {
                props.showModal(true);
              }}
              id="darkLink"
            >
              {props.btnName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
