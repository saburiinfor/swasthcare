import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  clinicList: [],
  cliniclistError: null
};

const clinicListError = (state, action) => {
  return updateObject(state, {
    clinicListError: action.error
  });
};

const cliniclistsuccess = (state, action) => {
  return updateObject(state, {
    clinicList: action.clinicList
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.CLINICLIST_SUCCESS:
    return cliniclistsuccess(state, action);
  case actionTypes.CLINICLIST_FAILURE:
    return clinicListError(state, action);
  default:
    return state;
  }
};
export default reducer;
