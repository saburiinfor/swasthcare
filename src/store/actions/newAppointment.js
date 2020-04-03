import * as actionTypes from './actionTypes';
import axios from "axios";

export const setAppointmentData = (appointmentData) => {
  return {
    type: actionTypes.SET_APPOINTMENTDATA,
    appointmentData
  };
};

export const citiesSuccess = (cityList) => {
  return {
    type: actionTypes.CITY_SUCCESS,
    cityList
  };
};

export const getCities = () => {
  return dispatch => {
    axios.get(actionTypes.API_URL + "/Market/getcity/").then(
      response => {
        // let cityList = [];
        // console.log('cities response', JSON.stringify(response.data));
        // response.data.map(function (item) {
        //   cityList.push(item.name);
        // });
        dispatch(citiesSuccess(response.data));
      }).catch(err => {
      console.log(err);
    });
  };
};

export const appointmentTypeSuccess = (appointmentTypeList) => {
  return {
    type: actionTypes.APPOINTMENTTYPE_SUCCESS,
    appointmentTypeList
  };
};

export const getAppointmentTypeList = () => {
  return dispatch => {
    // axios.get(actionTypes.API_URL + "/Appointments/appointmenttype/").then(
    //   response => {
    //     let appointmentTypeList = [];
    //     // console.log('appointmenttype response', JSON.stringify(response.data));
    //     Array.from(response.data.result).map(function (item) {
    //       appointmentTypeList.push(item);
    //     });
    //     dispatch(appointmentTypeSuccess(appointmentTypeList));
    //   }).catch(err => {
    //   console.log(err);
    // });
    let appointmentTypeList = [
      {
        "id": "01",
        "label": "Clinic visit"
      },
      {
        "id": "02",
        "label": "Voice"
      },
      {
        "id": "03",
        "label": "Chat"
      },
      {
        "id": "04",
        "label": "Video"
      },
      {
        "id": "05",
        "label": "Immediate video"
      }
    ];
    console.log(appointmentTypeList);
    dispatch(appointmentTypeSuccess(appointmentTypeList));
  };
};