import React from "react";
import "./styles.css";

export default function Conditions() {
  let conditionsData = {
    humidity: 83,
    wind: 9,
  };

  return (
    <div className="Conditions">
      <ul>
        <li className="phw">Humidity: {conditionsData.humidity}%</li>
        <li className="phw">Wind: {conditionsData.wind}km/hr</li>
      </ul>
    </div>
  );
}
