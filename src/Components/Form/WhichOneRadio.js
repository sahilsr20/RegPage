import React from "react";
import FrCss from "./CSS/Forms.module.css";
import { useSelector } from "react-redux";

const WhichOneRadio = React.forwardRef((props, ref) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div className={FrCss.radioDivMainMobo}>
      <h2
        className={FrCss.radioH2}
        id={isLightTheme === false ? FrCss.darkradio : ""}
      >
        {props.question}
      </h2>
      {props.error && <p className={FrCss.radioerr}>{props.error}</p>}
      <form ref={ref}>
        <div>
          <input
            type="checkbox"
            value={props.value[0]}
            className={FrCss.radioInp}
            id={props.value[0]}
          ></input>
          <label
            // onClick={() => clickEvent("Stonkaholic")}
            id={isLightTheme === false ? FrCss.darkradio : ""}
            className={FrCss.radioLable}
            htmlFor={props.value[0]}
          >
            {props.value[0]}
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value={props.value[1]}
            className={FrCss.radioInp}
            id={props.value[1]}
          ></input>
          <label
            id={isLightTheme === false ? FrCss.darkradio : ""}
            className={FrCss.radioLable}
            htmlFor={props.value[1]}
          >
            {props.value[1]}
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value={props.value[2]}
            className={FrCss.radioInp}
            id={props.value[2]}
          ></input>
          <label
            id={isLightTheme === false ? FrCss.darkradio : ""}
            className={FrCss.radioLable}
            htmlFor={props.value[2]}
          >
            {props.value[2]}
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="other."
            className={FrCss.radioInp}
            id="other."
          ></input>
          <label
            id={isLightTheme === false ? FrCss.darkradio : ""}
            className={FrCss.radioLable}
            htmlFor="other."
          >
            Other
          </label>
        </div>
      </form>
    </div>
  );
});

export default WhichOneRadio;

// "Stonkaholic", "Pitchers", "Omega", "Other";
