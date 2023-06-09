import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function CurrentCity(props) {
  return (
    <div className="currentCity">
      <div className="text-center mt-5">
        <h1>{props.weatherData.city}</h1>
        <h5 className="mb-2 mt-3">
          Last updated at <FormattedDate date={props.weatherData.date} />
        </h5>
        <p className="text-capitalize">
          <em>{props.weatherData.description}</em>
        </p>
        <div className="row mt-5">
          <div className="col-6  position-relative">
            <img
              className="position-absolute"
              src={props.weatherData.icon}
              alt={props.weatherData.description}
            />
          </div>
          <div className="col-6">
            <TemperatureConversion celsius={props.weatherData.temperature} />
          </div>
        </div>
        <ul className="mt-5">
          <li>Humidity: {props.weatherData.humidity}%</li>
          <li>Wind: {props.weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
