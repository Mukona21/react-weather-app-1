import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Mukona21/react-weather-app-1.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mutshinye Nethengwe
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mukona21/react-weather-app-1.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-wheather-application.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Render
          </a>
        </footer>
      </div>
    </div>
  );
}
