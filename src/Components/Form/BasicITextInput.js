import React from "react";
import FCss from "./CSS/Forms.module.css";
import { useSelector } from "react-redux";

const BasicTextInput = React.forwardRef((props, ref) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div>
      {props.label != null && !props.error ? (
        <label
          htmlFor={props.name}
          className={FCss.lableTag}
          id={isLightTheme === false ? "darkModeTitle" : ""}
        >
          {props.label}
        </label>
      ) : null}
      {props.error && (
        <label
          style={{ color: props.error ? "red" : "black" }}
          htmlFor={props.name}
          className={FCss.lableTag}
          id={isLightTheme === false ? "darkModeTitle" : ""}
        >
          {props.label}
        </label>
      )}
      {props.error === true ? (
        <input
          style={{
            borderColor: props.error === true ? "red" : "#afafaf",
            borderWidth: props.error === true ? "2px" : "1px",
          }}
          id={isLightTheme === false ? FCss.darkform : ""}
          ref={ref}
          name={props.name}
          className={FCss.impTag}
          placeholder={props.name}
          type="text"
        ></input>
      ) : (
        <input
          id={isLightTheme === false ? FCss.darkform : ""}
          ref={ref}
          name={props.name}
          className={FCss.impTag}
          placeholder={props.name}
          type="text"
        ></input>
      )}
    </div>
  );
});

export default BasicTextInput;
