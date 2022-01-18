import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import FormCss from "./CSS/FormOne.module.css";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const FormTwo = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const [error, setError] = useState(null);
  const collegeMailRef = useRef();
  const teamNameRef = useRef();
  const currentYearRef = useRef();
  const collegeRadioRef = useRef();
  const OtherRef = useRef();
  const dispatch = useDispatch();

  const backFunction = () => {
    //delete the basic details one and repopulate the form
    dispatch({ type: "deleteBasicDetailsOne" });
    props.formState("first");
  };
  const nextFunction = async () => {
    if (
      collegeMailRef.current.value.length === 0 ||
      !collegeMailRef.current.value.includes("@")
    ) {
      setError("collegeMail");
      return;
    } else if (teamNameRef.current.value.length === 0) {
      setError("teamName");
      return;
    }
    let currentYear = null;
    for (let i = 0; i < 5; i++) {
      if (currentYearRef.current[i].checked === true)
        currentYear = currentYearRef.current[i].value;
    }
    if (!currentYear) {
      setError("currentYear");
      return;
    }
    if (
      !collegeRadioRef.current[0].checked &&
      OtherRef.current.value.length === 0
    ) {
      setError("collegeName");
      return;
    }

    // CHECK DATABASE FOR DUPLICATE EMAIL
    // const url = "http://localhost:8080/fedReg/checkBoth";
    // const response = await axios.get(url, {
    //   clgmail: collegeMailRef.current.value,
    //   teamname: teamNameRef.current.value,
    // });
    // if (!response.data.passed) {
    //   setError("email already registered, please try a different one");
    //   console.log("email already registered, please try a different one");
    //   return;
    // }

    let collegeName = collegeRadioRef.current[0].checked
      ? collegeRadioRef.current[0].value
      : OtherRef.current.value;
    dispatch({
      type: "basicDetailsTwo",
      data: {
        collegeEmailId: collegeMailRef.current.value,
        teamName: teamNameRef.current.value,
        collegeName: collegeName,
        currentYear: currentYear,
      },
    });
    // navigate("/three");
    props.formState("frame31");
  };
  return (
    <div
      className={FormCss.fOnemDiv}
      id={isLightTheme === false ? FormCss.darkform : "darkFormOne"}
    >
      <div className={FormCss.contDiv}>
        <BasicTextInput
          error={error === "collegeMail" && true}
          ref={collegeMailRef}
          name="CollegeEmailId"
          label="College Email Id"
        />
        <BasicTextInput
          error={error === "teamName" && true}
          ref={teamNameRef}
          name="Team Name"
          label="Team Name"
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
      </div>

      <button
        onClick={backFunction}
        className={FormCss.backBtn}
        id={isLightTheme === false ? FormCss.darknextN : "btnN"}
      >
        Back
      </button>
      <button
        onClick={backFunction}
        className={FormCss.backBtnMobo}
        id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
      >
        <ArrowBackIcon />
      </button>
      <button
        onClick={nextFunction}
        className={FormCss.nextBtn}
        id={isLightTheme === false ? FormCss.darknextN : "btnN"}
      >
        Next
      </button>
    </div>
  );
};

export default FormTwo;
