import React from 'react'
import "./CSS/MoboPop.css";

export default function NavMobo() {
    const btnClose = async function (e) {
        document.getElementById('mDiv').style.display = "none";
        document.getElementById('hideImg').style.opacity = "1";
    }
    return (
        <div id='mDiv'>
            <div className="cont">
                <div>
                    <button onClick={btnClose}>X</button>
                </div>
            </div>
        </div>
    )
}
