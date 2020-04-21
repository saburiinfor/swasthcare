import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from '../../shared/actionTypes';

export const citiesSuccess = (cityList) => {
  return {
    type: actionTypes.CITY_SUCCESS,
    cityList
  };
};

export const clinicsSuccess = (clinicList) => {
  return {
    type: actionTypes.CLINIC_SUCCESS,
    clinicList
  };
};

export const clinicsFailure = (error) => {
  return {
    type: actionTypes.CLINIC_FAILURE,
    error
  };
};

export const generatePharmacyOrderIdSuccess = (pharmaOrderId) => {
  return {
    type: actionTypes.GENERATE_PHARMA_ORDER_ID_SUCCESS,
    pharmaOrderId
  };
};

export const generatePharmacyOrderIdFailure = (error) => {
  return {
    type: actionTypes.GENERATE_PHARMA_ORDER_ID_FAILURE,
    error
  };
};

export const orderPharmaItemsSuccess = (successResponse) => {
  return {
    type: actionTypes.PLACE_PHARMA_ORDER_SUCCESS,
    order_success_id: successResponse
  };
};

export const orderPharmaItemsFailure = (error) => {
  return {
    type: actionTypes.PLACE_PHARMA_ORDER_FAILURE,
    error: error
  };
};

export const getCities = () => {
  return dispatch => {
    axios.get(actionTypes.API_URL + "Market/getcity/").then(
      response => {
        dispatch(citiesSuccess(response.data));
      }).catch(err => {
      console.log(err);
    });
  };
};

export const getClinics = (city) => {
  return dispatch => {
    const cityData = new FormData();
    cityData.append('city', city);
    axios.post(actionTypes.API_URL + "Clinic/getregisteredclinicsbycity/", cityData).then(
      response => {
        // console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(clinicsSuccess(response.data.result));
        } else {
          dispatch(clinicsFailure(response.data.error.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

export const generatePharmacyOrderId = (clinicId, userId) => {
  return dispatch => {
    const clinicData = new FormData();
    clinicData.append('clinicId', clinicId);
    clinicData.append('userId', userId);
    axios.post(actionTypes.API_URL + "Pharmacyorder/getpharmaorderid/", clinicData).then(
      response => {
        // As this API is not yet handling the error use case not checking for success or failure
        dispatch(generatePharmacyOrderIdSuccess(response.data.result.orderid));
      }).catch(err => {
      console.log(err);
    });
  };
};

export const placeOrderPharmaItems = (clinicId, userId, pharmaOrderId, fileName) => {
  return dispatch => {
    const fileData = new FormData();
    fileData.append('clinicId', clinicId);
    fileData.append('userId', userId);
    fileData.append('pharmaOrderId', pharmaOrderId);
    fileData.append('file', fileName);
    axios.post(actionTypes.API_URL + "orderpharmacyitems/", fileData).then(
      response => {
        console.log(response);
        dispatch(orderPharmaItemsFailure(response));
      }).catch(err => {
        console.log(err);
    });
  };
};