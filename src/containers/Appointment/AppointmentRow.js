import React, { Component } from "react";

import { Container, Row, Col, Jumbotron } from "reactstrap";

import classnames from "classnames";

import ButtonWithTick from "../../containers/ButtonWithTick/ButtonWithTick";

import BasicButton from "../../components/Common/BasicButton/BasicButton";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./Appointment.module.css";

 

class AppointmentRow extends Component {

  constructor(props) {

    super(props);

    this.state = {

      parentSelected: false

    };

    this.handleStateChange = this.handleStateChange.bind(this);

  }

 

  handleStateChange(value) {

    this.setState({ parentSelected: value });

  }

  render() {

    return (

      <Jumbotron

        className={classnames(

          styles.appointmentSection,

          this.state.parentSelected ? styles.confirmed : ""

        )}

      >

        <Container fluid>

          <Row>

            <Col md="7">{this.props.name}</Col>

            <Col md="5" className="text-right">

              <ButtonWithTick

                size="sm"

                color="primary"

                text="Unconfirmed"

                selectedText="Confirmed"

                childColor="#007bff"

                childClass="ml-1"

                childSize="1x"

                childIcon={faCheck}

                handleStateChange={this.handleStateChange.bind(this)}

              />

              <BasicButton size="sm" text="Reshedule" />

            </Col>

          </Row>

        </Container>

      </Jumbotron>

    );

  }

}

export default AppointmentRow;

