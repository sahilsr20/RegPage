import React from "react";

const RadioInput = (props) => {
  return (
    <div>
      <input type="radio" name={props.name} value={props.name}></input>
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

const RadioInputs = (props) => {
  // question and radiolist
  console.log(props.radioList);
  return (
    <div>
      <h2 className={styles.textheading}>{props.question}</h2>
      {props.radioList.map((value) => {
        return <RadioInput key={value} name={value} />;
      })}
    </div>
  );
};

export default RadioInputs;
