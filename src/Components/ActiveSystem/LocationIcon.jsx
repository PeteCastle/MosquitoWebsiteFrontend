import React from "react";
import locationIcon from "../Assets/locationicon.png";

export const LocationIcon = () => {
    return (
        <div className="location-icon-image">
            <img className="location-icon" alt="Location Icon" src={locationIcon} />
        </div>
    );
}