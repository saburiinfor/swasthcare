import axios from 'axios';
import FormData from 'form-data';
import * as actionTypes from './actionTypes';

// SuccessHandler for get appointment cost details api
export const getAppointmentCostDetailsSuccess = (costDetails) => {
  return {
    type: actionTypes.GET_APPOINTMENT_COST_DETAILS_SUCCESS,
    costDetails
  };
};

export const createRPayPrderIdSuccess = (rpayOrder) => {
  return {
    type: actionTypes.RPAY_ORDER_ID_SUCCESS,
    rpayOrder
  };
};

export const getAppointmentCostDetails = (appointmentData) => {
  return dispatch => {
    const costRequestData = new FormData();
    costRequestData.append("phyId", appointmentData.phyId);
    costRequestData.append("clinicId", appointmentData.clinicid);
    costRequestData.append("appointmentDate", appointmentData.appointmentDate);
    costRequestData.append("slotId", appointmentData.slotId);
    // axios.post(actionTypes.API_URL + "Physician/getslots/", slotRequestData).then(
    //   response => {
    //     // console.log('inside profile data response inside userProfile');
    //     // console.log("res ***" + JSON.stringify(response.data));
    //     let userProfile = response.data;
    //     dispatch(userDetailsSuccess(userProfile));
    //   }).catch(err => {
    //   console.log(err);
    // });
    let appointmentCostDetails = {
      'amount': 50000,
      'currency': 'INR',
      'description': 'Patient appointment scheduled by SimpleKare.',
      'p_name': 'Ravi Kiran',
      'p_email': 'lravik.saburi@gmail.com'
    };
    dispatch(getAppointmentCostDetailsSuccess(appointmentCostDetails));
  };
};

export const createRPayOrderId = (orderDetails) => {
  return dispatch => {
    const orderRequestData = new FormData();
    orderRequestData.append('amount', orderDetails.amount);
    orderRequestData.append('currency', orderDetails.currency);
    orderRequestData.append('receipt', orderDetails.receipt);
    orderRequestData.append('payment_capture', false);
    axios.post("https://api.razorpay.com/v1/orders", orderRequestData).then(
      response => {
        console.log('rpay order creation');
        console.log("res ***" + JSON.stringify(response.data));
        let rpayOrder = response.data;
        dispatch(createRPayPrderIdSuccess(rpayOrder));
      }).catch(err => {
      console.log(err);
    });
  };
};