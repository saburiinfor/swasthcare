import React, {Component} from "react";
import {Button, Col, Row } from "reactstrap";
import AppointmentRowGroup from "../Appointment/AppointmentRowGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "../Appointment/Appointment.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faPen, faUser} from "@fortawesome/free-solid-svg-icons";
import newAppointment from "../../assets/images/newAppointment.png";
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import dateformat from 'dateformat';
import UserProfile from "../UserProfile/UserProfile";
import getPageLink from "../../components/Common/WizardButtons/StageManager";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  
  toggle(tab) {
    // Set the date for which we want to fetch the appointments list and show in UI
    // @TODO - for now setting it to Date, 03/07/2019, need to set as today (this.props.appointmentDate)
    let appointmentDate = null;
    switch (tab) {
      case '1':
        appointmentDate = dateformat(new Date('2019/07/03'), 'yyyy-mm-dd');
        break;
      case '2':
        appointmentDate = dateformat(new Date('2019/07/04'), 'yyyy-mm-dd');
        break;
      case '3':
        appointmentDate = dateformat(new Date('2019/07/04'), 'yyyy-mm-dd');
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
    const apDate = dateformat(new Date('2019/07/03'), 'yyyy-mm-dd');
    this.props.onSetAppointmentDate(apDate);
  }
  
  initializeAppointment = () => {
    let appointmentData = {
      city: null,
      appointmentType: null,
      phyId: null
    };
    // Set an activeStage counter to sessionStorage object for moving around pages in wizard
    sessionStorage.setItem('conferkare.appointment.activeStage', 1);
    this.props.onSetAppointmentData(appointmentData);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem('conferkare.appointment.activeStage', 0);
      return <Redirect to='/' />;
    }
    const pageUrl = getPageLink();
    return (
      <Col md="12" className="mt10">
        <Redirect to={pageUrl}/>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .tar{text-align:right;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } '}</style>
        </Helmet>
        <Row>
          <Col md="8">
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
                <div className="mb-4">70% profile complete</div>
              </Col>
            </Row>
            { this.props.profileCompliant === false &&
              <UserProfile/>
            }
            <Row>
              <Col>
                <div className="tar"><Link to="/newAppointment" onClick={this.initializeAppointment}><img src={newAppointment} className="appointmentBtn"></img></Link></div>
                <div>
                  <Button onClick={this.toggle.bind(null, '1')}>
                    Today
                  </Button>
                  <Button onClick={this.toggle.bind(null, '2')}>
                    Tomorrow
                  </Button>
                  <Button onClick={this.toggle.bind(null, '3')}>
                    <FontAwesomeIcon className="mr-2" color="#ccc" size="1x" icon={faCalendarAlt}/>
                  </Button>
                  <Row>
                    <Col sm="12" className={styles.appointments}>
                      <AppointmentRowGroup appointmentDate={this.props.appointmentDate} />
                    </Col>
                  </Row>
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
    // onGetUserProfile: (userToken) => dispatch(actions.getProfile(userToken)),
    onSetAppointmentDate: (date) => dispatch(actions.setAppointmentDate(date)),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);