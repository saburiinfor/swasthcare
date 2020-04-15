import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentList: [],
  error: null,
  cancelSuccess: null
};

const appointmentListSuccess = (state, action) => {
  return updateObject(state, {
    appointmentsList: action.appointmentsList,
    error: null
  });
};
const appointmentListFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    appointmentsList: []
  });
};
const cancelAppointmentSuccess = (state, action) => {
  return updateObject(state, {
    cancelSuccess: action.cancelSuccess,
    error: null
  });
};
const cancelAppointmentFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    cancelSuccess: null
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPOINTMENTLIST_SUCCESS:
      return appointmentListSuccess(state, action);
    case actionTypes.APPOINTMENTLIST_FAILURE:
      return appointmentListFailure(state, action);
    case actionTypes.CANCEL_APPOINTMENT_SUCCESS:
      return cancelAppointmentSuccess(state, action);
    case actionTypes.CANCEL_APPOINTMENT_FAILURE:
      return cancelAppointmentFailure(state, action);
    default:
      return state;
  }
};
export default reducer;