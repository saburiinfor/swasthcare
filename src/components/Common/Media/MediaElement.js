import React from "react";
import {Row, Button, Col, Media, ListGroup, ListGroupItem} from "reactstrap";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./MediaElement.module.css";
import classnames from "classnames";

const MediaElement = props => {
  const noOfStars = props.noOfStars;
  const panelData = props.record;
  var starIconArray = [];
  for (var i = 0; i < noOfStars; i++) {
    starIconArray[i] = (
      <FontAwesomeIcon key={"star" + i} color="yellow" size="1x" icon={faStar}/>
    );
  }
  
  return (
    <Media className={classnames(styles.mediaElement, "m-1", "p-1")}>
      <Media left top href="#">
        {/*} <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
        <div className="text-center">
          <FontAwesomeIcon color="#ccc" size="5x" icon={faUser}/>
        </div>
        <div>{starIconArray}</div>
        <Button className="pt-0" color="link">
          Select
        </Button>
      </Media>
      <Media body>
        <ListGroup flush className="ml-3">
          <ListGroupItem className="border-0 p-0">
            <Row>
              <Col md="5" className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")}>
                Name
              </Col>
              <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                {panelData.name}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0">
            <Row>
              <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                Expertise in
              </Col>
              <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                {panelData.expertiseIn}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0">
            <Row>
              <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                Practicing since
              </Col>
              <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                {panelData.practicingSince}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0">
            <Row>
              <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                Consult at
              </Col>
              <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                {panelData.consultAt}
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Media>
    </Media>
  );
};

export default MediaElement;