import React from "react";
import "./Homepage.css";
import mainLogo from "../Assets/mainlogo.png";

export const MainLogo1 = () => {
    return (
        <div className="main-logo-image">
            <img className="main-logo" alt="Main Logo" src={mainLogo} />
        </div>
    );
}