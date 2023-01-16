import "../Footer/Footer.scss";
import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { Paper } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(1);

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/history"
            label="History"
            icon={<HistoryIcon />}
          />

          <BottomNavigationAction
            component={Link}
            label="Home"
            icon={<HomeIcon />}
            to="/"
          />

          <BottomNavigationAction
            component={Link}
            label="Settings"
            icon={<SettingsIcon />}
            to="/settings"
          />

          <BottomNavigationAction
            component={Link}
            label="About"
            icon={<SportsBarIcon />}
            to="/about"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
