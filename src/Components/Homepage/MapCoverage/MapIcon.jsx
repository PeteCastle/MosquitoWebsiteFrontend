import React from "react";
import mapIcon from "../../Assets/mapicon.png";

export const MapIcon = () => {
    return (
        <div className="map-icon-image">
            <img className="map-icon" alt="Map Icon" src={mapIcon} />
        </div>
    );
}