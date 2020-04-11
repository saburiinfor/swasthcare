import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

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
    return <Button color="primary" onClick={this.signoutHandler.bind(null, this)}>Sign out</Button>;
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