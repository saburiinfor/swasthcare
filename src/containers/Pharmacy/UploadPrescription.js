import React, { Component } from 'react';
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {Button, Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import './Pharmacy.scss';
import * as actions from "../../shared";
import Form from "react-bootstrap/Form";
import bsCustomFileInput from 'bs-custom-file-input'

function CityOptions(cityList) {
  let activeCities = cityList.cityList.filter(city => city.status === "Active");
  let optList = activeCities.map((item) => <option key={item.id} value={item.id}>{item.name}</option>);
  return optList;
}

function ClinicOptions(clinicList) {
  let activeClinics = clinicList.clinicList.filter(clinic => (clinic.status === "Active" && clinic.name !== ""));
  let optList = activeClinics.map((item) => <option key={item.clinicid} value={item.clinicid}>{item.name}</option>);
  return optList;
}

class UploadPrescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      clinicId: null,
      pharmaOrderId: null,
      error: null,
      file: null
    };
  }
  
  componentDidMount() {
    this.props.onGetCities();
    bsCustomFileInput.init();
    this.fileInputElement = document.querySelector('.custom-file input[type="file"]');
  }
  
  handleCityChange = (e) => {
    let cityId = e.target.value;
    this.setState({
        city: cityId
    });
    this.props.onGetClinics(cityId);
  };
  
  handleClinicChange = (e) => {
    let clinicId = e.target.value;
    this.setState({
      clinicId: clinicId
    });
    this.props.onGeneratePharmaOrderId(clinicId, this.props.userProfile.id);
    this.fileInputElement.disabled = false;
  };
  
  handleFileSelection = (e) => {
    // For now as we are supporting single file upload not adding changes for comma separated string
    this.setState({
      pharmaOrderId: this.props.pharmaOrderId
    });
    const filename = e.target.parentNode.querySelector('.custom-file-label').textContent;
    this.setState({
      file: filename
    });
  };
  
  submitPrescription = (e) => {
    console.log(this.state);
    if (this.state.clinicId === null || this.state.pharmaOrderId === null) {
      this.fileInputElement.isInvalid = true;
      return false;
    }
    this.props.onPlaceOrderPharmaItems(this.state.clinicId, this.props.userProfile.id, this.state.pharmaOrderId, this.state.file);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem('conferkare.appointment.activeStage', 0);
      return <Redirect to='/' />;
    }
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .tar{text-align:right;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } '}</style>
        </Helmet>
        <Row>
          <Col md="8">
            { this.props.profileCompliant === false &&
              <UserProfile/>
            }
            <Row>
              <Col>
                <h6>You could upload your latest prescription and get medicines delivered to you. Prescriptions are need to be</h6>
                <ol>
                  <li>
                    Not more than 400 MB in size
                  </li>
                  <li>
                    Not older than 1 week time
                  </li>
                </ol>
                <br/>
                <span className={'prescriptionDisclaimer'}>** Prescription would be reviewed by our authorized chemist and medicines would be delivered as per availability.</span>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                {this.props.orderError !== false &&
                <p><strong>{this.props.error}</strong></p>
                }
              </Col>
            </Row>
            <Row>
              <Col className={'boundingBox'}>
                <h5>City</h5>
                <select onChange={this.handleCityChange}>
                  <option value={''}>Select city</option>
                  <CityOptions cityList={this.props.cityList}/>
                </select><br/><br/>
                <h5>Clinic</h5>
                <select onChange={this.handleClinicChange}>
                  <option value={''}>Select clinic</option>
                  <ClinicOptions clinicList={this.props.clinicList}/>
                </select><br/><br/>
                <Form>
                  <Form.File
                    id="prescription"
                    label="Doctor prescription"
                    disabled={true}
                    // multiple
                    custom
                    onChange={this.handleFileSelection}
                  />
                  <br/><br/>
                  {/*<input type={'file'} name={'prescription'} onClick={this.handleFileSelection}/><br/><br/>*/}
                  <Button onClick={this.submitPrescription}>Upload prescription</Button>
                </Form>
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

const mapStateToProps = state => {
  return {
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    cityList: state.uploadPrescription.cityList,
    clinicList: state.uploadPrescription.clinicList,
    pharmaOrderId: state.uploadPrescription.pharmaOrderId,
    order_success_id: state.uploadPrescription.order_success_id,
    orderError: state.uploadPrescription.order_success_id === null,
    error: state.uploadPrescription.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCities: () => dispatch(actions.getCities()),
    onGetClinics: (city) => dispatch(actions.getClinics(city)),
    onGeneratePharmaOrderId: (clinicId, userId) => dispatch(actions.generatePharmacyOrderId(clinicId, userId)),
    onPlaceOrderPharmaItems: (clinicId, userId, pharmaOrderId, file) => dispatch(actions.placeOrderPharmaItems(clinicId, userId, pharmaOrderId, file))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPrescription);