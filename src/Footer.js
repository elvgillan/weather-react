import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a href="https://www.linkedin.com/in/eringillan/" target="_blank">
        Erin Gillan
      </a>{" "}
      and is{" "}
      <a href="https://github.com/elvgillan/my-weather-app" target="_blank">
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a href="https://dreamy-visvesvaraya-8d7417.netlify.app/" target="_blank">
        hosted on Netlify
      </a>
    </div>
  );
}
