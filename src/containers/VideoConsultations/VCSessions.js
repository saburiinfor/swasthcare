import React, { Component } from 'react';
import {NavLink} from "react-bootstrap";
import './VCSessions.scss';
import {Col, Row} from "reactstrap";
import {Helmet} from "react-helmet";
import UserProfile from "../UserManagement/UserProfile";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";

class VCSessions extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .tar{text-align:right;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } '}</style>
        </Helmet>
        <Row>
          <Col md="8">
            {this.props.profileCompliant === false &&
            <UserProfile/>
            }
            <Row>
              <h5 className={'sessions-head'}>Video sessions</h5>
              <ul className={'sessions-list'}>
                <li className={'sessions-item'}>
                  <NavLink target={'_new'} href={process.env.REACT_APP_VC_URL + 'r/1234567'}>1234567</NavLink>
                </li>
                <li className={'sessions-item'}>
                  <NavLink target={'_new'} href={process.env.REACT_APP_VC_URL + 'r/8765432'}>8765432</NavLink>
                </li>
                <li className={'sessions-item'}>
                  <NavLink target={'_new'} href={process.env.REACT_APP_VC_URL + 'r/9876552'}>9876552</NavLink>
                </li>
                <li className={'sessions-item'}>
                  <NavLink target={'_new'} href={process.env.REACT_APP_VC_URL + 'r/5677899'}>5677899</NavLink>
                </li>
              </ul>
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

export default VCSessions;