import "./Home.scss";

import VolumeLabel from "../VolumeLabel/VolumeLabel";
import ButtonVolume from "../Button/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Grid from "@mui/material/Grid";

const App = (props) => {
  const total = props.total;
  const handleClick = props.handleClick;
  const handlTotal = props.handlTotal;
  const counter = props.counter;

  const handleClick2 = props.handleClick2;

  const counter2 = props.counter2;

  const handleClick3 = props.handleClick3;

  const counter3 = props.counter3;

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <div>
    <Header />
    <Container >
    

      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ paddingTop: "3em", paddingBottom: "3em" }}

      >

        <Grid  item xs={6} style={{alignItems: 'center'}}>
          <ButtonVolume
            onClick={() => {
              handlTotal(0.25);
              handleClick();
            }}
            volume="0.25"
          />
        </Grid>

        <Grid item xs={6}>
          <VolumeLabel volume={counter} showEnding={true} />
        </Grid>

        <Grid item xs={6}>
          <ButtonVolume
            onClick={() => {
              handlTotal(0.33);
              handleClick2();
            }}
            volume="0.33"
          />
        </Grid>

        <Grid item xs={6}>
          <VolumeLabel volume={counter2} showEnding={true} />
        </Grid>
        <Grid item xs={6}>
          <ButtonVolume
            onClick={() => {
              handlTotal(0.5);
              handleClick3();
            }}
            volume="0.50"
          />
        </Grid>
        <Grid item xs={6}>
          <VolumeLabel volume={counter3} showEnding={true} />
        </Grid>
      </Grid>
      <Box>
        <VolumeLabel
          label={"U had " + total + " liters in common, "}
          showEnding={true}
          volume={counter + counter2 + counter3}
        />
      </Box>

      <Footer />
    </Container>
    </div>
  );
};

export default App;
