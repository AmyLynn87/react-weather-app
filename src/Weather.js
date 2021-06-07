import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
    <div className="Weather">
        <form>
            <div className="input-group">
        <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
          />
          <button className="input-group-text" type="submit" >
            <i className="fas fa-search" />
          </button>
          <button className="input-group-text">
            Current City
          </button>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07.00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy" />
            6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 13 km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
}