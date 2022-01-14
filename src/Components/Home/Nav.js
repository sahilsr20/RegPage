import React from "react";
import HCss from "./CSS/Nav.module.css";

export default function Nav() {
  return (
    <div className={HCss.HmDiv}>
      <div className={HCss.logoDiv}>FED</div>
      <div className={HCss.rightDiv}>
        <div>Events</div>
        <p>Podcasts</p>
        <p>Blogs</p>
        <p>Our Team</p>
        <p>Join Us</p>
        <p>Design System</p>
      </div>
    </div>
  );
}
