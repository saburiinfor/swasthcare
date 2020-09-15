import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Common/Layout/Layout';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
        <Switch>
          <Route exact path="/" component={guestUser}/>
          <Route exact path="/login" component={guestUser}/>
          <Route exact path="/newUser" component={guestUser}/>
          <Route exact path="/createuser" component={guestUser}/>
          <Route exact path="/appointments" component={loggedInUser}/>
          <Route exact path="/dashboard" component={loggedInUser}/>
          <Route exact path="/newAppointment" component={loggedInUser}/>
          <Route exact path="/selectPhysician" component={loggedInUser}/>
          <Route exact path="/selectAppointmentDate" component={loggedInUser}/>
          <Route exact path="/selectSlot" component={loggedInUser}/>
          <Route exact path="/addComplaints" component={loggedInUser}/>
          <Route exact path="/appointmentPayment" component={loggedInUser}/>
          <Route exact path="/submitAppointment" component={loggedInUser}/>
          <Route exact path="/appointmentCreateResponse" component={loggedInUser}/>
          <Route exact path="/uploadPrescription" component={loggedInUser}/>
          <Route exact path="/forgotPassword" component={guestUser}/>
          <Route exact path="/resetPassword" component={guestUser}/>
          <Route exact path="/vcSessions" component={loggedInUser}/>
          <Route exact path="/manageAccount" component={loggedInUser}/>
          <Route exact path="/labAppointment" component={loggedInUser}/>
          <Route exact path="/selectClinic" component={loggedInUser}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
