import React, { useState } from "react";
import "./CSS/modal.css";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Frame31 from "./Frame31";
import FormFour from "./FormFour";
import FormSubmitted from "./FormSubmitted";

const Modal = (props) => {
  const [form, setForm] = useState("first");
  const closeModal = () => {
    localStorage.clear();
    props.modal(false);
  };

  return (
    <div className="backdrop">
      <div className="modal-card">
        {form === "first" && <FormOne formState={setForm} />}
        {form === "second" && <FormTwo formState={setForm} />}
        {form === "frame31" && <Frame31 formState={setForm} />}
        {form === "third" && <FormThree formState={setForm} />}
        {form === "fourth" && <FormFour formState={setForm} />}
        {form === "submitted" && <FormSubmitted />}
        <button onClick={closeModal}>close modal</button>
      </div>
    </div>
  );
};

export default Modal;
