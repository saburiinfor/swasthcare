import React, {Component} from "react";
import {Col, CustomInput, Input, Row} from "reactstrap";
import MediaElementGroup from "../../components/Common/Media/MediaElementGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import {Helmet} from 'react-helmet';
import {Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import UserProfile from "../UserProfile/UserProfile";
import styles from "../SelectAppointmentDate/SelectAppointmentDate.module.scss";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";

function CityOptions(cityList) {
  let activeCities = cityList.cityList.filter(city => city.status === "Active");
  let optList = activeCities.map((item) => <option key={item.id} value={item.id}>{item.name}</option> );
  return optList;
}

class NewApointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      appointmentTypeList: [],
      appointmentData: {
        city: null,
        appointmentType: null
      }
    };
  }
  
  componentDidMount() {
    this.props.onGetUserProfile(sessionStorage.getItem('token'));
    this.props.onGetCities();
    this.props.onGetAppointmentTypeList();
    // this.props.onGetPhysicianList();
  }
  
  render() {
    if (this.props.userProfile.success === 0) {
      return <Redirect to='/'/>;
    }
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        { this.props.profileCompliant === false &&
          <UserProfile/>
        }
        <Row>
          <Col md="8">
            <div>
              <h2>New appointment</h2>
              <Breadcrumb activeStep={'1'} />
            </div>
            <Row>
              <Col>
                <div className={styles.selectDate}>
                  <h4>
                    Select the appointment type and city
                    <WizardButtons activeStep={'1'} />
                  </h4>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div>
                    { this.props.cityList.length > 0 &&
                      <Row>
                        <Col>
                          <h5>Select city where appointment needed</h5>
                          <select>
                            <option>Select city</option>
                            <CityOptions cityList={this.props.cityList}/>
                          </select>
                        </Col>
                      </Row>
                      }
                    <Row>
                    </Row>
                  </div>
                </div>
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

const mapStateToProps = (state) => {
  return {
    cityList: state.newAppointment.cityList,
    appointmentTypeList: state.newAppointment.appointmentTypeList,
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserProfile: (userToken) => dispatch(actions.getUserProfile(userToken)),
    onGetCities: () => dispatch(actions.getCities()),
    onGetAppointmentTypeList: () => dispatch(actions.getAppointmentTypeList()),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewApointment);