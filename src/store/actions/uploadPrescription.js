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

export const citiesFailure = (error) => {
  return {
    type: actionTypes.CITY_FAILURE,
    error
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

export const getServiceCities = () => {
  return dispatch => {
    axios.get(process.env.REACT_APP_API_URL + "Pharmacyorder/getcityforavailableservice/").then(
      response => {
        // console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(citiesSuccess(response.data.result));
        } else {
          dispatch(citiesFailure(response.data.result.errormsg));
        }
      }).catch(err => {
      console.log(err);
    });
  };
};

export const getClinics = (city) => {
  return dispatch => {
    const cityData = new FormData();
    cityData.append('cityId', city);
    axios.post(process.env.REACT_APP_API_URL + "Pharmacyorder/getclinicsforavailableservice/", cityData).then(
      response => {
        // console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(clinicsSuccess(response.data.result));
        } else {
          dispatch(clinicsFailure(response.data.result.errormsg));
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
    axios.post(process.env.REACT_APP_API_URL + "Pharmacyorder/getpharmaorderid/", clinicData).then(
      response => {
        // console.log('response for generatePharmacyOrderId');
        // console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(generatePharmacyOrderIdSuccess(response.data.result));
        } else {
          dispatch(generatePharmacyOrderIdFailure(response.data.result[0].errorMsg));
        }
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
    // For now as we are expecting only a file for upload taking 0th element, would change to array once start accepting multiples.
    fileData.append('file', fileName[0]);
    axios.post(process.env.REACT_APP_API_URL + "Pharmacyorder/orderpharmacyitems/", fileData).then(
      response => {
        console.log('inside placeOrderPharmaItems response');
        console.log(JSON.stringify(response.data));
        if (response.data.success === 1) {
          dispatch(orderPharmaItemsSuccess(response.data.result));
        } else {
          dispatch(orderPharmaItemsFailure(response.data.result[0].errorMsg));
        }
      }).catch(err => {
        console.log(err);
    });
  };
};