import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import VolumeLabel from "../VolumeLabel/VolumeLabel";

const History = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const counter2 = props.counter2;
  const counter3 = props.counter3;
  const counter = props.counter;
  const total = props.total;

  return (
    <div>
      <Header title="Drinking history" />

      <div className="Container">
        <div className="Buttons-container">
          <div className="Buttons-block">
            <h3 style={{marginRight: '2em'}}>Numbers of beers</h3>
            <VolumeLabel volume={counter + counter2 + counter3} />
          </div>

          <div className="Buttons-block">
            <h3>Final volume</h3>
            <VolumeLabel label={"U had " + total + " liters "} />
          </div>
        </div>

        <Button variant="orange" onClick={goBack}>
          Go back
        </Button>
      </div>

      <Footer />
    </div>
  );
};
export default History;
