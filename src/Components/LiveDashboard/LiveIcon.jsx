import React from "react";
import liveIcon from "../Assets/liveicon.png";

export const LiveIcon = () => {
    return (
        <div className="live-icon-image">
            <img className="live-icon" alt="Live Icon" src={liveIcon} />
        </div>
    );
}