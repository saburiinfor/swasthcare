import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentList: []
};

const appointmentListSuccess = (state, action) => {
  return updateObject(state, {
    appointmentsList: action.appointmentsList
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPOINTMENTLIST_SUCCESS:
      return appointmentListSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;