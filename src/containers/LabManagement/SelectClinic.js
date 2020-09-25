import React, { Component } from 'react';
import { WizardContext, wizards } from "../../shared/WizardContext";
import { Redirect } from "react-router-dom";
import { Col, Row } from "reactstrap";
import StageManager from "../../components/Common/WizardButtons/StageManager";
import { Helmet } from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import * as actions from "../../shared";
import { connect } from "react-redux";
import LabMediaElementGroup from './LabMediaElementGroup';

class SelectClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinicList: []
    };
  }

  componentDidMount() {
    //console.log(this.props.labAppointmentData)
    let { city } = this.props.labAppointmentData;
    //console.log(city)
    this.props.onGetClinicByCity(city);
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
            <StageManager flow={wizard.flow} wizardKey={wizard.key} />
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
              <h2>Select Clinic</h2>
              <WizardContext.Consumer>
                {wizard => (
                  <Breadcrumb activeStep={'2'} steps={wizard.steps} />
                )}
              </WizardContext.Consumer>
            </div>
            <LabMediaElementGroup {...this.props} />
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    cityList: state.labAppointment.cityList,
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    labAppointmentData: state.labAppointment.labAppointmentData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetClinicByCity: (city) => dispatch(actions.getClinicByCity(city)),
    onSetAppointmentData: (labAppointmentData) => dispatch(actions.setLabAppointmentData(labAppointmentData))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectClinic);
