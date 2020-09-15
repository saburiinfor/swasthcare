import React, {Component} from "react";
import {Button, Col, Row } from "reactstrap";
import AppointmentRowGroup from "./AppointmentRowGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "./Dashboard.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faUser} from "@fortawesome/free-solid-svg-icons";
import newAppointment from "../../assets/images/newAppointment.png";
import newAppointmentMobile from "../../assets/images/newAppointment-2.png";
import {BrowserView, MobileView} from "react-device-detect";
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../shared";
import dateformat from 'dateformat';
import UserProfile from "../UserManagement/UserProfile";
import getPageLink from "../../components/Common/WizardButtons/StageManager";
import DatePicker from 'react-date-picker';
import {WizardContext, wizards} from "../../shared/WizardContext";
import StageManager from "../../components/Common/WizardButtons/StageManager";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      appointmentDate: new Date()
    };
  }
  
  selectAppointmentDate = (appointmentDate) => {
    this.setState({
      appointmentDate
    });
    setTimeout(function(obj) {
      obj.toggle('3');
    }, 100, this);
  };
  
  toggle(tab) {
    // Set the date for which we want to fetch the appointments list and show in UI
    // @TODO - for now setting it to Date, 03/07/2019, need to set as today (this.props.appointmentDate)
    let appointmentDate = null;
    switch (tab) {
      case '1':
        appointmentDate = dateformat(new Date(), 'yyyy-mm-dd');
        break;
      case '2':
        let tomorrow = new Date();
        appointmentDate = dateformat(tomorrow.setDate(tomorrow.getDate() + 1), 'yyyy-mm-dd');
        break;
      case '3':
        appointmentDate = dateformat(this.state.appointmentDate, 'yyyy-mm-dd');
        break;
      default:
        appointmentDate = dateformat(new Date(), 'yyyy-mm-dd');
    }
    this.props.onSetAppointmentDate(appointmentDate);
    // this.props.onFilterAppointmentList();
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    // this.props.onGetUserProfile(sessionStorage.getItem('token'));
    const apDate = dateformat(new Date(), 'yyyy-mm-dd');
    this.props.onSetAppointmentDate(apDate);
  }
  
  initializeAppointment = () => {
    let appointmentData = {
      city: null,
      appointmentType: null,
      pid: null,
      name: this.props.userProfile.name,
      email: this.props.userProfile.email,
      contactNo: this.props.userProfile.contactNo
    };
    // Set an activeStage counter to sessionStorage object for moving around pages in wizard
    sessionStorage.setItem(wizards.appointment.key, 1);
    this.props.onSetAppointmentData(appointmentData);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem(wizards.appointment.key, 0);
      return <Redirect to='/' />;
    }
    sessionStorage.setItem(wizards.appointment.key, 0);
    sessionStorage.setItem(wizards.labappointment.key, 0);
    return (
      <Col md="12" className="mt10">
        <WizardContext.Consumer>
          {wizard => (
            <StageManager flow={wizard.flow} wizardKey={wizard.key}/>
          )}
        </WizardContext.Consumer>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .tar {text-align:right;margin-bottom: 5px;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } '}</style>
        </Helmet>
        <Row>
          <Col md="12">
            <Row className={styles.editBtnRow}>
              <Col>
                <Button className={styles.editBtn} size="sm">
                  <FontAwesomeIcon title={'Edit'} className="mr-2" color="#000" size="1x" icon={faPen}/>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <FontAwesomeIcon className="mr-2" color="#ccc" size="5x" icon={faUser}/>
                {/*<div className="mb-4">70% profile complete</div>*/}
              </Col>
            </Row>
            { this.props.profileCompliant === false &&
              <UserProfile/>
            }
            <Row>
              <Col>
                <div className="tar">
                  <BrowserView>
                    <Link to="/newAppointment" onClick={this.initializeAppointment}><img src={newAppointment} className="appointmentBtn" title={'New appointment'} alt={'New' +
                    ' appointment'}/></Link>
                  </BrowserView>
                  <MobileView>
                    <Link to="/newAppointment" onClick={this.initializeAppointment}><img src={newAppointmentMobile} className="appointmentBtn" title={'New appointment'} alt={'New' +
                    ' appointment'}/>&nbsp;New appointment</Link>
                  </MobileView>
                </div>
                <div>
                  <Button className={this.state.activeTab === '1' ? styles.tabButtons + ' active' : styles.tabButtons} onClick={this.toggle.bind(this, '1')}>
                    Today
                  </Button>
                  <Button className={this.state.activeTab === '2' ? styles.tabButtons + ' active' : styles.tabButtons} onClick={this.toggle.bind(this, '2')}>
                    Tomorrow
                  </Button>
                  <div className={this.state.activeTab === '3' ? styles.tabCalendar + ' ' + styles.active : styles.tabCalendar}>
                    <DatePicker value={this.state.appointmentDate} onChange={this.selectAppointmentDate} format={'y-MM-dd'}/>
                  </div>
                  <Row>
                    <Col sm="12" className={styles.appointments}>
                      <AppointmentRowGroup appointmentDate={this.props.appointmentDate} />
                    </Col>
                  </Row>
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
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    appointmentDate: state.UserDashboard.appointmentDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onGetUserProfile: (userToken) => dispatch(actions.getUserProfile(userToken)),
    onSetAppointmentDate: (date) => dispatch(actions.setAppointmentDate(date)),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
