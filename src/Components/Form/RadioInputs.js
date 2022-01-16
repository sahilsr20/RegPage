import React from "react";

const RadioInput = (props) => {
  return (
    <div>
      <input
        type="radio"
        name={props.name}
        id={props.value}
        value={props.value}
      ></input>
      <label htmlFor={props.value}>{props.value}</label>
    </div>
  );
};

const RadioInputs = React.forwardRef((props, ref) => {
  // let prop = props.ref;
  // question and radioList
  // console.log(props.radioList);
  return (
    <div>
      <h2>{props.question}</h2>
      <form ref={ref}>
        {props.radioList.map((value) => {
          return <RadioInput key={value} value={value} name={props.question} />;
        })}
      </form>
    </div>
  );
});

export default RadioInputs;
