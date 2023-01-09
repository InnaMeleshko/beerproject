import "./App.scss";

import React, { useState } from "react";
import VolumeLabel from "../VolumeLabel/VolumeLabel";
import ButtonVolume from "../Button/Button";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
    <div className="Container">
      <Header title="Final price: " secondTitle="Last update: " />
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
  );
};

export default App;
