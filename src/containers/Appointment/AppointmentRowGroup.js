import React, {Component} from "react";
import AppointmentRow from "./AppointmentRow";
//import styles from "./Appointment.module.css";
import Aux from "../../hoc/Auxwrap";

class AppointmentRowGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAppoinments: [
        "Meet family doctor on 06/02/2019",
        "Meet family doctor on 06/02/2019",
        "Meet family doctor on 06/02/2019",
        "Meet family doctor on 06/02/2019",
        "Meet family doctor on 06/02/2019",
        "Meet family doctor on 06/02/2019"
      ]
    };
  }
  
  render() {
    return (
      <Aux>
        {this.state.listOfAppoinments.map(function (value, index) {
          return <AppointmentRow name={value} key={index}/>;
        })}
      </Aux>
    );
  }
}

export default AppointmentRowGroup;