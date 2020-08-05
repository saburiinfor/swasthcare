import React, {Component} from 'react';
import {Button, Col, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

class ManageAddress extends Component {
  constructor(props) {
    super(props);
    let addressTypes = {
      'Home': 1,
      'Work': 2,
      'Others': 3
    };
    this.state = {
      patientAddress: {
        userID: this.props.patientProfile.userId,
        id: this.props.addressObj.id,
        operation: this.props.operation,
        addressType: addressTypes[this.props.addressObj.addressType]
      },
      addressFormValidated: false
    };
    this.changePatientDetails.bind(this);
    this.submitDetails.bind(this);
    this.cancelChange.bind(this);
    this.validateForm.bind(this);
  }
  
  componentDidMount() {
  }
  
  changePatientDetails = (e, attrName) => {
    this.setState({
      patientAddress: {
        ...this.state.patientAddress,
        [attrName]: e.target.value
      }
    });
  };
  
  submitDetails = () => {
    console.log(this.state.patientAddress);
    this.props.onUpdateAddress(this.state.patientAddress);
    let editAddress = {
      flag: false,
      addressObj: {}
    };
    Object.assign(this.props.editAddress, editAddress);
  };
  
  cancelChange = () => {
    let editAddress = {
      flag: false,
      addressObj: {}
    };
    Object.assign(this.props.editAddress, editAddress);
    this.props.editAddress.flag = false;
  };
  
  setFormValidated = (flag) => {
    this.setState({addressFormValidated: flag});
  }
  
  validateForm = (e) => {
    const addressForm = e.currentTarget;
    e.preventDefault();
    this.setFormValidated(true);
    if (addressForm.checkValidity() === false) {
      e.stopPropagation();
    } else {
      this.setFormValidated(false);
    }
  };
  
  render() {
    return (
      <div className={'newAddress'}>
        <Form name={"addressForm"} noValidate validated={this.state.addressFormValidated} onSubmit={this.validateForm}>
          {(this.props.operation === 'new' || this.props.operation === 'edit')
            ?
            <FormGroup controlId={'profileForm.address_type'}>
              <FormLabel>Address type</FormLabel><br/>
              <Form.Check name={"addressType"} inline type="radio" label="Home" value={'1'} defaultChecked={this.props.addressObj.addressType === 'Home'}
                          onChange={event => this.changePatientDetails(event, 'addressType')}/>
              <Form.Check name={"addressType"} inline type="radio" label="Work" value={'2'} defaultChecked={this.props.addressObj.addressType === 'Work'}
                          onChange={event => this.changePatientDetails(event, 'addressType')}/>
              <Form.Check name={"addressType"} inline type="radio" label="Others" value={'3'} defaultChecked={this.props.addressObj.addressType === 'Others'}
                          onChange={event => this.changePatientDetails(event, 'addressType')}/>
            </FormGroup>
            :
            <FormGroup controlId={'profileForm.address_type'}>
              <FormLabel>Address type</FormLabel><br/>
              {this.props.addressObj.addressType}
            </FormGroup>
          }
          <FormGroup controlId={'profileForm.plot_number'}>
            <FormLabel>Apartment No.</FormLabel>
            {this.props.operation === 'new' || this.props.operation === 'edit'
              ? <FormControl required type={'text'} placeholder={'Apartment/Flat/Unit No.'} onChange={event => this.changePatientDetails(event, 'plotNumber')}/>
              : this.props.addressObj.plotNumber
            }
            <Form.Control.Feedback type={'invalid'} tooltip>
              Please provide correct plot number
            </Form.Control.Feedback>
          </FormGroup>
          <FormGroup controlId={'profileForm.locality'}>
            <FormLabel>Area/locality</FormLabel>
            {this.props.operation === 'new' || this.props.operation === 'edit'
              ? <FormControl required type={'text'} placeholder={'Area/locality name'} onChange={event => this.changePatientDetails(event, 'locality')}/>
              : this.props.addressObj.locality
            }
            <Form.Control.Feedback type={'invalid'} tooltip>
              Please provide correct area/locality details
            </Form.Control.Feedback>
          </FormGroup>
          <Form.Row>
            <FormGroup as={Col} md={'4'} controlId={'profileForm.city'}>
              <FormLabel>City</FormLabel>
              {this.props.operation === 'new' || this.props.operation === 'edit'
                ? <FormControl required type={'text'} placeholder={'City'} onChange={event => this.changePatientDetails(event, 'city')}/>
                : this.props.addressObj.city
              }
              <Form.Control.Feedback type={'invalid'} tooltip>
                Please provide correct city name
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup as={Col} md={'4'} controlId={'profileForm.state'}>
              <FormLabel>State</FormLabel>
              {this.props.operation === 'new' || this.props.operation === 'edit'
                ? <Form.Control required type={'text'} placeholder={'State'} onChange={event => this.changePatientDetails(event, 'state')}/>
                : this.props.addressObj.state
              }
              <Form.Control.Feedback type={'invalid'} tooltip>
                Please provide correct state name
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup as={Col} md={'4'} controlId={'profileForm.pincode'}>
              <FormLabel>Pincode</FormLabel>
              {this.props.operation === 'new' || this.props.operation === 'edit'
                ? <FormControl required type={'text'} placeholder={'Pincode'} onChange={event => this.changePatientDetails(event, 'pinCode')}/>
                : this.props.addressObj.pinCode
              }
              <Form.Control.Feedback type={'invalid'} tooltip>
                Please provide correct pin code number
              </Form.Control.Feedback>
            </FormGroup>
          </Form.Row>
          <FormGroup controlId={'profileForm.landmark'}>
            <FormLabel>Landmark</FormLabel>
            {this.props.operation === 'new' || this.props.operation === 'edit'
              ? <FormControl type={'text'} placeholder={'Landmark'} onChange={event => this.changePatientDetails(event, 'landmark')}/>
              : this.props.addressObj.landmark
            }
          </FormGroup>
          <Button type={'Button'} variant={'primary'} className={'saveProfile'} onClick={this.submitDetails}>Submit</Button>
          <Button type={'Button'} variant={'primary'} className={'cancelChange'} onClick={this.cancelChange}>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default ManageAddress;