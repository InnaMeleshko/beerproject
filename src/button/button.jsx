import styles from "./Button.module.scss";
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




function ButtonVolume(props) {
  return (
    <Box  m={7} >
    <Button  variant='contained' color='secondary' size='large' onClick={props.onClick} className={styles.button}>
      {" "}
      {props.volume}l{" "}
    </Button>
    </Box>
  );
}

export default ButtonVolume;
