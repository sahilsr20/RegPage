import React from "react";
import FormCss from "./CSS/Forms.module.css";

const RadioInput = (props) => {
  return (
    <div className={FormCss.RadioDiv}>
      <input
        type="radio"
        name={props.name}
        value={props.name}
        className={FormCss.radioInp}
      ></input>
      <label htmlFor={props.name} className={FormCss.radioLable}>
        {props.name}
      </label>
    </div>
  );
};

const RadioInputs = (props) => {
  return (
    <div>
      <h2 className={FormCss.radioH2}>{props.question}</h2>
      {props.radioList.map((value) => {
        return <RadioInput key={value} name={value} />;
      })}
    </div>
  );
};

export default RadioInputs;
