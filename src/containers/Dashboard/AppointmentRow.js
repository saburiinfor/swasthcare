import React, {Component} from "react";
import {Col, Container, Jumbotron, Row} from "reactstrap";
import classnames from "classnames";
import ButtonWithTick from "../../components/Common/ButtonWithTick/ButtonWithTick";
import BasicButton from "../../components/Common/BasicButton/BasicButton";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.module.scss";
import dateformat from 'dateformat';
import {Button} from "react-bootstrap";

class AppointmentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentSelected: false
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  
  handleStateChange(value) {
    this.setState({parentSelected: value});
  }
  
  cancelAppointment = (appointmentID) => {
    console.log(appointmentID);
  };
  
  render() {
    let appointmentDate = '',
      toggleOn = this.props.appointment.status === 'Booked',
      appIdNumber = this.props.appointment.appid.substring(1);
    if (this.props.appointment.appdate !== '--') {
      appointmentDate = dateformat(new Date(this.props.appointment.appdate), 'yyyy-mm-dd');
    }
    return (
      <Jumbotron
        className={classnames(
          styles.appointmentSection,
          this.state.parentSelected ? styles.confirmed : ""
        )}
      >
        <Col md="12" className="mt10">
          <Row>
            <Col md="7" className={styles.appointmentDesc}>Meet physician on {appointmentDate}</Col>
            <Col md="5" className={styles.appointmentBtns}>
              <ButtonWithTick size="sm" color="primary" text="Unconfirmed" selectedText="Confirmed" childColor="#007bff" isToggleOn={toggleOn}
                              childClass="ml-1" childSize="1x" childIcon={faCheck} handleStateChange={this.handleStateChange.bind(this)}/>
              <BasicButton size="sm" text="Reshedule"/>
              {/*<BasicButton color={'default'} size="sm" text="Cancel" onClick={this.cancelAppointment}/>*/}
            </Col>
          </Row>
          {this.props.appointment.apptype === "01" &&
          <Row>
            <Col md="12">
              <Button target={'_new'} variant={'success'} type={'button'} active={true} href={this.props.appointment.connectionlink}>Video link</Button>
            </Col>
          </Row>
          }
        </Col>
      </Jumbotron>
    );
  }
}

export default AppointmentRow;