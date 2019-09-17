import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

export const countrySuccess = (countryList) => {
    return {
        type: actionTypes.COUNTRY_SUCCESS,
        countryList: countryList
    };
};
export const citySuccess = (cityList) => {
    return {
        type: actionTypes.CITY_SUCCESS,
        cityList: cityList
    };
};
export const createUserSuccess = () => {
    return {
        type: actionTypes.CREATEUSER_SUCCESS
    };
};
export const createUser = (userDataObj) => {
    return dispatch => {        
        const userData = new FormData();
        userData.append("userTypeId", userDataObj.userTypeId);
        userData.append("marketId", userDataObj.marketId);
        userData.append("appId", userDataObj.appId);
        userData.append("createdBy", userDataObj.createdBy);
        userData.append("roleid", userDataObj.roleid);
        userData.append("uhid", userDataObj.uhid);
        userData.append("name", userDataObj.name);
        userData.append("email", userDataObj.email);
        userData.append("password", userDataObj.password);
        userData.append("contactNo", userDataObj.contactNo);
        userData.append("gender", userDataObj.gender);
        userData.append("city", userDataObj.city);
        userData.append("address", userDataObj.address);
        userData.append("bloodgrp", userDataObj.bloodgrp);
        userData.append("dob", userDataObj.dob);
        userData.append("status", userDataObj.status);
        axios.post(actionTypes.API_URL + "/User/create/", userData).then(
            response => {
                if (response.data && response.data["Message"] === "New User is created") {                    
                    dispatch(createUserSuccess());
                } else {
                    console.log("res else " + JSON.stringify(response.data["errormsg"]));
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
};
export const getCountry = () => {
    return dispatch => {
        const getCountryData = new FormData();
        getCountryData.append("id", 1);
        axios.post(actionTypes.API_URL + "/Market/getmarket/", getCountryData).then(
            response => {
                console.log("res ***" + JSON.stringify(response));
                console.log("res ***" + JSON.stringify(response.data["marketname"]));
                let countryList = [];
                response.data["marketname"].map(function (item) {
                    countryList.push(item.marketname);
                });
                dispatch(countrySuccess(countryList));
            })
            .catch(err => {
                console.log(err);
            });
    };
};
export const getCity = () => {
    return dispatch => {
        axios.get(actionTypes.API_URL + "/Market/getcity/").then(
            response => {               
                console.log("res ***" + JSON.stringify(response));
                console.log("res ***" + JSON.stringify(response.data));
                let cityList = [];
                response.data.map(function (item) {
                    cityList.push(item.name);
                });
                dispatch(citySuccess(cityList));
            })
            .catch(err => {
                console.log(err);
            });
    };
};