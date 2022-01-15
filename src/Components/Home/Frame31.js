import "./CSS/a.css";
import React from "react";
import Option from "./Option";

const Frame31 = () => {
  return (
    <form>
     <p>Playing with a team?</p>
      <div className="flex">
      <Option  option="Going Solo"  />
      <Option option="Imma team player" />
      </div>
    </form>
  );
};
export default Frame31;