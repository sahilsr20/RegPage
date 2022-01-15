import React from "react";
import FrCss from "./CSS/Frame31.module.css";

const Option = (props) => {
  return (
    <div>
      <button className={FrCss.button}>{props.option}</button>
    </div>
  );
};
export default Option;
