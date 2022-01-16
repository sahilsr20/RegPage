import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import BasicTextInput from "./BasicITextInput";
import FormCss from "./CSS/FormOne.module.css";

const FormThree = (props) => {
  const [stage, setStage] = useState("leader");
  const [error, setError] = useState(null);
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
    <div className={FormCss.fOnemDiv} id="darkFormOne">
      {stage === "leader" && (
        <div>
          <div className={FormCss.contDiv}>
            <h1 className={FormCss.H1p} id="h1Play">
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
              <button onClick={addSecMember} className={FormCss.btn}>
                Add Member
              </button>
            </div>
          </div>
          <button onClick={backPageFunc} className={FormCss.backBtn}>
            Back
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
            <button onClick={addThirdMember} className={FormCss.btn}>
              Add Member
            </button>
            <h3>team member details</h3>
          </div>
          <button onClick={backPageFunc} className={FormCss.backBtn}>
            back
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
            <h1>Note: you can only form team of max 3 members</h1>
            {error && <h1>{error}</h1>}
            <button onClick={saveThirdMember} className={FormCss.btn}>
              Add Member
            </button>
          </div>
          <button onClick={backPageFunc} className={FormCss.backBtn}>
            back
          </button>
          <button onClick={nextPageFunc} className={FormCss.nextBtn}>
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default FormThree;
