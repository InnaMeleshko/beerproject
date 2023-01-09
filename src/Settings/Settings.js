import React from "react";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Settings/Settings.scss";
import Switch from "@mui/material/Switch";

const Settings = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div>
      <Header title="Settings" />
      <div className="Container">
        <div className="container-inner">
          <div className="container-block">
            <div>
              <h3>Vibration</h3>
              <p>Turn on/off the vibration when counting</p>
            </div>
            <Switch {...label} defaultChecked color="warning" size="small" />
          </div>

          <div className="container-block">
            <div>
              <h3>Don't tell me</h3>
              <p>Turn on/off the total price</p>
            </div>
            <Switch {...label} defaultChecked color="warning" size="small" />
          </div>

          <div className="container-block">
            <div>
              <h3>Power drinker</h3>
              <p>Show notification after 5 liters of beer</p>
            </div>

            <Switch {...label} defaultChecked color="warning" size="small" />
          </div>

          <div className="container-block">
            <div>
              <h3>History</h3>
              <p>Here you can delete all your data.</p>
            </div>
            <Button variant="outlined" size="small">
              Delete
            </Button>
          </div>
        </div>

        <div className="button-block">
          <Button variant="orange" onClick={goBack}>
            Go back
          </Button>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Settings;
