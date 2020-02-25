import * as actionTypes from '../actions/actionTypes';
import * as utilities from '../../shared/utility';

const initialState = {
  userStatus: null
};
const authLogoutSuccess = (state, action) => {
  return state;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGOUT:
      utilities.removeFromSession('token');
      utilities.removeFromSession('id');
      utilities.removeFromSession('startTime');
      return authLogoutSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;