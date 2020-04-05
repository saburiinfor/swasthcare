import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "react-datepicker/dist/react-datepicker.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store, {persistor} from "./store";
import {PersistGate} from 'redux-persist/integration/react'

const ckrender = (
  <Provider store={store}>
    <Router>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Router>
  </Provider>
);

ReactDOM.render(ckrender, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister(); 