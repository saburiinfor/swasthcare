import * as actionTypes from '../../shared/actionTypes';
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
    axios.get(process.env.REACT_APP_API_URL + "Market/getcity/").then(
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

export const getAppointmentSuccess = (appointmentData) => {
  return {
    type: actionTypes.GET_APPOINTMENT_DATA,
    appointmentData
  };
};

export const getAppointmentData = () => {
  return dispatch => {
    dispatch(getAppointmentSuccess())
  };
};

export const getAppointmentTypeList = () => {
  return dispatch => {
    axios.get(process.env.REACT_APP_API_URL + "Appointments/appointmenttype/").then(
      response => {
        let appointmentTypeList = [];
        appointmentTypeList = Array.from(response.data.result).map(function (item) {
          return item;
        });
        dispatch(appointmentTypeSuccess(appointmentTypeList));
      }).catch(err => {
      console.log(err);
    });
  };
};