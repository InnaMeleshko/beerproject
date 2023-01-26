import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Settings/Settings.scss";
import Switch from "@mui/material/Switch";

const Settings = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <Header />
      <Container style={{maxWidth: '600px'}}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2} style={{ marginTop: "3em" }}>
            <Item
              style={{
                display: "flex",
                justifyContent: "flex-between",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={{ textAlign: "left", marginRight: "3em" }}>
                <h3>Vibration</h3>
                <p>Turn on/off the phone vibration when counting</p>
              </Box>

              <Switch
                {...label}
                defaultChecked
                color="warning"
                size="small"
                style={{ margin: "0" }}
              />
            </Item>

            <Item
              style={{
                display: "flex",
                justifyContent: "flex-between",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={{ textAlign: "left", marginRight: "3em" }}>
                <h3>Power drinker</h3>
                <p>Show notification after 5 liters of drunk beer</p>
              </Box>

              <Switch
                {...label}
                defaultChecked
                color="warning"
                size="small"
                style={{ margin: "0" }}
              />
            </Item>

            <Item
              style={{
                display: "flex",
                justifyContent: "flex-between",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={{ textAlign: "left", marginRight: "3em" }}>
                <h3>Don't tell me</h3>
                <p>Turn off the information about total volume</p>
              </Box>

              <Switch
                {...label}
                defaultChecked
                color="warning"
                size="small"
                style={{ margin: "0" }}
              />
            </Item>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Settings;
