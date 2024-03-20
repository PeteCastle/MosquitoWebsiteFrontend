import React from "react";
import "./ActiveSystem.css";
import { LocationIcon } from './LocationIcon';

export const ActiveSystemThumbnail = () => {
    return (
        <div className="active-system-thumbnail">
            <div className="text-wrapper">SCALE<div />
            <div className= "active-system">
            Active Mosquito Detection and Fumigation System
            </div>
            <LocationIcon />
            </div>
        </div>
    );
}

