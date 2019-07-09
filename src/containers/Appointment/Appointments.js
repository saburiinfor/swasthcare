import React, {Component} from "react";
import {Row, Col, Button, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText,} from "reactstrap";
import AppointmentRowGroup from "../Appointment/AppointmentRowGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "./Appointment.module.css";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faFastForward} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import newAppointment from "../../assets/images/newAppointment.png";
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

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
  
  render() {
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .appointmentBtn{height:50px} .tar{text-align:right;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
        </Helmet>
        <Row>
          <Col md="8">
            <Row>
              <Col>
                <Button className={styles.editBtn} size="sm">
                  <FontAwesomeIcon className="mr-2" color="#000" size="1x" icon={faPen}/>
                  Edit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <FontAwesomeIcon className="mr-2" color="#ccc" size="5x" icon={faUser} />
                <div className="mb-4">70% profile complete</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="tar"><Link to="/newAppointment"><img src={newAppointment} className="appointmentBtn"></img></Link></div>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className={classnames({active: this.state.activeTab === '1'})} onClick={() => {this.toggle('1');}}>
                        Today
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={() => {this.toggle('2');}}>
                        Tomorrow
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={classnames({active: this.state.activeTab === '3'})} onClick={() => {this.toggle('3');}}>
                        <FontAwesomeIcon className="mr-2" color="#ccc" size="1x" icon={faCalendarAlt}/>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab} className={styles.customTabs}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
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

export default Appointment;