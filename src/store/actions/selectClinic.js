import * as actionTypes from '../../shared/actionTypes';
import axios from "axios";

export const cliniclistsuccess = (clinicList) => {
    console.log('action creater call')
    return {
        type: actionTypes.CLINICLIST_SUCCESS,
        clinicList
    };
};



export const getClinicByCity = (city) => {
    // console.log(city)
    console.log('rest api call')
    return dispatch => {
        const clinicRequestData = new FormData();
        clinicRequestData.append("city", city);
        console.log(clinicRequestData)
        axios.post(process.env.REACT_APP_API_URL + "Clinic/getclinicbycity/", clinicRequestData).then(
            response => {
               //console.log(response.data.success)
                if (response.data.success === 1) {
                    let clinicData = response.data;
                    console.log('action result')
                    //console.log(clinicData)
                    dispatch(cliniclistsuccess(clinicData));
                }
            }).catch(err => {
                console.log(err);
            });
    };
};
