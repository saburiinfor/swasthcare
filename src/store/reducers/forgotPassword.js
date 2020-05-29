import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  successMsg: null,
  errorMsg: null
};

const sendResetLinkSuccess = (state, action) => {
  return updateObject(state, {
    successMsg: action.successMsg,
    errorMsg: null
  });
};

const sendResetLinkFailure = (state, action) => {
  return updateObject(state, {
    errorMsg: action.errorMsg,
    successMsg: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_RESET_LINK_SUCCESS:
      return sendResetLinkSuccess(state, action);
    case actionTypes.SEND_RESET_LINK_FAILURE:
      return sendResetLinkFailure(state, action);
    default:
      return state;
  }
};
export default reducer;