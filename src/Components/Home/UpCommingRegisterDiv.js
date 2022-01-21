import React from "react";
import { Link } from "react-router-dom";
import RegCss from "./CSS/UpCommingRegisterDiv.module.css";
// import "./../../Pages/CSS/Test.css";
import "./CSS/MoboPop.css";
import { useSelector } from "react-redux";

import img0 from "./../../ReqImg/eventLog.jpg";

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
            FEDestatet Battles
          </h1>
          <p className={RegCss.des} id="darkDes">
            FEDestate Battles are one of the most exotic events that are being
            organized by FED KIIT this year. The event focuses on the concept of
            real estate and provides participants with an insight into how the
            real estate sector functions in a free and entertaining manner.<br /><br />
            This event is sub-divided into three thrilling rounds: the QUIZ round, the BIDDING round, and the BUILD UP round.<br /><br />
            <b>FIRST ROUND</b> - The first round is a QUIZ. In this round, competitors will be required to take a quiz.
            Participants will be awarded points for correctly answering questions. Teams that qualify this round will advance to the next round.<br /><br />
            <b>SECOND ROUND</b> - The second stage is the BIDDING round, in which qualified teams will be awarded virtual cash to bid on
            land purchases based on their specifications within a specified time frame. The teams that succeed in this attempt will advance to the third and final round.<br /><br />
            <b>THIRD ROUND</b> - The third stage is the BUILD UP round, in which participants can expand their industries using the assets purchased in the previous round.
            They can generate revenue and compete with one another. The company or the industry that earns the highest profit will be announced as the winner of the FEDestate Battles.<br /><br />
            HOW THE WINNERS WILL BE DECIDED??
            The Participant that can qualify for the first and second rounds will be allowed to compete in the final round. The participants that succeed in qualifying all the rounds by the correct implementation of their skills will be declared the reigning champion of the FEDestate Battles.
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
