import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const submitAppointmentSuccess = (appId, Message) => {
  return {
    type: actionTypes.SUBMIT_APPOINTMENT_SUCCESS,
    appId,
    Message
  };
};

export const submitAppointmentFailure = (error) => {
  return {
    type: actionTypes.SUBMIT_APPOINTMENT_FAILURE,
    error: error
  };
};

export const submitAppointment = (appointmentData) => {
  return dispatch => {
    const userData = new FormData();
    for (const key of ['appdate', 'appday', 'ctime', 'name', 'appregid', 'patientid', 'pid', 'pname', 'speciality', 'service', 'application_id', 'servicedet_string']) {
      userData.append(key, appointmentData[key]);
    }
    userData.append('city', appointmentData['cityname']);
    userData.append('clinic', appointmentData['clinicid']);
    axios.post(actionTypes.API_URL + "Appointments/create/", userData).then(
      response => {
        console.log('inside appointment creation call');
        console.log(JSON.stringify(response.data));
        let appointmentCreationResponse = response.data;
        if (response.data.success === 1) {
          dispatch(submitAppointmentSuccess(appointmentCreationResponse.appid, appointmentCreationResponse.Message));
        } else {
          dispatch(submitAppointmentFailure(appointmentCreationResponse.error.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};
