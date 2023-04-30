import React from "react";
import "./DateDescription.css";

export default function DateDescription() {
  let timeDescriptionData = {
    date: "Saturday 16:57",
    description: "broken clouds",
  };

  return (
    <div className="DateDescription">
      <h2>
        {timeDescriptionData.date}, {timeDescriptionData.description}
      </h2>
    </div>
  );
}
