import React from "react";
import NavECss from "./CSS/NavEventsDiv.module.css";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function NavEventsDiv() {
  return (
    <div className={NavECss.eventsDiv}>
      <p>Events</p>
      <ExpandLessIcon />
      <p className={NavECss.newP}>NEW!</p>
    </div>
  );
}
