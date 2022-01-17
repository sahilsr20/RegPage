import React from 'react'
import NavEventsDiv from "./NavEventsDiv";
import NavEventsMobo from './NavEventsMobo';
import "./CSS/MoboPop.css";

export default function NavMobo() {
    const btnClose = async function (e) {
        document.getElementById('mDiv').style.display = "none";
        document.getElementById('hideImg').style.opacity = "1";
    }
    return (
        <div id='mDiv'>
            <div className="cont">
                <div className="closeBtnDiv">
                    <button onClick={btnClose} className="closeBtnMobo">X</button>
                </div>
                <div>
                    <NavEventsMobo pTag="Events" new="New!" />
                    <p className="EventP">Podcasts</p>
                    <p className="EventP">Blogs</p>
                    <p className="EventP">Our Team</p>
                    <p className="EventP">Join us</p>
                    <NavEventsMobo pTag="Design System" new="New!" />
                </div>
            </div>
        </div>
    )
}
