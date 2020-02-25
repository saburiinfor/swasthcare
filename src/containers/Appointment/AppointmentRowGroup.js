import React, {Component} from "react";
import AppointmentRow from "./AppointmentRow";
import Aux from "../../hoc/Auxwrap";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";


class AppointmentRowGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentsList: []
    };
  }
  
  componentDidMount() {
    this.props.onGetAppointmentList();
  }
  
  render() {
    if (this.props.appointmentsList !== undefined) {
      let filteredList = Array.from(this.props.appointmentsList).filter(item => (item.appdate !== '--' && item.appdate === this.props.appointmentDate));
      return (
        <Aux>
          {filteredList.map((appointmentItem, index) => {
            return <AppointmentRow appointment={appointmentItem} key={index}/>;
          })}
        </Aux>
      );
    } else {
      return (
        <Aux>
          Data loading...
        </Aux>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    appointmentsList: state.appointmentGroup.appointmentsList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetAppointmentList: () => dispatch(actions.getAppointmentList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRowGroup);