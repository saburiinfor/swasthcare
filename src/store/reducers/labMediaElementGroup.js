import * as actionTypes from '../../shared/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    filter: '',
    clinicDetails: {},
    error: null
};

const setClinicFilterTextSuccess = (state, action) => {
    return updateObject(state, {
        filter: action.filter
    });
};

const getClinicDetailsSuccess = (state, action) => {
    return updateObject(state, {
       clinicDetails: action.clinicDetails,
        error: null,
        filter: ''
    });
};

const getClinicDetailsFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        clinicDetails: [],
        filter: ''
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLINIC_FILTER_TEXT:
            return setClinicFilterTextSuccess(state, action);
        case actionTypes.GET_CLINICDETAIL_SUCCESS:
            return getClinicDetailsSuccess(state, action);
        case actionTypes.GET_CLINICDETAIL_FAILURE:
            return getClinicDetailsFailure(state, action);
        default:
            return state;
    }
};
export default reducer;