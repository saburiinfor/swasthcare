import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import {Redirect} from "react-router-dom";
import getPageLink from "../../components/Common/WizardButtons/StageManager";
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import './razorpay.scss';
import { loadCheckout } from '@tiltbike/razorpay-checkout-js';

class AppointmentPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultfee: (parseInt(this.props.appointmentData.consultfee) > 0 ?  parseInt(this.props.appointmentData.consultfee) : 0)
  
  };
    this.handlePaymentSubmission.bind(this);
    this.handlerNextBtnClick.bind(this);
    this.formRef = React.createRef();
  }
  
  componentDidMount() {
    this.props.onGetAppointmentCostDetails(this.props.appointmentData);
    let orderDetails = {
      amount: this.props.costDetails.amount,
      currency: this.props.costDetails.currency,
      receipt: 'rpay_conferkare_' + this.props.appointmentData.id + '_' + new Date().getTime()
    };
    // this.props.onCreateRPayOrderId(orderDetails);
  }
  
  handlePaymentSuccess = (response) => {
    this.setState({
      razorpay_payment_id: response.razorpay_payment_id
    });
    let activeStage = parseInt(sessionStorage.getItem('conferkare.appointment.activeStage'));
    sessionStorage.setItem('conferkare.appointment.activeStage', activeStage + 1);
    this.formRef.current.submit();
  };
  
  handlePaymentSubmission = async (e) => {
    e.preventDefault();
    let that = this;
    let options = {
      "key": "rzp_test_11WWnGxxs9Gky3", // Test API Key, @TODO would change while pushing to production.
      "amount": this.state.consultfee * 100,
      "currency": this.props.costDetails.currency,
      "name": "ConferKare",
      "description": this.props.costDetails.description,
      "image": '/swasthcare/ConferKare.png',
      "handler": function (response) {
        that.handlePaymentSuccess(response);
      },
      "prefill": {
        "name": this.props.costDetails.p_name,
        "email": this.props.costDetails.p_email,
        "contact": this.props.userProfile.contactno
      },
      "theme": {
        "color": "#F37254"
      }
    };
  
    const rzp = await loadCheckout(options);
    rzp.open();
  };
  
  handlerNextBtnClick = () => {
    this.props.appointmentData.paymentResponse = {
      razorpay_payment_id: this.state.razorpay_payment_id
    };
    this.props.onSetAppointmentData(this.props.appointmentData);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem('conferkare.appointment.activeStage', 0);
      return <Redirect to='/'/>;
    }
    const pageUrl = getPageLink();
    return (
      <Col md="12" className="mt10">
        <Redirect to={pageUrl}/>
        <Helmet>
          <base href={'/'}/>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        { this.props.profileCompliant === false &&
        <UserProfile/>
        }
        <Row>
          <Col md="8">
            <div>
              <h2>Appointment payment</h2>
              <Breadcrumb activeStep={'6'} />
            </div>
            <Row>
              <Col>
                <div className={'paymentBox'}>
                  <h4>
                    Make payment for appointment
                    <WizardButtons nextBtnCallback={this.handlerNextBtnClick} />
                  </h4>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div>
                    <form ref={this.formRef}/>
                    <Row>
                      <Col>
                        <table className={'appointmentTable'}>
                          <thead>
                            <tr>
                              <td colSpan={'2'}>Appointment details</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Appointment description</td>
                              <td>{this.props.costDetails.description}</td>
                            </tr>
                            <tr>
                              <td>Appointment charges</td>
                              <td>Rs. {this.state.consultfee}</td>
                            </tr>
                            <tr>
                              <td>Patient name</td>
                              <td>{this.props.costDetails.p_name}</td>
                            </tr>
                            <tr>
                              <td>Patient email</td>
                              <td>{this.props.costDetails.p_email}</td>
                            </tr>
                          </tbody>
                        </table>
                        <br/>
                        <button className={'rzp-button'} onClick={this.handlePaymentSubmission.bind(this)}>
                          <p>
                            Pay fees
                          </p>
                        </button>
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
    costDetails: state.appointmentPayment.costDetails,
    rpayOrder: state.appointmentPayment.rpayOrder
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateRPayOrderId: (orderDetails) => dispatch(actions.createRPayOrderId(orderDetails)),
    onGetAppointmentCostDetails: (appointmentData) => dispatch(actions.getAppointmentCostDetails(appointmentData)),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPayment);