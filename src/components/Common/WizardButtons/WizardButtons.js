import React, {Component} from "react";
import { Button } from "reactstrap";
import './WizardButtons.scss';

class WizardButtons extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.formRef = React.createRef();
  };

  backButtonClick = () => {
    let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
    sessionStorage.setItem('conferkare.appointment.activeStage', activeStage < 1 ? 0 : (activeStage - 1));
    this.formRef.current.submit();
  };
  nextButtonClick = () => {
    let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
    sessionStorage.setItem('conferkare.appointment.activeStage', activeStage + 1);
    this.props.nextBtnCallback();
    this.formRef.current.submit();
  };
  render() {
    return (
      <div className={'wizBtnsContainer'}>
        <form ref={this.formRef}/>
        <Button onClick={this.backButtonClick}>Back</Button>
        <Button onClick={this.nextButtonClick}>Continue</Button>
      </div>
    );
  }
}

export default WizardButtons;