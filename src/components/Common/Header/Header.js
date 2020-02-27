import React from "react";
import "./Header.desktop.scss";
import SwasthLogo from "../../../assets/images/SwasthLogo.png";
import search from "../../../assets/images/search.png";
import {Link, Route} from "react-router-dom";
import SwasthLogoSmall from "../../../assets/images/Swasthlogo-small.png";
import UserHeader from "./UserHeader";

const LoginHeader = () => <div className={'login-header'} style={{'width':'100%'}}>
  <div className={'logo'}>
    <Link to="/"><img src={SwasthLogo} alt={'logo'}/>
      <h2>ConferKare</h2>
    </Link>
  </div>
  <div className="searchContainer">
    <input type="text" className="search"/>
    <img src={search} alt=""/>
  </div>
</div>;

const LoggedHeader = () => <div className="logged-header">
  <img src={SwasthLogoSmall} alt={'ConferKare'} className={'logo-small'}/>
</div>;

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Route exact path="/" component={LoginHeader}/>
        <Route exact path="/login" component={LoginHeader}/>
        <Route exact path="/createuser" component={LoginHeader}/>
        <Route exact path="/appointment" component={UserHeader}/>
        <Route exact path="/newAppointment" component={UserHeader}/>
      </div>
    );
  }
}

export default Header;