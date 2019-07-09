import React from "react";

import { Row, Col } from "reactstrap";

import SwasthLogo from "../../../assets/images/SwasthLogo.png";

import InputField from "../../Common/InputField/InputField";

import search from "../../../assets/images/search.png";

import "./Header.module.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {

  return (
     <div className="header">
        <div className="logo">
          <Link to="/"><img src={SwasthLogo} alt={'logo'}></img>
          <h2>ConferKare</h2></Link>
        </div>
        <div className="searchContainer">
        <input type="text" className="search" />
        <img src={search} alt="" />
        </div>
      </div>



  );

};

 

export default Header;
