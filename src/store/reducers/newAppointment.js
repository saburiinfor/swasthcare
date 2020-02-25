import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  physicianList: [],
  appointmentData: {
    phyid: null
  }
};

const physicianListSuccess = (state, action) => {
  return updateObject(state, {
    physicianList: action.physicianList
  });
};

const selectPhysicianSuccess = (state, action) => {
  return updateObject(state, {
    appointmentData: {
      phyid: action.phyid
    }
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PHYSICIANLIST_SUCCESS:
      return physicianListSuccess(state, action);
  case actionTypes.SET_SELECTED_PHY_ID:
      return selectPhysicianSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;