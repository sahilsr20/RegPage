import React from 'react';
import Nav from '../Components/Home/Nav';
import Footer from '../Components/Home/Footer';
import Construction from '../ReqImg/construction.jpg';
import darkConstruct from '../ReqImg/darkConstruct.png';
import { useSelector } from "react-redux";
import './CSS/Construct.css';
import construct from '../ReqImg/const.svg'; 

export default function Construct() {
    const isLightTheme = useSelector((state) => state.isLightTheme);
  return <div>
      <Nav></Nav>
      <div id={isLightTheme === false ? "darkModeConst" : "lightConst"}>
        <img 
        src={construct} alt="SITE UNDER CONSTRUCTION" id="imgConst"/>
      </div>
      <Footer></Footer>
  </div>;
}
