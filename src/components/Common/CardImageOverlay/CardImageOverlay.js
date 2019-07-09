import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
// import styles from "./CardImageOverlay.module.css";

const CardImageOverlay = props => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={props.imagePath} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardText>{props.cardBody}</CardText>
          <CardText>
            <small className="text-muted">{props.cardFooter}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CardImageOverlay;