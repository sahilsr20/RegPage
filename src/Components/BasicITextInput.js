import React from "react";

const BasicTextInput = (props) => {
  return (
    <div>
      {props.label != null ? (
        <label htmlFor={props.name}>{props.label}</label>
      ) : null}
      <input name={props.name} placeholder={props.name} type="text"></input>
    </div>
  );
};

export default BasicTextInput;
