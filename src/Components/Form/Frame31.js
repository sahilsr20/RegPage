import React from "react";
import FormCss from "./CSS/FormOne.module.css";
import { useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Frame31 = (props) => {
  const dispatch = useDispatch();
  const dispatchFunc = (prop) => {
    dispatch({ type: "teamOrSolo", teamOrSolo: prop });
    if (prop === "solo") {
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
    <div className={FormCss.fOnemDiv} id="darkFormOne">
      <div className={FormCss.contDiv}>
        <h1 className={FormCss.H1p} id="h1Play">
          Playing with a team?
        </h1>
        <div className={FormCss.flexDiv}>
          <button
            onClick={() => dispatchFunc("solo")}
            className={FormCss.btn}
            id="btnN"
          >
            Going solo
          </button>
          <button
            onClick={() => dispatchFunc("team")}
            className={FormCss.btn}
            id="marN"
          >
            Imma team player
          </button>
        </div>
      </div>
      <button onClick={backFunc} className={FormCss.backBtn} id="btnN">
        Back
      </button>
      <button onClick={backFunc} className={FormCss.backBtnMobo} id="btnN">
        <ArrowBackIcon />
      </button>
    </div>
  );
};

export default Frame31;
