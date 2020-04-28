import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  cityList: [],
  clinicList: [],
  order_success_id: null,
  pharmaOrderId: null,
  error: null
};

const citiesSuccess = (state, action) => {
  return updateObject(state, {
    cityList: action.cityList
  });
};

const clinicsSuccess = (state, action) => {
  return updateObject(state, {
    clinicList: action.clinicList
  });
};

const clinicsFailure = (state, action) => {
  return state;
};

const generateOrderIdSuccess = (state, action) => {
  return updateObject(state, {
    pharmaOrderId: action.pharmaOrderId
  });
};

const generateOrderIdFailure = (state, action) => {
  return state;
};

const placeOrderSuccess = (state, action) => {
  return updateObject(state, {
    order_success_id: action.order_success_id
  });
};

const placeOrderFailure = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CITY_SUCCESS:
      return citiesSuccess(state, action);
    case actionTypes.CLINIC_SUCCESS:
      return clinicsSuccess(state, action);
    case actionTypes.CLINIC_FAILURE:
      return clinicsFailure(state, action);
    case actionTypes.GENERATE_PHARMA_ORDER_ID_SUCCESS:
      return generateOrderIdSuccess(state, action);
    case actionTypes.GENERATE_PHARMA_ORDER_ID_FAILURE:
      return generateOrderIdFailure(state, action);
    case actionTypes.PLACE_PHARMA_ORDER_SUCCESS:
      return placeOrderSuccess(state, action);
    case actionTypes.PLACE_PHARMA_ORDER_FAILURE:
      return placeOrderFailure(state, action);
    default:
      return state;
  }
};

export default reducer;