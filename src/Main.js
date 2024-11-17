import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import App1 from "./App1";
import Admin from "./Admin";

export default function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}
