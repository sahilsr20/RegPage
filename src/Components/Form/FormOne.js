import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import axios from "axios";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import FrOneCss from "./CSS/FormOne.module.css";
import {useSelector} from 'react-redux';

const FormOne = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme)
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [error, setError] = useState(null);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const teamNameRef = useRef();
  const pronounRef = useRef();
  const dispatch = useDispatch();

  const nextFunction = async () => {
    
    if (firstNameRef.current.value.length === 0) {
      setError("first name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("last name cannot be empty");
      return;
    } else if (teamNameRef.current.value.length === 0) {
      setError("Team name cannot be empty");
      return;
    }
    let pronoun = null;
    for (let i = 0; i < 3; i++) {
      if (pronounRef.current[i].checked === true)
        pronoun = pronounRef.current[i].value;
    }
    if (!pronoun) {
      setError("please select the pronoun");
      return;
    }
    console.log(pronoun);

    // SEND A REQUEST TO CHECK FOR DUPLICATE TEAM NAME
    // const url = "http://localhost:8080/fedReg/checkTeam";
    // const response = await axios.post(url, {
    //   teamname: teamNameRef.current.value,
    // });
    // if (!response.data.passed) {
    //   setError("team already exists, please choose a different team name");
    //   return;
    // }

    dispatch({
      type: "basicDetailsOne",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        teamName: teamNameRef.current.value,
        pronoun: pronoun,
      },
    });
    props.formState("second");
    
  };
  return (
    <div className={FrOneCss.fOnemDiv} id={isLightTheme === false? FrOneCss.darkform : ""}>
      <BasicTextInput
        ref={firstNameRef}
        name="FirstName"
        label="Basic Details"
      />
      <BasicTextInput ref={lastNameRef} name="LastName" />
      <BasicTextInput ref={teamNameRef} name="teamName" label="Team Name" />
      <RadioInputs
        ref={pronounRef}
        question="Pronoun"
        radioList={["He/Him", "She/Her", "They/Them"]}
      />
      {error && <h1 className={FrOneCss.errorH1}>{error}</h1>}
      <button onClick={nextFunction} className={FrOneCss.nextBtn} id={isLightTheme === false? FrOneCss.darknext : "btnN"}>
        Next
      </button>
    </div>
  );
};

export default FormOne;
