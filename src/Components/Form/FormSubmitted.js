import React from "react";
import { Link } from "react-router-dom";
import FSubCss from "./CSS/SubmitForm.module.css";

import img0 from "./../../ReqImg/Rectangle.jpg";
import img1 from "./../../ReqImg/twitter.png";
import img2 from "./../../ReqImg/linkedin.png";
import img3 from "./../../ReqImg/instagram.png";
import { useSelector } from "react-redux";
const FormSubmitted = () => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div className={FSubCss.fOnemDiv} id={isLightTheme === false? FSubCss.darkform : "darkFormOne"}>
      <div className={FSubCss.mCOnDiv}>
        <p className={FSubCss.ThanksP}>
          Thanks for apibus vitae blandit nisl massa habitasse. Dignissim enim,
          vitae, massa consectetur!!
        </p>
        <img src={img0} alt="tick" />
        <Link to="" className={FSubCss.LinkTweet}>
          Tweet about this event
        </Link>
        <div className={FSubCss.socialDiv}>
          <p className={FSubCss.followP}>Follow us on</p>
          <div className={FSubCss.socialIconsDiv}>
            <img src={img1} alt="" className={FSubCss.socialIcons} />
            <img src={img2} alt="" className={FSubCss.socialIcons} />
            <img src={img3} alt="" className={FSubCss.socialIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmitted;
