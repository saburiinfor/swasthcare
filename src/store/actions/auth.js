import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';
import * as utilities from '../../shared/utility';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};
export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
export const auth = (email, password, userType, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = new FormData();
    authData.append("email", email);
    authData.append("password", password);
    authData.append("userType", userType);
    axios.post(actionTypes.API_URL + "/User/login/", authData).then(
      response => {
        // console.log("res ***" + JSON.stringify(response));
        if (response.data.success === 1) {
          utilities.storeInSession('token', response.data.token);
          // utilities.storeInSession('conferkare.appointment.activeStage', 0);
          dispatch(authSuccess(response.data.token, response.data.id));
        } else {
          dispatch(authFail(response.data.error.errormsg));
        }
      }).catch(err => {
      dispatch(authFail(err.message));
    });
  };
};
export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
