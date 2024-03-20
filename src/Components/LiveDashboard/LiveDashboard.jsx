import React from "react";
import "./LiveDashboard.css";
import { LiveIcon } from './LiveIcon';

export const DashboardThumbnail = () => {
    return (
        <div className="dashboard-thumbnail">
            <div className="text-wrapper">SCALE<div />
            <div className= "live-dashboard">
            Live Dashboard 
            </div>
            <LiveIcon />
            </div>
        </div>
    );
}


