import React from "react";
import FCss from "./CSS/Forms.module.css";

const BasicTextInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {props.label != null ? (
        <label htmlFor={props.name} className={FCss.lableTag}>
          {props.label}
        </label>
      ) : null}
      <input
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
