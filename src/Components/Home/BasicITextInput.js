import React from "react";
import styles from "./CSS/Forms.module.css"

const BasicTextInput = (props) => {
  return (
    <div className={styles.inputfields}>
      {props.label != null ? (
        <label htmlFor={props.name} className={styles.labeltext}>{props.label}</label>
        // <h3 className={styles.textheading}>{props.label}</h3>
        
      ) : null}
     <br></br><input name={props.name} className={styles.names} placeholder={props.name} type="text"></input>
    </div>
  );
};

export default BasicTextInput;
