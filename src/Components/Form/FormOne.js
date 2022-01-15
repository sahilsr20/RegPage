import React from "react";
import FormOneCss from "./CSS/FormOne.module.css";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";

const FormOne = () => {
  return (
    <div className={FormOneCss.fOnemDiv}>
      <BasicTextInput name="FirstName" label="Basic Details" />
      <BasicTextInput name="LastName" />
      <BasicTextInput name="Mobile Number" label="Mobile Number" />
      <RadioInputs
        question="Pronoun"
        radioList={["He/Him", "She/Her", "They/Them"]}
      />
    </div>
  );
};

export default FormOne;
