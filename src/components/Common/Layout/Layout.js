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
import NewUser from "../../../containers/CreateUser/NewUser";
import UserDashboard from "../../../containers/NewApointment/UserDashboard";
import NewAppointment from "../../../containers/NewApointment/NewApointment";
import SelectAppointmentDate from "../../../containers/NewApointment/SelectAppointmentDate";
import SelectPhysician from "../../../containers/NewApointment/SelectPhysician";
import SelectSlot from "../../../containers/NewApointment/SelectSlot";
import AddComplaints from "../../../containers/NewApointment/AddComplaints";
import AppointmentPayment from "../../../containers/NewApointment/AppointmentPayment";
import SubmitAppointment from "../../../containers/NewApointment/SubmitAppointment";
import AppointmentCreateResponse from "../../../containers/NewApointment/AppointmentCreateResponse";

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
            <Route exact path="/newAppointment" component={NewAppointment}/>
            <Route exact path="/selectPhysician" component={SelectPhysician}/>
            <Route exact path="/selectAppointmentDate" component={SelectAppointmentDate}/>
            <Route exact path="/selectSlot" component={SelectSlot}/>
            <Route exact path="/addComplaints" component={AddComplaints}/>
            <Route exact path="/appointmentPayment" component={AppointmentPayment}/>
            <Route exact path="/submitAppointment" component={SubmitAppointment}/>
            <Route exact path="/appointmentCreateResponse" component={AppointmentCreateResponse}/>
          </Row>
        </Container>
        <Footer/>
      </main>
    </Aux>
  );
};

export default Layout;