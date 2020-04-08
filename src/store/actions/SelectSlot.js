import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

// SuccessHandler for get slots api
export const getSlotsSuccess = (slots) => {
  return {
    type: actionTypes.GET_SLOTS_SUCCESS,
    slots
  };
};

export const getSlots = (phyId, clinicId, slotDate) => {
  return dispatch => {
    const slotRequestData = new FormData();
    slotRequestData.append("phyId", phyId);
    slotRequestData.append("clinicId", clinicId);
    slotRequestData.append("slotDate", slotDate);
    // axios.post(actionTypes.API_URL + "Physician/getslots/", slotRequestData).then(
    //   response => {
    //     // console.log('inside profile data response inside userProfile');
    //     // console.log("res ***" + JSON.stringify(response.data));
    //     let userProfile = response.data;
    //     dispatch(userDetailsSuccess(userProfile));
    //   }).catch(err => {
    //   console.log(err);
    // });
    let slotsData = {
      'slotDate': '09/04/2020',
      'phyId': 21,
      'clinicid': 21,
      'slots':
        [
          {
            'id': '001',
            'startTime': '10:00 AM',
            'waitingTime': '10',
            'status': 'available',
            'period': 'morning',
            'type': '04'
          },
          {
            'id': '002',
            'startTime': '11:00 AM',
            'waitingTime': '10',
            'status': 'full',
            'period': 'morning',
            'type': '04'
          },
          {
            'id': '003',
            'startTime': '12:00 PM',
            'waitingTime': '10',
            'status': 'available',
            'period': 'before lunch',
            'type': '01'
          },
          {
            'id': '004',
            'startTime': '1:30 PM',
            'waitingTime': '10',
            'status': 'available',
            'period': 'post lunch',
            'type': '02'
          },
          {
            'id': '005',
            'startTime': '3:00 PM',
            'waitingTime': '10',
            'status': 'halted',
            'period': 'evening',
            'type': '04'
          },
          {
            'id': '006',
            'startTime': '4:00 PM',
            'waitingTime': '10',
            'status': 'available',
            'period': 'evening',
            'type': '03'
          }
        ]
    };
    dispatch(getSlotsSuccess(slotsData));
  };
};