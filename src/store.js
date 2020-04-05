import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from "react-router";
import { routerReducer } from "react-router-redux";
import authReducer from './store/reducers/auth';
import createUserReducer from './store/reducers/createUser';
import appointmentGroupReducer from './store/reducers/appointmentGroup';
import userDashboardReducer from './store/reducers/UserDashboard';
import userProfiledReducer from './store/reducers/UserProfile';
import logoutReducer from './store/reducers/logout';
import selectPhysicianReducer from './store/reducers/selectPhysician';
import mediaElementGroupReducer from './store/reducers/mediaElementGroup';
import newAppointmentReducer from './store/reducers/newAppointment';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
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
  routing: routerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunk)
));

console.log(store.getState());

export const history = syncHistoryWithStore(browserHistory, store);

export const persistor = persistStore(store);

export default store;