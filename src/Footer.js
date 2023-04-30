import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/eringillan/"
        target="_blank"
        rel="noreferrer"
      >
        Erin Gillan
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/elvgillan/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
    </div>
  );
}
