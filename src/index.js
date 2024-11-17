import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App1";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import Admin from "./Admin";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
