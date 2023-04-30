import React from "react";
import "./styles.css";

export default function CurrentTemp() {
  let currentTempData = {
    temp: 19,
    unit: "°C",
  };

  return (
    <div className="CurrentTemp">
      <span>{currentTempData.temp}</span>
      <span className="unit">{currentTempData.unit}</span>
    </div>
  );
}
