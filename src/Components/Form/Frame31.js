import React from "react";
import FormCss from "./CSS/FormOne.module.css";
import { useDispatch, useSelector } from "react-redux";

const Frame31 = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const dispatch = useDispatch();
  const dispatchFunc = (prop) => {
    dispatch({ type: "teamOrSolo", teamOrSolo: prop });
    if (prop === false) {
      console.log("in if statement");
      props.formState("fourth");
      return;
    }
    props.formState("third");
  };
  const backFunc = () => {
    dispatch({ type: "deleteBasicDetailsTwo" });
    props.formState("second");
  };
  return (
    <div className={FormCss.fOnemDiv} id={isLightTheme === false? FormCss.darkform : "darkFormOne"}>
      <div className={FormCss.contDiv}>
        <h1 className={FormCss.H1p} id={isLightTheme === false? FormCss.darktitle: "h1Play"}>
          Playing with a team?
        </h1>
        <div className={FormCss.flexDiv}>
          <button
            onClick={() => dispatchFunc(false)}
            className={FormCss.btn}
            id={isLightTheme === false? FormCss.darknext : "btnN"}
          >
            Going solo
          </button>
          <button
            onClick={() => dispatchFunc(true)}
            className={FormCss.btn}
            id={isLightTheme === false? FormCss.darknext : "marN"}
          >
            Imma team player
          </button>
        </div>
      </div>
      <button onClick={backFunc} className={FormCss.backBtn} id={isLightTheme === false? FormCss.darknext : "btnN"}>
        Back
      </button>
    </div>
  );
};

export default Frame31;
