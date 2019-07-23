import React from "react";
import {Container, Row} from "reactstrap";
import Aux from "../../../hoc/Auxwrap";
import {BrowserView, MobileView} from "react-device-detect";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Header_mobile from "../../mobile/Header/Header";
import "./Layout.module.scss";
import {Route} from "react-router-dom";
import LoginForm from "../../../containers/Login/LoginForm";
import CreateUser from "../../../containers/CreateUser/CreateUser";
import Appointment from "../../../containers/Appointment/Appointments";
import NewApointment from "../../../containers/NewApointment/NewApointment";
import SelectAppointmentDate from "../../../containers/SelectAppointmentDate/SelectAppointmentDate";

const Layout = props => (
  <Aux>
      <main>
      <div className="TopContainer">
        <BrowserView>
          <Header/>
        </BrowserView>
        <MobileView>
          <Header_mobile/>
        </MobileView>
      </div>
      <Container fluid>
        <Row className="MiddleContainer">
          <Route exact path="/" component={LoginForm}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/createuser" component={CreateUser}/>
          <Route exact path="/appointment" component={Appointment}/>
          <Route exact path="/newAppointment" component={NewApointment}/>
          <Route exact path="/SelectAppointmentDate" component={SelectAppointmentDate}/>
        </Row>
      </Container>
      <Footer/>
      </main>
  </Aux>
);

export default Layout;