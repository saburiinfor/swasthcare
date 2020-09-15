import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../shared";
import {Redirect} from "react-router-dom";
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import {WizardContext, wizards} from "../../shared/WizardContext";
import StageManager from "../../components/Common/WizardButtons/StageManager";

class AddComplaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaintDesc: null
    };
    this.handlerNextBtnClick.bind(this);
    this.handleAddComplaintDescription.bind(this);
  }
  
  componentDidMount() {
  }
  
  handleAddComplaintDescription = (e) => {
    this.setState({
      complaintDesc: e.target.value
    });
  };
  
  handlerNextBtnClick = () => {
    this.props.appointmentData.complaintDesc = this.state.complaintDesc;
    this.props.onSetAppointmentData(this.props.appointmentData);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem(wizards.appointment.key, 0);
      return <Redirect to='/'/>;
    }
    return (
      <Col md="12" className="mt10">
        <WizardContext.Consumer>
          {wizard => (
            <StageManager flow={wizard.flow} wizardKey={wizard.key}/>
          )}
        </WizardContext.Consumer>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} textarea{width:' +
          ' 100%; height: 200px;}'}</style>
        </Helmet>
        { this.props.profileCompliant === false &&
          <UserProfile/>
        }
        <Row>
          <Col md="12">
            <div>
              <h2>Add complaints/concerns</h2>
              <WizardContext.Consumer>
                {wizard => (
                  <Breadcrumb activeStep={'5'} steps={wizard.steps}/>
                )}
              </WizardContext.Consumer>
            </div>
            <Row>
              <Col>
                <div className={'slotBox'}>
                  <div className={'stepHeader'}>
                    <h4>
                      Describe your health problems
                    </h4>
                    <WizardButtons nextBtnCallback={this.handlerNextBtnClick} />
                  </div>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div className={'stepSelectionBox'}>
                    <Row>
                      <Col>
                        <textarea key={'complaintDesc'} onBlur={this.handleAddComplaintDescription}/>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
      
          {/*<Col md="4">*/}
          {/*  <ImgWithOverlayTextGroup/>*/}
          {/*</Col>*/}
        </Row>
      </Col>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    appointmentData: state.newAppointment.appointmentData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComplaints);
