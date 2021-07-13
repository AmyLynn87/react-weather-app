import React from "react";

export default function WeatherTemperature(props) {
  
  if(props.celsius === "celsius") {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.temperature)} °C </span>
      </div>
  );
 } else if (props.fahrenheit === "fahrenheit") {
  let fahrenheit = (props.temperature*9/5) + 32;
   return (
    <div className="WeatherTemperature">
    <span className="temperature">{Math.round(fahrenheit)} °F</span>
  </div>
   );
 }
}