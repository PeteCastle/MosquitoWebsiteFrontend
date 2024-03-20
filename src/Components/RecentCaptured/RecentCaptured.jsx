import React from "react";
import "./RecentCaptured.css";
import { RecentIcon } from './RecentIcon';

export const RecentCapturedThumbnail = () => {
    return (
        <div className="recent-captured-thumbnail">
            <div className="text-wrapper">SCALE<div />
            <div className= "recent-captured">
            Recent Captured 
            </div>
            <RecentIcon />
            </div>
        </div>
    );
}

