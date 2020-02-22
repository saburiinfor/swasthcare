import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  countryList: [],
  cityList: [],
  userStatus: null
};
const countrySuccess = (state, action) => {
  return updateObject(state, {
    countryList: action.countryList
  });
};
const citySuccess = (state, action) => {
  return updateObject(state, {
    cityList: action.cityList
  });
};
const createUserSuccess = (state, action) => {
  return updateObject(state, {
    userStatus: action.userStatus
  });
};
const setUserStatus = (state, action) => {
  return updateObject(state, {
    userStatus: action.userStatus
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.COUNTRY_SUCCESS:
    return countrySuccess(state, action);
  case actionTypes.CITY_SUCCESS:
    return citySuccess(state, action);
  case actionTypes.CREATEUSER_SUCCESS:
    return createUserSuccess(state, action);
  case actionTypes.SET_EXIST_USER_STATUS:
    return setUserStatus(state, action);
  default:
    return state;
  }
};
export default reducer;