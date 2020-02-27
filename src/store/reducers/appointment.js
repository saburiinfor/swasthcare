import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentDate: null
};

const appointmentDateSuccess = (state, action) => {
  return updateObject(state, {
    appointmentDate: action.appointmentDate
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_APPOINTMENTDATE:
    return appointmentDateSuccess(state, action);
  default:
    return state;
  }
};
export default reducer;