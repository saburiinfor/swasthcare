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
  routing: routerReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;