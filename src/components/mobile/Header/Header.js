import React from "react";
import SwasthLogo from "../../../assets/images/SwasthLogo.png";
import SwasthLogoSmall from "../../../assets/images/Swasthlogo-small.png";
import MenuIcon from "../../../assets/images/menu-icon.png";
import NotificationIcon from "../../../assets/images/notification-icon.png";
import {Link, Route} from "react-router-dom";
import "./Header.mobile.scss";

const LoginHeader = () => <div className={'logo'}>
  <Link to="/">
    {/*<img src={SwasthLogo} alt={'ConferKare'}/>*/}
    <h1 className={'logoText'}>Confer<span>Kare</span></h1>
  </Link>
</div>;

const UserHeader = () => <div className="logged-header-mob">
  <img src={MenuIcon} alt={'Main menu'} className={'main-menu'}/>
  <img src={SwasthLogoSmall} alt={'ConferKare'} className={'logo-small'}/>
  <img src={NotificationIcon} alt={'Notifications'} className={'notification-icon'}/>
</div>;

const LoggedHeader = () => <div className="logged-header-mob">
  {/*<img src={SwasthLogoSmall} alt={'ConferKare'} className={'logo-small'}/>*/}
  <h1 className={'logoText'}>Confer<span>Kare</span></h1>
</div>;

const Header = props => {
  return (
    <div className="header">
      <Route exact path="/" component={LoginHeader}/>
      <Route exact path="/login" component={LoginHeader}/>
      <Route exact path="/createuser" component={LoggedHeader}/>
      <Route exact path="/appointment" component={UserHeader}/>
    </div>
  );
};

export default Header;