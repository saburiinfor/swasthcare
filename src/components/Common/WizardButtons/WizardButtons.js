import React, {Component} from "react";
import { Button } from "reactstrap";
import './WizardButtons.scss';

class WizardButtons extends Component {
  componentDidMount() {
    this.formRef = React.createRef();
  };

  backButtonClick = () => {
    let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
    sessionStorage.setItem('conferkare.appointment.activeStage', activeStage < 1 ? 0 : (activeStage - 1));
    setTimeout(function(formObj) {
      formObj.submit();
    }, 200, this.formRef.current);
  };
  nextButtonClick = () => {
    let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
    sessionStorage.setItem('conferkare.appointment.activeStage', activeStage + 1);
    this.props.nextBtnCallback();
    setTimeout(function(formObj) {
      formObj.submit();
    }, 200, this.formRef.current);
  };
  render() {
    return (
      <div className={'wizBtnsContainer'}>
        <form ref={this.formRef}/>
          <Button onClick={this.backButtonClick}>Back</Button>
          { (parseInt(sessionStorage.getItem('conferkare.appointment.activeStage')) < 7 && this.noContinue === false) &&
            <Button onClick={this.nextButtonClick}>Continue</Button>
          }
      </div>
    );
  }
}

export default WizardButtons;