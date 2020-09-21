import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentList: [],
  error: null,
  cancelSuccess: null,
  pdfMedicationData: [],
  medicationError: null,
  pdfData: [],
  prescriptionError: null,
  clinicDetails: {},
  clinicError: null,
  appointmentDetails: {},
  appointmentDetailsError: null
};

const appointmentListSuccess = (state, action) => {
  return updateObject(state, {
    appointmentsList: action.appointmentsList,
    error: null
  });
};
const appointmentListFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    appointmentsList: []
  });
};
const cancelAppointmentSuccess = (state, action) => {
  return updateObject(state, {
    cancelSuccess: action.cancelSuccess,
    error: null
  });
};
const cancelAppointmentFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    cancelSuccess: null
  });
};

const pdfMedicationSuccess = (state, action) => {
  return updateObject(state, {
    pdfMedicationData: action.pdfMedicationData,
    medicationError: null
  });
};

const pdfMedicationFailure = (state, action) => {
  return updateObject(state, {
    pdfMedicationData: [],
    medicationError: action.error
  });
};

const getPrescriptionSuccess = (state, action) => {
  return updateObject(state, {
    pdfData: action.pdfData
  });
};

const getPrescriptionFailure = (state, action) => {
  return updateObject(state, {
    prescriptionError: action.prescriptionError
  });
};

const getClinicDetailsSuccess = (state, action) => {
  return updateObject(state, {
    clinicDetails: action.clinicDetails
  });
};

const getClinicDetailsFailure = (state, action) => {
  return updateObject(state, {
    clinicError: action.clinicError
  });
};

const getAppointmentDetailsSuccess = (state, action) => {
  return updateObject(state, {
    appointmentDetails: action.appointmentDetails
  });
};

const getAppointmentDetailsFailure = (state, action) => {
  return updateObject(state, {
    appointmentDetailsError: action.appointmentDetailsError
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPOINTMENTLIST_SUCCESS:
      return appointmentListSuccess(state, action);
    case actionTypes.APPOINTMENTLIST_FAILURE:
      return appointmentListFailure(state, action);
    case actionTypes.CANCEL_APPOINTMENT_SUCCESS:
      return cancelAppointmentSuccess(state, action);
    case actionTypes.CANCEL_APPOINTMENT_FAILURE:
      return cancelAppointmentFailure(state, action);
    case actionTypes.GET_MEDICINE_DETAILS_SUCCESS:
      return pdfMedicationSuccess(state, action);
    case actionTypes.GET_MEDICINE_DETAILS_FAILURE:
      return pdfMedicationFailure(state, action);
    case actionTypes.GET_PRESCRIPTION_DETAILS_SUCCESS:
      return getPrescriptionSuccess(state, action);
    case actionTypes.GET_PRESCRIPTION_DETAILS_FAILURE:
      return getPrescriptionFailure(state, action);
    case actionTypes.GET_CLINIC_DETAILS_SUCCESS:
      return getClinicDetailsSuccess(state, action);
    case actionTypes.GET_CLINIC_DETAILS_FAILURE:
      return getClinicDetailsFailure(state, action);
    case actionTypes.GET_APPOINTMENT_DETAILS_SUCCESS:
      return getAppointmentDetailsSuccess(state, action);
    case actionTypes.GET_APPOINTMENT_DETAILS_FAILURE:
      return getAppointmentDetailsFailure(state, action);
    default:
      return state;
  }
};
export default reducer;