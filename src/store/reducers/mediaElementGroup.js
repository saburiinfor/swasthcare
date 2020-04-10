import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  filter: '',
  physicianDetails: {}
};

const setPhysicianFilterTextSuccess = (state, action) => {
  return updateObject(state, {
    filter: action.filter
  });
};

const getPhysicianDetailsSuccess = (state, action) => {
  return updateObject(state, {
    physicianDetails: action.physicianDetails
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PHY_FILTER_TEXT:
      return setPhysicianFilterTextSuccess(state, action);
    case actionTypes.GET_PHYSICIANDETAIL_SUCCESS:
      return getPhysicianDetailsSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;