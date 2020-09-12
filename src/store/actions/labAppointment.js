import * as actionTypes from '../../shared/actionTypes';
import axios from "axios";

export const cliniclistsuccess = (clinicList) => {
    return {
        type: actionTypes.CLINICLIST_SUCCESS,
        clinicList
    };
};

export const getClinicByCity = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "Clinic/getclinicbycity/").then(
            response => {
                dispatch(cliniclistsuccess(response.data));
            }).catch(err => {
                console.log(err);
            });
    };
};
