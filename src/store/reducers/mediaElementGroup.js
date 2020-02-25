import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  filter: ''
};

const setPhysicianFilterTextSuccess = (state, action) => {
  return updateObject(state, {
    filter: action.filter
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_PHY_FILTER_TEXT:
    return setPhysicianFilterTextSuccess(state, action);
  default:
    return state;
  }
};
export default reducer;