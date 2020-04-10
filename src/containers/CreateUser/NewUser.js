import React, {Component} from "react";
import { Col } from "reactstrap";
import Aux from "../../hoc/Auxwrap";
import Carousel from '../../components/Common/Carousel/Carousel';
import {Link} from "react-router-dom";
import {BrowserView} from "react-device-detect";

class NewUser extends Component {
  render() {
    return (
      <Aux>
        <Col sm="8">
          <BrowserView>
            <Carousel/>
            <div className="keyFeatures">
              <ul>
                <li>* Flexibility in Booking and Scheduling Appointments Via Calendar</li>
                <li>* 10,000 Doctors, 30,000 Lab Facilities and 8,000 Associated Clinics</li>
                <li>* Store & Access Electronic Prescriptions and Lab Reports</li>
                <li>* Get Reminder via SMS and Mail</li>
                <li>* Make Easy and Secure Online Payment</li>
                <li>* Trusted by 50,000 Customers</li>
                <li>* 24x7 Expert Support</li>
                <li>* Home Clinic Services</li>
              </ul>
            </div>
          </BrowserView>
        </Col>
        <Col sm="4">
          <div className="bgWhite">
            <p>
              Congratulations, registration completed successfully. Please <Link to="/" className="textDn">Click here</Link> to login
            </p>
          </div>
        </Col>
      </Aux>
    );
  }
}

export default NewUser;