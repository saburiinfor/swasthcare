import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  physicianList: []
};

const physicianListSuccess = (state, action) => {
  return updateObject(state, {
    physicianList: action.physicianList
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.PHYSICIANLIST_SUCCESS:
    return physicianListSuccess(state, action);
  default:
    return state;
  }
};
export default reducer;