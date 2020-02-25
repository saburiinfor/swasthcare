import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

export const physicianListSuccess = (physicianList) => {
  return {
    type: actionTypes.PHYSICIANLIST_SUCCESS,
    physicianList
  };
};

export const selectPhysician = (phyid) => {
  return {
    type: actionTypes.SET_SELECTED_PHY_ID,
    phyid
  };
};

export const getPhysicianList = (phyname, phycity, physpecialisation) => {
  return dispatch => {
    const physicianData = new FormData();
    // Extract the default city from user location, until user search base on location
    const city = (phycity === undefined) ? 'Bhubaneswar' : phycity;
    physicianData.append('city', city);
    if (phyname !== undefined) {
      physicianData.append('phyname', phyname);
    }
    if (physpecialisation !== undefined) {
      physicianData.append('specializations', physpecialisation);
    }
    axios.post(actionTypes.API_URL + "Physician/getphysician/", physicianData).then(
      response => {
        console.log('inside physician data response');
        console.log("res ***" + JSON.stringify(response.data));
        dispatch(physicianListSuccess(Array.from(response.data.result)));
      }).catch(err => {
      console.log(err);
    });
  };
};