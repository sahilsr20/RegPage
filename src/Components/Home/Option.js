import "./CSS/Footer.css";
import "./CSS/a.css";
import React from "react";
const Option = (props) => {
    return ( <div>
        < button className="button"> { props.option } </button>
         </div>
    );
};
export default Option;