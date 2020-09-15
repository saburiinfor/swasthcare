import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import {Helmet} from 'react-helmet';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "../../shared";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import UserProfile from "../UserManagement/UserProfile";
import styles from "./SelectAppointmentDate.module.scss";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import {WizardContext, wizards} from "../../shared/WizardContext";
import StageManager from "../../components/Common/WizardButtons/StageManager";

function CityOptions(cityList) {
  let activeCities = cityList.cityList.filter(city => city.status === "Active");
  let optList = activeCities.map((item) => <option key={item.id} value={item.name}>{item.name}</option>);
  return optList;
}

class NewApointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      appointmentTypeList: [],
      appointmentData: {
        city: 'Bhubaneswar',
        appointmentType: "04",
        appointmentTypeLabel: 'Clinic visit',
        pid: null,
        application_id: 1,
        service: '1'
      }
    };
    this.handlerNextBtnClick.bind(this);
    this.handleAppointmentTypeChange.bind(this);
    this.validateUserSelection.bind(this);
  }
  
  componentDidMount() {
    this.props.onGetCities();
    this.props.onGetAppointmentTypeList();
    this.setState({
      appointmentData: {
        ...this.state.appointmentData,
        patientid: this.props.userProfile.id,
        name: this.props.userProfile.name,
        email: this.props.userProfile.email,
        contactNo: this.props.userProfile.contactNo
      }
    });
  }
  
  handleAppointmentTypeChange = (e) => {
    let appointmentType = e.target.value,
      appointmentTypeLabel = e.target.parentNode.innerText;
    this.setState({
      appointmentData: {
        ...this.state.appointmentData,
        appointmentType: appointmentType,
        appointmentTypeLabel: appointmentTypeLabel
      }
    });
  };
  
  handleCityChange = (e) => {
    let cityName = e.target.value;
    this.setState({
      appointmentData: {
        ...this.state.appointmentData,
        city: cityName
      }
    });
  };
  
  validateUserSelection = () => {
    let valuesSet = this.props.profileCompliant && this.state.appointmentData.city !== '' && this.state.appointmentData.appointmentType !== '';
    return !!valuesSet;
  };
  
  handlerNextBtnClick = () => {
    this.setState({
      appointmentData: {
        ...this.state.appointmentData,
        patientid: this.props.userProfile.id
      }
    });
    this.props.onSetAppointmentData(this.state.appointmentData);
  };
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem(wizards.appointment.key, 0);
      return <Redirect to='/'/>;
    }
    // if (this.props.appointmentData.city !== null) {
    //   return <Redirect to='/selectPhysician'/>;
    // }
    const btnGroup = this.props.appointmentTypeList.map((item) => (
      <div className="form-check" key={item.typeId}>
        <label>
          <input
            type="radio"
            name="react-tips"
            value={item.typeId}
            defaultChecked={item.typeId === "04"}
            onClick={this.handleAppointmentTypeChange}
            className="form-check-input"
          />
          {item.appttype}
        </label>
      </div>
    ));
    return (
      <Col md="12" className="mt10">
        <WizardContext.Consumer>
          {wizard => (
            <StageManager flow={wizard.flow} wizardKey={wizard.key}/>
          )}
        </WizardContext.Consumer>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        {this.props.profileCompliant === false &&
          <UserProfile/>
        }
        <Row>
          <Col md="12">
            <div>
              <h2>Select city and appointment type</h2>
              <WizardContext.Consumer>
                {wizard => (
                  <Breadcrumb activeStep={'1'} steps={wizard.steps} wizardKey={wizard.key}/>
                )}
              </WizardContext.Consumer>
            </div>
            <Row>
              <Col>
                <div className={styles.selectDate}>
                  <div className={'stepHeader'}>
                    <h4>
                      Select type and city
                    </h4>
                    <WizardContext.Consumer>
                      {wizard => (
                        <WizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} steps={wizard.steps} wizardKey={wizard.key} />
                      )}
                    </WizardContext.Consumer>
                    {/*!this.props.profileCompliant*/}
                  </div>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div className={'stepSelectionBox'}>
                    <Row>
                      <Col>
                        <h5>City</h5>
                        <select onChange={this.handleCityChange} defaultValue='Bhubaneswar'>
                          <option value={'All'}>All cities</option>
                          <CityOptions cityList={this.props.cityList}/>
                        </select>
                      </Col>
                    </Row><br/><br/>
                    <Row>
                      <Col>
                        <h5>Consultation type</h5>
                        <form>
                          {btnGroup}
                        </form>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          
          {/*<Col md="4">*/}
          {/*  <ImgWithOverlayTextGroup/>*/}
          {/*</Col>*/}
        </Row>
      </Col>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.newAppointment.cityList,
    appointmentTypeList: state.newAppointment.appointmentTypeList,
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    appointmentData: state.newAppointment.appointmentData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCities: () => dispatch(actions.getCities()),
    onGetAppointmentTypeList: () => dispatch(actions.getAppointmentTypeList()),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewApointment);
