import React, { Component } from 'react';
import {Button, Col, Row, Label } from "reactstrap";
import "./UserManagement.scss";
import { connect } from "react-redux";
import * as actions from "../../shared";
import dateformat from 'dateformat';
import DatePicker from 'react-date-picker';
import {Alert, FormLabel, Form, FormGroup} from "react-bootstrap";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        uid: null,
        token: null,
        dob: null,
        gender: null
      },
      dob: new Date(),
      error: null
    };
  };
  
  componentDidMount() {
    let minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 18);
    this.setState({
      dob: minDate,
      userProfile: {
        uid: this.props.userProfile.id,
        dob: this.props.userProfile.dateofbirth,
        gender: this.props.userProfile.gender,
        token: sessionStorage.getItem('token')
      }
    });
  }
  
  selectUserDOB = (dob) => {
    this.setState({
      dob: dob,
      userProfile: {
        ...this.state.userProfile,
        dob: dateformat(dob, 'yyyy-mm-dd')
      }
    });
  };
  
  updateGender = (e) => {
    this.setState({
      userProfile: {
        ...this.state.userProfile,
        gender: e.target.value
      }
    });
  };
  
  updateUserProfile = () => {
    this.props.onUpdateUserProfile(this.state.userProfile);
  };
  
  render() {
    return (
      <Row>
        <Col md="12">
          <div className={'profileUpdateContainer'}>
            {this.props.successMessage !== null &&
              <Alert key={'profile-update-success'} variant={'success'}>
                {this.props.successMessage}
              </Alert>
            }
            {this.props.error !== null &&
              <Alert key={'profile-update-error'} variant={this.state.error !== null ? 'danger' : 'light'}>
                {this.props.error}
              </Alert>
            }
            <h6>
              <strong>Please set your details to proceed.</strong>
            </h6>
            <Form>
              <Row>
                <Col md={"5"}>
                  <FormGroup>
                    <Label>Date of birth</Label><br/>
                    <DatePicker maxDate={this.state.dob} value={this.state.dob} onChange={this.selectUserDOB} format={'y-MM-dd'}/>
                  </FormGroup>
                </Col>
                <Col md={"5"}>
                  <FormGroup>
                    <FormLabel>Gender</FormLabel>
                    <br/>
                    <Form.Check defaultChecked={this.props.userProfile.gender === "M"} name={"gender"} inline type="radio" label="Male" id="user_m" value={'M'}
                                onChange={this.updateGender}/>
                    <Form.Check defaultChecked={this.props.userProfile.gender === "F"} name={"gender"} inline type="radio" label="Female" id="user_f" value={'F'}
                                onChange={this.updateGender}/>
                    <Form.Check defaultChecked={this.props.userProfile.gender === "O"} name={"gender"} inline type="radio" label="Others" id="user_o" value={'O'}
                                onChange={this.updateGender}/>
                    <br/>
                  </FormGroup>
                </Col>
                <Col md={"2"}>
                  <Button className={'updateBtn'} color="primary" onClick={this.updateUserProfile}>Update</Button>
                </Col>
              </Row>
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
    successMessage: state.UserProfile.successMessage,
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
