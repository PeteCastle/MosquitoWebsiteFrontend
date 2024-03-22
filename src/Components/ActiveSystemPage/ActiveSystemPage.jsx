import React from "react";
import "./ActiveSystemPage.css";
import { MainLogo } from "../Homepage/MainLogo";
import { HomeIcon } from "../Homepage/HomeIcon";
import { LiveIcon } from "../Homepage/LiveDashboard/LiveIcon";
import { RecentIcon } from "../Homepage/RecentCaptured/RecentIcon";
import { LocationIcon } from "../Homepage/ActiveSystem/LocationIcon";
import { MapIcon } from "../Homepage/MapCoverage/MapIcon";

const ActiveSystemPage = () => {
    return (
        <div>
         <MainLogo />
            <HomeIcon />
            <LiveIcon />
            <RecentIcon />
            <LocationIcon />
            <MapIcon /> 
        </div>
    );
}

export default ActiveSystemPage;