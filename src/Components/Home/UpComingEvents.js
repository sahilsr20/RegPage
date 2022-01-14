import React from "react";
import UceCss from "./CSS/UpComingEvents.module.css";
import UpCommingRegisterDiv from "./UpCommingRegisterDiv";

export default function UpComingEvents() {
  return (
    <div className={UceCss.UcsmDiv}>
      <p className={UceCss.upcomingEventsP}>Upcoming Events</p>
      <div className={UceCss.RegDiv}>
        <UpCommingRegisterDiv btnName="Register Now 🚀" />
        <UpCommingRegisterDiv btnName="Register Now 🚀" />
      </div>
    </div>
  );
}
