import React from "react";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "300" }}
        >
          Beer app
        </Typography>
        <Button color="inherit">Go to history</Button>
      </Toolbar>
    </AppBar>
  );
}
