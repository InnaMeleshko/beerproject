import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Settings = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="Container">
      <Header title="Settings" />
      <div className="Container-inner">
        <div>
          <div>
            <h3>Vibration</h3>
            <p>Turn on/off the vibration when counting</p>
            <button></button>
          </div>
          <div>
            <h3>Price and Currency</h3>
          </div>
          <div>
            <h3>Don't tell me</h3>
            <p>Turn on/off the tottal price</p>
            <button></button>
          
          </div>
         
          
        </div>
        <div>
          <Button variant="orange" onClick={goBack}>
            Go back
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Settings;
