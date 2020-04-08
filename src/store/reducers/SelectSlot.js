import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  slots: {},
  error: null
};

const getSlotsSuccess = (state, action) => {
  return updateObject(state, {
    slots: action.slots
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.GET_SLOTS_SUCCESS:
    return getSlotsSuccess(state, action);
  default:
    return state;
  }
};
export default reducer;