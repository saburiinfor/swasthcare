import React, {Component} from "react";
import {Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane,} from "reactstrap";
import AppointmentRowGroup from "../Appointment/AppointmentRowGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "./Appointment.module.scss";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faPen, faUser} from "@fortawesome/free-solid-svg-icons";
import newAppointment from "../../assets/images/newAppointment.png";
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import dateformat from 'dateformat';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  componentDidMount() {
    // this.props.onGetUserDetails();
    const apDate = dateformat(Date(), 'dd/mm/yyyy');
    this.props.onSetAppointmentDate(apDate);
  }
  
  render() {
    const userToken = sessionStorage.getItem('token');
    if (userToken === null) {
      return <Redirect to='/' />;
    }
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .appointmentBtn{height:50px} .tar{text-align:right;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } .header .logo img{height:80px} '}</style>
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
            <Row>
              <Col>
                <div className="tar"><Link to="/newAppointment"><img src={newAppointment} className="appointmentBtn"></img></Link></div>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className={classnames({active: this.state.activeTab === '1'})} onClick={() => {
                        this.toggle('1');
                      }}>
                        Today
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={() => {
                        this.toggle('2');
                      }}>
                        Tomorrow
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={classnames({active: this.state.activeTab === '3'})} onClick={() => {
                        this.toggle('3');
                      }}>
                        <FontAwesomeIcon className="mr-2" color="#ccc" size="1x" icon={faCalendarAlt}/>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab} className={styles.customTabs}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12" className={styles.appointments}>
                          <AppointmentRowGroup/>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <h1>Tomorrow List Not Available </h1>
                    </TabPane>
                    <TabPane tabId="3">
                      <h1>List Not Available </h1>
                    </TabPane>
                  </TabContent>
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
    // userDetails: state.appointment.userDetails,
    appointmentDate: state.appointment.appointmentDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onGetUserDetails: () => dispatch(actions.getUserDetails()),
    onSetAppointmentDate: (date) => dispatch(actions.setAppointmentDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);