import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NeMoboCss from "./CSS/NavEvent.module.css";

export default function NavEventsMobo(props) {
    return (
        <div className={NeMoboCss.mdiv}>
            <p className={NeMoboCss.mP}>{props.pTag}</p>
            <div className={NeMoboCss.NeMNewDiv}>
                <ArrowBackIosIcon fontSize="small" />
                <p className={NeMoboCss.newP}>{props.new}</p>
            </div>
        </div>
    )
}
