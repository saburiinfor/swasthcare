import * as actionTypes from '../../shared/actionTypes';
import axios from "axios";


export const setLabAppointmentData = (labAppointmentData) => {
    //console.log(labAppointmentData)
    return {
        type: actionTypes.SET_LABAPPOINTMENTDATA,
        labAppointmentData
    };
};

export const citiesSuccess = (cityList) => {
    console.log('action call')
    return {
        type: actionTypes.CITY_SUCCESS,
        cityList
    };
};



export const getCityList = () => {
    console.log('rest api call')
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "Market/getcity/").then(
            response => {
                //console.log(response)
                dispatch(citiesSuccess(response.data));
            }).catch(err => {
                console.log(err);
            });
    };
};

