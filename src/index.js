import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import History from "./History";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/beerproject">
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/about">
        <About />
      </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
