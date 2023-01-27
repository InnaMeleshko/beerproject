import React, { useState } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home";
import theme from "../src/Theme";
import { ThemeProvider } from "@mui/material/styles";
import History from "./History/History";
import Settings from "./Settings/Settings";

import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About/About";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [counter2, setCounter2] = useState(0);

  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  };

  const [counter3, setCounter3] = useState(0);

  const handleClick3 = () => {
    setCounter3(counter3 + 1);
  };

  const [total, setTotal] = useState(0);

  const handlTotal = (volume) => {
    setTotal(total + volume);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handlTotal={handlTotal}
                  handleClick2={handleClick2}
                  handleClick3={handleClick3}
                  handleClick={handleClick}
                  total={total}
                  counter={counter}
                  counter2={counter2}
                  counter3={counter3}
                />
              }
            />
            <Route
              path="/history"
              element={
                <History
                  counter={counter}
                  counter2={counter2}
                  counter3={counter3}
                  total={total}
                />
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
