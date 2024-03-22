import React from "react";
import "./MapCoverage.css";
import { MapIcon } from './MapIcon';

export const MapCoverageThumbnail = () => {
    return (
        <div className="map-coverage-thumbnail">
            <div className="text-wrapper">SCALE<div />
            <div className= "map-coverage">
            Map Coverage of the Deployed Devices
            </div>
            <MapIcon />
            </div>
        </div>
    );
}


