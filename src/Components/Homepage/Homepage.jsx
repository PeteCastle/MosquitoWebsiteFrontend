import React from "react";
import "./Homepage.css";
import { MainLogo } from "./MainLogo"; 
import { DashboardThumbnail } from "./LiveDashboard/LiveDashboard";
import { SystemAboutThumbnail } from "./SystemAbout/SystemAbout";
import { RecentCapturedThumbnail } from "./RecentCaptured/RecentCaptured"; 
import { ActiveSystemThumbnail } from "./ActiveSystem/ActiveSystem";   
import { MapCoverageThumbnail } from "./MapCoverage/MapCoverage";  

const Homepage = () => {
    return (
     <div>
        <MainLogo />
        <DashboardThumbnail />
        <SystemAboutThumbnail />
        <RecentCapturedThumbnail />
        <ActiveSystemThumbnail />
        <MapCoverageThumbnail />
     </div>

    );
}       
export default Homepage;
