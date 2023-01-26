
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";


const AlertComp = (props) => {
  

  const [hasUserClickedHide, setHasUserClickedHide] = useState(false)

  const isAlertHidden = props.total < 5 || hasUserClickedHide;


  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <Alert
          style={{ display: !isAlertHidden ? "block" : "none" }}
          severity="warning"
        >
          You had drunk 5 liters of beer. Would you like to continue?
          <Box display="flex" alignItems="center" justifyContent="center" m={2}>
            <Button onClick={() => setHasUserClickedHide(true)} style={{ marginRight: "1em" }} variant="contained">
              Yes
            </Button>
            <Button variant="contained">NO</Button>
          </Box>
        </Alert>
      </Box>
    </div>
  );
};

export default AlertComp;
