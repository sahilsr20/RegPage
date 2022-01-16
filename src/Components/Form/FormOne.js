import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";

const FormOne = (props) => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [error, setError] = useState(null);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const teamNameRef = useRef();
  const pronounRef = useRef();
  const dispatch = useDispatch();

  const nextFunction = () => {
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
    <div>
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
      {error && <h1>{error}</h1>}
      <button onClick={nextFunction}>next</button>
    </div>
  );
};

export default FormOne;
