import React, {Component} from "react";
import {Col, CustomInput, Input, Row} from "reactstrap";
import DatePicker from "react-datepicker";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "./SelectAppointmentDate.module.scss";
import {Helmet} from "react-helmet";
// import CustomCalenderIcon from "../../components/Common/CustomCalenderIcon/CustomCalenderIcon";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import { connect } from 'react-redux';
import * as actions from "../../shared";
import {Redirect} from "react-router-dom";
import getPageLink from "../../components/Common/WizardButtons/StageManager";

class SelectAppointmentDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      inputDate: "",
      currentDate: "",
      appday: 'Sun',
      appregid: 'A202026'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlerNextBtnClick.bind(this);
    this.validateUserSelection.bind(this);
  }
  
  componentDidMount() {
  }
  
  validateUserSelection = () => {
    let valuesSet = this.props.profileCompliant && this.state.appdate !== undefined;
    console.log(valuesSet);
    return !!valuesSet;
  };
  
  zeroPrefixing = (val) => {
    return (val < 10) ? '0' + val : val;
  };
  
  getDayText = (day) => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
  };
  
  generateAppRegId = (year, clinicid) => {
    return `A${year}${clinicid}`;
  };
  
  handleChange(date) {
    let newFormatedDate;
    newFormatedDate =
      // date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      date.getFullYear() + "-" + this.zeroPrefixing(date.getMonth() + 1) + "-" + this.zeroPrefixing(date.getDate());
    
    this.setState({
      startDate: date,
      inputDate: newFormatedDate,
      appdate: newFormatedDate,
      appday: this.getDayText(date.getDay()),
      appregid: this.generateAppRegId(date.getFullYear(), this.props.appointmentData.clinicid)
    });
  }
  
  onChangeHandler = e => {
    if (e.target.value === "today") {
      var date = new Date();
      let day = date.getDay(), fullYear = date.getFullYear();
      date =
        // date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        date.getFullYear() + "-" + this.zeroPrefixing(date.getMonth() + 1) + "-" + this.zeroPrefixing(date.getDate());
      
      this.setState({[e.target.name]: date, currentDate: e.target.value, appdate: date, appday: this.getDayText(day), appregid: this.generateAppRegId(fullYear, this.props.appointmentData.clinicid) });
    }
    
    if (e.target.value === "tomorrow") {
      let date = new Date();
      date.setDate(date.getDate() + 1); // even 32 is acceptable

      let day = date.getDay(), fullYear = date.getFullYear();
      
      let tomorrow =
        // date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        date.getFullYear() + "-" + this.zeroPrefixing(date.getMonth() + 1) + "-" + this.zeroPrefixing(date.getDate());
      
      this.setState({[e.target.name]: tomorrow, currentDate: e.target.value, appdate: tomorrow, appday: this.getDayText(day), appregid: this.generateAppRegId(fullYear, this.props.appointmentData.clinicid) });
    }
  };
  
  handleDateChange = m => {
    this.setState({startDate: m});
  };
  
  handlerNextBtnClick = () => {
    this.props.appointmentData.appdate = this.state.appdate;
    this.props.appointmentData.appday = this.state.appday;
    this.props.appointmentData.appregid = this.state.appregid;
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
          <Col md="12">
            <div className={styles.selectDate}>
              <div className={'stepHeader'}>
                <h4>
                  Select appointment Date
                </h4>
                <WizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} />
              </div>
              <Helmet>
                <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo' +
                ' img{height:80px} @media only screen and (max-width: 700px) { .react-datepicker__month-container { width: 100%; }} '}</style>
              </Helmet>
              <div className={'stepSelectionBox'}>
                <Row>
                  <Col md="4">
                    <Input
                      type="text"
                      name="appointmentDate"
                      id="appointmentDate"
                      value={this.state.inputDate}
                      onChange={this.onChangeHandler}
                      placeholder="YYYY-MM-DD"
                    />
                  </Col>
                  <Col md="8">
                    
                    {/*<DatePicker*/}
                    {/*  customInput={*/}
                    {/*    <CustomCalenderIcon*/}
                    {/*      onClickCustHandler={this.handleChange}*/}
                    {/*    />*/}
                    {/*  }*/}
                    {/*  selected={this.state.startDate}*/}
                    {/*  onChange={this.handleChange}*/}
                    {/*/>*/}
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
                  <Col md="12" className="mt-2">
                    <DatePicker
                      selected={this.state.startDate}
                      inline
                      onChange={this.handleChange}
                      startDate={new Date()}
                      monthsShown={2}
                      minDate={new Date()}
                      calendarClassName={styles.selectDateCalendar}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          {/*<Col md="4">{<ImgWithOverlayTextGroup/>}</Col>*/}
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
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectAppointmentDate);
