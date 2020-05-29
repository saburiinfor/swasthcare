import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import createUserReducer from './store/reducers/createUser';
import appointmentGroupReducer from './store/reducers/appointmentGroup';
import userDashboardReducer from './store/reducers/UserDashboard';
import userProfiledReducer from './store/reducers/UserProfile';
import logoutReducer from './store/reducers/logout';
import selectPhysicianReducer from './store/reducers/selectPhysician';
import mediaElementGroupReducer from './store/reducers/mediaElementGroup';
import newAppointmentReducer from './store/reducers/newAppointment';
import selectSlotReducer from './store/reducers/SelectSlot';
import appointmentPaymentReducer from './store/reducers/appointmentPayment';
import submitAppointmentReducer from './store/reducers/submitAppointment';
import uploadPrescriptionReducer from './store/reducers/uploadPrescription';
import forgotPasswordReducer from './store/reducers/forgotPassword';
import resetPasswordReducer from './store/reducers/resetPassword';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['newAppointment', 'UserProfile'],
  blacklist: ['auth']
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  createUser: createUserReducer,
  appointmentGroup: appointmentGroupReducer,
  UserDashboard: userDashboardReducer,
  UserProfile: userProfiledReducer,
  logout: logoutReducer,
  selectPhysician: selectPhysicianReducer,
  mediaElementGroup: mediaElementGroupReducer,
  newAppointment: newAppointmentReducer,
  selectSlot: selectSlotReducer,
  appointmentPayment: appointmentPaymentReducer,
  submitAppointment: submitAppointmentReducer,
  uploadPrescription: uploadPrescriptionReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export const persistor = persistStore(store);

export default store;