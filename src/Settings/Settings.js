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
          <h3>Settings</h3>
          <h3>Brand of beer</h3>
          <h3>Price</h3>
          <h3>Currency</h3>
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
