import React, { Component } from "react";
import Aux from "../../hoc/Auxwrap";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import styles from "./CreateUser.module.scss";
import Carousel from '../Carousel/Carousel'
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import ReactTelephoneInput from "react-telephone-input/lib/withStyles";
import flags from "../../assets/images/flags.png";
import {Redirect} from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTypeId: "1",
      marketId: "2",
      appId: "1",
      createdBy: "1",
      roleid: "4",
      uhid: "P201900",
      name: "",
      email: "",
      password: "",
      contactNo: "",
      gender: "M",
      city: "1",
      address: "Nayapalli",
      bloodgrp: "AB+",
      dob: "2009-07-17",
      status: "N"
    }
  }
  componentDidMount() {
    this.props.onGetCountryList();
    this.props.onGetCityList();
    this.props.onSetUserStatus();
  };
  onSubmitHandler = e => {
    console.log("current state is = " + JSON.stringify(this.state));
    this.props.onCreateUser(this.state);
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  updateContactNo = (telPhoneNumber) => {
    const contactNo = telPhoneNumber.trim().substr(3).replace('-','');
    this.setState({
      contactNo
    });
  };
  
  handleInputChange(telNumber, selectedCountry) {
    console.log('input changed. number: ', telNumber, 'selected country: ', selectedCountry);
  };
  render() {
    if (this.props.userStatus === 'new') {
      this.props.onSetUserStatus();
      return (
        <Redirect to='/newUser' />);
    }
    return (
      <Aux>
        <Col sm="8">
          <BrowserView>
            <Carousel />
            <div className="keyFeatures">
              <ul>
                <li>* Over 10,000 doctors in network</li>
                <li>* 24x7 expert support</li>
                <li>* Over 1 million lab facilities</li>
                <li>* Home clinic services</li>
                <li>* Express services</li>
              </ul>
            </div>
          </BrowserView>
        </Col>
        <Col sm="4">
          <div className={styles.bgWhite}>
            <div className={styles.welcomeMsg}>Welcome to ConferKare</div>
            <Form>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="name" id="name" className="no-border" value={this.state.name} onChange={this.onChangeHandler} />
                <label className="ml-0">Name *</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="email" name="email" id="email" className="no-border" value={this.state.email} onChange={this.onChangeHandler} />
                <label className="ml-0">Email *</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="password" name="password" id="password" className="no-border" value={this.state.password} onChange={this.onChangeHandler} />
                <label className="ml-0">Password *</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <ReactTelephoneInput
                  className={styles.reactTelInput}
                  defaultCountry="in"
                  initialValue=''
                  required={true}
                  flagsImagePath={flags}
                  // onChange={this.handleInputChange}
                  onBlur={this.updateContactNo}
                  placeholder={'911234567890'}
                />
              </FormGroup>
              <div className={styles.buttonContainer}>
                <Button color="primary" onClick={this.onSubmitHandler} className={styles.createUserBtn}>Submit</Button>
              </div>
              {/*<Button color="secondary" className="ml-2">*/}
              {/*  Cancel*/}
              {/*</Button>*/}
            </Form>
          </div>
        </Col>
        <MobileView>
          <div className={styles.faqContainer}>
            <h4>Faq?</h4>
            <ul>
              <li>
                <span className={styles.question}>Q. Why signup required?</span>
                <span className={styles.answer}>A. Features are very personal and confidential so to maintain the privacy of customers we need them to have their exclusive member access.</span>
              </li>
              <li>
                <span className={styles.question}>Q. Why mobile number needed?</span>
                <span className={styles.answer}>A. Mobile number is unique for most most of the individuals and mostly users would interact with systems using phones so mobile number is taken as secondary important point.</span>
              </li>
            </ul>
          </div>
        </MobileView>
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    countryLs: state.createUser.countryList,
    cityLs: state.createUser.cityList,
    userStatus: state.createUser.userStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetCountryList: () => dispatch(actions.getCountry()),
    onGetCityList: () => dispatch(actions.getCity()),
    onSetUserStatus: () => dispatch(actions.setUserStatus()),
    onCreateUser: (userDataObj) => dispatch(actions.createUser(userDataObj))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);