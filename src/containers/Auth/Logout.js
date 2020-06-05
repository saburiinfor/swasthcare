import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import * as actions from "../../shared";
import {BrowserView, MobileView} from "react-device-detect";
import LogoutIcon from "../../assets/images/logout.png";

class Logout extends Component {
  constructor (props) {
    super(props);
    this.signoutHandler.bind(this);
    this.state = {
      userState: null
    };
  }
  componentDidMount() {
  }
  signoutHandler = () => {
    this.props.onSetSignout();
    window.location.replace('/');
  };
  render() {
    return (
      <div className={'signoutBox'}>
        <MobileView>
          <img src={LogoutIcon} alt={'Sign out'} onClick={this.signoutHandler.bind(null, this)}/>
        </MobileView>
        <BrowserView>
          <Button color="primary" onClick={this.signoutHandler.bind(null, this)}>Sign out</Button>;
        </BrowserView>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userState: state.logout.userStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetSignout: () => dispatch(actions.setSignout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);