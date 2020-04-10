import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from './NewApointment.module.scss';
import {Button} from "bootstrap/js/src";

class AppointmentCreateResponse extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(this.props);
  }
  
  render() {
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        { this.props.profileCompliant === false &&
        <UserProfile/>
        }
        <Row>
          <Col md="8">
            <div>
              <h2></h2>
            </div>
            <Row>
              <Col>
                <div className={styles.appointmentBox}>
                  <h4>
                    Appointment created successfully
                  </h4>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div>
                    <Row>
                      <Col>
                        Congratulations you have successfully submitted information for an appointment. Our team would go through it and respond on your request. <br/> Have a great time ahead...
                        <br/><br/>
                        <Link to={'/dashboard'}>Go to Home</Link>
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

export default AppointmentCreateResponse;