import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const appointmentListSuccess = (appointmentsList) => {
  return {
    type: actionTypes.APPOINTMENTLIST_SUCCESS,
    appointmentsList,
    error: null
  };
};

export const appointmentListFailure = (error) => {
  return {
    type: actionTypes.APPOINTMENTLIST_FAILURE,
    error,
    appointmentList: []
  };
};

export const cancelAppointmentSuccess = (cancelSuccess) => {
  return {
    type: actionTypes.CANCEL_APPOINTMENT_SUCCESS,
    cancelSuccess,
    error: null
  };
};

export const cancelAppointmentFailure = (error) => {
  return {
    type: actionTypes.CANCEL_APPOINTMENT_FAILURE,
    error,
    cancelSuccess: null
  };
};

export const setAppointmentDateSuccess = (appointmentDate) => {
  return {
    type: actionTypes.SET_APPOINTMENTDATE,
    appointmentDate
  };
};

export const getAppointmentList = (patientid) => {
  return dispatch => {
    const appointmentData = new FormData();
    appointmentData.append("patientid", patientid);
    // appointmentData.append("patientid", 1590);
    axios.post(process.env.REACT_APP_API_URL + "Appointments/getappointmentbyuser/", appointmentData).then(
      response => {
        // console.log('inside patients data response');
        // console.log("res ***" + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(appointmentListSuccess(Array.from(response.data.result)));
        } else {
          dispatch(appointmentListFailure(response.data.error.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

export const cancelAppointment = (appId) => {
  return dispatch => {
    const appointmentData = new FormData();
    appointmentData.append('id', appId);
    axios.post(process.env.REACT_APP_API_URL + "Appointments/cancelappointmentbyid/", appointmentData).then(
      response => {
        // console.log('inside patients data response');
        // console.log("res ***" + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(cancelAppointmentSuccess(Array.from(response.data.Message)));
        } else {
          dispatch(cancelAppointmentFailure(response.data.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

/** Eprescription related API calls **/

export const getAppointmentDetailsSuccess = (appointmentDetails) => {
  return {
    type: actionTypes.GET_APPOINTMENT_DETAILS_SUCCESS,
    appointmentDetails
  };
};

export const getAppointmentDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_APPOINTMENT_DETAILS_FAILURE,
    appointmentDetailsError: error
  };
};

export const getAppointmentDetails = (appointmentId) => {
  return dispatch => {
    const appData = new FormData();
    appData.append("appid", appointmentId);
    axios.post(process.env.REACT_APP_API_URL + 'Appointments/getappointmentdetails/', appData).then(
      response => {
        console.log('inside getappointmentdetails api call');
        console.log('res ***' + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(getAppointmentDetailsSuccess(response.data.result[0]));
        } else {
          dispatch(getAppointmentDetailsFailure(response.data.error.errorMsg));
        }
      }
    ).catch(err => {
      console.log(err);
    });
  };
};

export const getMedicineDetailsSuccess = (pdfMedicationData) => {
  return {
    type: actionTypes.GET_MEDICINE_DETAILS_SUCCESS,
    pdfMedicationData
  };
};

export const getMedicineDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_MEDICINE_DETAILS_FAILURE,
    medicineError: error
  };
};

export const getMedicineDetails = (appId) => {
  return dispatch => {
    const appData = new FormData();
    appData.append("appid", appId);
    axios.post(process.env.REACT_APP_API_URL + 'Eprescription/getmedicinedetails/', appData).then(
      response => {
        console.log('inside getmedicinedetails data response');
        console.log('res ***' + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(getMedicineDetailsSuccess(response.data.result));
        } else {
          dispatch(getMedicineDetailsFailure(response.data.error.erroMsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

export const getPrescriptionDetailsSuccess = (pdfData) => {
  return {
    type: actionTypes.GET_PRESCRIPTION_DETAILS_SUCCESS,
    pdfData
  };
};

export const getPrescriptionDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_PRESCRIPTION_DETAILS_FAILURE,
    prescriptionError: error
  };
};

export const getPrescriptionDetails = (appId) => {
  return dispatch => {
    const appData = new FormData();
    appData.append('appid', appId);
    axios.post(process.env.REACT_APP_API_URL + 'Eprescription/getprescriptiondetails/', appData).then(
      response => {
        console.log('inside getprescriptiondetails api call');
        console.log("res ***" + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(getPrescriptionDetailsSuccess(response.data.result));
        } else {
          dispatch(getPrescriptionDetailsFailure(response.data.error.errorMsg));
        }
      }
    ).catch(err => {
      console.log(err);
    })
  };
};

export const getClinicDetailsSuccess = (clinicDetails) => {
  return {
    type: actionTypes.GET_CLINIC_DETAILS_SUCCESS,
    clinicDetails
  };
};

export const getClinicDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_CLINIC_DETAILS_FAILURE,
    clinicError: error
  };
};

export const getClinicDetailsById = (clinicId) => {
  return dispatch => {
    const clinicData = new FormData();
    clinicData.append('clinicid', clinicId);
    axios.post(process.env.REACT_APP_API_URL + 'Clinic/getclinicdetailbyid/', clinicData).then(
      response => {
        console.log('inside getclinicdetails api call');
        console.log('res ***' + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(getClinicDetailsSuccess(response.data.result));
        } else {
          dispatch(getClinicDetailsFailure(response.data.error.errorMsg));
        }
      }
    ).catch(err => {
      console.log(err);
    });
  };
};