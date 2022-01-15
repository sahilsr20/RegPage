import React from "react";
import BasicTextInput from "./../Components/Home/BasicITextInput";
import RadioInputs from "./../Components/Home/RadioInputs";
import styles from "../Components/Home/CSS/Forms.module.css";

const FormOne = () => {
  return (
    <div className={styles.formbox}>
    <div className={styles.page}>
        <BasicTextInput name="Email" label="College Email ID"  required />

        <BasicTextInput name="123456789" label="Mobile Number" className={styles.names} required />
        <BasicTextInput name="KIIT" label="College Name" className={styles.names} required />
          <RadioInputs
            question="Current Year?"
            radioList={["First", "Second", "Third", "Fourth","Other"]}
          />
      {/* <div className={styles.btn}>
        <button className={styles.btnprev}>Prev</button>
        <button className={styles.btnnext}>Next</button>
      </div> */}
    </div>
    </div>
  );
};

export default FormOne;
