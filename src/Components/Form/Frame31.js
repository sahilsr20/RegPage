import React from "react";
import Option from "./Option";
import FrCss from "./CSS/Frame31.module.css";

const Frame31 = () => {
  return (
    <div className={FrCss.formFr}>
      <p className={FrCss.frTeamP}>Playing with a team?</p>
      <div className={FrCss.flexDiv}>
        <Option option="Going Solo" />
        <Option option="Imma team player" />
      </div>
    </div>
  );
};
export default Frame31;
