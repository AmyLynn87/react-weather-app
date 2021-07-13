import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

function maxTemperatureCelsius() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
}

function minTemperatureCelsius() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
}


function maxTemperatureFahrenheit() {
    let temperature = Math.round(props.data.temp.max);
    let fahrenheit = Math.round((temperature*9/5) + 32);
    return `${fahrenheit}°`;
}

function minTemperatureFahrenheit() {
    let temperature = Math.round(props.data.temp.min);
    let fahrenheit = Math.round((temperature*9/5) + 32);
    return `${fahrenheit}°`;
}



function day() {
let date = new Date(props.data.dt * 1000);
let day = date.getDay();

let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

return days[day];

}

if(props.celsius === "celsius") 
{
    return  (
<div className="WeatherForecastDay">
    <div className="WeatherForecast-day">{day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size={36} /> 
    <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemperatureCelsius()}</span>
        <span className="WeatherForecast-temperature-min">{minTemperatureCelsius()}</span>
        </div>
        </div>
        );
    } else if(props.fahrenheit === "fahrenheit") {
        return(
        <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} /> 
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{maxTemperatureFahrenheit()}</span>
            <span className="WeatherForecast-temperature-min">{minTemperatureFahrenheit()}</span>
            </div>
            </div>
            ); 
    }
}