import React, { Component } from 'react';
import {Button, Col, Row, Form, FormGroup, Label } from "reactstrap";
import "./UserManagement.scss";
import { connect } from "react-redux";
import * as actions from "../../shared";
import dateformat from 'dateformat';
import DatePicker from 'react-date-picker';
import {Alert} from "react-bootstrap";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        uid: null,
        token: null,
        dob: null
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
              <strong>Please set your Date of Birth to proceed.</strong>
            </h6>
            <Form>
              <FormGroup>
                <Label>Date of birth</Label><br/>
                <DatePicker maxDate={this.state.dob} value={this.state.dob} onChange={this.selectUserDOB} format={'y-MM-dd'}/>
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
