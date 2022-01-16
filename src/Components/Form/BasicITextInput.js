import React from "react";

const BasicTextInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {props.label != null ? (
        <label htmlFor={props.name}>{props.label}</label>
      ) : null}
      <input
        ref={ref}
        name={props.name}
        placeholder={props.name}
        type="text"
      ></input>
    </div>
  );
});

export default BasicTextInput;
