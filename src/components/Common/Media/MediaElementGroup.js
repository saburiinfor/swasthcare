import React, {Component} from "react";
import MediaElement from "./MediaElement";
import {Input} from "reactstrap";
import styles from "./MediaElement.module.css";
import { connect } from 'react-redux';
import * as actions from "../../../shared";
import WizardButtons from "../WizardButtons/WizardButtons";

class MediaElementGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
    this.handlerNextBtnClick.bind(this);
  }
  
  componentDidMount() {
    this.props.onGetPhysicianList(null, this.props.appointmentData.city, null);
  }
  
  handleChange = event => {
    this.setState({filter: event.target.value});
    this.props.onSetPhysicianFilterText(event.target.value);
  };
  
  handlerNextBtnClick = () => {
    for (const key of ['clinicname', 'pt_price', 'clinicaddress', 'cliniccontact', 'cityname']) {
      this.props.appointmentData[key] = this.props.physicianDetails[key];
    }
    this.props.appointmentData.servicedet_string = this.props.physicianDetails.phyname;
    this.props.appointmentData.speciality = this.props.physicianDetails.specializations;
    this.props.appointmentData.pname = this.props.physicianDetails.phyname;
    this.props.onSelectPhysician(this.props.appointmentData.pid, this.props.appointmentData.clinicid);
    this.props.onSetAppointmentData(this.props.appointmentData);
  };
  
  render() {
    const {filter} = this.state;
    const filteredData = this.props.physicianList.filter((item) => {
      return Object.keys(item).some(key =>
        (item[key] !== null) ? item[key].toLowerCase().includes(filter.toLowerCase()):false
      );
    });
    return (
      <div className={styles.appointmentList}>
        <h4>Select the doctor
          <WizardButtons nextBtnCallback={this.handlerNextBtnClick}/>
        </h4>
          {this.props.plistError !== null &&
            <h6 style={{color: '#FF0000', marginLeft: '20px'}}>No physicians available in selected city, please try after sometime...</h6>
          }
          <Input type="search" name="search" id="searchDoctor" placeholder="Search by name, location or clinic" value={filter} onChange={this.handleChange} />
          { this.props.error !== null &&
            <p>Physician details not found, please select another one</p>
          }
          {filteredData.map((item, index) => (
            <MediaElement noOfStars="5" record={item} key={index} className="styles.mediaElement" {...this.props} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    physicianList: state.selectPhysician.physicianList,
    appointmentData: state.newAppointment.appointmentData, // For now, leaving it as selectPhysician but would change to new appointment
    filter: state.mediaElementGroup.filter,
    physicianDetails: state.mediaElementGroup.physicianDetails,
    error: state.mediaElementGroup.error,
    plistError: state.selectPhysician.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData)),
    onGetPhysicianById: (pid, clinicid) => dispatch(actions.getPhysicianById(pid,clinicid)),
    onSetPhysicianFilterText: (filterText) => dispatch(actions.setPhysicianFilterText(filterText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaElementGroup);