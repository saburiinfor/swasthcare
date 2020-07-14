import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  patientProfile: {},
  updateSuccessMessage: null,
  error: null
};

const patientProfileSuccess = (state, action) => {
  return updateObject(state, {
    updatePatientSuccess: null,
    patientProfile: action.patientProfile,
    error: null
  });
};

const patientProfileFailure = (state, action) => {
  return updateObject(state, {
    updatePatientSuccess: null,
    patientProfile: {},
    error: action.error
  });
};

const updatePatientSuccess = (state, action) => {
  return updateObject(state, {
    updatePatientSuccess: action.successMessage,
    error: null,
    patientProfile: {}
  });
};

const updatePatientFailure = (state, action) => {
  return updateObject(state, {
    updatePatientSuccess: null,
    error: action.error,
    patientProfile: {}
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PATIENT_PROFILE_SUCCESS:
      return patientProfileSuccess(state, action);
    case actionTypes.GET_PATIENT_PROFILE_FAILURE:
      return patientProfileFailure(state, action);
    case actionTypes.UPDATE_PATIENT_PROFILE_SUCCESS:
      return updatePatientSuccess(state, action);
    case actionTypes.UPDATE_PATIENT_PROFILE_FAILURE:
      return updatePatientFailure(state, action);
    default:
      return state;
  }
};

export default reducer;