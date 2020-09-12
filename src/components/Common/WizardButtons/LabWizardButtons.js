import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { BrowserView, MobileView } from 'react-device-detect';
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

    


    // for lab module

    backLabButtonClick = () => {
        this.setPreviousStep().then(() => {
            this.processingComplete();
        });
    };
    nextLabButtonClick = () => {
        this.setNextStep().then(() => {
            this.props.nextBtnCallback();
        }).then(() => {
            this.processingComplete();
        });
    }
    setLabPreviousStep = () => {
        return new Promise((resolve) => {
            let labActiveStage = parseInt(sessionStorage.getItem('conferkare.labappointment.activeStage'));
            sessionStorage.setItem('conferkare.labappointment.activeStage', labActiveStage < 1 ? 0 : (labActiveStage - 1));
            resolve('done');
        });
    };


    setLabNextStep = () => {
        return new Promise((resolve) => {
            let labActiveStage = parseInt(sessionStorage.getItem('conferkare.labappointment.activeStage'));
            sessionStorage.setItem('conferkare.labappointment.activeStage', labActiveStage + 1);
            resolve('done');
        });
    };



    render() {
        return (
            <div className={'wizBtnsContainer'}>
                <BrowserView>
                    <Button variant={'primary'} onClick={this.backLabButtonClick}>Back</Button>
                    {(parseInt(sessionStorage.getItem('conferkare.labappointment.activeStage')) < 2) &&
                        <Button variant={'primary'} onClick={this.nextLabButtonClick} disabled={this.props.noContinue}>Continue</Button>
                    }
                </BrowserView>
                <MobileView>
                    <Button size={'sm'} variant={'primary'} onClick={this.backButtonClick}>Back</Button>
                    {(parseInt(sessionStorage.getItem('conferkare.labappointment.activeStage')) < 2) &&
                        <Button size={'sm'} variant={'primary'} onClick={this.nextButtonClick} disabled={this.props.noContinue}>Continue</Button>
                    }
                </MobileView>
            </div>
        );
    }
}

export default WizardButtons;