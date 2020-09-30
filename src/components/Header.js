import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import confer from "../assets/images/ConferKare.png";


const Header = () => {

return (
 
  <>
  
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
             
                  
              <img src={confer} alt="" style={{height: "30px"}} href="/login"  ></img>
            
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent" >
                <ul className="navbar-nav " style={{marginLeft:"4em"}}>
                  <li className="active">
                  <a  className="nav-link" href="#doctor_consult">Doctor Consultation</a>
                  </li>
                  <li className="nav-item">
                  <a  className="nav-link" href="#lab_test">Lab Tests</a>
                  </li>

                  <li className="nav-item">
                  <a  className="nav-link" href="#pharma">Pharmacy</a>
                  </li>
                  <li className="nav-item">
                  <a  className="nav-link" href="#health_service">Health Services</a>
                  </li>
                  
                  <li className="nav-item">
                    <a
                      activeClassName="menu_active"
                      className="nav-link"
                      href="#radiology_test"
                    >
                      Radiology Tests
                    </a>
                  </li>
                </ul>
                <div class="navbar-nav" style={{marginLeft:"15em"}}>
                <a href="/login" className="link danger">Login/Sign Up  <i className="fa fa-user-o" aria-hidden="true"></i></a>
            </div>
              </div>
             
            </nav>
           

  </>
  
  
 
);
};

export default Header;    