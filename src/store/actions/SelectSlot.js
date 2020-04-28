import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

// SuccessHandler for get slots api
export const getSlotsSuccess = (slotList) => {
  return {
    type: actionTypes.GET_SLOTS_SUCCESS,
    slotList
  };
};

export const getSlotsFailure = (error) => {
  return {
    type: actionTypes.GET_SLOTS_FAILURE,
    error
  };
};

export const getSlots = (pid, clinicid, slotDate) => {
  return dispatch => {
    const slotRequestData = new FormData();
    slotRequestData.append("physicianId", pid);
    slotRequestData.append("clinicId", clinicid);
    // slotRequestData.append("slotDate", slotDate);
    slotRequestData.append("slotDate", new Date().toLocaleDateString());
    // axios.post(process.env.REACT_APP_API_URL + "Timeslot/getphysiciantimeslot/", slotRequestData).then(
    //   response => {
    //     // console.log('inside profile data response inside userProfile');
    //     // console.log("res ***" + JSON.stringify(response.data));
    //     if (response.data.success === 1) {
    //       let slotsData = response.data;
    //       dispatch(getSlotsSuccess(slotsData));
    //     } else {
    //       dispatch(getSlotsFailure(response.data.error.errormsg));
    //     }
    //   }).catch(err => {
    //   console.log(err);
    // });
    let slotsData = {
      'slotDate': slotDate,
      'id': pid,
      'clinicId': clinicid,
      "regular_price": "300",
      "followup_price": "300",
      "emergency_price": "300",
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