import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from "react-router";
import { routerReducer } from "react-router-redux";
import authReducer from './store/reducers/auth';
import createUserReducer from './store/reducers/createUser';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  createUser: createUserReducer,
  routing: routerReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;