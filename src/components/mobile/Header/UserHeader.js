import Logout from "../../../containers/Auth/Logout";
import React from "react";
import './Header.mobile.scss';
import SwasthLogoSmall from "../../../assets/images/Swasthlogo-small.png";
import MenuIcon from "../../../assets/images/menu-icon.png";
import NotificationIcon from "../../../assets/images/notification-icon.png";
import {Link} from "react-router-dom";
import TreatmentIcon from "../../../assets/images/treatment-1.png";
import PharmacyIcon from "../../../assets/images/pharmacy-100.png";
import VCActiveIcon from "../../../assets/images/videocall.png";
import VCIcon from "../../../assets/images/videocall.png";

class UserHeader extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="logged-header-mob">
        <img src={MenuIcon} alt={'Main menu'} className={'main-menu'}/>
        <div className={'logo-small'}>
          <Link to="/">
            <h4 className={'logoText'}>Confer<span>Kare</span></h4>
          </Link>
        </div>
        <Logout {...this.props} />
        <img src={NotificationIcon} alt={'Notifications'} className={'notification-icon'}/>
        <nav className={'mainNav'}>
          <div className={this.props.selectedMenuItem === '1' ? 'navItem active' : 'navItem'}>
            <Link to={'/appointments'}>
              <img src={TreatmentIcon} alt={'Manage your appointments'}/>
            </Link>
          </div>
          <div className={this.props.selectedMenuItem === '2' ? 'navItem active' : 'navItem'}>
            <Link to={'/uploadPrescription'}>
              <img src={PharmacyIcon} alt={'Upload latest prescription and get medicines deliver at your door steps'}/><sup className={'launchItems'} title={'New'}>New</sup>
            </Link>
          </div>
          {/*<div className={this.props.selectedMenuItem === '3' ? 'navItem active' : 'navItem'}>*/}
          {/*  <Link to={'/vcSessions'}>*/}
          {/*    <img src={this.props.selectedMenuItem === '3' ? VCActiveIcon : VCIcon} alt={'Video consultations'}/><sup className={'launchItems'} title={'New'}>Beta</sup>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </nav>
      </div>
    );
  }
}

export default UserHeader;