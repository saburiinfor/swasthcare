import React, {Component} from 'react';
import './App.scss';
import Layout from './components/Common/Layout/Layout';
import {BrowserView, MobileView} from "react-device-detect";
import {BrowserRouter as Router, Route} from "react-router-dom";

const loggedInUser = () => <div className="App logged-bg">
  <Layout/>
</div>;

const guestUser = () => <div className="App login-bg">
  <Layout/>
</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <MobileView>
          <Route exact path="/" component={guestUser}/>
          <Route exact path="/login" component={guestUser}/>
          <Route exact path="/createuser" component={loggedInUser}/>
          <Route exact path="/appointment" component={loggedInUser}/>
          <Route exact path="/newAppointment" component={loggedInUser}/>
          <Route exact path="/SelectAppointmentDate" component={loggedInUser}/>
        </MobileView>
        <BrowserView>
          <div className="App login-bg">
            <Layout/>
          </div>
        </BrowserView>
      </Router>
    );
  }
}

export default App;