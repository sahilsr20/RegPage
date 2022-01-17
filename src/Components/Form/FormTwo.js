import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import FormCss from "./CSS/FormOne.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const FormTwo = (props) => {
  const [error, setError] = useState(null);
  const collegeMailRef = useRef();
  const moibleNumberRef = useRef();
  const currentYearRef = useRef();
  const collegeRadioRef = useRef();
  const OtherRef = useRef();
  const dispatch = useDispatch();

  const backFunction = () => {
    //delete the basic details one and repopulate the form
    dispatch({ type: "deleteBasicDetailsOne" });
    props.formState("first");
  };
  const nextFunction = () => {
    if (
      collegeMailRef.current.value.length === 0 ||
      !collegeMailRef.current.value.includes("@")
    ) {
      setError("invalid College Mail");
      return;
    } else if (moibleNumberRef.current.value.length !== 10) {
      setError("invalid Mobile Number");
      return;
    }
    let currentYear = null;
    for (let i = 0; i < 5; i++) {
      if (currentYearRef.current[i].checked === true)
        currentYear = currentYearRef.current[i].value;
    }
    if (!currentYear) {
      setError("choose your current year");
      return;
    }
    if (
      !collegeRadioRef.current[0].checked &&
      OtherRef.current.value.length === 0
    ) {
      setError("college name required");
      return;
    }
    let collegeName = collegeRadioRef.current[0].checked
      ? collegeRadioRef.current[0].value
      : OtherRef.current.value;
    dispatch({
      type: "basicDetailsTwo",
      data: {
        collegeEmailId: collegeMailRef.current.value,
        contactNumber: moibleNumberRef.current.value,
        collegeName: collegeName,
        currentYear: currentYear,
      },
    });
    // navigate("/three");
    props.formState("frame31");
  };
  return (
    <div className={FormCss.fOnemDiv} id="darkFormOne">
      <div className={FormCss.contDiv}>
        <BasicTextInput
          ref={collegeMailRef}
          name="CollegeEmailId"
          label="College Email Id"
        />
        <BasicTextInput
          ref={moibleNumberRef}
          name="Mobile Number"
          label="Mobile Number"
        />
        <RadioInputs
          question="College Name"
          ref={collegeRadioRef}
          radioList={["KIIT"]}
          className={FormCss.radioM}
        />
        <BasicTextInput ref={OtherRef} name="Other" />
        <RadioInputs
          ref={currentYearRef}
          question="Which Year"
          radioList={["first", "second", "third", "fourth", "other"]}
        />
        {error && <h1>{error}</h1>}
      </div>

      <button onClick={backFunction} className={FormCss.backBtn} id="btnN">
        Back
      </button>
      <button onClick={backFunction} className={FormCss.backBtnMobo} id="btnN">
        <ArrowBackIcon />
      </button>
      <button onClick={nextFunction} className={FormCss.nextBtn} id="btnN">
        Next
      </button>
    </div>
  );
};

export default FormTwo;
