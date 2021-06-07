import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather />
      <footer>
        This project is created by <a href="https://www.elisacrescentini.dev" target="_blank" rel="noreferrer noopener" title="Elisa Crescentini portfolio">Elisa Crescentini</a> and is {" "} 
        <a href="https://github.com/AmyLynn87/react-weather-app" target="_blank" rel="noreferrer noopener" title="Weather app with React repository on GitHub">open-sourced</a> on GitHub.
      </footer>
      </div>
    </div>
  );
}


