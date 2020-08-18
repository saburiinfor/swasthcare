import React, {Component} from "react";
import AppointmentRow from "./AppointmentRow";
import Aux from "../../hoc/Auxwrap";
import {connect} from "react-redux";
import * as actions from "../../shared";


class AppointmentRowGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentsList: []
    };
  }
  
  componentDidMount() {
    this.props.onGetAppointmentList(this.props.userProfile.id);
  }
  
  render() {
    if (this.props.appointmentsList !== undefined) {
      let filteredList = Array.from(this.props.appointmentsList).filter((item) => (item.appdate !== '--' && item.appdate === this.props.appointmentDate));
      if (filteredList.length > 0) {
        return (
          <Aux>
            {filteredList.map((appointmentItem, index) => {
              return <AppointmentRow {...this.props} appointment={appointmentItem} key={index}/>;
            })}
          </Aux>
        )
      } else {
        return (
          <Aux>
            No appointments for this day...
          </Aux>
        )
      }
    } else {
      return (
        <Aux>
          Data loading...
        </Aux>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.UserProfile.userProfile,
    appointmentsList: state.appointmentGroup.appointmentsList,
    error: state.appointmentGroup.error,
    cancelSuccess: state.appointmentGroup.cancelSuccess,
    pdfMedicationData: state.appointmentGroup.pdfMedicationData,
    medicationError: state.appointmentGroup.medicationError,
    pdfData: state.appointmentGroup.pdfData,
    prescriptionError: state.appointmentGroup.prescriptionError,
    clinicDetails: state.appointmentGroup.clinicDetails,
    clinicError: state.appointmentGroup.clinicError,
    appointmentDetails: state.appointmentGroup.appointmentDetails,
    appointmentDetailsError: state.appointmentGroup.appointmentDetailsError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCancelAppointment: (appointmentId) => dispatch(actions.cancelAppointment(appointmentId)),
    onGetAppointmentList: (id) => dispatch(actions.getAppointmentList(id)),
    onGetAppointmentDetails: (appointmentId) => dispatch(actions.getAppointmentDetails(appointmentId)),
    onGetMedicineDetails: (appointmentId) => dispatch(actions.getMedicineDetails(appointmentId)),
    onGetPrescriptionDetails: (appointmentId) => dispatch(actions.getPrescriptionDetails(appointmentId)),
    onGetClinicDetails: (clinicId) => dispatch(actions.getClinicDetailsById(clinicId)),
    onGeneratePDF: (doc) => dispatch(actions.generatePDF(doc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRowGroup);