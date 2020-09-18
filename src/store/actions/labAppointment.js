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

export const cliniclistsuccess = (clinicList) => {
    return {
        type: actionTypes.CLINICLIST_SUCCESS,
        clinicList
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
export const getClinicByCity = (city) => {
   // console.log(city)
    return dispatch => {
        const clinicRequestData = new FormData();
        clinicRequestData.append("city", city);
        console.log(clinicRequestData)
        axios.post(process.env.REACT_APP_API_URL + "Clinic/getclinicbycity/", clinicRequestData).then(
            response => {
                console.log(response.data.success)
                if (response.data.success === 1) {
                    let clinicData = response.data;
                    console.log(clinicData)
                    dispatch(cliniclistsuccess(clinicData));
                }
            }).catch(err => {
                console.log(err);
            });
    };
};
