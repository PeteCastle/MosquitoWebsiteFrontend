import React from "react";
import "./DashboardPage.css";
import { MapIcon } from "../Homepage/MapCoverage/MapIcon";
import { HomeIcon } from "../Homepage/HomeIcon";
import { LiveIcon } from "../Homepage/LiveDashboard/LiveIcon";
import { RecentIcon } from "../Homepage/RecentCaptured/RecentIcon";
import { LocationIcon } from "../Homepage/ActiveSystem/LocationIcon";
import { MapIcon } from "../Homepage/MapCoverage/MapIcon";
import { MainLogo } from "../Homepage/MainLogo";

const DashboardPage = () => {
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

export default DashboardPage;