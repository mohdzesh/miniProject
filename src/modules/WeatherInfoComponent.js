import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../App";
import "../style.css";

export const WeatherInfoIcons = {
  sunset: "/react-weather-app/icons/temp.svg",
  sunrise: "/react-weather-app/icons/temp.svg",
  humidity: "/react-weather-app/icons/humidity.svg",
  wind: "/react-weather-app/icons/wind.svg",
  pressure: "/react-weather-app/icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div className="info-cont">
      <img src={WeatherInfoIcons[name]} className="info-icon" />
      <span className="info-label">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <div className="weather-info">
        <span className="condition">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          <br /> {`${weather?.weather[0].description}`}
        </span>
        <img
          src={WeatherIcons[weather?.weather[0].icon]}
          className="wea-icon"
        />
      </div>
      <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

      <h1 className="wea-label">Weather Info</h1>
      <div className="wea-info">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </div>
      <button onClick={() => window.location.reload(false)} className="wea-btn">
        <img src="/react-weather-app/icons/left.png" className="back-icon" />{" "}
        Back
      </button>
    </>
  );
};

export default WeatherComponent;
