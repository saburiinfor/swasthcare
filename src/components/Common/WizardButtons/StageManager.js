import React, {Component} from 'react';
import {wizards} from "../../../shared/WizardContext";
import {Redirect} from "react-router";

class StageManager extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    let pageUrl = getPageLink(this.props.flow, this.props.wizardKey);
    return (
      <Redirect to={pageUrl}/>
    );
  };
}

const getPageLink = function (flow, key) {
  let pageUrl;
  const activeStage = sessionStorage.getItem(key);
  if (flow === 1) {
    switch (parseInt(activeStage)) {
    case 0:
      pageUrl = '/dashboard';
      break;
    case 1:
      pageUrl = '/newAppointment';
      break;
    case 2:
      pageUrl = '/selectPhysician';
      break;
    case 3:
      pageUrl = '/selectAppointmentDate';
      break;
    case 4:
      pageUrl = '/selectSlot';
      break;
    case 5:
      pageUrl = '/addComplaints';
      break;
    case 6:
      pageUrl = '/appointmentPayment';
      break;
    case 7:
      pageUrl = '/submitAppointment';
      break;
    case 8:
      pageUrl = '/appointmentCreateResponse';
      break;
    default:
      pageUrl = '/dashboard';
      break;
    }
  } else if (flow === 2) {
    switch (parseInt(activeStage)) {
    case 0:
      pageUrl = '/labAppointment';
      break;
    case 1:
      pageUrl = '/labAppointment';
      break;
    default:
      pageUrl = '/selectClinic';
      break;
    }
  }

  return pageUrl;
};

export default StageManager;
