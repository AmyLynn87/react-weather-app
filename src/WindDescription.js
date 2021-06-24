import React from "react";
import "./WindDescription.css"

export default function WindDescription(props) {
    let wind = props.windSpeed;
    
    if(wind <= 5) {
        return (
            <p className="lightAir">Light Air</p>
        );
    } else if (wind <= 11) {
        return (
            <p className="lightBreeze">Light breeze</p>
        );
    } else if (wind <= 19) {
        return (
            <p className="gentleBreeze">Gentle breeze</p>
        );
    } else if (wind <= 29) {
        return (
            <p className="mediumBreeze">Medium breeze</p>
        );
    } else if (wind <= 39) {
        return (
            <p className="freshBreeze">Fresh breeze</p>
        );
    } else if (wind <= 50) {
        return (
            <p className="strongBreeze">Strong breeze</p>
        );
    } else if (wind <= 61) {
        return (
            <p className="mediumGale">Medium gale</p>
        );
    } else if (wind <= 74) {
        return (
            <p className="freshGale">Fresh gale</p>
        );
    } else if (wind <= 87) {
        return (
            <p className="strongGale">Strong gale</p>
        );
    } else if (wind <= 101) {
        return (
            <p className="fullGale">Full gale</p>
        );
    } else if (wind <= 116) {
        return (
            <p className="storm">Storm</p>
        );
    } else if (wind > 116) {
        return (
            <p className="hurricane">Hurricane</p>
        );
    } else {
        return null;
    }
}