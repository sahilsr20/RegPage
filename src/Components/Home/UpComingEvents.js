import React from "react";
import UceCss from "./CSS/UpComingEvents.module.css";
import UpCommingRegisterDiv from "./UpCommingRegisterDiv";

export default function UpComingEvents() {
  return (
    <div className={UceCss.UcsmDiv}>
      <p className={UceCss.upcomingEventsP}>Upcoming Events</p>
      <div className={UceCss.RegDiv}>
        <UpCommingRegisterDiv />
        <UpCommingRegisterDiv />
      </div>
    </div>
  );
}
