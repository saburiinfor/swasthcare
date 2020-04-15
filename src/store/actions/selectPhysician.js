import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const physicianListSuccess = (physicianList) => {
  return {
    type: actionTypes.PHYSICIANLIST_SUCCESS,
    physicianList
  };
};

export const physicianListFailure = (error) => {
  return {
    type: actionTypes.PHYSICIANLIST_FAILURE,
    error
  };
};

export const selectPhysician = (pid, clinicid) => {
  return {
    type: actionTypes.SET_SELECTED_PHY_ID,
    pid,
    clinicid
  };
};

export const getPhysicianList = (phyname, phycity, physpecialisation) => {
  return dispatch => {
    const physicianData = new FormData();
    physicianData.append('city', phycity);
    if (phyname !== null) {
      physicianData.append('phyname', phyname);
    }
    if (physpecialisation !== null) {
      physicianData.append('specializations', physpecialisation);
    }
    axios.post(actionTypes.API_URL + "Physician/getphysician/", physicianData).then(
      response => {
        // console.log('inside physician data response');
        // console.log("res ***" + JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(physicianListSuccess(Array.from(response.data.result)));
        } else {
          dispatch(physicianListFailure(response.data.error.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};