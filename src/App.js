import "./App.scss";

import React, { useState } from "react";
import VolumeLabel from "./VolumeLabel/VolumeLabel";
import ButtonVolume from "./Button/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "orange" },
          style: {
            padding: "15px 60px",
            color: "#fff",
            backgroundColor: "#d08821",
            fontWeight: "300",
            boxShadow: "none",
            cursor: "pointer",
            fontSize: "1em",
            borderRadius: "16px",
            border: "none",
            "&:hover": {
              backgroundColor: "#b7582a",
            },
            "&:active": {
              backgroundColor: "#e1c639",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#f57c00",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

    secondary: {
      main: "#4e342e",
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div className="Wrapper">
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
              backgroundColor: "#b7582a",
              marginRight: "3em",
              margin: "3em",
            }}
            volume={counter + counter2 + counter3}
          />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
