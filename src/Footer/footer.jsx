import "../Footer/Footer.scss";
import React from "react";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <Link to="/history" className="Icon-information">
          <AccessTimeOutlinedIcon
            color="primary"
            fontSize="large"
          ></AccessTimeOutlinedIcon>
          <h3>History</h3>
        </Link>

        <Link to="/" className="Icon-information">
          <SportsBarOutlinedIcon
            color="primary"
            fontSize="large"
          ></SportsBarOutlinedIcon>
          <h3>BeerApp</h3>
        </Link>

        <Link to="/settings" className="Icon-information">
          <SettingsOutlinedIcon
            color="primary"
            fontSize="large"
          ></SettingsOutlinedIcon>
          <h3>Settings</h3>
        </Link>

        <div className="Icon-information">
          <Link to="/about" className="Icon-information">
            <InfoOutlinedIcon
              color="primary"
              fontSize="large"
            ></InfoOutlinedIcon>
            <h3>About</h3>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
