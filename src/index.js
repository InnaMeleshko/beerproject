import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import History from "./History/History";
import Settings from "./Settings/Settings";

import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About/About";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
