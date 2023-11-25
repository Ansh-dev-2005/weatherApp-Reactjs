/**
 * Main application component.
 * @module App
 * @returns {React.Element} The rendered React element.
 */
import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank">Ansh Garg</a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
