import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const startLoading = () => {
  return {
    type: actionTypes.START_LOADING,
    loading: true
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING,
    loading: false
  };
};

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
    dispatch(startLoading());
    const patientData = new FormData();
    for (const key in patientObject) {
      patientData.append(key, patientObject[key]);
    }
    axios.post(process.env.REACT_APP_API_URL + "User/patientprofileupdate/", patientData).then(
      response => {
        // console.log('inside get profile update response inside manageaccount');
        // console.log("res ***" + JSON.stringify(response.data));
        let patientUpdateResponse = response.data;
        if (response.data.success === 1) {
          dispatch(updatePatientSuccess(patientUpdateResponse.Message));
        } else {
          dispatch(updatePatientFailure(patientUpdateResponse.error.errormsg));
        }
        dispatch(stopLoading());
        dispatch(getPatientProfile(patientObject.uid));
      }).catch(err => {
        dispatch(stopLoading());
        console.log(err);
    });
  };
};

export const patientGetAddressesSuccess = (patientAddresses) => {
  return {
    type: actionTypes.GET_PATIENT_ADDRESSES_SUCCESS,
    patientAddresses
  };
};

export const patientGetAddressesFailure = (error) => {
  return {
    type: actionTypes.GET_PATIENT_ADDRESSES_FAILURE,
    error
  };
};

export const getPatientAddresses = (userId) => {
  return dispatch => {
    const userData = new FormData();
    userData.append('userID', userId);
    axios.post(process.env.REACT_APP_API_URL + 'User/getaddressbyuserid/', userData).then(
      response => {
        // console.log('inside getAddresses API call');
        // console.log('res *** ' + JSON.stringify(response.data));
        let patientAddresses = response.data.result;
        if (response.data.success === 1) {
          dispatch(patientGetAddressesSuccess(patientAddresses))
        } else {
          dispatch(patientGetAddressesFailure(response.data.error.errorMsg));
        }
      }).catch(err => {
      console.log(err);
    })
  };
};

export const patientUpdateAddressSuccess = (addressSuccessMessage) => {
  return {
    type: actionTypes.UPDATE_PATIENT_ADDRESS_SUCCESS,
    addressSuccessMessage
  };
};

export const patientUpdateAddressFailure = (error) => {
  return {
    type: actionTypes.UPDATE_PATIENT_ADDRESS_FAILURE,
    error
  };
};

export const updateAddress = (patientAddress) => {
  return dispatch => {
    dispatch(startLoading());
    const patientAddressData = new FormData();
    let addressUpdateUrl;
    if (patientAddress.operation === 'new') {
      addressUpdateUrl = 'User/addaddress/';
      for (const key of ['userID', 'id', 'plotNumber', 'addressType', 'pinCode', 'city', 'state', 'locality', 'landmark']) {
        patientAddressData.append(key, patientAddress[key]);
      }
    } else if (patientAddress.operation === 'edit') {
      addressUpdateUrl = 'User/updateaddress/';
      for (const key of ['userID', 'id', 'plotNumber', 'addressType', 'pinCode', 'city', 'state', 'locality', 'landmark']) {
        patientAddressData.append(key, patientAddress[key]);
      }
    } else {
      addressUpdateUrl = 'User/deleteaddress/';
      patientAddressData.append('userID', patientAddress.userID);
      patientAddressData.append('id', patientAddress.id);
    }
    axios.post(process.env.REACT_APP_API_URL + addressUpdateUrl, patientAddressData).then(
      response => {
        console.log('inside update address API call');
        console.log('res *** ' + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(patientUpdateAddressSuccess(response.data.Message))
        } else {
          dispatch(patientUpdateAddressFailure(response.data.error.errorMsg));
        }
        dispatch(stopLoading());
      }).catch(err => {
        dispatch(stopLoading());
      console.log(err);
    })
  }
};

export const statesSuccess = (stateList) => {
  return {
    type: actionTypes.STATE_SUCCESS,
    stateList
  };
};

export const getStates = () => {
  return dispatch => {
    axios.get(process.env.REACT_APP_API_URL + "Market/getstate/").then(
      response => {
        dispatch(statesSuccess(response.data));
      }).catch(err => {
      console.log(err);
    });
  };
};
