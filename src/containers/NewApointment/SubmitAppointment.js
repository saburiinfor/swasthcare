import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../shared";
import {Redirect} from "react-router-dom";
import getPageLink from "../../components/Common/WizardButtons/StageManager";
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from './NewApointment.module.scss';

class SubmitAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    this.handleAppointmentSubmission.bind(this);
  }
  
  componentDidMount() {
  }
  
  handleAppointmentSubmission = () => {
    this.props.onSubmitAppointment(this.props.appointmentData);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem('conferkare.appointment.activeStage', 0);
      return <Redirect to='/'/>;
    }
    if (this.props.appId !== null) {
      sessionStorage.setItem('conferkare.appointment.activeStage', 8);
      return <Redirect to={'/appointmentCreateResponse'} {...this.props} />
    }
    const pageUrl = getPageLink();
    return (
      <Col md="12" className="mt10">
        <Redirect to={pageUrl}/>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        { this.props.profileCompliant === false &&
        <UserProfile/>
        }
        {this.props.error !== null &&
        <Row>
          <Col>
            {this.props.error}
          </Col>
        </Row>
        }
        <Row>
          <Col md="8">
            <div>
              <h2>Appointment details</h2>
              <Breadcrumb activeStep={'7'} />
            </div>
            <Row>
              <Col>
                <div className={styles.appointmentBox}>
                  <h4>
                    Submit appointment application
                    <WizardButtons />
                  </h4>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div>
                    <Row>
                      <Col>
                        <table className={styles.appointmentTable}>
                          <thead>
                          <tr>
                            <td colSpan={'2'}>Appointment details</td>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Appointment Date</td>
                            <td>{this.props.appointmentData.appdate}</td>
                          </tr>
                          <tr>
                            <td>Patient name</td>
                            <td>{this.props.appointmentData.name}</td>
                          </tr>
                          <tr>
                            <td>Patient email</td>
                            <td>{this.props.appointmentData.email}</td>
                          </tr>
                          <tr>
                            <td>Appointment Day</td>
                            <td>{this.props.appointmentData.appday}</td>
                          </tr>
                          <tr>
                            <td>Appointment type</td>
                            <td>{this.props.appointmentData.appointmentTypeLabel}</td>
                          </tr>
                          <tr>
                            <td>Appointment time</td>
                            <td>{this.props.appointmentData.ctime}</td>
                          </tr>
                          <tr>
                            <td>Consulting doctor</td>
                            <td>{this.props.appointmentData.pname}</td>
                          </tr>
                          <tr>
                            <td>Clinic name</td>
                            <td>{this.props.appointmentData.clinicname}</td>
                          </tr>
                          <tr>
                            <td>Clinic address</td>
                            <td>{this.props.appointmentData.clinicaddress}</td>
                          </tr>
                          <tr>
                            <td>Clinic city</td>
                            <td>{this.props.appointmentData.cityname}</td>
                          </tr>
                          <tr>
                            <td>Clinic contact</td>
                            <td>{this.props.appointmentData.cliniccontact}</td>
                          </tr>
                          </tbody>
                        </table>
                        <br/>
                        {/*<form>*/}
                          <button className={'btn btn-primary'} onClick={this.handleAppointmentSubmission}>
                            Submit
                          </button>
                        {/*</form>*/}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <ImgWithOverlayTextGroup/>
          </Col>
        </Row>
      </Col>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    appointmentData: state.newAppointment.appointmentData,
    appId: state.submitAppointment.appId,
    error: state.submitAppointment.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAppointment: (appointmentData) => dispatch(actions.submitAppointment(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAppointment);