import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

// SuccessHandler for User profile api
export const userDetailsSuccess = (userProfile) => {
  return {
    type: actionTypes.GET_USERDETAIL_SUCCESS,
    userProfile
  };
};

export const userUpdateSuccess = (userProfile) => {
  return {
    type: actionTypes.UPDATE_USERDETAILS_SUCCESS,
    userProfile
  };
};

export const userUpdateFailure = (error) => {
  return {
    type: actionTypes.UPDATE_USERDETAILS_FAILURE,
    error: error
  };
};

export const getUserProfile = (userToken) => {
  return dispatch => {
    const userData = new FormData();
    userData.append("token", userToken);
    axios.post(actionTypes.API_URL + "User/getbytoken/", userData).then(
      response => {
        console.log('inside profile data response inside userProfile');
        console.log("res ***" + JSON.stringify(response.data));
        let userProfile = response.data;
        dispatch(userDetailsSuccess(userProfile));
      }).catch(err => {
      console.log(err);
    });
  };
};

export const updateUserProfile = (userProfile) => {
  return dispatch => {
    axios.post(actionTypes.API_URL + "User/update/", userProfile).then(
      response => {
        console.log('inside profile update call');
        console.log(JSON.stringify(response.data));
        let userProfile = response.data;
        if (response.data.success === 1) {
          dispatch(userUpdateSuccess(userProfile));
        } else {
          dispatch(userUpdateFailure(userProfile.error.errormsg));
        }
      }).catch(err => {
        console.log(err);
    });
  };
};
