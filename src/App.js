import React, {Component} from 'react';
import './App.scss';
import Layout from './components/Common/Layout/Layout';
import {BrowserView, MobileView} from "react-device-detect";
// import {BrowserRouter as Router, Route} from "react-router-dom";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

const loggedInUser = () => <div className="App logged-bg">
  <Layout/>
</div>;

const guestUser = () => <div className="App login-bg">
  <Layout/>
</div>;

class App extends Component {
  render() {
    return (
      <Router basename={'/'}>
        <MobileView>
          <Switch>
            <Route exact path="/swasthcare/" component={guestUser}/>
            <Route exact path="/swasthcare/login" component={guestUser}/>
            <Route exact path="/swasthcare/createuser" component={loggedInUser}/>
            <Route exact path="/swasthcare/appointment" component={loggedInUser}/>
            <Route exact path="/swasthcare/newAppointment" component={loggedInUser}/>
            <Route exact path="/swasthcare/SelectAppointmentDate" component={loggedInUser}/>
          </Switch>
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