import React from "react";
import Option from "./Option";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
return(
    <footer>
        <ul>
            <li className="bold">Company</li>
            <li>About</li>
            <li>contact</li>
            <li>Carrers</li>
        </ul>
        <ul>
            <li className="bold">About Us</li>
            <li>Manifesto</li>
            <li>Investors</li>
            <li>Partnerships</li>
            <li>Blog</li>
        </ul>
        <ul>
            <li className="bold">Services</li>
            <li>Startups</li>
            <li>Corporates</li>
            <li>Incubators </li>
            <li>Accelerators</li>
        </ul>
        <ul>
            <li className="bold">Help</li>
            <li>Accessibility</li>
            <li>Startup Support</li>
            <li>Coporate Support</li>
            <li>System Status</li>
        </ul>
        <div>
            <p>Social</p>
            <div className="flex">
                <InstagramIcon/>
                <LinkedInIcon/>
                <YouTubeIcon/>
            </div> 

        </div>

        <div>
         <label for="email">Newsletter</label>
        <form >
        <input type="email" name="emaiil"  />
        <Option option = "submit"/>
        </form>
        </div>
        
        
    </footer>
);
};
export default Footer;