import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import MediaElementGroup from "../../components/Common/Media/MediaElementGroup";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import {Helmet} from 'react-helmet';
import styles from "./NewApointment.module.css";
import classnames from "classnames";
import {Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";

class NewApointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicianList: [],
      appointmentData: {
        phyid: null
      }
    };
  }
  
  componentDidMount() {
    this.props.onGetPhysicianList();
  }
  
  render() {
    const userToken = sessionStorage.getItem('token');
    if (userToken === null) {
      return <Redirect to='/'/>;
    } else {
      return (
        <Col md="12" className="mt10">
          <Helmet>
            <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} '}</style>
          </Helmet>
          
          <Row>
            <Col md="8">
              <div>
                <h2>New appointment</h2>
                <ul className={classnames(styles.customBreadcrump, "p-0")}>
                  <li className={styles.active}>Step 1</li>
                  <li><Link to="/SelectAppointmentDate">Step 2</Link></li>
                  <li>Step 3</li>
                  <li>Step 4</li>
                  <li>Step 5</li>
                  <li>Step 6</li>
                </ul>
              </div>
              <MediaElementGroup {...this.props} />
            </Col>
            
            <Col md="4">
              <ImgWithOverlayTextGroup/>
            </Col>
          </Row>
        </Col>
      
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    physicianList: state.newAppointment.physicianList,
    appointmentData: state.newAppointment.appointmentData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPhysicianList: (phyname, phycity, physpecialisation) => dispatch(actions.getPhysicianList(phyname, phycity, physpecialisation)),
    onSelectPhysician: (phyid) => dispatch(actions.selectPhysician(phyid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewApointment);