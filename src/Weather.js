import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "Bolzano",
    country: "IT",
    temperature: 21,
    date: "Wednesday 10:48",
    description: "few clouds",
    imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    humidity: 59,
    wind: 1,
  };

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <div className="overview">
            <div className="row" id="information">
              <div className="col-6 date">
                <ul>
                  <li>Last updated: {weatherData.date}</li>
                  <br />
                  <li>{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6 temperature-section">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    id="icon"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong>{weatherData.temperature}</strong>
                    <span className="units">
                      <a href="/" id="celsius-link" className="active">
                        °C
                      </a>
                      |
                      <a href="/" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
