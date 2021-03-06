import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WindDescription from "./WindDescription";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm ">
          <div className="d-flex">
            <div className="float-left weather-icon">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature temperature={props.data.temperature} celsius={props.celsius} fahrenheit={props.fahrenheit} />
            </div>
          </div>
        </div>
        <div className="col-sm">
        
            <p className="m-0">Humidity: {props.data.humidity}%</p>
            <p className="m-0">Wind: {props.data.wind} km/h</p>
        <WindDescription windSpeed={props.data.wind} />
        </div>
      </div>
    </div>
  );
}