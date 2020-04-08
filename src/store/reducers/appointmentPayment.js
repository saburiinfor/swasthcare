import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  costDetails: {},
  rpayOrder: {}
};

const getAppointmentCostDetailsSuccess = (state, action) => {
  return updateObject(state, {
    costDetails: action.costDetails
  });
};

const createRPayPrderIdSuccess = (state, action) => {
  return updateObject(state, {
    rpayOrder: action.rpayOrder
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_APPOINTMENT_COST_DETAILS_SUCCESS:
      return getAppointmentCostDetailsSuccess(state, action);
    case actionTypes.RPAY_ORDER_ID_SUCCESS:
      return createRPayPrderIdSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;