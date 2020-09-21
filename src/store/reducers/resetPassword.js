import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  userEmail: null,
  tokenErrorMsg: null,
  successMsg: null,
  errorMsg: null
};

const validateTokenSuccess = (state, action) => {
  return updateObject(state, {
    userEmail: action.userEmail,
    tokenErrorMsg: null,
    successMsg: null,
    errorMsg: null
  });
};

const validateTokenFailure = (state, action) => {
  return updateObject(state, {
    userEmail: null,
    tokenErrorMsg: action.tokenErrorMsg,
    successMsg: null,
    errorMsg: null
  });
};

const resetPasswordSuccess = (state, action) => {
  return updateObject(state, {
    successMsg: action.successMsg,
    errorMsg: null,
    tokenErrorMsg: null,
    userEmail: null
  });
};

const resetPasswordFailure = (state, action) => {
  return updateObject(state, {
    errorMsg: action.errorMsg,
    successMsg: null,
    tokenErrorMsg: null,
    userEmail: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALIDATE_TOKEN_SUCCESS:
      return validateTokenSuccess(state, action);
    case actionTypes.VALIDATE_TOKEN_FAILURE:
      return validateTokenFailure(state, action);
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return resetPasswordSuccess(state, action);
    case actionTypes.RESET_PASSWORD_FAILURE:
      return resetPasswordFailure(state, action);
    default:
      return state;
  }
};
export default reducer;