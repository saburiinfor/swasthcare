import * as actionTypes from '../../shared/actionTypes';
import axios from "axios";

export const cliniclistsuccess = (clinicList) => {
    return {
        type: actionTypes.CLINICLIST_SUCCESS,
        clinicList
    };
};

export const clinicListError = (error) => {
  return {
    type: actionTypes.CLINICLIST_FAILURE,
    error
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
                    let clinicData = response.data.result;
                    // console.log('action result')
                    //console.log(clinicData)
                    dispatch(cliniclistsuccess(clinicData));
                } else {
                  dispatch(clinicListError(response.data.error));
                }
            }).catch(err => {
                console.log(err);
            });
    };
};
