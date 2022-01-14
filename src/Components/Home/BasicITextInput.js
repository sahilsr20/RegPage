import React from "react";
import styles from "./CSS/Forms.module"

const BasicTextInput = (props) => {
  return (
    <div>
      {props.label != null ? (
        <label htmlFor={props.name} className={styles.textheading}>{props.label}</label>
      ) : null}
      <input name={props.name} placeholder={props.name} type="text"></input>
    </div>
  );
};

export default BasicTextInput;
