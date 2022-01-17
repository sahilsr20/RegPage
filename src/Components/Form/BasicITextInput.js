import React from "react";
import FCss from "./CSS/Forms.module.css";
import { useSelector } from "react-redux";

const BasicTextInput = React.forwardRef((props, ref) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div>
      {props.label != null ? (
        <label
          htmlFor={props.name}
          className={FCss.lableTag}
          id={isLightTheme === false ? "darkModeTitle" : ""}
        >
          {props.label}
        </label>
      ) : null}
      <input
        id={isLightTheme === false ? FCss.darkform : ""}
        ref={ref}
        name={props.name}
        className={FCss.impTag}
        placeholder={props.name}
        type="text"
      ></input>
    </div>
  );
});

export default BasicTextInput;
