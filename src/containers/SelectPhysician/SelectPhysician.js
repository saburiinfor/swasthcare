import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import MediaElementGroup from "../../components/Common/Media/MediaElementGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import {Helmet} from 'react-helmet';
import {Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";

class SelectPhysician extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicianList: []
    };
  }
  
  componentDidMount() {
    this.props.onGetUserProfile(sessionStorage.getItem('token'));
    this.props.onGetPhysicianList(this.props.appointmentData.city);
  }
  
  render() {
    // console.log(this.props.appointmentData);
    // If the user want to logout or token invalidated, take user to Guest page
    if (this.props.userProfile.success === 0) {
      return <Redirect to='/'/>;
    }
    const phyId = this.props.appointmentData.phyId;
    // If user selected the physician then redirect user to next page
    if (phyId !== null) {
      return <Redirect to={"/selectAppointmentDate"} />;
    }
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        
        <Row>
          <Col md="8">
            <div>
              <h2>New appointment</h2>
              <Breadcrumb activeStep={'2'} />
            </div>
            <MediaElementGroup {...this.props} />
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
    physicianList: state.selectPhysician.physicianList,
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    appointmentData: state.newAppointment.appointmentData // For now, leaving it as selectPhysician but would change to new appointment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserProfile: (userToken) => dispatch(actions.getUserProfile(userToken)),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData)),
    onGetPhysicianList: (phyname, phycity, physpecialisation) => dispatch(actions.getPhysicianList(phyname, phycity, physpecialisation)),
    onSelectPhysician: (phyid) => dispatch(actions.selectPhysician(phyid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPhysician);