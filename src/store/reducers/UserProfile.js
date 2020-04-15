import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  userProfile: {},
  error: null
};

const userProfileSuccess = (state, action) => {
  return updateObject(state, {
    userProfile: action.userProfile,
    error: null
  });
};

const userUpdateSuccess = (state, action) => {
  return updateObject(state, {
    userProfile: action.userProfile,
    error: null
  });
};

const userUpdateFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    userProfile: {}
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.GET_USERDETAIL_SUCCESS:
    return userProfileSuccess(state, action);
  case actionTypes.UPDATE_USERDETAILS_SUCCESS:
    return userUpdateSuccess(state, action);
  case actionTypes.UPDATE_USERDETAILS_FAILURE:
    return userUpdateFailure(state, action);
  default:
    return state;
  }
};
export default reducer;