import * as actionTypes from '../../shared/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    clinicList: [],
};



const cliniclistsuccess = (state, action) => {
    console.log('reducer function call')
    return updateObject(state, {
        clinicList: action,
        clinicList: action.clinicList
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLINICLIST_SUCCESS:
            console.log('reducer switch')
            return cliniclistsuccess(state, action);
        default:
            return state;
    }
};
export default reducer;