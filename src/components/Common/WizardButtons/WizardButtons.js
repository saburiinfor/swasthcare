import React, {Component} from "react";
import { Button } from "reactstrap";
import './WizardButtons.scss';

class WizardButtons extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  };
  backButtonClick = (e) => {
    let backUrl;
    switch(parseInt(this.props.activeStep)) {
      case 1:
        backUrl = '/dashboard';
        break;
      case 2:
        backUrl = '/newAppointment';
        break;
      case 3:
        backUrl = '/selectappointmentdate';
        break;
      default:
          backUrl = '/dashboard';
          break;
    }
    window.location.replace(backUrl);
  };
  nextButtonClick = (e) => {
    let backUrl;
    switch(parseInt(this.props.activeStep)) {
      case 1:
        backUrl = '/selectappointmentdate';
        break;
      case 2:
        backUrl = '/';
        break;
      case 3:
        backUrl = '/';
        break;
      default:
          backUrl = '/dashboard';
          break;
    }
    window.location.replace(backUrl);
  };
  render() {
    return (
      <div className={'wizBtnsContainer'}>
        <Button onClick={this.backButtonClick}>Back</Button>
        <Button onClick={this.nextButtonClick}>Continue</Button>
      </div>
    );
  }
}

export default WizardButtons;