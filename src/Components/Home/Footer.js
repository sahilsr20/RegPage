import "./CSS/Footer.css";
import React from "react";
import Option from "./Option";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
return(
    <footer>
        <div className="main">

        <ul >
            <li className="bold">Company</li>
            <li>About</li>
            <li>Newsroom</li>
            <li>contact</li>
            <li>Carrers</li>
        </ul>
        <ul >
            <li className="bold">About Us</li>
            <li>Manifesto</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Partnerships</li>
            <li>Blog</li>
        </ul>
        <ul >
            <li className="bold">Services</li>
            <li>Startups</li>
            <li>Corporates</li>
            <li>Investors</li>
            <li>Governments</li>
            <li>Incubators </li>
            <li>Accelerators</li>
        </ul>
        <ul >
            <li className="bold">Help</li>
            <li>Accessibility statement</li>
            <li>Startup Support</li>
            <li>Coporate Support</li>
            <li>System Status</li>
        </ul>
        </div>
        <div className="social">
            <p className="bold">Social</p>
            <div className="flex1">
                <InstagramIcon/>
                <LinkedInIcon/>
                <YouTubeIcon/>
            </div> 

        </div>

        <div className="mail">
         <label for="email" className="bold">Newsletter</label>
        <form >
        <input type="email" name="emaiil"  />
        <Option option = "submit"/>
        </form>
        </div>
        
        
    </footer>
);
};
export default Footer;