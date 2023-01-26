import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ThemeProvider createTheme={createTheme}>
      <AppBar position="static" color={"primary"} >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "300" }}
          >
          <Button variant="orange" style={{padding:'10px', fontSize: '0.8em'}}  component={Link}  to="/">Beer APP</Button>
          </Typography>
          <Button variant="orange" style={{padding:'10px', fontSize: '0.8em'}}  component={Link}  to="/history">Go to history</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
