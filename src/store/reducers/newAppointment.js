import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  appointmentData: {
    city: null,
    appointmentType: null,
    phyId: null
  },
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

const getAppointmentDataSuccess = (state, action) => {
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_APPOINTMENTDATA:
      return appointmentDataSuccess(state, action);
    case actionTypes.APPOINTMENTTYPE_SUCCESS:
      return appointmentTypeSuccess(state, action);
    case actionTypes.CITY_SUCCESS:
      return citiesSuccess(state, action);
    case actionTypes.GET_APPOINTMENT_DATA:
      return getAppointmentDataSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;