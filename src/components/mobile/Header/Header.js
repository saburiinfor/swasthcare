import React from "react";
import {Link, Route} from "react-router-dom";
import "./Header.mobile.scss";
import UserHeader from "./UserHeader";

const LoginHeader = () => <div className={'logo'}>
  <Link to="/">
    {/*<img src={SwasthLogo} alt={'ConferKare'}/>*/}
    <h1 className={'logoText'}>Confer<span>Kare</span></h1>
  </Link>
</div>;

const LoggedHeader = () => <div className="logged-header-mob">
  {/*<img src={SwasthLogoSmall} alt={'ConferKare'} className={'logo-small'}/>*/}
  <h1 className={'logoText'}>Confer<span>Kare</span></h1>
</div>;

const Header = () => {
  return (
    <div className="header">
      <Route exact path="/" component={LoginHeader}/>
      <Route exact path="/login" component={LoginHeader}/>
      <Route exact path="/forgotPassword" component={LoginHeader}/>
      <Route exact path="/newUser" component={LoginHeader}/>
      <Route exact path="/resetPassword" component={LoginHeader}/>
      <Route exact path="/createuser" component={LoggedHeader}/>
      <Route exact path="/dashboard" component={UserHeader}/>
      <Route exact path="/appointments">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/newAppointment">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/selectPhysician">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/selectAppointmentDate">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/selectSlot">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/addComplaints">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/appointmentPayment">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/submitAppointment">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/appointmentCreateResponse">
        <UserHeader selectedMenuItem={'1'}/>
      </Route>
      <Route exact path="/uploadPrescription">
        <UserHeader selectedMenuItem={'2'}/>
      </Route>
      <Route exact path="/vcSessions">
        <UserHeader selectedMenuItem={'3'}/>
      </Route>
    </div>
  );
};

export default Header;