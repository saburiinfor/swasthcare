import React from "react";
import Aux from "../../hoc/Auxwrap";
import styles from "./ImgWithOverlayText.module.scss";

const ImgWithOverlayText = props => {
  return (
    <Aux>
      <div className={styles.overlayContainer}>
        <img src={props.imagePath} className={styles.overlayImg} alt={props.text}/>
        <div className={styles.textCentered}>{props.text}</div>
      </div>
    </Aux>
  );
};

export default ImgWithOverlayText;