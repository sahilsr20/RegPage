import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import BasicTextInput from "./BasicITextInput";
import FormCss from "./CSS/FormOne.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const FormThree = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const [stage, setStage] = useState("leader");
  const [error, setError] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const mobileNumber = useRef();
  const collegeMail = useRef();

  const addSecMember = async () => {
    if (firstNameRef.current.value.length === 0) {
      setError("First name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("Last name cannot be empty");
      return;
    } else if (mobileNumber.current.value.length !== 10) {
      setError("Mobile number is not valid");
      return;
    } else if (
      collegeMail.current.value.length === 0 ||
      !collegeMail.current.value.includes("@")
    ) {
      setError("Email is not valid");
      return;
    }

    // const url = "http://localhost:8080/fedReg/checkMail";
    // const response = await axios.post(url, {
    //   clgmail: collegeMail.current.value,
    // });
    // if (response.data.error) {
    //   setError(response.data.error);
    //   console.log(response.data.error);
    //   return;
    // }s
    dispatch({
      type: "teamLeaderDetails",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        contactNumber: mobileNumber.current.value,
        collegeEmailId: collegeMail.current.value,
      },
    });
    setError(null);
    setStage("second");
  };
  const addThirdMember = async () => {
    if (firstNameRef.current.value.length === 0) {
      setError("First name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("Last name cannot be empty");
      return;
    } else if (mobileNumber.current.value.length !== 10) {
      setError("Mobile number is not valid");
      return;
    } else if (
      collegeMail.current.value.length === 0 ||
      !collegeMail.current.value.includes("@")
    ) {
      setError("Email is not valid");
      return;
    }
    // const url = "http://localhost:8080/fedReg/checkMail";
    // const response = await axios.post(url, {
    //   clgmail: collegeMail.current.value,
    // });
    // if (response.data.error) {
    //   setError(response.data.error);
    //   console.log(response.data.error);
    //   return;
    // }
    dispatch({
      type: "secondMemberDetails",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        contactNumber: mobileNumber.current.value,
        collegeEmailId: collegeMail.current.value,
      },
    });
    setError(null);
    setStage("third");
  };
  const saveThirdMember = async () => {
    if (firstNameRef.current.value.length === 0) {
      setError("First name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("Last name cannot be empty");
      return;
    } else if (mobileNumber.current.value.length !== 10) {
      setError("Mobile number is not valid");
      return;
    } else if (
      collegeMail.current.value.length === 0 ||
      !collegeMail.current.value.includes("@")
    ) {
      setError("Email is not valid");
      return;
    }
    // const url = "http://localhost:8080/fedReg/checkMail";
    // const response = await axios.post(url, {
    //   clgmail: collegeMail.current.value,
    // });
    // if (response.data.error) {
    //   setError(response.data.error);
    //   console.log(response.data.error);
    //   return;
    // }
    //add third member to the state
    dispatch({
      type: "thirdMemberDetails",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        contactNumber: mobileNumber.current.value,
        collegeEmailId: collegeMail.current.value,
      },
    });
    setError(null);
    setStage("teamCheck");
  };
  const nextPageFunc = () => {
    props.formState("fourth");
  };
  const backPageFunc = () => {
    props.formState("frame31");
  };

  return (
    <div
      className={FormCss.fOnemDiv}
      id={isLightTheme === false ? FormCss.darkform : "darkFormOne"}
    >
      {stage === "leader" && (
        <div>
          <div className={FormCss.contDiv}>
            <h1
              className={FormCss.H1p}
              id={isLightTheme === false ? FormCss.darktitle : "h1Play"}
            >
              Playing with a team?
            </h1>
            <h2 className={FormCss.immaTeam}>Imma team player</h2>
            <div style={{ marginTop: "40px" }}>
              <BasicTextInput
                error={error === "First name cannot be empty" && error}
                ref={firstNameRef}
                name="firstName"
                label="Team leader Details"
              />
              <BasicTextInput
                error={error === "Last name cannot be empty" && error}
                ref={lastNameRef}
                name="lastName"
              />
              <BasicTextInput
                error={error === "Mobile number is not valid" && error}
                ref={mobileNumber}
                name="MobileNumber"
                label="Mobile Number"
              />
              <BasicTextInput
                error={
                  (error === "Email is not valid" ||
                    error === "Email already in use") &&
                  error
                }
                ref={collegeMail}
                name="collegeMailId"
                label="College Email ID"
              />
              <button
                onClick={addSecMember}
                className={FormCss.btn}
                id={isLightTheme === false ? FormCss.darknextN : "btnN"}
              >
                Add Member
              </button>
            </div>
          </div>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtn}
            id={isLightTheme === false ? FormCss.darknextN : "btnN"}
          >
            Back
          </button>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtnMobo}
            id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
          >
            <ArrowBackIcon />
          </button>
        </div>
      )}
      {stage === "second" && (
        <div>
          <div className={FormCss.contDiv}>
            <BasicTextInput
              error={error === "First name cannot be empty" && error}
              ref={firstNameRef}
              name="firstName"
              label="Basic Details"
            />
            <BasicTextInput
              error={error === "Last name cannot be empty" && error}
              ref={lastNameRef}
              name="lastName"
            />
            <BasicTextInput
              error={error === "Mobile number is not valid" && error}
              ref={mobileNumber}
              name="MobileNumber"
              label="Mobile Number"
            />
            <BasicTextInput
              error={
                (error === "Email is not valid" ||
                  error === "Email already in use") &&
                error
              }
              ref={collegeMail}
              name="collegeMailId"
              label="College Email ID"
            />
            <button
              onClick={addThirdMember}
              className={FormCss.btn}
              id={isLightTheme === false ? FormCss.darknextN : "btnN"}
            >
              Add Member
            </button>
            <h3 id={isLightTheme === false ? "h3TeamNameD" : "h3TeamName"}>
              Team Member Details
            </h3>
            <p id={isLightTheme === false ? "PTeamNameD" : "PTeamName"}>
              1. {state.teamLeaderDetails.firstname} {"    "}
              {state.teamLeaderDetails.lastname}
            </p>
          </div>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtn}
            id={isLightTheme === false ? FormCss.darknextN : "btnN"}
          >
            Back
          </button>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtnMobo}
            id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
          >
            <ArrowBackIcon />
          </button>
        </div>
      )}
      {stage === "third" && (
        <div>
          <div className={FormCss.contDiv}>
            <BasicTextInput
              error={error === "First name cannot be empty" && error}
              ref={firstNameRef}
              name="firstName"
              label="Basic Details"
            />
            <BasicTextInput
              error={error === "Last name cannot be empty" && error}
              ref={lastNameRef}
              name="lastName"
            />
            <BasicTextInput
              error={error === "Mobile number is not valid" && error}
              ref={mobileNumber}
              name="MobileNumber"
              label="Mobile Number"
            />
            <BasicTextInput
              error={
                (error === "Email is not valid" ||
                  error === "Email already in use") &&
                error
              }
              ref={collegeMail}
              name="collegeMailId"
              label="College Email ID"
            />
            <h3 className={FormCss.h3Note}>
              Note: you can only form team of max 3 members
            </h3>
            <button
              onClick={saveThirdMember}
              className={FormCss.btn}
              id={isLightTheme === false ? FormCss.darknextN : "btnN"}
            >
              Add Member
            </button>
            <h3 id={isLightTheme === false ? "h3TeamNameD" : "h3TeamName"}>
              Team Member Details
            </h3>
            <p id={isLightTheme === false ? "PTeamNameD" : "PTeamName"}>
              1. {state.teamLeaderDetails.firstname} {"    "}
              {state.teamLeaderDetails.lastname}
            </p>
            <p id={isLightTheme === false ? "PTeamNameD" : "PTeamName"}>
              2. {state.secondMemberDetails.firstname} {"    "}
              {state.secondMemberDetails.lastname}
            </p>
          </div>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtn}
            id={isLightTheme === false ? FormCss.darknextN : "btnN"}
          >
            Back
          </button>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtnMobo}
            id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
          >
            <ArrowBackIcon />
          </button>
          <button
            onClick={nextPageFunc}
            className={FormCss.nextBtn}
            id={isLightTheme === false ? FormCss.darknextN : "btnN"}
          >
            Next
          </button>
        </div>
      )}
      {stage === "teamCheck" && (
        <div>
          <div className={FormCss.contDiv}>
            <h3 id={isLightTheme === false ? "h3TeamNameD" : "h3TeamName"}>
              Team Member Details
            </h3>
            <p id={isLightTheme === false ? "PTeamNameD" : "PTeamName"}>
              1. {state.teamLeaderDetails.firstname}{" "}
              {state.teamLeaderDetails.lastname}
            </p>
            <p id={isLightTheme === false ? "PTeamNameD" : "PTeamName"}>
              2. {state.secondMemberDetails.firstname}{" "}
              {state.secondMemberDetails.lastname}{" "}
            </p>
            <p id={isLightTheme === false ? "PTeamNameD" : "PTeamName"}>
              3. {state.thirdMemberDetails.firstname}{" "}
              {state.thirdMemberDetails.lastname}{" "}
            </p>
          </div>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtn}
            id={isLightTheme === false ? FormCss.darknextN : "btnN"}
          >
            Back
          </button>
          <button
            onClick={backPageFunc}
            className={FormCss.backBtnMobo}
            id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
          >
            <ArrowBackIcon />
          </button>
          <button
            onClick={nextPageFunc}
            className={FormCss.nextBtn}
            id={isLightTheme === false ? FormCss.darknextN : "btnN"}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FormThree;
