import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const addSecMember = () => {
    if (firstNameRef.current.value.length === 0) {
      setError("first name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("last name cannot be empty");
      return;
    } else if (mobileNumber.current.value.length !== 10) {
      setError("mobile number is not valid");
      return;
    } else if (
      collegeMail.current.value.length === 0 ||
      !collegeMail.current.value.includes("@")
    ) {
      setError("email is not valid");
      return;
    }
    //adding team leader details to the state
    //validate the details and if any error, change the error state
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
  const addThirdMember = () => {
    if (firstNameRef.current.value.length === 0) {
      setError("first name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("last name cannot be empty");
      return;
    } else if (mobileNumber.current.value.length !== 10) {
      setError("mobile number is not valid");
      return;
    } else if (
      collegeMail.current.value.length === 0 ||
      !collegeMail.current.value.includes("@")
    ) {
      setError("email is not valid");
      return;
    }
    //add second member details to state
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
  const saveThirdMember = () => {
    if (firstNameRef.current.value.length === 0) {
      setError("first name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("last name cannot be empty");
      return;
    } else if (mobileNumber.current.value.length !== 10) {
      setError("mobile number is not valid");
      return;
    } else if (
      collegeMail.current.value.length === 0 ||
      !collegeMail.current.value.includes("@")
    ) {
      setError("email is not valid");
      return;
    }
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
    //navigate to the next page
    // navigate("/four");
    props.formState("fourth");
  };
  const backPageFunc = () => {
    dispatch({ type: "deleteBasicDetailsTwo" });
    // navigate("/two");
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
                ref={firstNameRef}
                name="firstName"
                label="Team leader Details"
              />
              <BasicTextInput ref={lastNameRef} name="lastName" />
              <BasicTextInput
                ref={mobileNumber}
                name="MobileNumber"
                label="Mobile Number"
              />
              <BasicTextInput
                ref={collegeMail}
                name="collegeMailId"
                label="College Email ID"
              />
              {error && <h1 className={FormCss.errorH1}>{error}</h1>}
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
              ref={firstNameRef}
              name="firstName"
              label="Basic Details"
            />
            <BasicTextInput ref={lastNameRef} name="lastName" />
            <BasicTextInput
              ref={mobileNumber}
              name="MobileNumber"
              label="Mobile Number"
            />
            <BasicTextInput
              ref={collegeMail}
              name="collegeMailId"
              label="College Email ID"
            />
            {error && <h1>{error}</h1>}
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
              ref={firstNameRef}
              name="firstName"
              label="Basic Details"
            />
            <BasicTextInput ref={lastNameRef} name="lastName" />
            <BasicTextInput
              ref={mobileNumber}
              name="MobileNumber"
              label="Mobile Number"
            />
            <BasicTextInput
              ref={collegeMail}
              name="collegeMailId"
              label="College Email ID"
            />
            <h3 className={FormCss.h3Note}>
              Note: you can only form team of max 3 members
            </h3>
            {error && <h1>{error}</h1>}
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
              1. {state.teamLeaderDetails.firstname}
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
