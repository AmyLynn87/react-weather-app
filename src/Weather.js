import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: "Wednesday 07.00",
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            precipitation: 20,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }
    
    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a city..."
                    autoFocus="on"
                  />
                  <button className="input-group-text" type="submit" >
                    <i className="fas fa-search" />
                  </button>
                  <button className="input-group-text">
                    Current City
                  </button>
                  </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                        <img src={weatherData.icon} alt={weatherData.description} className="float-left" />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: {weatherData.precipitation}%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
                </div>
            );
    } else {
        const apiKey="d26532ff8daeb7bfba16a428adc3af08";
        let unit = "metric";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleResponse);    
        return "Loading...";
    }

 
    
}