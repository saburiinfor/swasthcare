import * as actionTypes from '../../shared/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  patientProfile: {},
  updateSuccessMessage: null,
  error: null,
  addressList: {},
  addressError: null,
  addressUpdateSuccess: null,
  stateList: [],
  loading: false
};

const startLoading = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  });
};

const stopLoading = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  });
};

const patientProfileSuccess = (state, action) => {
  return updateObject(state, {
    patientProfile: action.patientProfile
  });
};

const patientProfileFailure = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};

const updatePatientSuccess = (state, action) => {
  return updateObject(state, {
    updatePatientSuccess: action.successMessage,
    error: null
  });
};

const updatePatientFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    updatePatientSuccess: null
  });
};

const getPatientAddressesSuccess = (state, action) => {
  return updateObject(state, {
    addressList: action.patientAddresses
  });
};

const getPatientAddressesFailure = (state, action) => {
  return updateObject(state, {
    addressError: action.error
  });
};

const updatePatientAddressSuccess = (state, action) => {
  return updateObject(state, {
    addressUpdateSuccess: action.addressSuccessMessage,
    addressError: null
  });
};

const updatePatientAddressFailure = (state, action) => {
  return updateObject(state, {
    addressError: action.error,
    addressUpdateSuccess: null
  })
}

const statesSuccess = (state, action) => {
  return updateObject(state, {
    stateList: action.stateList
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
    case actionTypes.GET_PATIENT_ADDRESSES_SUCCESS:
      return getPatientAddressesSuccess(state, action);
    case actionTypes.GET_PATIENT_ADDRESSES_FAILURE:
      return getPatientAddressesFailure(state, action);
    case actionTypes.UPDATE_PATIENT_ADDRESS_SUCCESS:
      return updatePatientAddressSuccess(state, action);
    case actionTypes.UPDATE_PATIENT_ADDRESS_FAILURE:
      return updatePatientAddressFailure(state, action);
    case actionTypes.STATE_SUCCESS:
      return statesSuccess(state, action);
    case actionTypes.START_LOADING:
      return startLoading(state, action);
    case actionTypes.STOP_LOADING:
      return stopLoading(state, action);
    default:
      return state;
  }
};

export default reducer;