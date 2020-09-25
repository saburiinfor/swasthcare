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
      clinicid: null
    };
    
    this.selectClinic.bind(this);
  };
  
  componentDidMount() {
    this.props.labAppointmentData.selectedClinic = false;
  }
  
  // click handler for clinic selection
  selectClinic = (clinicid) => {
    //console.log(clinicid)
    //this.props.onGetTestByClinic(clinicid);
    this.props.labAppointmentData.clinicid = clinicid;
    console.log(this.props.labAppointmentData.clinicid)
    this.props.labAppointmentData.selectedClinic = true;
  };
  
  render() {
    const noOfStars = this.props.noOfStars;
    const panelData = this.props.record;
    console.log(this.props.labAppointmentData.clinicid)
    let starIconArray = [];
    for (let i = 0; i < noOfStars; i++) {
      starIconArray[i] = (
        <FontAwesomeIcon key={"star" + i} color="#D88D37" size="1x" icon={faStar}/>
      );
    }
    return (
     
      <Media className={classnames(styles.mediaElement, "m-1", "p-1", (this.props.labAppointmentData.clinicid === panelData.clinicid ) ? styles.selected : '')} onClick={this.selectClinic.bind(null,panelData.clinicid)}>
        <Media left top href="#">
          <div className="text-center">
            <FontAwesomeIcon color="#ccc" size="5x" icon={faUser} />
          </div>
          {/*<div>{starIconArray}</div>*/}
          <Button className="pt-0" color="link">
            {console.log(this.props.labAppointmentData.clinicid)}
            {(this.props.labAppointmentData.clinicid === panelData.clinicid) ? 'Selected' : 'Select'}
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
                  Service
                </Col>
                <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                  Pathology
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="border-0 p-0">
              <Row>
                <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                  Location
                </Col>
                <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                  {panelData.address}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="border-0 p-0">
              <Row>
                <Col className={classnames(styles.widthHalf, "font-weight-bold", "pr-1")} md="5">
                 Service Mode
                </Col>
                <Col md="7" className={classnames(styles.widthHalf, "pl-1")}>
                  Home Visit,Clinic Visit
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
