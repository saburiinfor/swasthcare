import React, {Component} from 'react';
import {WizardContext, wizards} from "../../shared/WizardContext";
import {Redirect} from "react-router-dom";
import {Col, Row} from "reactstrap";
import StageManager from "../../components/Common/WizardButtons/StageManager";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import * as actions from "../../shared";
import {connect} from "react-redux";

class SelectClinic extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }
  
  handlerNextBtnClick = () => {
    return false;
  }
  
  validateUserSelection = () => {
    return false;
  }
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem(wizards.labappointment.key, 0);
      return <Redirect to='/' />;
    }
    return (
      <Col md="12" className="mt10">
        <WizardContext.Consumer>
          {wizard => (
            <StageManager flow={wizard.flow} wizardKey={wizard.key}/>
          )}
        </WizardContext.Consumer>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        {this.props.profileCompliant === false &&
        <UserProfile />
        }
        <Row>
          <Col md="12">
            <div>
              <h2>Select Clinic </h2>
              <WizardContext.Consumer>
                {wizard => (
                  <Breadcrumb activeStep={'2'} steps={wizard.steps} wizardKey={wizard.key}/>
                )}
              </WizardContext.Consumer>
            </div>
            <Row>
              <Col>
                <div className={'selectDate'}>
                  <div className={'stepHeader'}>
                    <h4>
                      Select clinic
                    </h4>
                    <WizardContext.Consumer>
                      {wizard => (
                        <WizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} steps={wizard.steps} wizardKey={wizard.key} />
                      )}
                    </WizardContext.Consumer>
                  </div>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div className={'stepSelectionBox'}>
                    <Row>
                      <Col>
                        <h5>Clinic</h5>
                        Hi, please select one clinic...
                      </Col>
                    </Row><br/><br/>
              
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.newAppointment.cityList,
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    //appointmentData: state.newAppointment.appointmentData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetCities: () => dispatch(actions.getCities()),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};
export default connect (mapStateToProps,mapDispatchToProps)(SelectClinic);
