import "./App.scss";
import "./button/button.scss";

import React, { useState } from "react";

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
      <div className="Container-inner">
        <h1 className="Greeting">How much beer are u going to drink?</h1>
        <div className="App">
          <div className="Buttons-block">
            <button
              className="Counter"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              You had {counter} beers{" "}
            </button>

            <button
              onClick={() => {
                handlTotal(0.25);
                handleClick();
              }}
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              0.25l
            </button>
          </div>

          <div className="Buttons-block">
            <button
              className="Counter"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              You had {counter2} beers{" "}
            </button>
            <button
              onClick={() => {
                handlTotal(0.33);
                handleClick2();
              }}
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              0.33l
            </button>
          </div>

          <div className="Buttons-block">
            <button
              className="Counter"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              You had {counter3} beers{" "}
            </button>
            <button
              onClick={() => {
                handlTotal(0.5);
                handleClick3();
              }}
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              0.50l
            </button>
          </div>
        </div>

        <span
          className="total"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          U had {total} liters in common, {counter + counter2 + counter3} beers
        </span>
      </div>
    </div>
  );
};

export default App;
