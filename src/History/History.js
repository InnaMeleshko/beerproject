import React from "react";


import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import VolumeLabel from "../VolumeLabel/VolumeLabel";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

const History = (props) => {
 

  const counter2 = props.counter2;
  const counter3 = props.counter3;
  const counter = props.counter;
  const total = props.total;

  return (
    <div>
      <Header title="Drinking history" />
      <Container>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ paddingTop: "3em", paddingBottom: "3em" }}
        >
          <Grid item xs={6}>
            <h3> Numbers of beers</h3>
          </Grid>

          <Grid item xs={6}>
            <VolumeLabel
              volume={counter + counter2 + counter3}
              showEnding={true}
            />
          </Grid>

          <Grid item xs={6}>
            <h3>Final volume</h3>
          </Grid>

          <Grid item xs={6}>
            <VolumeLabel label={"U had " + total + " liters "} />
          </Grid>
        </Grid>

        <Footer />
      </Container>
    </div>
  );
};
export default History;
