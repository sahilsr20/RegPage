import React from 'react'
import NmCssMobile from './CSS/NavMobile.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img0 from "./../../ReqImg/FedLogo.svg";
import img1 from "./../../ReqImg/darkmodeBtn.png";

export default function NavMobile() {
    const hamTog = async function (e) {
        if (document.getElementById("mDiv")) {
            document.getElementById("mDiv").style.display = "block";
        } else {
            document.getElementById("darkModeNavMobo").style.display = "block";
        }
    };
    const dispatch = useDispatch();
    const isLightTheme = useSelector((state) => state.isLightTheme);
    const toggleLightMode = () => {
        dispatch({ type: "toggleTheme" });
    };
    return (
        <nav className={NmCssMobile.NavmDiv}>
            <div className={NmCssMobile.hamburgwerDiv} onClick={hamTog}>
                <div
                    className={NmCssMobile.hamLine1}
                    id={isLightTheme === false ? "darkModeHam" : ""}
                ></div>
                <div
                    className={NmCssMobile.hamLine2}
                    id={isLightTheme === false ? "darkModeHam" : ""}
                ></div>
                <div
                    className={NmCssMobile.hamLine3}
                    id={isLightTheme === false ? "darkModeHam" : ""}
                ></div>
            </div>
            <div>
                <img src={img0} alt="" />
            </div>
            <div>
                <div>
                    <img
                        id={isLightTheme === false ? "darkModeImg" : ""}
                        src={img1}
                        alt="LightDarkImg"
                        className={NmCssMobile.LightDarkImg}
                        onClick={toggleLightMode}
                    />
                </div>
            </div>
        </nav>
    )
}
