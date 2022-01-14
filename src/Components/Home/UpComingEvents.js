import React from "react";
import UceCss from "./CSS/UpComingEvents.module.css";
import UpCommingRegisterDiv from "./UpCommingRegisterDiv";

export default function UpComingEvents(props) {
  return (
    <div className={UceCss.UcsmDiv}>
      <p className={UceCss.upcomingEventsP}>{props.eventName}</p>
      <div className={UceCss.RegDiv}>
        <UpCommingRegisterDiv btnName={props.btnName0} />
        <UpCommingRegisterDiv btnName={props.btnName1} />
      </div>
    </div>
  );
}
