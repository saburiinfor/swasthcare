import React, {Component} from "react";
import LabMediaElement from "./LabMediaElement";
import {Input} from "reactstrap";
import styles from "./MediaElement.module.scss";
import {connect} from 'react-redux';
import * as actions from "../../../shared";
import WizardButtons from "../WizardButtons/WizardButtons";

class LabMediaElementGroup extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
    this.handlerNextBtnClick.bind(this);
    this.validateUserSelection.bind(this);
  }
  componentDidMount() {
  
    this.props.onGetClinicByCity(this.props.labAppointmentData.city);
    // console.log("componentDidMount")
    // console.log(this.props.labAppointmentData.city)
    // console.log(this.props.clinicList)
    //console.log(this.props)
  }
  validateUserSelection = () => {
    let valuesSet = this.props.profileCompliant && this.props.labAppointmentData.selectedClinic;
    return !!valuesSet;
  };
  handleChange = event => {
    //console.log(event.target.value)
    this.setState({ filter: event.target.value });
    this.props.onSetClinicFilterText(event.target.value);
  };

  handlerNextBtnClick = () => {
    for (const key of ['clinicname', 'clinicaddress', 'cliniccontact']) {
      this.props.labAppointmentData[key] = this.props.clinicDetails[key];
    }
    this.props.labAppointmentData.cliniciId= this.props.clinicDetails.clinicId;
    this.props.onSelectClinic(this.props.labAppointmentData.clinicId);
    this.props.onSetLabAppointmentData(this.props.labAppointmentData);
  };
  render() {
 //console.log(this.state)
    // const { filter } = this.state;
    // const filteredData = this.props.clinicList.filter((item) => {
    //   return Object.keys(item).some(key =>
    //     (item[key] !== null) ? item[key].toLowerCase().includes(filter.toLowerCase()) : false
    //   );
    // });
    
    return (
      <div className={styles.appointmentList}>
        <div className={'stepHeader'}>
          <h4>Select Clinic
          </h4>
          <WizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} />
        </div>
        <div className={'stepSelectionBox'}>
          {this.props.cliniclistError !== null &&
            <h6 style={{ color: '#FF0000', marginLeft: '20px' }}>No Clinic available in selected city, please try after sometime...</h6>
          }
          {/* <Input type="search" name="search" id="searchDoctor" placeholder="Search by name, location or clinic" value={filter} onChange={this.handleChange} />
          {this.props.error !== null &&
            <p>Clinic details not found, please select another one</p>
          } */}
          {/* {filteredData.map((item, index) => (
            <LabMediaElement noOfStars="5" record={item} key={index} className="styles.mediaElement" {...this.props} />
          ))} */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
 // console.log(state)
  return {
    clinicList: state.selectClinic.clinicList,
    labAppointmentData: state.labAppointment.labAppointmentData, 
    filter: state.labMediaElementGroup.filter,
    clinicDetails: state.labMediaElementGroup.clinicDetails,
    error: state.labMediaElementGroup.error,
    cliniclistError: state.selectClinic.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSetLabAppointmentData: (labAppointmentData) => dispatch(actions.setLabAppointmentData(labAppointmentData)),
    onGetTestByClinic: (clinicid) => dispatch(actions.getTestList(clinicid)),
    onSetClinicFilterText: (filterText) => dispatch(actions.setClinicFilterText(filterText))
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(LabMediaElementGroup) ;