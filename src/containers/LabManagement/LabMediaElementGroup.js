import React, {Component} from "react";
import LabMediaElement from "./LabMediaElement";
import {Col, Input} from "reactstrap";
import styles from "../../components/Common/Media/MediaElement.module.scss";
import {connect} from 'react-redux';
import * as actions from "../../shared";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import {WizardContext} from "../../shared/WizardContext";

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
    // for (const key of ['name', 'clinicid', 'cliniccontact']) {
    //   this.props.labAppointmentData[key] = this.props.clinicDetails[key];
    // }
    //this.props.labAppointmentData.clinicid= this.props.clinicDetails.clinicid;
    this.props.onSelectClinic(this.props.labAppointmentData.clinicid);
    this.props.onSetLabAppointmentData(this.props.labAppointmentData);
  };
  render() {
    const { filter } = this.state;
    //console.log(this.props.clinicList)
    const filteredData = this.props.clinicList.filter((item) => {
      return Object.keys(item).some(key =>
        (item[key] !== null) ? item[key].toLowerCase().includes(filter.toLowerCase()) : false
      );
    });
    
    return (
      <div className={styles.appointmentList}>
        <div className={'stepHeader'}>
          <h4>Select Clinic
          </h4>
          <WizardContext.Consumer>
            {wizard => (
              <WizardButtons nextBtnCallback={this.handlerNextBtnClick} noContinue={!this.validateUserSelection()} steps={wizard.steps} wizardKey={wizard.key} />
            )}
          </WizardContext.Consumer>
        </div>
        <div className={'stepSelectionBox'}>
          {this.props.cliniclistError !== null &&
            <h6 style={{ color: '#FF0000', marginLeft: '20px' }}>No Clinic available in selected city, please try after sometime...</h6>
          }
           <Input type="search" name="search" id="searchClinic" placeholder="Search by clinic name" value={filter} onChange={this.handleChange} />
          {/* {this.props.error !== null &&
            <p>Clinic details not found, please select another one</p>
          } */}
          
          {filteredData.map((item, index) => (
            <LabMediaElement noOfStars="5" record={item} key={index} className="styles.mediaElement" {...this.props} />
          ))}
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
    cliniclistError: state.selectClinic.cliniclistError
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetClinicByCity: (city) => dispatch(actions.getClinicByCity(city)),
    onSetLabAppointmentData: (labAppointmentData) => dispatch(actions.setLabAppointmentData(labAppointmentData)),
    //onGetTestByClinic: (clinicid) => dispatch(actions.getTestList(clinicid)),
    onSetClinicFilterText: (filterText) => dispatch(actions.setClinicFilterText(filterText))
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(LabMediaElementGroup) ;
