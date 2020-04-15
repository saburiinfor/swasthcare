import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../shared";
import {Redirect} from "react-router-dom";
import getPageLink from "../../components/Common/WizardButtons/StageManager";
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import WizardButtons from "../../components/Common/WizardButtons/WizardButtons";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import './SelectSlot.scss';

class SelectSlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slotId: null,
      ctime: ''
    };
    this.handlerNextBtnClick.bind(this);
    this.handleSlotSelection.bind(this);
  }
  
  componentDidMount() {
    let {pid, clinicid, appdate} = this.props.appointmentData;
    this.props.onGetSlots(pid, clinicid, appdate);
  }

  handleSlotSelection = (e) => {
    this.setState({
      slotId: e.target.value,
      ctime: e.target.title
    });
  };
  
  generateSlots = (slotList) => {
    let slotListing = slotList.map((slot) => {
      return (
        <li key={slot.id} className={(this.state.slotId === slot.id) ? 'selected' : ''}>
          <span>{slot.id}</span>
          <span>{slot.startTime}</span>
          <span>{slot.period}</span>
          <span>{slot.waitingTime}</span>
          <span>{slot.status}</span>
          <span><button title={slot.startTime} className={'btn btn-link'} onClick={this.handleSlotSelection} value={slot.id}>Select</button></span>
        </li>
      );
    });
    return slotListing;
  };
  
  handleSlotPeriodChange = (e) => {
    let slots = this.props.slots.slots;
    if (e.target.value !== 'all') {
      slots = this.props.slots.slots.filter((slot) => {
        return slot.period === e.target.value;
      });
    }
    this.setState({
      slotListing: this.generateSlots(slots)
    });
  };
  
  handlerNextBtnClick = () => {
    this.props.appointmentData.slotId = this.state.slotId;
    this.props.appointmentData.ctime = this.state.ctime;
    this.props.onSetAppointmentData(this.props.appointmentData);
  };
  

  render() {
    if (this.props.userProfile.success === 0) {
      sessionStorage.setItem('conferkare.appointment.activeStage', 0);
      return <Redirect to='/'/>;
    }
    this.state.slotListing = this.generateSlots(this.props.slotList.slots);
    const pageUrl = getPageLink();
    return (
      <Col md="12" className="mt10">
        <Redirect to={pageUrl}/>
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
        </Helmet>
        { this.props.profileCompliant === false &&
          <UserProfile/>
        }
        <Row>
          <Col md="8">
            <div>
              <h2>Select Slot</h2>
              <Breadcrumb activeStep={'4'} />
            </div>
            <Row>
              <Col>
                <div className={'slotBox'}>
                  <h4>
                    Select the appointment slot
                    <WizardButtons nextBtnCallback={this.handlerNextBtnClick} />
                  </h4>
                  <Helmet>
                    <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
                  </Helmet>
                  <div>
                    <Row>
                      <Col>
                        <div className="form-check" key={'allSlots'}>
                          <label>
                            <input
                              type="radio"
                              name="react-tips"
                              value={'all'}
                              defaultChecked={true}
                              onClick={this.handleSlotPeriodChange}
                              className="form-check-input"
                            />
                            All
                          </label>
                        </div>
                        <div className="form-check" key={'morningSlots'}>
                          <label>
                            <input
                              type="radio"
                              name="react-tips"
                              value={'morning'}
                              onClick={this.handleSlotPeriodChange}
                              className="form-check-input"
                            />
                            Morning
                          </label>
                        </div>
                        <div className="form-check" key={'eveningSlots'}>
                          <label>
                            <input
                              type="radio"
                              name="react-tips"
                              value={'evening'}
                              onClick={this.handleSlotPeriodChange}
                              className="form-check-input"
                            />
                            Evening
                          </label>
                        </div>
                      </Col>
                    </Row><br/>
                    {
                      this.props.error !== null &&
                      <p><strong>{this.props.error}</strong></p>
                    }
                    <Row>
                      <Col>
                        <ul className={'slotsListingContainer'}>
                          <li>
                            <span>S. No.</span>
                            <span>Slot time</span>
                            <span>Morning/Evening</span>
                            <span>Wait time</span>
                            <span>Status</span>
                            <span>&nbsp;</span>
                          </li>
                          {this.state.slotListing}
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
      
          <Col md="4">
            <ImgWithOverlayTextGroup/>
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.UserProfile.userProfile,
    profileCompliant: state.UserProfile.userProfile.dateofbirth !== '0000-00-00',
    appointmentData: state.newAppointment.appointmentData,
    slotList: state.selectSlot.slotList,
    error: state.selectSlot.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSlots: (pid, clinicid, slotDate) => dispatch(actions.getSlots(pid, clinicid, slotDate)),
    onSetAppointmentData: (appointmentData) => dispatch(actions.setAppointmentData(appointmentData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectSlot);