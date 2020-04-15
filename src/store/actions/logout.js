import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

// export const auth = (email, password, isSignup) => {
//   return dispatch => {
//     dispatch(authStart());
//     const authData = new FormData();
//     authData.append("email", email);
//     authData.append("password", password);
//     axios.post(actionTypes.API_URL + "/User/login/", authData).then(
//       response => {
//         console.log("res ***" + JSON.stringify(response));
//         if (response.data.success === 1) {
//           utilities.storeInSession('token', response.data.token);
//           utilities.storeInSession('id', response.data.id);
//           utilities.storeInSession('startTime', Date.now());
//           dispatch(authSuccess(response.data.token, response.data.id));
//         } else {
//           dispatch(authFail(response.data.error.errormsg));
//         }
//       }).catch(err => {
//       dispatch(authFail(err.message));
//     });
//   };
// };
export const setSignout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
