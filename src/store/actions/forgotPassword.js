import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

// SuccessHandler for User profile api
export const sendResetLinkSuccess = (successMsg) => {
  return {
    type: actionTypes.SEND_RESET_LINK_SUCCESS,
    successMsg
  };
};

export const sendResetLinkFailure = (errorMsg) => {
  return {
    type: actionTypes.SEND_RESET_LINK_FAILURE,
    errorMsg
  };
};

export const sendResetLink = (userEmail) => {
  return dispatch => {
    let userData = new FormData();
    userData.append('email', userEmail);
    axios.post(process.env.REACT_APP_API_URL + "Password/getresetpasswordlink/", userData).then(
      response => {
        console.log('get reset password link');
        console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(sendResetLinkSuccess(response.data.result[0].successMsg));
        } else {
          dispatch(sendResetLinkFailure(response.data.result[0].errorMsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};
