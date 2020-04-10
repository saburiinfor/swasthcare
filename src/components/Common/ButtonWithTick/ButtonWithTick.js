import React, {Component} from "react";
import {Button} from "reactstrap";
//import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./ButtonWithTick.module.css";

class ButtonWithTick extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    this.setState(
      prevState => ({
        isToggleOn: !prevState.isToggleOn
      }),
      function () {
        this.props.handleStateChange(this.state.isToggleOn);
      }
    );
  }
  
  render() {
    let tickIcon, buttonText;
    if (this.props.isToggleOn) {
      tickIcon = (
        <FontAwesomeIcon className={this.props.childClass} color={this.props.childColor} size={this.props.childSize} icon={this.props.childIcon}/>
      );
      buttonText = this.props.selectedText;
    } else {
      buttonText = this.props.text;
    }
    return (
      <Button onClick={this.handleClick.bind(this)} size={this.props.size} color={this.props.color} className={
          this.props.isToggleOn ? styles.confirmed : styles.customButton
        }>
        {buttonText}
        {tickIcon}
      </Button>
    );
  }
}

export default ButtonWithTick;