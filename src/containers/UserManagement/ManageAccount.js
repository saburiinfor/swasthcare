import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import "./UserManagement.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Accordion, Alert, Button, Card, Form, FormControl, FormGroup, FormLabel, Image} from "react-bootstrap";
import UserProfile from "./UserProfile";
import bsCustomFileInput from 'bs-custom-file-input';
import ListAddresses from "./ListAddresses";
import ManageAddress from "./ManageAddress";
import * as actions from "../../shared";
import {connect} from "react-redux";

class ManageAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPersonalDetails: false,
      editHealthDetails: false,
      editPaymentDetails: false,
      editMiscDetails: false,
      patientProfile: {},
      pictureFormValidated: false,
      profileFormValidated: false,
      editPhoto: false,
      addressList: {},
      editAddressMode: false,
      operation: 'new'
    }
    this.editDetails.bind(this);
    this.updateProfile.bind(this);
    this.changePatientDetails.bind(this);
    this.resetFormValidation.bind(this);
    this.setEditAddressMode.bind(this);
  }
  
  componentDidMount() {
    bsCustomFileInput.init();
    this.props.onGetCities();
    this.props.onGetStates();
    this.props.onGetPatientAddresses(this.props.userProfile.id);
    this.props.onGetPatientProfile(this.props.userProfile.id);
    
    this.setState({
      patientProfile: this.props.patientProfile,
      addressList: this.props.addressList
    });
  };
  
  editDetails = (id) => {
    switch (id) {
    case 0:
      this.setState({
        editPersonalDetails: true,
        editHealthDetails: false,
        editPaymentDetails: false,
        editMiscDetails: false,
        editPhoto: false
      });
      break;
    case 1:
      this.setState({
        editPersonalDetails: false,
        editHealthDetails: true,
        editPaymentDetails: false,
        editMiscDetails: false,
        editPhoto: false
      });
      break;
    case 2:
      this.setState({
        editPersonalDetails: false,
        editHealthDetails: false,
        editPaymentDetails: true,
        editMiscDetails: false,
        editPhoto: false
      });
      break;
    case 9:
      this.setState({
        editPersonalDetails: false,
        editHealthDetails: false,
        editPaymentDetails: false,
        editMiscDetails: false,
        editPhoto: true
      });
      break;
    default:
      this.setState({
        editPersonalDetails: false,
        editHealthDetails: false,
        editPaymentDetails: false,
        editMiscDetails: false,
        editPhoto: false
      });
      break;
    }
  };
  
  handleFileSelection = (e) => {
    const fileElement = e.target.files;
    this.setState({
      patientProfile: {
        ...this.state.patientProfile,
        profilePicture: fileElement[0]
      }
    });
  };
  
  setEditAddressMode = (flag) => {
    this.setState({
      editAddressMode: flag
    });
  };
  
  setOperation = (op) => {
    this.setState({
      operation: op
    });
  };
  
  setProfileFormValidated = (flag) => {
    this.setState({profileFormValidated: flag});
  }
  
  setPictureFormValidated = (flag) => {
    this.setState({pictureFormValidated: flag});
  }
  
  changePatientDetails = (event, controlId) => {
    this.setState({
      patientProfile: {
        ...this.props.patientProfile,
        [controlId]: event.target.value
      }
    });
  };
  
  getPatientUpdatedData = () => {
    if (this.state.patientProfile.name === undefined) {
      this.setState({
        patientProfile: this.props.patientProfile
      });
    }
    let patientUpdatedData = {};
    for (const key of ['name', 'contactNo', 'dob', 'gender', 'spokenLanguages', 'bloodgrp']) {
      patientUpdatedData[key] = (this.state.patientProfile[key] === undefined) ? this.props.patientProfile[key] : this.state.patientProfile[key];
    }
    if (this.state.patientProfile['profilePicture'] !== undefined) {
      patientUpdatedData['profilePicture'] = this.state.patientProfile['profilePicture'];
    }
    patientUpdatedData['uid'] = this.props.userProfile.id;
    patientUpdatedData['token'] = this.props.token;
    return patientUpdatedData;
  }
  
  
  updateProfile = (event) => {
    const patientForm = event.currentTarget;
    event.preventDefault();
    if (patientForm.name === 'patientProfilePicture') {
      this.setPictureFormValidated(true);
    } else {
      this.setProfileFormValidated(true);
    }
    if (patientForm.checkValidity() === false) {
      event.stopPropagation();
    } else {
      let patientUpdatedData = this.getPatientUpdatedData();
      // patientForm;
      this.props.onUpdatePatientProfile(patientUpdatedData);
      this.editDetails();
      if (patientForm.name === 'patientProfilePicture') {
        this.setPictureFormValidated(false);
      } else {
        this.setProfileFormValidated(false);
      }
      this.props.onGetPatientProfile(this.props.userProfile.id);
    }
  };
  
  render() {
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .tar {text-align:right;margin-bottom: 5px;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } '}</style>
        </Helmet>
        <Row>
          <Col md="12">
            {this.props.profileCompliant === false &&
            <UserProfile/>
            }
            {this.props.error !== null &&
            <Row>
              <Col>
                <Alert key={'patient-error'} variant={'danger'}>
                  {this.props.error}
                </Alert>
              </Col>
            </Row>
            }
            {this.props.successMessage &&
            <Row>
              <Col>
                <Alert key={'profile-success'} variant={'success'}>
                  {this.props.successMessage}
                </Alert>
              </Col>
            </Row>
            }
            <Row className={'manageAccount'}>
              <Col md={"3"} className="profilePhotoPanel">
                <div className={'profilePhoto'}>
                  {this.props.patientProfile.img
                    ? <Image src={this.props.patientProfile.img} title={'User profile'} roundedCircle/>
                    : <FontAwesomeIcon className="profilePic" color="#ccc" size="5x" icon={faUser}/>
                  }
                  <Form name={"patientProfilePicture"} noValidate validated={this.state.pictureFormValidated} onSubmit={event => this.updateProfile(event)}>
                    <br/>
                    {this.state.editPhoto
                      ?
                      <div className={'uploadPhotoContainer'}>
                        <FormGroup controlId={'profilePicture'}>
                          <Form.File id="patientPhoto" custom onChange={this.handleFileSelection}>
                            <Form.File.Input required/>
                            <Form.File.Label data-browse={'Browse'}>
                              Profile picture
                            </Form.File.Label>
                            <Form.Control.Feedback type={'invalid'} tooltip>
                              Please select a photo
                            </Form.Control.Feedback>
                          </Form.File>
                        </FormGroup>
                        <Button type={'Submit'} variant={'primary'} className={'saveProfile'} onClick={event => this.resetFormValidation(event, 'patientProfilePicture')}>Save</Button>
                      </div>
                      : <span className={'profileEdit'} onClick={this.editDetails.bind(null, 9)}>Upload photo</span>
                    }
                  </Form>
                </div>
                <Row className={'userDetails'}>
                  <Col md={"6"} className={'leftColumn'}>
                    {this.props.patientProfile.name}
                  </Col>
                  <Col md={'6'} className={'rightColumn'}>
                    {this.props.patientProfile.dob}
                  </Col>
                </Row>
                <Row className={'userDetails'}>
                  <Col md={'6'} className={'leftColumn'}>
                    {this.props.patientProfile.contactNo}
                  </Col>
                  <Col md={'6'} className={'rightColumn'}>
                    {this.props.patientProfile.userId}
                  </Col>
                </Row>
                {/*<div className="profileCompletion mb-4">70% profile complete</div>*/}
              </Col>
              <Col md={"9"} className={'profileDetails'}>
                <Accordion className={'profileUpdatePanel'} defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Personal information
                      </Accordion.Toggle>
                      <Button variant={'light'} className={'editLink'} onClick={this.editDetails.bind(null, 0)}>Edit</Button>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form name={"patientProfile"} noValidate validated={this.state.profileFormValidated} onSubmit={this.updateProfile}>
                          <FormGroup controlId={'profileForm.name'}>
                            <FormLabel>Full name</FormLabel>
                            {this.state.editPersonalDetails
                              ? <Form.Control required type={'text'} placeholder={'Patient full name'} defaultValue={this.props.patientProfile.name}
                                              onChange={event => this.changePatientDetails(event, 'name')}/>
                              : <Form.Label className={'patientTexts'}>{this.props.patientProfile.name}</Form.Label>
                            }
                            <Form.Control.Feedback type={'invalid'} tooltip>
                              Please provide valid full name
                            </Form.Control.Feedback>
                          </FormGroup>
                          <Form.Row>
                            <FormGroup as={Col} md={"6"} controlId={'profileForm.contactNo'}>
                              <FormLabel>Contact No.</FormLabel>
                              {this.state.editPersonalDetails
                                ? <FormControl required type={'tel'} placeholder={'Contact number'} defaultValue={this.props.patientProfile.contactNo}
                                               onChange={event => this.changePatientDetails(event, 'contactNo')}/>
                                : <FormLabel className={'patientTexts'}>{this.props.patientProfile.contactNo}</FormLabel>
                              }
                              <Form.Control.Feedback type={'invalid'} tooltip>
                                Please provide valid phone number
                              </Form.Control.Feedback>
                            </FormGroup>
                            <FormGroup as={Col} md={"6"} controlId={'profileForm.altContactNo'}>
                              <FormLabel>Alternate No.</FormLabel>
                              {this.state.editPersonalDetails
                                ? <FormControl type={'tel'} placeholder={'Alternate Contact number'} defaultValue={this.props.patientProfile.contactNo}
                                               onChange={event => this.changePatientDetails(event, 'altContactNo')}/>
                                : <FormLabel className={'patientTexts'}>{this.props.patientProfile.contactNo}</FormLabel>
                              }
                            </FormGroup>
                          </Form.Row>
                          <Form.Row>
                            <FormGroup as={Col} md={"6"} controlId={'profileForm.dob'}>
                              <FormLabel>Date of Birth</FormLabel>
                              <FormControl type={'date'} defaultValue={this.props.patientProfile.dob}/>
                            </FormGroup>
                            <FormGroup className={'patientGenderBox'} as={Col} md={"6"} controlId={'profileForm.gender'}>
                              <FormLabel>Gender</FormLabel>
                              <br/>
                              <Form.Check defaultChecked={this.props.userProfile.gender === "M"} name={"gender"} inline type="radio" label="Male" id="patient_m" value={'M'}
                                          onChange={event => this.changePatientDetails(event, 'gender')}/>
                              <Form.Check defaultChecked={this.props.userProfile.gender === "F"} name={"gender"} inline type="radio" label="Female" id="patient_f" value={'F'}
                                          onChange={event => this.changePatientDetails(event, 'gender')}/>
                              <Form.Check defaultChecked={this.props.userProfile.gender === "O"} name={"gender"} inline type="radio" label="Others" id="patient_o" value={'O'}
                                          onChange={event => this.changePatientDetails(event, 'gender')}/>
                              <br/>
                            </FormGroup>
                          </Form.Row>
                          <FormGroup controlId={'profileForm.spoken_languages'}>
                            <FormLabel>Spoken languages</FormLabel>
                            {this.state.editPersonalDetails
                              ? <FormControl type={'text'} placeholder={'Languages comma separated'} defaultValue={this.props.patientProfile.spoken_languages}
                                             onChange={event => this.changePatientDetails(event, 'spokenLanguages')}/>
                              : <FormLabel className={'patientTexts'}>{this.props.patientProfile.spoken_languages === '' ? 'NA' : this.props.patientProfile.spoken_languages}</FormLabel>
                            }
                            {this.state.editPersonalDetails &&
                            <Button type={'Submit'} variant={'primary'} className={'saveProfile'} onClick={this.resetFormValidation}>Save</Button>
                            }
                          </FormGroup>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Health information
                      </Accordion.Toggle>
                      <Button variant={'light'} className={'editLink'} onClick={this.editDetails.bind(null, 1)}>Edit</Button>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <FormGroup controlId={'profileForm.bloodgrp'}>
                          <FormLabel>Blood Group</FormLabel>
                          <FormControl as={'select'} defaultValue={this.props.patientProfile.bloodgrp} onChange={event => this.changePatientDetails(event, 'bloodgrp')}>
                            <option value={'A+'}>A+</option>
                            <option value={'O+'}>O+</option>
                            <option value={'B+'}>B+</option>
                            <option value={'AB+'}>AB+</option>
                            <option value={'A-'}>A-</option>
                            <option value={'O-'}>O-</option>
                            <option value={'B-'}>B-</option>
                            <option value={'AB-'}>AB-</option>
                          </FormControl>
                          {this.state.editHealthDetails &&
                          <Button type={'Submit'} variant={'primary'} className={'saveProfile'} onClick={this.resetFormValidation}>Save</Button>
                          }
                        </FormGroup>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Address information
                      </Accordion.Toggle>
                      <Button variant={'light'} className={'editLink'} onClick={this.editDetails.bind(null, 2)}>Edit</Button>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        {this.props.addressError !== null &&
                        <Alert key={'address-error'} variant={'danger'}>{this.props.addressError}</Alert>
                        }
                        {this.props.addressUpdateSuccess !== null &&
                        <Alert key={'address-success'} variant={'success'}>{this.props.addressUpdateSuccess}</Alert>
                        }
                        <h5>Your addresses</h5>
                        {/*Edit operation values would be new/edit/remove*/}
                        {this.state.editAddressMode
                          ? <ManageAddress {...this.props} operation={this.state.operation} addressObj={this.props.editAddress.addressObj} changeEditView={(flag) => this.setEditAddressMode(flag)}/>
                          : this.props.addressList.length < 1
                            ? <ManageAddress {...this.props} operation={'new'}  changeEditView={(flag) => this.setEditAddressMode(flag)}/>
                            : <ListAddresses {...this.props} addressList={this.props.addressList} changeEditView={(flag) => this.setEditAddressMode(flag)} setOperation={(op) => this.setOperation(op)} />
                        }
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </Col>
          {/*<Col md="4">*/}
          {/*  <ImgWithOverlayTextGroup/>*/}
          {/*</Col>*/}
        </Row>
      </Col>
    )
  }
}

const mapStateToProps = state => {
  return {
    editAddress: {flag: false, addressObj: {}},
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    patientProfile: state.manageAccount.patientProfile,
    error: state.manageAccount.error,
    successMessage: state.manageAccount.updatePatientSuccess,
    token: sessionStorage.getItem('token'),
    addressList: state.manageAccount.addressList,
    addressError: state.manageAccount.addressError,
    addressUpdateSuccess: state.manageAccount.addressUpdateSuccess,
    cityList: state.newAppointment.cityList,
    stateList: state.manageAccount.stateList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPatientProfile: (userId) => dispatch(actions.getPatientProfile(userId)),
    onUpdatePatientProfile: (patientProfileObj) => dispatch(actions.updatePatientProfile(patientProfileObj)),
    onGetPatientAddresses: (userId) => dispatch(actions.getPatientAddresses(userId)),
    onUpdateAddress: (patientAddress) => dispatch(actions.updateAddress(patientAddress)),
    onGetStates: () => dispatch(actions.getStates()),
    onGetCities: () => dispatch(actions.getCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccount);