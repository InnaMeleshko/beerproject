import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import History from "./History";
import Settings from "./Settings";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/beerproject">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
