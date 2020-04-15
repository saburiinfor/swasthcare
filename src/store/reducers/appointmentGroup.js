import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentList: [],
  error: null
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
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPOINTMENTLIST_SUCCESS:
      return appointmentListSuccess(state, action);
    case actionTypes.APPOINTMENTLIST_FAILURE:
      return appointmentListFailure(state, action);
    default:
      return state;
  }
};
export default reducer;