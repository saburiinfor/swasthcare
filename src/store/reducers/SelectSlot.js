import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  slotList: {
    slots:[]
  },
  error: null
};

const getSlotsSuccess = (state, action) => {
  return updateObject(state, {
    slotList: action.slotList,
    error: null
  });
};

const getSlotsFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    slotList: {
      slots: []
    }
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SLOTS_SUCCESS:
      return getSlotsSuccess(state, action);
    case actionTypes.GET_SLOTS_FAILURE:
      return getSlotsFailure(state, action);
    default:
      return state;
  }
};
export default reducer;