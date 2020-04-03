import React from "react";
import {Container, Row} from "reactstrap";
import Aux from "../../../hoc/Auxwrap";
import {BrowserView, MobileView} from "react-device-detect";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Header_mobile from "../../mobile/Header/Header";
import "./Layout.module.scss";
import { Route } from "react-router-dom";
import LoginForm from "../../../containers/Auth/LoginForm";
import CreateUser from "../../../containers/CreateUser/CreateUser";
import NewUser from "../../../containers/NewRegisteredUser/NewUser";
import UserDashboard from "../../../containers/UserDashboard/UserDashboard";
import NewApointment from "../../../containers/NewApointment/NewApointment";
import SelectAppointmentDate from "../../../containers/SelectAppointmentDate/SelectAppointmentDate";
import SelectPhysician from "../../../containers/SelectPhysician/SelectPhysician";

const Layout = props => {
  return (
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
            <Route exact path="/newUser" component={NewUser}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/createuser" component={CreateUser}/>
            <Route exact path="/dashboard" component={UserDashboard}/>
            <Route exact path="/newAppointment" component={NewApointment}/>
            <Route exact path="/selectPhysician" component={SelectPhysician}/>
            <Route exact path="/selectAppointmentDate" component={SelectAppointmentDate}/>
          </Row>
        </Container>
        <Footer/>
      </main>
    </Aux>
  );
};

export default Layout;