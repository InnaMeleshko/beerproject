import "./App.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Header from "./Header/header";
import Footer from "./Footer/footer";

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

const History = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <ThemeProvider theme={theme}>
      <div className="Main">
        <div className="Container">
          <Header title="Number of beers: " />
          <div className="Container-inner">
            <div>
              <div className="Inner-data">
    

                <h3>Numbers of beers</h3>        
                <span >12</span>      {/* insert total   */} 
              </div>

              <div className="Inner-data">
                <h3>Final volume</h3> 
                <span>50L</span>  {/* insert  counter + counter 2 + counter 3  */}  
              </div>
            </div>
            <div>
              <Button variant="orange" onClick={goBack}>
                Go back
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default History;
