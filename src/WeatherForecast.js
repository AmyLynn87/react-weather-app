import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);



function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}


if(loaded) {
    console.log(forecast);
    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if(index < 5) {
                        return (
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                     </div>);
                    } else {
                        return null;
                    }
                })}
               
            </div>
        </div>
    );
 } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let unit = "metric";
    let apiKey ="5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    
    axios.get(apiUrl).then(handleResponse);
    return null;
 }

}