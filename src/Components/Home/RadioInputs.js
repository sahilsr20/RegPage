import React from "react";
import styles from "./CSS/Forms.module.css"

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
    <div className={styles.inputfields}>
      <h3 className={styles.textheading}>{props.question}</h3>
      {props.radioList.map((value) => {
        return (
          <div className={styles.radiobtn}>
          <RadioInput key={value} name={value} className={styles.radiobtntxt} />
          </div>
          );
      })}
    </div>
  );
};

export default RadioInputs;
