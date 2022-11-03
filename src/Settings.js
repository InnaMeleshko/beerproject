import "./App.scss";
import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./Header/header";
import Footer from "./Footer/footer";

const theme = createTheme({
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

const Settings = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Container">
        <Header title="Settings " />
        <div className="Container-inner">
          <div className="Time">
            <h3>Settings</h3>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default Settings;
