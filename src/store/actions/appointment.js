import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

// export const userDetailsSuccess = (userDetails) => {
//   return {
//     type: actionTypes.USERDETAIL_SUCCESS,
//     userDetails
//   };
// };
export const setAppointmentDate = (date) => {
  return {
    type: actionTypes.SET_APPOINTMENTDATE,
    appointmentDate: date
  };
};

// export const getUserDetails = () => {
//   return dispatch => {
//     const userData = new FormData();
//     userData.append("patientid", 1);
//     axios.post(actionTypes.API_URL + "Appointments/getappointmentbyuser/", appointmentData).then(
//       response => {
//         console.log('inside patients data response');
//         console.log("res ***" + JSON.stringify(response.data));
//         let appointmentList = response.data.result;
//         dispatch(appointmentListSucccess(appointmentList));
//       }).catch(err => {
//       console.log(err);
//     });
//   };
// };