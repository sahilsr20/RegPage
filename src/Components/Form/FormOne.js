import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import FrOneCss from "./CSS/FormOne.module.css";
import { useSelector } from "react-redux";

const FormOne = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [error, setError] = useState(null);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const contactNumberRef = useRef();
  const pronounRef = useRef();
  const dispatch = useDispatch();

  const nextFunction = async () => {
    if (firstNameRef.current.value.length === 0) {
      setError("firstname");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("lastname");
      return;
    } else if (contactNumberRef.current.value.length !== 10) {
      setError("contactNumber");
      return;
    }
    let pronoun = null;
    for (let i = 0; i < 3; i++) {
      if (pronounRef.current[i].checked === true)
        pronoun = pronounRef.current[i].value;
    }
    if (!pronoun) {
      setError("pronoun");
      return;
    }
    console.log(pronoun);

    // SEND A REQUEST TO CHECK FOR DUPLICATE TEAM NAME

    dispatch({
      type: "basicDetailsOne",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        pronoun: pronoun,
      },
    });
    props.formState("second");
  };
  return (
    <div
      className={FrOneCss.fOnemDiv}
      id={isLightTheme === false ? FrOneCss.darkform : ""}
    >
      <BasicTextInput
        error={error === "firstname" && true}
        ref={firstNameRef}
        name="FirstName"
        label="Basic Details"
      />
      <BasicTextInput
        ref={lastNameRef}
        name="LastName"
        error={error === "lastname" && true}
      />
      <BasicTextInput
        ref={contactNumberRef}
        name="contactNumber"
        label="Contact Number"
        error={error === "contactNumber" && true}
      />
      <RadioInputs
        ref={pronounRef}
        error={error === "pronoun" && true}
        question="Pronoun"
        radioList={["He/Him", "She/Her", "They/Them"]}
      />
      <button
        onClick={nextFunction}
        className={FrOneCss.nextBtn}
        id={isLightTheme === false ? FrOneCss.darknextN : "btnN"}
      >
        Next
      </button>
    </div>
  );
};

export default FormOne;
