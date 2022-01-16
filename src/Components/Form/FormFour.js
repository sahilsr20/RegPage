import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioInputs from "./RadioInputs";
import { useNavigate } from "react-router-dom";

const FormFour = (props) => {
  const teamOrSolo = useSelector((state) => state.teamOrSolo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const whichOneRef = useRef();
  const knowEventRef = useRef();
  const [stage, setStage] = useState("eventBefore");
  const yesButtonFunc = () => {
    dispatch({ type: "attendedOtherEvent", attendedOtherEvent: "yes" });
    setStage("yes");
  };
  const FirstTimeButtonFunc = () => {
    dispatch({
      type: "attendedOtherEvent",
      attendedOtherEvent: "this is our First Time",
    });
    setStage("this is our First Time");
  };
  const submitFunction = () => {
    let whichOne = null;
    for (let i = 0; i < 4; i++) {
      if (
        stage === "attendedOtherEvent" &&
        whichOneRef.current[i].checked === true
      )
        whichOne = whichOneRef.current[i].value;
    }
    console.log(whichOne);

    let knowEvent = null;
    for (let i = 0; i < 4; i++) {
      if (knowEventRef.current[i].checked === true)
        knowEvent = knowEventRef.current[i].value;
    }
    console.log(knowEvent);
    //submit both radio inputs
    dispatch({ type: "whichOne", whichOne: whichOne });
    dispatch({ type: "source", source: knowEvent });
    //send a post request to the server with all details
    //delete all local storage
    localStorage.clear();
    //navigate to submitted page
    // navigate("/submitted");
    props.formState("submitted");
  };

  const backFunction = () => {
    dispatch({ type: "deleteFormThreeDetails" });
    navigate("/three");
  };
  return (
    <div>
      <div>team details</div>
      {teamOrSolo === "solo" && <h2>solo</h2>}
      {teamOrSolo === "team" && <h2>team details</h2>}
      {stage === "eventBefore" && (
        <div>
          <h1>have you attended any fed event before?</h1>
          <button onClick={yesButtonFunc}>yes</button>
          <button onClick={FirstTimeButtonFunc}>this is our first time</button>
        </div>
      )}
      {stage !== "eventBefore" && (
        <div>
          <h1>have you attended any fed event before?</h1>
          <h2>{stage}</h2>
        </div>
      )}
      {stage === "yes" && (
        <RadioInputs
          ref={whichOneRef}
          question="Which One?"
          radioList={["Stonkaholic", "Pitchers", "Omega", "Other"]}
        />
      )}
      {stage !== "eventBefore" && (
        <RadioInputs
          ref={knowEventRef}
          question="How did you get to know about this event?"
          radioList={["Instagram", "Email", "Friends", "Other"]}
        />
      )}
      <button onClick={backFunction}>back</button>
      {stage !== "eventBefore" && (
        <button onClick={submitFunction}>Submit</button>
      )}
    </div>
  );
};

export default FormFour;
