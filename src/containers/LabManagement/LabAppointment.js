import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Button, Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import * as actions from "../../shared";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import styles from "./LabManagement.scss";
import {WizardContext, wizards} from "../../shared/WizardContext";
import StageManager from "../../components/Common/WizardButtons/StageManager";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";

function CityOptions(cityList) {
  //console.log(cityList);
  let activeCities = cityList.cityList.filter(city => city.status === "Active");
  let optList = activeCities.map((item) => <option key={item.id} value={item.id}>{item.name}</option>);
  //console.log(optList);
  return optList;
}

class LabAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      labAppointmentData: {
        city: '1',
        application_id: 1,
        service: '2'
      }
    };
    this.handlerNextBtnClick.bind(this);
  }


  componentDidMount() {
    this.props.onGetCities();
    this.setState({
      labAppointmentData: {
        ...this.state.labAppointmentData,
        patientid: this.props.userProfile.id,
        name: this.props.userProfile.name,
        email: this.props.userProfile.email,
        contactNo: this.props.userProfile.contactNo
      }
    });
  }

  handleCityChange = (e) => {
    let cityName = e.target.value;
    //console.log(cityName);
    this.setState({
      labAppointmentData: {
        ...this.state.labAppointmentData,
        city: cityName
      }
      
    });
    
  };
  handlerNextBtnClick = () => {
    this.setState({
      labAppointmentData: {
        ...this.state.labAppointmentData,
        patientid: this.props.userProfile.id
      }
    });
    this.props.onSetAppointmentData(this.state.labAppointmentData);
  };
  
  validateUserSelection = () => {
    //console.log(this.state.appointmentData.city)
    //console.log(this.props.profileCompliant)
    let valuesSet = this.props.profileCompliant && this.state.labAppointmentData.city !== '' ;
    return !!valuesSet;
  }
  
  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem(wizards.labappointment.key, 0);
      return <Redirect to='/' />;
    }
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
          <UserProfile />
        }
      <Row>
       <Col md="12">
           <div>
            <h2>Select City </h2>
             <WizardContext.Consumer>
               {wizard => (
                 <Breadcrumb activeStep={'1'} steps={wizard.steps} wizardKey={wizard.key}/>
               )}
             </WizardContext.Consumer>
          </div>
          <Row>
              <Col>
                <div className={'selectDate'}>
                  <div className={'stepHeader'}>
                    <h4>
                      Select city
                    </h4>
                    <WizardContext.Consumer>
                      {wizard => (
                        <WizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} steps={wizard.steps} wizardKey={wizard.key} />
                      )}
                    </WizardContext.Consumer>
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
                    
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
      </Row>
      </Col>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cityList: state.labAppointment.cityList,
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    labAppointmentData: state.labAppointment.labappointmentData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetCities: () => dispatch(actions.getCityList()),
    onSetAppointmentData: (labAppointmentData) => dispatch(actions.setLabAppointmentData(labAppointmentData))
  };
};
export default connect (mapStateToProps,mapDispatchToProps)(LabAppointment);
