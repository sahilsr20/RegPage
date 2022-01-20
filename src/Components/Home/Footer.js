import React from "react";
import Option from "./../Form/Option";
import FCss from "./CSS/Footer.module.css";
import img0 from "./../../ReqImg/FedLogo.svg";
import "./CSS/MoboPop.css";

import img4 from "./../../ReqImg/instagram.png";
import img1 from "./../../ReqImg/linkedinF.png";
import img2 from "./../../ReqImg/spotify.png";
import img3 from "./../../ReqImg/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className={FCss.LogoDiv}>
        <div className={FCss.logomDiv}>
          <img src={img0} alt="" className={FCss.Img} id="hideImg" />
          <p className={FCss.fedN}>FED</p>
        </div>
        <div className={FCss.socialMobo}>
          <div className={FCss.flex1}>
            <img src={img4} alt="" className={FCss.socialIcons} id="hideImg" />
            <img src={img1} alt="" className={FCss.socialIcons} id="hideImg" />
            <img src={img2} alt="" className={FCss.socialIcons} id="hideImg" />
            <img
              src={img3}
              alt=""
              className={FCss.socialIconsLast}
              id="hideImg"
            />
          </div>
        </div>
      </div>
      <div className={FCss.mailMobo}>
        <label for="email" className={FCss.newLet}>
          Newsletter
        </label>
        <div className={FCss.emailDivMobo}>
          <input
            type="email"
            placeholder="Enter your email"
            className={FCss.impEmail}
          />
          <button className={FCss.getBtn}>Get Started</button>
        </div>
      </div>
      <div className={FCss.main}>
        <div className={FCss.leftDiv}>
          <ul>
            <li className={FCss.bold}>Company</li>
            <li>About</li>
            <li>Newsroom</li>
            <li>contact</li>
            <li>Carrers</li>
          </ul>
          <ul>
            <li className={FCss.bold}>About Us</li>
            <li>Manifesto</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Partnerships</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li className={FCss.bold}>Services</li>
            <li>Startups</li>
            <li>Corporates</li>
            <li>Investors</li>
            <li>Governments</li>
            <li>Incubators </li>
            <li>Accelerators</li>
          </ul>
          <ul>
            <li className={FCss.bold}>Help</li>
            <li>Accessibility statement</li>
            <li>Startup Support</li>
            <li>Coporate Support</li>
            <li>System Status</li>
          </ul>
        </div>
        <div className={FCss.rightDiv}>
          <div className={FCss.social}>
            <p className={FCss.bold}>Social</p>
            <div className={FCss.flex1}>
              <img
                src={img4}
                alt=""
                className={FCss.socialIcons}
                id="hideImg"
              />
              <img
                src={img1}
                alt=""
                className={FCss.socialIcons}
                id="hideImg"
              />
              <img
                src={img2}
                alt=""
                className={FCss.socialIcons}
                id="hideImg"
              />
              <img
                src={img3}
                alt=""
                className={FCss.socialIcons}
                id="hideImg"
              />
            </div>
          </div>

          <div className={FCss.mail}>
            <label for="email" className={FCss.newLet}>
              Newsletter
            </label>
            <div className={FCss.emailDiv}>
              <input
                type="email"
                placeholder="Enter your email"
                className={FCss.impEmail}
              />
              <button className={FCss.getBtn}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className={FCss.footerTail}>
        <div className={FCss.leftDivTail}>
          <p>Made with ❤️</p>
          <p>from Federation of Entrepreneurship Development </p>
        </div>
        <div className={FCss.rightDivTail}>
          <p>To boost the confidence of aspiring entrepreneurs worldwide.</p>
          <p>Together we can change the world.</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
