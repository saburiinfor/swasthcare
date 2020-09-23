import * as actionTypes from '../../shared/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    labAppointmentData: {
        city: null,
    },
    cityList: [],
};

const appointmentDataSuccess = (state, action) => {
    return updateObject(state, {
        labAppointmentData: action.labAppointmentData
    });
};

const citiesSuccess = (state, action) => {
    console.log('reducer function call')
    return updateObject(state, {
        cityList: action.cityList
    });
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CITY_SUCCESS:
            console.log('reducer switch')
            return citiesSuccess(state, action);
        case actionTypes.SET_LABAPPOINTMENTDATA:
            return appointmentDataSuccess(state, action);
       
        default:
            return state;
    }
};
export default reducer;