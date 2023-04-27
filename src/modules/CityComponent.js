import React, { useState } from "react";
import "../style.css";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  const [txt, setTxt] = useState("");

  const twocalls = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    updateCity(result);
    setTxt(result);
  };

  return (
    <>
      <img className="weather-logo" src="/react-weather-app/icons/home.png" />
      <h1 className="citylabel">Find Weather of your city</h1>
      <div className="search-form" tabIndex="0">
        <form onSubmit={fetchWeather} className="search">
          <input
            type="text"
            id="textbox"
            onChange={twocalls}
            placeholder="City"
            autoFocus
            required
            className="input-search"
            maxLength="15"
            name="onlyalphabet"
            value={txt}
          />
          <div id="notification"></div>
          <button type={"submit"} className="search-btn">
            Search
          </button>
        </form>
      </div>
    </>
  );
};
export default CityComponent;
