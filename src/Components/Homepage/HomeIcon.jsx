import React from "react";
import "./Homepage.css";
import homeIcon from "../Assets/homeicon.png";

export const HomeIcon = () => {
    return (
        <div className="home-icon-image">
            <img className="home-icon" alt="Home Icon" src={homeIcon} />
        </div>
    );
}