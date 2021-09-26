import React, { useState } from "react";
import "./Weather.css";

export default function SearchEngine() {
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
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("Bolzano");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Search a city.."
            className="form-control"
            id="city-input"
            autoComplete="off"
            onChange={changeCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-dark w-100" />
        </div>
      </div>

      <div className="overview">
        <h1>
          {message}, {weatherData.country}
        </h1>
      </div>
    </form>
  );
}
