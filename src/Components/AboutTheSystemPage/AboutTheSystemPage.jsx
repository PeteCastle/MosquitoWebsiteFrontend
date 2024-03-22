import React from "react";
import "./CoverageAreaPage.css";
import { MainLogo } from "../Homepage/MainLogo";
import { HomeIcon } from "../Homepage/HomeIcon";
import { LiveIcon } from "../Homepage/LiveDashboard/LiveIcon";
import { RecentIcon } from "../Homepage/RecentCaptured/RecentIcon";
import { LocationIcon } from "../Homepage/ActiveSystem/LocationIcon";
import { MapIcon } from "../Homepage/MapCoverage/MapIcon";

const AboutTheSystemPage = () => {
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

export default AboutTheSystemPage;