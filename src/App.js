import "./App.scss";

import React, { useState } from "react";
import VolumeLabel from "./VolumeLabel/VolumeLabel";
import ButtonVolume from "./Button/Button";
import { createTheme, ThemeProvider, } from "@mui/material/styles";





const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#b67646',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

    secondary: {
      main: '#657480', 
    

    }
    

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
    <ThemeProvider theme={theme} >
    <div className="Container">
      <div className="Container-inner">
      
        <h1 className="Greeting">How much beer are u going to drink?</h1>
        <div className="App">
          <div className="Buttons-block">
            <VolumeLabel volume={counter} />


            

              <ButtonVolume
                onClick={() => {
                  handlTotal(0.25);
                  handleClick();
                }}
                volume="0.25"
              />
         
          </div>
           


          <div className="Buttons-block">
            <VolumeLabel volume={counter2} />

           
            <ButtonVolume
              onClick={() => {
                handlTotal(0.33);
                handleClick2();
              }}
              volume="0.33"
            />
           
          </div>

          <div className="Buttons-block">
            <VolumeLabel volume={counter3} />
            <ButtonVolume
              onClick={() => {
                handlTotal(0.5);
                handleClick3();
              }}
              volume="0.50"
            />
          </div>
        </div>

        <VolumeLabel
          label={"U had " + total + " liters in common,"}
          style={{ backgroundColor: "#c6af8e" }}
          volume={counter + counter2 + counter3}
        />
        
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
