import styles from "./Button.module.scss";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ButtonVolume(props) {
  return (
    <Box mr={4}>
      <Button disabled={props.disabled} 
        variant="orange"
        color="primary"
        size="large"
        onClick={props.onClick}
        className={styles.button}
      >
        {" "}
        {props.volume}l{" "}
      </Button>
    </Box>
  );
}

export default ButtonVolume;
