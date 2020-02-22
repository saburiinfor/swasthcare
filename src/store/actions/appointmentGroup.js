import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

export const appointmentListSuccess = (appointmentsList) => {
  return {
    type: actionTypes.APPOINTMENTLIST_SUCCESS,
    appointmentsList
  };
};

export const getAppointmentList = () => {
  return dispatch => {
    const appointmentData = new FormData();
    const patientid = sessionStorage.getItem('id');
    // appointmentData.append("patientid", patientid);
    appointmentData.append("patientid", 1590);
    axios.post(actionTypes.API_URL + "Appointments/getappointmentbyuser/", appointmentData).then(
      response => {
        // console.log('inside patients data response');
        // console.log("res ***" + JSON.stringify(response.data));
        let appointmentsList = Array.from(response.data.result);
        dispatch(appointmentListSuccess(appointmentsList));
      }).catch(err => {
      console.log(err);
    });
  };
};