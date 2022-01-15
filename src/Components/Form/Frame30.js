import React from "react";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import styles from "./CSS/Forms.module.css";

const FormOne = () => {
  return (
    <div className={styles.pages}>
      <div className={styles.inputfields}>
        <BasicTextInput
          name="Email"
          lable="Email"
          className={styles.names}
          reqired
        />
      </div>
      <div className={styles.inputfields}>
        <BasicTextInput
          name="123456789"
          lable="Mobile Number"
          className={styles.names}
          reqired
        />
      </div>
      <div className={styles.inputfields}>
        <div className={styles.radiobtn}>
          <RadioInputs
            question="Year"
            radioList={["1st Year", "2nd Year", "3rd Year", "4rd Year"]}
          />
        </div>
      </div>
    </div>
  );
};

export default FormOne;
