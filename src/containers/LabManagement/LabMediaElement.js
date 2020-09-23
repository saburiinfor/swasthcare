import React, {Component} from "react";
import {Button, Col, ListGroup, ListGroupItem, Media, Row} from "reactstrap";
import {faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../../components/Common/Media/MediaElement.module.scss";
import classnames from "classnames";

class LabMediaElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: null,
      clinicid: null
    };
    this.selectPhysician.bind(this);
  };
  
  componentDidMount() {
    // this.props.appointmentData.selectedPhysician = false;
  }
  
  // click handler for physician selection
  selectPhysician = (pid, clinicid) => {
    this.props.onGetPhysicianById(pid, clinicid);
    this.props.appointmentData.pid = pid;
    this.props.appointmentData.clinicid = clinicid;
    this.props.appointmentData.selectedPhysician = true;
  };
  
  render() {
    const noOfStars = this.props.noOfStars;
    const panelData = this.props.record;
    let starIconArray = [];
    for (let i = 0; i < noOfStars; i++) {
      starIconArray[i] = (
        <FontAwesomeIcon key={"star" + i} color="#D88D37" size="1x" icon={faStar}/>
      );
    }
    return (
      // <Media className={classnames(styles.mediaElement, "m-1", "p-1", (this.props.appointmentData.pid === panelData.id && this.props.appointmentData.clinicid === panelData.clinicid) ?
      // styles.selected : '')} onClick={this.selectPhysician.bind(null, panelData.id, panelData.clinicid)}>
      <Media className={classnames(styles.mediaElement, "m-1", "p-1")}>
        <Media left top href="#">
          {/*} <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
          <div className="text-center">
            <FontAwesomeIcon color="#ccc" size="5x" icon={faUser}/>
          </div>
          {/*<div>{starIconArray}</div>*/}
          <Button className="pt-0" color="link">
            {/*{(this.props.appointmentData.pid === panelData.id) ? 'Selected' : 'Select'}*/}
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
                  {/*{panelData.phyname}*/}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="border-0 p-0">
              <Row>
                <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                  Specializations
                </Col>
                <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                  {/*{panelData.specializations}*/}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="border-0 p-0">
              <Row>
                <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                  Practicing since
                </Col>
                <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                  {/*{panelData.experience}*/}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="border-0 p-0">
              <Row>
                <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                  Consult at
                </Col>
                <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                  {/*{panelData.clinicname}*/}
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Media>
      </Media>
    );
  };
}

export default LabMediaElement;
