import React, {Component} from "react";
import MediaElement from "./MediaElement";
import {Input} from "reactstrap";
import styles from "./MediaElement.module.css";
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/index";
import WizardButtons from "../WizardButtons/WizardButtons";

class MediaElementGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }
  
  componentDidMount() {
  }
  
  handleChange = event => {
    this.setState({filter: event.target.value});
    this.props.onSetPhysicianFilterText(event.target.value);
  };
  
  handlerNextBtnClick = () => {
    this.props.onSetAppointmentData(this.props.appointmentData);
  };
  
  render() {
    const {filter} = this.state;
    const filteredData = this.props.physicianList.filter((item) => {
      return Object.keys(item).some(key =>
        (item[key] !== null) ? item[key].toLowerCase().includes(filter.toLowerCase()):false
      );
    });
    
    return (
      <div className={styles.appointmentList}>
        <h4>Select the doctor
          <WizardButtons activeStep={'2'} nextBtnCallback={this.handlerNextBtnClick} />
        </h4>
        <Input type="search" name="search" id="searchDoctor" placeholder="Search by name, location or clinic" value={filter} onChange={this.handleChange} />
        {filteredData.map((item, index) => (
          <MediaElement noOfStars="5" record={item} key={index} className="styles.mediaElement" {...this.props} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    physicianList: state.selectPhysician.physicianList,
    filter: state.mediaElementGroup.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetPhysicianFilterText: (filterText) => dispatch(actions.setPhysicianFilterText(filterText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaElementGroup);