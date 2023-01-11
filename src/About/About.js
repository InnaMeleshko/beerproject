import React from "react";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      <Header title="About " />

      <div className="Container">
       
          <div>
            <h3 style={{marginBottom: '3em'}}>Made by Inna Meleshko</h3>
          </div>
          <div>
            <Button variant="orange" onClick={goBack}>
              Go back
            </Button>
          </div>
       
      </div>
      <Footer  />
    </div>
  );
};
export default About;
