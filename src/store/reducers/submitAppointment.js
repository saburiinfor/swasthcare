import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appId: null,
  error: null
};

const submitAppointmentSuccess = (state, action) => {
  return updateObject(state, {
    appId: action.appId,
    error: null
  });
};

const submitAppointmentFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    appId: null
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_APPOINTMENT_SUCCESS:
      return submitAppointmentSuccess(state, action);
    case actionTypes.SUBMIT_APPOINTMENT_FAILURE:
      return submitAppointmentFailure(state, action);
    default:
      return state;
  }
};
export default reducer;