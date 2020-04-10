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

export const getSlots = (pid, clinicid, slotDate) => {
  return dispatch => {
    const slotRequestData = new FormData();
    slotRequestData.append("pid", pid);
    slotRequestData.append("clinicid", clinicid);
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
      'slotDate': slotDate,
      'phyId': pid,
      'clinicid': clinicid,
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
            'status': 'available',
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
            'status': 'available',
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
          },
          {
            'id': '007',
            'startTime': '7:00 PM',
            'waitingTime': '10',
            'status': 'available',
            'period': 'evening',
            'type': '04'
          },
          {
            'id': '008',
            'startTime': '8:00 PM',
            'waitingTime': '10',
            'status': 'available',
            'period': 'evening',
            'type': '03'
          },
          {
            'id': '009',
            'startTime': '9:00 PM',
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