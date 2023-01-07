import "./App.scss";
import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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

const About = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
export default About;
