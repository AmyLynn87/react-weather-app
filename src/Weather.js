import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";


export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        });
    }

function handleSumbit(event) {
        event.preventDefault();
        search();
    
    }
function updateCity(event) {
        setCity(event.target.value);
        }

function search() {
    const apiKey="d26532ff8daeb7bfba16a428adc3af08";
    let unit = "metric";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);    
}
    



    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSumbit}>
                    <div className="input-group">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Enter a city..."
                    autoFocus="on"
                    onChange={updateCity}
                  />
                  <button className="input-group-text" type="submit" >
                    <i className="fas fa-search" />
                  </button>
                  <button className="input-group-text">
                    Current City
                  </button>
                  </div>
                </form>
                <WeatherInfo data={weatherData} />
                </div>
                );                
    } else {
        search();
        return "Loading...";
    }

 
    
}