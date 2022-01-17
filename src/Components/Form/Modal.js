import React, { useState } from "react";
import "./CSS/modal.css";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Frame31 from "./Frame31";
import FormFour from "./FormFour";
import FormSubmitted from "./FormSubmitted";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const [form, setForm] = useState("first");
  const closeModal = () => {
    localStorage.clear();
    props.modal(false);
  };

  return (
    <div className="backdrop">
      <div
        className="modal-card"
        id={isLightTheme === false ? "darkmodal" : ""}
      >
        {form === "first" && <FormOne formState={setForm} />}
        {form === "second" && <FormTwo formState={setForm} />}
        {form === "frame31" && <Frame31 formState={setForm} />}
        {form === "third" && <FormThree formState={setForm} />}
        {form === "fourth" && <FormFour formState={setForm} />}
        {form === "submitted" && <FormSubmitted />}
        <button onClick={closeModal}>
          <HighlightOffIcon fontSize="large" className="closeBtn" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
