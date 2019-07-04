import React from "react";

import { Container, Row, Col } from "reactstrap"; 

import Aux from "../../hoc/Auxwrap";

import Header from ".././Header/Header";

import Footer from ".././Footer/Footer";

import "./Layout.module.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "../../containers/Login/LoginForm";
import CreateUser from "../../containers/CreateUser/CreateUser";
import Appointment from "../../containers/Appointment/Appointments";
import NewApointment from "../../containers/NewApointment/NewApointment";
import SelectAppointmentDate from "../../containers/SelectAppointmentDate/SelectAppointmentDate";

const Layout = props => (

  <Aux>

    <main>

      


   

    

    

    <div className="TopContainer">

          <Header />

        </div>
        <Container fluid>
        <Row className="MiddleContainer">

             
      
     
      
       
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/createuser" component={CreateUser} />
      <Route exact path="/appointment" component={Appointment} />
      <Route exact path="/newAppointment" component = {NewApointment} />
      <Route exact path="/SelectAppointmentDate" component = {SelectAppointmentDate} />
        
      
      
        </Row>
        </Container>
        

        <Footer />

    

     

    </main>

  </Aux>

);

export default Layout;

