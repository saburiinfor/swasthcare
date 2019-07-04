import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import MediaElementGroup from "../../components/Common/Media/MediaElementGroup";

import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";

import {Helmet} from 'react-helmet';

import styles from "./NewApointment.module.css";

import classnames from "classnames";

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class NewApointment extends Component {

  render() {

    return (
        
     
        <Col md="12" className="mt10">
          <Helmet>
      
      <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>

    </Helmet>
       
        <Row>
        <Col md="8">

          <div>

            <h1>New appointment</h1>

            <ul className={classnames(styles.customBreadcrump, "p-0")}>

              <li className={styles.active}>Step 1</li>

              <li><Link to="/SelectAppointmentDate">Step 2</Link></li>

              <li>Step 3</li>

              <li>Step 4</li>

              <li>Step 5</li>

              <li>Step 6</li>

            </ul>

          </div>

          <MediaElementGroup />

        </Col>

 
        
        <Col md="4">

          <ImgWithOverlayTextGroup />

        </Col>
        </Row>
        </Col>
      

    );

  }

}

 

export default NewApointment;
