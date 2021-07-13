import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherCuriosity from "./WeatherCuriosity";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [celsius, setCelsius] = useState("celsius");
  const [fahrenheit, setFahrenheit] = useState("");


  function findCurrentCityWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "d26532ff8daeb7bfba16a428adc3af08";
    let units = "metric";
    let apiEndpoint ="https://api.openweathermap.org/data/2.5/weather"
    let apiUrl =`${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCoordinates(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findCurrentCityWeather);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleCelsius(event) {
    event.preventDefault();
    setCelsius("celsius");
    setFahrenheit(null);
  }

  function handleFahrenheit(event) {
    event.preventDefault();
    setFahrenheit("fahrenheit");
    setCelsius(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
        <div className="input-group">
<input
    type="search"
    className="form-control"
    placeholder="Enter a city..."
    autoFocus="on"
    onChange={handleCityChange}
  />
  <button className="input-group-text" onClick={handleCelsius}>
    °C
  </button>
  <button className="input-group-text" onClick={handleFahrenheit}>
    °F
  </button>

  <button className="input-group-text" type="submit" >
    <i className="fas fa-search" />
  </button>
  <button className="input-group-text" onClick={handleCoordinates}>
    Current City
  </button>
  </div>
        </form>
        <WeatherInfo data={weatherData} celsius={celsius} fahrenheit={fahrenheit} />
        <WeatherForecast coordinates={weatherData.coordinates} celsius={celsius} fahrenheit={fahrenheit} />
        <WeatherCuriosity coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}