import React from "react";
import FrCss from "./CSS/Forms.module.css";

const RadioInput = (props) => {
  return (
    <div>
      <input
        type="radio"
        name={props.name}
        id={props.value}
        value={props.value}
      ></input>
      <label htmlFor={props.value} className={FrCss.radioLable}>
        {props.value}
      </label>
    </div>
  );
};

const RadioInputs = React.forwardRef((props, ref) => {
  return (
    <div>
      <h2 className={FrCss.radioH2}>{props.question}</h2>
      <form ref={ref}>
        {props.radioList.map((value) => {
          return <RadioInput key={value} value={value} name={props.question} />;
        })}
      </form>
    </div>
  );
});

export default RadioInputs;
