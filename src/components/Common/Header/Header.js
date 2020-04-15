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
        <Route exact path="/newAppointment" component={UserHeader}/>
        <Route exact path="/selectPhysician" component={UserHeader}/>
        <Route exact path="/selectAppointmentDate" component={UserHeader}/>
        <Route exact path="/selectSlot" component={UserHeader}/>
        <Route exact path="/addComplaints" component={UserHeader}/>
        <Route exact path="/appointmentPayment" component={UserHeader}/>
        <Route exact path="/submitAppointment" component={UserHeader}/>
        <Route exact path="/appointmentCreateResponse" component={UserHeader}/>
      </div>
    );
  }
}

export default Header;