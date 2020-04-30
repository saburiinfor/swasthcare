import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import './WizardButtons.scss';

class WizardButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: true
    };
    this.formRef = React.createRef();
    this.processingComplete.bind(this);
  }
  
  componentDidMount() {
  };
  
  processingComplete = () => {
    this.setState({
      processing: false
    });
    window.location.reload();
  };
  
  setPreviousStep = () => {
    return new Promise((resolve) => {
      let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
      sessionStorage.setItem('conferkare.appointment.activeStage', activeStage < 1 ? 0 : (activeStage - 1));
      resolve('done');
    });
  };
  
  backButtonClick = () => {
    this.setPreviousStep().then(() => {
      this.processingComplete();
    });
  };
  
  setNextStep = () => {
    return new Promise((resolve) => {
      let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
      sessionStorage.setItem('conferkare.appointment.activeStage', activeStage + 1);
      resolve('done');
    });
  };
  
  nextButtonClick = () => {
    this.setNextStep().then(() => {
      this.props.nextBtnCallback();
    }).then(() => {
      this.processingComplete();
    });
  }
  
  render() {
    return (
      <div className={'wizBtnsContainer'}>
        <Button variant={'primary'} onClick={this.backButtonClick}>Back</Button>
        {(parseInt(sessionStorage.getItem('conferkare.appointment.activeStage')) < 7 && (this.props.noContinue === false || this.props.noContinue === undefined)) &&
        <Button variant={'primary'} onClick={this.nextButtonClick} disabled={!this.state.processing}>Continue</Button>
        }
      </div>
    );
  }
}

export default WizardButtons;