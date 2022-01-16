import React from "react";
import { useDispatch } from "react-redux";

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
    <div>
      <h1>Playing with a team?</h1>
      <button onClick={() => dispatchFunc("solo")}>Going solo</button>
      <button onClick={() => dispatchFunc("team")}>Imma team player</button>
      <button onClick={backFunc}>back</button>
    </div>
  );
};

export default Frame31;
