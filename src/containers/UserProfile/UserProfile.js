import React, { Component } from 'react';
import {Button, Col, Row, Form, FormGroup, Label } from "reactstrap";
import "./UserProfile.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import dateformat from 'dateformat';
import DatePicker from 'react-date-picker';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        uid: null,
        token: sessionStorage.getItem('token'),
        contactno: null,
        dob: new Date(),
        name: null,
        gender: null,
        bloodgrp: null,
        Address: null,
        email: null
      },
      dob: new Date(),
      error: null
    };
  };
  
  componentDidMount() {
    console.log(this.props.userProfile);
    this.state.userProfile = {
      uid: this.props.userProfile.id,
      name: this.props.userProfile.name,
      gender: this.props.userProfile.gender,
      contactno: this.props.userProfile.contactno,
      dob: this.props.userProfile.dateofbirth,
      Address: this.props.userProfile.address,
      bloodgrp: this.props.userProfile.bloodgroup,
      token: sessionStorage.getItem('token')
    };
  }
  
  selectUserDOB = (dob) => {
    this.setState({dob});
  };
  
  updateUserProfile = () => {
    this.state.userProfile.dob = dateformat(this.state.dob, 'yyyy-mm-dd');
    console.log("request object -- " + JSON.stringify(this.state.userProfile));
    this.props.onUpdateUserProfile(this.state.userProfile);
  };
  
  render() {
    let todayDate = dateformat(new Date(), 'yyyy-mm-dd');
    return (
      <Row>
        <Col md="12">
          <div className={'profileUpdateContainer'}>
            {this.props.error !== null &&
              <strong>{this.props.error}<br/><br/></strong>
            }
            <h6>
              <strong>Please set your Date of Birth to proceed.</strong>
            </h6>
            <Form>
              <FormGroup>
                <Label>Date of birth</Label><br/>
                <DatePicker value={this.state.dob} onChange={this.selectUserDOB} format={'y-MM-dd'}/>
                <Button className={'updateBtn'} color="primary" onClick={this.updateUserProfile}>Update</Button>
              </FormGroup>
            </Form>
          </div>
        </Col>
      </Row>
    );
  };
}

const mapStateToProps = state => {
  return {
    userProfile: state.UserProfile.userProfile,
    error: state.UserProfile.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUserProfile: (userToken) => dispatch(actions.getUserProfile(userToken)),
    onUpdateUserProfile: (userProfileData) => dispatch(actions.updateUserProfile(userProfileData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
