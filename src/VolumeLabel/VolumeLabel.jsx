import styles from "./VolumeLabel.module.scss";
import React from "react";

function VolumeLabel(props) {
  
  const ending = props.volume === 1 ? "beer" : "beers";
  const label = props.label ? props.label : "You had";

  return (
    <span style={{ padding: "20px" }} className={styles.label}>
      {label} {props.volume} {ending}
    </span>
  );
}

export default VolumeLabel;
