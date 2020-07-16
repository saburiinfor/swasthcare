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