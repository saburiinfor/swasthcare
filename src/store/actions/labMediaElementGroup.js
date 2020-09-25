import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const setClinicFilterText = (filterText) => {
    return {
        type: actionTypes.SET_CLINIC_FILTER_TEXT,
        filter: filterText
    };
};

export const getClinicDetailsSuccess = (clinicDetails) => {
    return {
        type: actionTypes.GET_CLINICDETAIL_SUCCESS,
        clinicDetails
    };
};

export const getClinicDetailsFailure = (error) => {
    return {
        type: actionTypes.GET_CLINICDETAIL_FAILURE,
        error
    };
};

export const getTestList = (clinicid) => {
    console.log(clinicid)
    return dispatch => {
        const clinicData = new FormData();
        clinicData.append('clinicid', clinicid);
        console.log(clinicData)
        axios.get(process.env.REACT_APP_API_URL + "Tests/gettestlist/", clinicData).then(
            response => {
                // console.log('inside physician data response');
               console.log("res ***" + JSON.stringify(response));
                if (response.data.success === 1) {
                    dispatch(getClinicDetailsSuccess(response.data.result[0]));
                } else {
                    dispatch(getClinicDetailsFailure(response.data.error.errormsg));
                }
            }).catch(err => {
                console.log(err);
            });
    };
};