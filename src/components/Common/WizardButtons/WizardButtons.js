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
        backUrl = '/selectPhysician';
        break;
      case 4:
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
        backUrl = '/selectPhysician';
        break;
      case 2:
        backUrl = '/selectappointmentdate';
        break;
      case 3:
        backUrl = '/';
        break;
      default:
        backUrl = '/dashboard';
        break;
    }
    this.props.nextBtnCallback();
    // window.location.replace(backUrl);
  };
  render() {
    return (
      <div className={'wizBtnsContainer'}>
        <button type={'button'} className={'btn btn-secondary'} onClick={this.backButtonClick}>Back</button>
        <Button ref={'nextBtn'} onClick={this.nextButtonClick}>Continue</Button>
      </div>
    );
  }
}

export default WizardButtons;