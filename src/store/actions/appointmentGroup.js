import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const appointmentListSuccess = (appointmentsList) => {
  return {
    type: actionTypes.APPOINTMENTLIST_SUCCESS,
    appointmentsList
  };
};

export const appointmentListFailure = (error) => {
  return {
    type: actionTypes.APPOINTMENTLIST_FAILURE,
    error
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
    axios.post(actionTypes.API_URL + "Appointments/getappointmentbyuser/", appointmentData).then(
      response => {
        // console.log('inside patients data response');
        console.log("res ***" + JSON.stringify(response.data));
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