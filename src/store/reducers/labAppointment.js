import * as actionTypes from '../../shared/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    appointmentData: {
        city: null,
    },
    clinicList: [],
};



const cliniclistsuccess = (state, action) => {
    return updateObject(state, {
        clinicList: action,
        clinicList : action.clinicList
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLINICLIST_SUCCESS:
            return cliniclistsuccess(state, action);
       
        default:
            return state;
    }
};
export default reducer;