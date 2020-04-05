import React, {Component} from "react";
import { Button } from "reactstrap";
import './WizardButtons.scss';

class WizardButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backUrl: null,
      nextUrl: null
    }
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
    let nextUrl;
    switch(parseInt(this.props.activeStep)) {
      case 1:
        nextUrl = '/selectPhysician';
        break;
      case 2:
        nextUrl = '/selectappointmentdate';
        break;
      case 3:
        nextUrl = '/';
        break;
      default:
        nextUrl = '/dashboard';
        break;
    }
    this.setState({
      nextUrl
    });
    this.props.nextBtnCallback();
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