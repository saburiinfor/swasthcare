import React, {Component} from "react";
import {Col, CustomInput, Input, Row} from "reactstrap";
import DatePicker from "react-datepicker";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "./SelectAppointmentDate.module.scss";
import {Helmet} from "react-helmet";
import CustomCalenderIcon from "../CustomCalenderIcon/CustomCalenderIcon";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import {Redirect} from "react-router-dom";
import getPageLink from "../../components/Common/WizardButtons/StageManager";

class SelectAppointmentDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      inputDate: "",
      currentDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlerNextBtnClick.bind(this);
  }
  
  componentDidMount() {
  }
  
  handleChange(date) {
    let newFormatedDate;
    newFormatedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    
    this.setState({
      startDate: date,
      inputDate: newFormatedDate,
      appointmentDate: newFormatedDate
    });
  }
  
  onChangeHandler = e => {
    if (e.target.value === "today") {
      var date = new Date();
      date =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      
      this.setState({[e.target.name]: date, currentDate: e.target.value, appointmentDate: date });
    }
    
    if (e.target.value === "tomorrow") {
      let date = new Date();
      date.setDate(date.getDate() + 1); // even 32 is acceptable
      
      let tomorrow =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      
      this.setState({[e.target.name]: tomorrow, currentDate: e.target.value, appointmentDate: tomorrow });
    }
  };
  
  handleDateChange = m => {
    this.setState({startDate: m});
  };
  
  handlerNextBtnClick = () => {
    this.props.appointmentData.appointmentDate = this.state.appointmentDate;
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
        <Row>
          <Col>
            <Breadcrumb activeStep={'3'} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <div className={styles.selectDate}>
              <h4>
                Select the Date
                <WizardButtons nextBtnCallback={this.handlerNextBtnClick} />
              </h4>
              <Helmet>
                <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
              </Helmet>
              <div>
                <Row>
                  <Col md="4">
                    <Input
                      type="text"
                      name="appointmentDate"
                      id="appointmentDate"
                      value={this.state.inputDate}
                      onChange={this.onChangeHandler}
                      placeholder="DD/MM/YYYY"
                    />
                  </Col>
                  <Col md="8">
                    
                    <DatePicker
                      customInput={
                        <CustomCalenderIcon
                          onClickCustHandler={this.handleChange}
                        />
                      }
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col><br/>
                    <CustomInput
                      type="radio"
                      id="today"
                      name="inputDate"
                      label="Today"
                      value="today"
                      checked={this.state.currentDate === "today"}
                      onChange={this.onChangeHandler}
                    />
                    <CustomInput
                      type="radio"
                      id="tomorrow"
                      name="inputDate"
                      label="Tomorrow"
                      value="tomorrow"
                      checked={this.state.currentDate === "tomorrow"}
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12" className="mt-5">
                    <DatePicker
                      selected={this.state.startDate}
                      inline
                      onChange={this.handleChange}
                      monthsShown={2}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md="4">{<ImgWithOverlayTextGroup/>}</Col>
        </Row>
      </Col>
    );
  }
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
    onGetUserProfile: (userToken) => dispatch(actions.getUserProfile(userToken)),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectAppointmentDate);
