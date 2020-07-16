import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const patientProfileSuccess = (patientProfile) => {
  return {
    type: actionTypes.GET_PATIENT_PROFILE_SUCCESS,
    patientProfile
  };
};

export const patientProfileFailure = (error) => {
  return {
    type: actionTypes.GET_PATIENT_PROFILE_FAILURE,
    error
  };
};

export const updatePatientSuccess = (successMessage) => {
  return {
    type: actionTypes.UPDATE_PATIENT_PROFILE_SUCCESS,
    successMessage
  };
};

export const updatePatientFailure = (error) => {
  return {
    type: actionTypes.UPDATE_PATIENT_PROFILE_FAILURE,
    error
  };
};

export const getPatientProfile = (userID) => {
  return dispatch => {
    const userData = new FormData();
    userData.append("userID", userID);
    axios.post(process.env.REACT_APP_API_URL + "User/getpatientprofilebyuid/", userData).then(
      response => {
        // console.log('inside get profile data response inside manageaccount');
        // console.log("res ***" + JSON.stringify(response.data));
        let patientProfile = response.data;
        if (response.data.success === 1) {
          dispatch(patientProfileSuccess(patientProfile.result[0]));
        } else {
          dispatch(patientProfileFailure(patientProfile.error.errorMsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

export const updatePatientProfile = (patientObject) => {
  return dispatch => {
    const patientData = new FormData();
    for (const key in patientObject) {
      patientData.append(key, patientObject[key]);
    }
    // patientData.append('profilePicture', patientObject['photo'][0]);
    axios.post(process.env.REACT_APP_API_URL + "User/patientprofileupdate/", patientData).then(
      response => {
        // console.log('inside get profile update response inside manageaccount');
        // console.log("res ***" + JSON.stringify(response.data));
        let patientUpdateResponse = response.data;
        if (response.data.success === 1) {
          dispatch(updatePatientSuccess(patientUpdateResponse.Message));
        } else {
          dispatch(updatePatientFailure(patientUpdateResponse.error.errorMsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};