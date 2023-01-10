import "./Home.scss";

import React from "react";
import VolumeLabel from "../VolumeLabel/VolumeLabel";
import ButtonVolume from "../Button/Button";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const App = (props) => {
  const total = props.total;
  const handleClick = props.handleClick;
  const handlTotal = props.handlTotal;
  const counter = props.counter;

  const handleClick2 = props.handleClick2;

  const counter2 = props.counter2;

  const handleClick3 = props.handleClick3;

  const counter3 = props.counter3;

  return (
    <div>
      <Header title="Final price: " secondTitle="Last update: " />
      <div className="Container">
        <div className="Main">
          <div className="Buttons-container">
            <div className="Buttons-block">
              <ButtonVolume
                onClick={() => {
                  handlTotal(0.25);
                  handleClick();
                }}
                volume="0.25"
              />
              <VolumeLabel volume={counter} />
            </div>

            <div className="Buttons-block">
              <ButtonVolume
                onClick={() => {
                  handlTotal(0.33);
                  handleClick2();
                }}
                volume="0.33"
              />
              <VolumeLabel volume={counter2} />
            </div>

            <div className="Buttons-block">
              <ButtonVolume
                onClick={() => {
                  handlTotal(0.5);
                  handleClick3();
                }}
                volume="0.50"
              />
              <VolumeLabel volume={counter3} />
            </div>
          </div>

          <VolumeLabel
            label={"U had " + total + " liters in common, "}
            style={{
              Width: "200px",
            }}
            volume={counter + counter2 + counter3}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
