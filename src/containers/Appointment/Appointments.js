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
    // this.props.onGetUserDetails();
    const apDate = dateformat(new Date('2019/07/03'), 'yyyy-mm-dd');
    this.props.onSetAppointmentDate(apDate);
  }
  
  render() {
    const userToken = sessionStorage.getItem('token');
    if (userToken === null) {
      return <Redirect to='/' />;
    } else {
      return (
        <Col md="12" className="mt10">
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
              <Row>
                <Col>
                  <div className="tar"><Link to="/newAppointment"><img src={newAppointment} className="appointmentBtn"></img></Link></div>
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
                
                    {/*<Nav tabs>*/}
                    {/*  <NavItem>*/}
                    {/*    <NavLink className={classnames({active: this.state.activeTab === '1'})} onClick={() => {*/}
                    {/*      this.toggle('1');*/}
                    {/*    }}>*/}
                    {/*      All*/}
                    {/*    </NavLink>*/}
                    {/*  </NavItem>*/}
                    {/*  <NavItem>*/}
                    {/*    <NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={() => {*/}
                    {/*      this.toggle('2');*/}
                    {/*    }}>*/}
                    {/*      Today*/}
                    {/*    </NavLink>*/}
                    {/*  </NavItem>*/}
                    {/*  <NavItem>*/}
                    {/*    <NavLink className={classnames({active: this.state.activeTab === '3'})} onClick={() => {*/}
                    {/*      this.toggle('3');*/}
                    {/*    }}>*/}
                    {/*      Tomorrow*/}
                    {/*      /!*<FontAwesomeIcon className="mr-2" color="#ccc" size="1x" icon={faCalendarAlt}/>*!/*/}
                    {/*    </NavLink>*/}
                    {/*  </NavItem>*/}
                    {/*</Nav>*/}
                    {/*<TabContent activeTab={this.state.activeTab} className={styles.customTabs}>*/}
                    {/*  <TabPane tabId="1">*/}
                    {/*    <Row>*/}
                    {/*      <Col sm="12" className={styles.appointments}>*/}
                    {/*        <AppointmentRowGroup appointmmentDate={this.props.appointmentDate} />*/}
                    {/*      </Col>*/}
                    {/*    </Row>*/}
                    {/*  </TabPane>*/}
                    {/*  <TabPane tabId="2">*/}
                    {/*    <h1>No appointments today for you.</h1>*/}
                    {/*  </TabPane>*/}
                    {/*  <TabPane tabId="3">*/}
                    {/*    <h1>No appointments tomorrow for you.</h1>*/}
                    {/*  </TabPane>*/}
                    {/*</TabContent>*/}
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