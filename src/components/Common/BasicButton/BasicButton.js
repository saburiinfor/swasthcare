import React from "react";
import {Button} from "reactstrap";
import styles from "./BasicButton.module.css";

const BasicButton = props => {
  return (
    <Button size={props.size} className={styles.customButton}>
        {props.text}
      </Button>
  );
};

export default BasicButton;