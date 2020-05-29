import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const validateTokenSuccess = (userEmail) => {
  return {
    type: actionTypes.VALIDATE_TOKEN_SUCCESS,
    userEmail
  };
};

export const validateTokenFailure = (tokenErrorMsg) => {
  return {
    type: actionTypes.VALIDATE_TOKEN_FAILURE,
    tokenErrorMsg
  };
};

export const resetPasswordSuccess = (successMsg) => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    successMsg
  };
};

export const resetPasswordFailure = (errorMsg) => {
  return {
    type: actionTypes.RESET_PASSWORD_FAILURE,
    errorMsg
  };
};

export const validateToken = (token) => {
  return dispatch => {
    let userData = new FormData();
    userData.append('verifyToken', token);
    axios.post(process.env.REACT_APP_API_URL + "Password/validatetokentoresetpassword/", userData).then(
      response => {
        console.log('verify token api call');
        console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(validateTokenSuccess(response.data.result[0].email));
        } else {
          dispatch(validateTokenFailure(response.data.result[0].errorMsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

export const resetPassword = (userEmail, newPassword) => {
  return dispatch => {
    let passwordData = new FormData();
    passwordData.append('email', userEmail);
    passwordData.append('password', newPassword);
    axios.post(process.env.REACT_APP_API_URL + "Password/resetpasswordconfapp/", passwordData).then(
      response => {
        console.log('inside reset password API call');
        console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(resetPasswordSuccess(response.data.result[0].successMsg));
        } else {
          dispatch(resetPasswordFailure(response.data.result[0].errorMsg));
        }
      }
    ).catch(err => {
      console.log(err);
    });
  };
};