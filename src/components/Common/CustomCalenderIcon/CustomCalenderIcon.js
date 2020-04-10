import React, {Component} from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

class CustomCalenderIcon extends Component {
  componentDidMount() {
    ///this.props.onClickCustHandler(this.props.value);
  }
  
  render(props) {
    return (
      <FontAwesomeIcon className="ml-2 align-bottom" color="#ccc" size="2x" icon={faCalendarAlt} className="example-custom-input" onClick={this.props.onClick}/>
    )
  }
}

export default CustomCalenderIcon;