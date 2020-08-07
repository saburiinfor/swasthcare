import React, {Component} from 'react';
import {Alert, Button, Card, Col, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {updateObject} from "../../shared/utility";

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
        addressType: addressTypes[this.props.addressObj.addressType],
        city: null,
        state: null
      },
      addressFormValidated: false
    };
    this.changePatientDetails.bind(this);
    this.submitDetails.bind(this);
    this.cancelChange.bind(this);
    this.validateForm.bind(this);
  }
  
  componentDidMount() {
    this.loadDefaultValuesInState();
  }
  
  loadDefaultValuesInState = () => {
    if (this.props.operation !== 'new') {
      let selectedCity = this.props.addressObj.city !== null ? (this.props.cityList.find(city => city.name === this.props.addressObj.city)).id : null,
        selectedState = this.props.addressObj.state !== null ? (this.props.stateList.find(state => state.name === this.props.addressObj.state)).id : null;
      this.setState({
        patientAddress: {
          ...this.state.patientAddress,
          city: selectedCity,
          state: selectedState
        }
      });
    }
  };
  
  changePatientDetails = (e, attrName) => {
    this.setState({
      patientAddress: {
        ...this.state.patientAddress,
        [attrName]: e.target.value
      }
    });
  };
  
  submitDetails = (e) => {
    // console.log(this.state.patientAddress);
    if (this.validateForm(e, 'addressForm') === false) {
      return false;
    }
    let addressUpdatedData = {};
    for (const key of ['userID', 'id', 'operation', 'addressType', 'plotNumber', 'locality', 'city', 'state', 'landmark']) {
      addressUpdatedData[key] = (this.state.patientAddress[key] === undefined) ? this.props.addressObj[key] : this.state.patientAddress[key];
    }
    addressUpdatedData['pinCode'] = this.state.patientAddress.pinCode === undefined ? this.props.addressObj.PinCode : this.state.patientAddress.pinCode;
    // console.log(addressUpdatedData);
    this.props.onUpdateAddress(addressUpdatedData);
    this.props.onGetPatientAddresses(this.props.userProfile.id);
    this.props.changeEditView(false);
  };
  
  cancelChange = () => {
    this.props.changeEditView(false);
  };
  
  setFormValidated = (flag) => {
    this.setState({addressFormValidated: flag});
  }
  
  validateForm = (e, formname) => {
    const addressForm = document.forms[formname];
    e.preventDefault();
    this.setFormValidated(true);
    if (addressForm.checkValidity() === false) {
      e.stopPropagation();
      return false;
    }
    this.setFormValidated(false);
    return true;
  };
  
  render() {
    return (
      <div className={'newAddress'}>
        <Form name={"addressForm"} noValidate validated={this.state.addressFormValidated}>
          {(this.props.operation === 'new' || this.props.operation === 'edit')
            ?
            <FormGroup controlId={'profileForm.address_type'}>
              <FormLabel>Address type</FormLabel><br/>
              <Form.Check id={'addrType-1'} name={"addressType"} inline type="radio" label="Home" value={'1'} defaultChecked={this.props.addressObj.addressType === 'Home'}
                          onChange={event => this.changePatientDetails(event, 'addressType')}/>
              <Form.Check id={'addrType-2'} name={"addressType"} inline type="radio" label="Work" value={'2'} defaultChecked={this.props.addressObj.addressType === 'Work'}
                          onChange={event => this.changePatientDetails(event, 'addressType')}/>
              <Form.Check id={'addrType-3'} name={"addressType"} inline type="radio" label="Others" value={'3'} defaultChecked={this.props.addressObj.addressType === 'Other'}
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
              ? <FormControl defaultValue={this.props.addressObj.plotNumber} required type={'text'} placeholder={'Apartment/Flat/Unit No.'} onChange={event => this.changePatientDetails(event, 'plotNumber')}/>
              : <Form.Text as={'div'}>{this.props.addressObj.plotNumber}</Form.Text>
            }
            <Form.Control.Feedback type={'invalid'} tooltip>
              Please provide correct plot number
            </Form.Control.Feedback>
          </FormGroup>
          <FormGroup controlId={'profileForm.locality'}>
            <FormLabel>Area/locality</FormLabel>
            {this.props.operation === 'new' || this.props.operation === 'edit'
              ? <FormControl defaultValue={this.props.addressObj.locality} required type={'text'} placeholder={'Area/locality name'} onChange={event => this.changePatientDetails(event, 'locality')}/>
              : <Form.Text as={'div'}>{this.props.addressObj.locality}</Form.Text>
            }
            <Form.Control.Feedback type={'invalid'} tooltip>
              Please provide correct area/locality details
            </Form.Control.Feedback>
          </FormGroup>
          <Form.Row>
            <FormGroup as={Col} md={'4'} controlId={'profileForm.city'}>
              <FormLabel>City</FormLabel>
              {this.props.operation === 'new' || this.props.operation === 'edit'
                ? <Form.Control as={'select'} value={this.state.patientAddress.city || ''} onChange={event => this.changePatientDetails(event, 'city')}>
                  <option key={'no-city'} value={''}>Select city</option>
                  {this.props.cityList.map((city =>
                      <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                  </Form.Control>
                : <Form.Text as={'div'}>{this.props.addressObj.city}</Form.Text>
              }
              <Form.Control.Feedback type={'invalid'} tooltip>
                Please provide correct city name
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup as={Col} md={'4'} controlId={'profileForm.state'}>
              <FormLabel>State</FormLabel>
              {this.props.operation === 'new' || this.props.operation === 'edit'
                ? <Form.Control as={'select'} value={this.state.patientAddress.state || ''} onChange={event => this.changePatientDetails(event, 'state')}>
                  <option key={'no-state'} value={''}>Select state</option>
                  {this.props.stateList.map((state =>
                      <option key={state.id} value={state.id}>{state.name}</option>
                  ))}
                  </Form.Control>
                : <Form.Text as={'div'}>{this.props.addressObj.state}</Form.Text>
              }
              <Form.Control.Feedback type={'invalid'} tooltip>
                Please provide correct state name
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup as={Col} md={'4'} controlId={'profileForm.pincode'}>
              <FormLabel>Pincode</FormLabel>
              {this.props.operation === 'new' || this.props.operation === 'edit'
                ? <FormControl defaultValue={this.props.addressObj.PinCode} type={'text'} placeholder={'Pincode'} onChange={event => this.changePatientDetails(event, 'pinCode')}/>
                : <Form.Text as={'div'}>{this.props.addressObj.PinCode}</Form.Text>
              }
              <Form.Control.Feedback type={'invalid'} tooltip>
                Please provide correct pin code number
              </Form.Control.Feedback>
            </FormGroup>
          </Form.Row>
          <FormGroup controlId={'profileForm.landmark'}>
            <FormLabel>Landmark</FormLabel>
            {this.props.operation === 'new' || this.props.operation === 'edit'
              ? <FormControl defaultValue={this.props.addressObj.landmark} type={'text'} placeholder={'Landmark'} onChange={event => this.changePatientDetails(event, 'landmark')}/>
              : <Form.Text as={'div'}>{this.props.addressObj.landmark}</Form.Text>
            }
          </FormGroup>
          <Button type={'Button'} variant={'primary'} className={'saveProfile'} onClick={event => this.submitDetails(event)}>Submit</Button>
          <Button type={'Button'} variant={'primary'} className={'cancelChange'} onClick={this.cancelChange}>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default ManageAddress;