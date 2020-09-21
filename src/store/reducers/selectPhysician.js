import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  physicianList: [],
  error: null,
  pid: null,
  clinicid: null
};

const physicianListSuccess = (state, action) => {
  return updateObject(state, {
    physicianList: action.physicianList,
    error: null
  });
};

const physicianListFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    physicianList: []
  });
};

const selectPhysicianSuccess = (state, action) => {
  return updateObject(state, {
    pid: action.pid,
    clinicid: action.clinicid
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PHYSICIANLIST_SUCCESS:
      return physicianListSuccess(state, action);
    case actionTypes.PHYSICIANLIST_FAILURE:
      return physicianListFailure(state, action);
    case actionTypes.SET_SELECTED_PHY_ID:
      return selectPhysicianSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;