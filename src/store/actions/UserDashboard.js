import * as actionTypes from '../../shared/actionTypes';
import { getUserProfile } from "./UserProfile";

export const setAppointmentDate = (date) => {
  return {
    type: actionTypes.SET_APPOINTMENTDATE,
    appointmentDate: date
  };
};

export const getProfile = (userToken) => {
  return dispatch => {
    dispatch(getUserProfile(userToken));
  };
};