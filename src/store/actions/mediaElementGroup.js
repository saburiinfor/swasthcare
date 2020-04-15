import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const setPhysicianFilterText = (filterText) => {
  return {
    type: actionTypes.SET_PHY_FILTER_TEXT,
    filter: filterText
  };
};

export const getPhysicianDetailsSuccess = (physicianDetails) => {
  return {
    type: actionTypes.GET_PHYSICIANDETAIL_SUCCESS,
    physicianDetails
  };
};

export const getPhysicianDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_PHYSICIANDETAIL_FAILURE,
    error
  };
};

export const getPhysicianById = (pid, clinicid) => {
  return dispatch => {
    const physicianData = new FormData();
    physicianData.append('pid', pid);
    physicianData.append('clinicid', clinicid);
    axios.post(actionTypes.API_URL + "Physician/getphysicianbyid/", physicianData).then(
      response => {
        // console.log('inside physician data response');
        // console.log("res ***" + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(getPhysicianDetailsSuccess(response.data.result[0]));
        } else {
          dispatch(getPhysicianDetailsFailure(response.data.error.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};