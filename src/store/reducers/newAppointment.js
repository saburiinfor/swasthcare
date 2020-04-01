import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentData: null,
  cityList: [],
  appointmentTypeList: []
};

const appointmentDataSuccess = (state, action) => {
  return updateObject(state, {
    appointmentData: action.appointmentData
  });
};

const appointmentTypeSuccess = (state, action) => {
  return updateObject(state, {
    appointmentTypeList: action.appointmentTypeList
  });
};

const citiesSuccess = (state, action) => {
  return updateObject(state, {
    cityList: action.cityList
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_APPOINTMENTDATA:
      return appointmentDataSuccess(state, action);
    case actionTypes.APPOINTMENTTYPE_SUCCESS:
      return appointmentTypeSuccess(state, action);
    case actionTypes.CITY_SUCCESS:
      return citiesSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;