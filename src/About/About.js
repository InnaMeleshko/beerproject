import React from "react";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="Container">
      <Header title="About " />
      <div className="Main">
        <div className="Container-inner">
          <div>
            <h3>Made by Inna Meleshko</h3>
          </div>
          <div>
            <Button variant="orange" onClick={goBack}>
              Go back
            </Button>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: "auto" }} />
    </div>
  );
};
export default About;
