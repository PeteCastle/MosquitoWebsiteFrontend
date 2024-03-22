import React from "react";
import recentIcon from "../../Assets/recenticon.png";

export const RecentIcon = () => {
    return (
        <div className="recent-icon-image">
            <img className="recent-icon" alt="Recent Icon" src={recentIcon} />
        </div>
    );
}