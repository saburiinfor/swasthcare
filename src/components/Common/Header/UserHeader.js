import MenuIcon from "../../../assets/images/menu-icon.png";
import {Link} from "react-router-dom";
import NotificationIcon from "../../../assets/images/notification-icon.png";
import AnnouncementIcon from "../../../assets/images/announcement-icon.png";
import ProfileIcon from "../../../assets/images/profile-icon.png";
import Logout from "../../../containers/Auth/Logout";
import React from "react";
import './Header.desktop.scss';
import PharmacyIcon from '../../../assets/images/pharmacy-100.png';
import TreatmentIcon from '../../../assets/images/treatment-1.png';

class UserHeader extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="logged-header">
        <img src={MenuIcon} alt={'Main menu'} className={'main-menu'}/>
        <div className={'logo'}>
          <Link to="/">
            {/*<img className={'logo-small'} src={SwasthLogoSmall} alt={'ConferKare'} />*/}
            <h3 className={'logoText'}>Confer<span>Kare</span></h3>
          </Link>
        </div>
        <div className={'header-controls'}>
          <Link to="#">
            <img src={NotificationIcon} alt={'Notifications'} className={'notification-icon'}/>
          </Link>
          <Link to={'#'}>
            <img src={AnnouncementIcon} alt={'Announcements'} className={'announcement-icon'}/>
          </Link>
          <Link to={'#'}>
            <img src={ProfileIcon} alt={'Profile'} className={'profile-icon'}/>
          </Link>
          <Logout {...this.props} />
        </div>
        <nav className={'mainNav'}>
          <div className={'navItem'}>
            <Link to={'/appointments'}>
              <img src={TreatmentIcon} alt={'Manage your appointments'}/>
            </Link>
          </div>
          <div className={'navItem'}>
            <Link to={'/uploadPrescription'}>
              <img src={PharmacyIcon} alt={'Upload latest prescription and get medicines deliver at your door steps'}/><sup className={'launchItems'} title={'New'}>New</sup>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default UserHeader;