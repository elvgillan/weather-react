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
      </a>{" "}
      and{" "}
      <a
        href="https://prismatic-melomakarona-ab7f07.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </div>
  );
}
