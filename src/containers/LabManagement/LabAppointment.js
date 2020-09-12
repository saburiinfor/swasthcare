import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Button, Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import './LabManagement.scss';
import * as actions from "../../shared";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import LabWizardButtons from "../../components/Common/WizardButtons/LabWizardButtons";
import getPageLink from "../../components/Common/WizardButtons/LabStageManager";
import styles from "./LabManagement.scss";

function CityOptions(cityList) {
  //console.log(cityList);
  let activeCities = cityList.cityList.filter(city => city.status === "Active");
  let optList = activeCities.map((item) => <option key={item.id} value={item.name}>{item.name}</option>);
  //console.log(optList);
  return optList;
}

class LabAppointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      appointmentData: {
        city: 'Bhubaneswar',
        pid: null,
        application_id: 1,
        service: '2'
      }
    };
    this.handlerNextBtnClick.bind(this);
  }


  componentDidMount() {
    this.props.onGetCities();
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

  handleCityChange = (e) => {
    let cityName = e.target.value;
    //console.log(cityName);
    this.setState({
      appointmentData: {
        ...this.state.appointmentData,
        city: cityName
      }
      
    });
    
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
  validateUserSelection = () => {
    console.log(this.state.appointmentData.city)
    console.log(this.props.profileCompliant)
    let valuesSet = this.props.profileCompliant && this.state.appointmentData.city !== '' ;
    return !!valuesSet;
  }
  render() {
    
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem('conferkare.labappointment.activeStage', 0);
      return <Redirect to='/' />;
    }
    const pageUrl = getPageLink();
    return (
      <Col md="12" className="mt10">
        <Redirect to={pageUrl} />
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
            <Breadcrumb activeStep={'1'}/>
          </div>
          <Row>
              <Col>
                <div className={styles.selectDate}>
                  <div className={'stepHeader'}>
                    <h4>
                      Select city
                    </h4>
                  <LabWizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} />
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
  console.log(state);
  return {
    cityList: state.newAppointment.cityList,
    userProfile: state.UserProfile.userProfile,
     profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    //appointmentData: state.newAppointment.appointmentData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetCities: () => dispatch(actions.getCities()),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};
export default connect (mapStateToProps,mapDispatchToProps)(LabAppointment);