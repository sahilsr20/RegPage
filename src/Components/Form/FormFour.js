import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioInputs from "./RadioInputs";
import { useNavigate } from "react-router-dom";
import FormCss from "./CSS/FormOne.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const FormFour = (props) => {
  const teamOrSolo = useSelector((state) => state.teamOrSolo);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const whichOneRef = useRef();
  const knowEventRef = useRef();
  const [stage, setStage] = useState("eventBefore");

  const yesButtonFunc = () => {
    dispatch({ type: "attendedOtherEvent", attendedOtherEvent: true });
    setStage("yes");
  };
  const FirstTimeButtonFunc = () => {
    dispatch({
      type: "attendedOtherEvent",
      attendedOtherEvent: false,
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
    props.formState("frame31");
  };
  return (
    <div className={FormCss.fOnemDiv} id="darkFormOne">
      <div className={FormCss.contDiv}>
        <div className={FormCss.teamP}>Team Details</div>
        {teamOrSolo === "solo" && (
          <h2 className={FormCss.immaTeam} id={FormCss.tH2}>
            Solo
          </h2>
        )}
        {teamOrSolo === "team" && (
          <h2 className={FormCss.immaTeam} id={FormCss.tH2}>
            Team Details
          </h2>
        )}
        {stage === "eventBefore" && (
          <div>
            <h1 className={FormCss.H1have}>
              Have you attended any fed event before?
            </h1>
            <button onClick={yesButtonFunc} className={FormCss.btn} id="btnN">
              Yes
            </button>
            <button
              onClick={FirstTimeButtonFunc}
              className={FormCss.btn}
              id="marN"
            >
              This is our first time
            </button>
          </div>
        )}
        {stage !== "eventBefore" && (
          <div>
            <h1 className={FormCss.H1have}>
              Have you attended any fed event before?
            </h1>
            <h2 className={FormCss.H2have}>{stage}</h2>
          </div>
        )}
        <div className={FormCss.questionsDiv}>
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
        </div>
      </div>
      <button onClick={backFunction} className={FormCss.backBtn}>
        back
      </button>
      <button onClick={backFunction} className={FormCss.backBtnMobo} id="btnN">
        <ArrowBackIcon />
      </button>
      {stage !== "eventBefore" && (
        <button onClick={submitFunction} className={FormCss.nextBtn}>
          Submit
        </button>
      )}
    </div>
  );
};

export default FormFour;
