import React from "react";
import FormsCss from "./CSS/Forms.module.css"
const BasicTextInput = (props) => {
  return (
    <div>
      {props.label != null ? (
        <label htmlFor={props.name} className={FormsCss.lableTag}>{props.label}</label>
      ) : null}
      <input name={props.name} placeholder={props.name} type="text" className={FormsCss.impTag}></input>
    </div>
  );
};

export default BasicTextInput;
