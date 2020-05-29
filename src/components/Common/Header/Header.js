import React from "react";
import "./Header.desktop.scss";
import search from "../../../assets/images/search.png";
import {Link, Route} from "react-router-dom";
import UserHeader from "./UserHeader";

const LoginHeader = () => <div className={'login-header'} style={{'width':'100%'}}>
  <div className={'logo'}>
    <Link to="/">
      {/*<img src={SwasthLogo} alt={'logo'}/>*/}
      <h1 className={'logoText'}>Confer<span>Kare</span></h1>
    </Link>
  </div>
  <div className="searchContainer">
    <input type="text" className="search"/>
    <img src={search} alt=""/>
  </div>
</div>;

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Route exact path="/" component={LoginHeader}/>
        <Route exact path="/login" component={LoginHeader}/>
        <Route exact path="/newUser" component={LoginHeader}/>
        <Route exact path="/createuser" component={LoginHeader}/>
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
        <Route exact path="/forgotPassword" component={LoginHeader} />
        <Route exact path="/resetPassword" component={LoginHeader} />
      </div>
    );
  }
}

export default Header;