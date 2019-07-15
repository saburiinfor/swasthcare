import React from "react";
import SwasthLogo from "../../../assets/images/SwasthLogo.png";
import SwasthLogoSmall from "../../../assets/images/Swasthlogo-small.png";
import MenuIcon from "../../../assets/images/menu-icon.png";
import NotificationIcon from "../../../assets/images/notification-icon.png";
import "./Header.module.scss";
import {Link, Route} from "react-router-dom";

const LoginHeader = () => <div className={'logo'}>
        <Link to="/"><img src={SwasthLogo} alt={'ConferKare'}/>
          <h2>ConferKare</h2></Link>
      </div>;

const UserHeader = () => <div className="logged-header-mob">
  <img src={MenuIcon} alt={'Main menu'} className={'main-menu'}/>
  <img src={SwasthLogoSmall} alt={'ConferKare'} className={'logo-small'}/>
  <img src={NotificationIcon} alt={'Notifications'} className={'notification-icon'}/>
</div>;

const LoggedHeader = () => <div className="logged-header-mob">
  <img src={SwasthLogoSmall} alt={'ConferKare'} className={'logo-small'}/>
</div>;

const Header = props => {
  return (
    <div className="header">
      <Route exact path="/" component={LoginHeader}/>
      <Route exact path="/login" component={LoginHeader}/>
      <Route exact path="/createuser" component={LoggedHeader}/>
    </div>
  );
};

export default Header;