import React, {Component} from "react";
import {Container} from "reactstrap";
import Aux from "../../../hoc/Auxwrap";
import {BrowserView, MobileView} from "react-device-detect";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderMobile from "../../mobile/Header/Header";
import "./Layout.module.scss";
import {Route} from "react-router-dom";
import LoginForm from "../../../containers/Auth/LoginForm";
import CreateUser from "../../../containers/CreateUser/CreateUser";
import NewUser from "../../../containers/CreateUser/NewUser";
import UserDashboard from "../../../containers/Dashboard/UserDashboard";
import NewAppointment from "../../../containers/NewApointment/NewApointment";
import SelectAppointmentDate from "../../../containers/NewApointment/SelectAppointmentDate";
import SelectPhysician from "../../../containers/NewApointment/SelectPhysician";
import SelectSlot from "../../../containers/NewApointment/SelectSlot";
import AddComplaints from "../../../containers/NewApointment/AddComplaints";
import AppointmentPayment from "../../../containers/NewApointment/AppointmentPayment";
import SubmitAppointment from "../../../containers/NewApointment/SubmitAppointment";
import AppointmentCreateResponse from "../../../containers/NewApointment/AppointmentCreateResponse";
import UploadPrescription from "../../../containers/Pharmacy/UploadPrescription";
import ForgotPassword from "../../../containers/Auth/ForgotPassword";
import ResetPassword from "../../../containers/Auth/ResetPassword";
import VCSessions from "../../../containers/VideoConsultations/VCSessions";
import ManageAccount from "../../../containers/UserManagement/ManageAccount";
import LabAppointment from "../../../containers/LabManagement/LabAppointment";
import SelectClinic from "../../../containers/LabManagement/SelectClinic";
import {WizardContext, wizards} from "../../../shared/WizardContext";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizard: wizards.appointment
    }
  }
  
  render() {
    return (
      <Aux>
        <main>
          <div className="TopContainer">
            <BrowserView>
              <Header/>
            </BrowserView>
            <MobileView>
              <HeaderMobile/>
            </MobileView>
          </div>
          <Container fluid>
            <div className="MiddleContainer">
              <Route exact path="/" component={LoginForm}/>
              <Route exact path="/newUser" component={NewUser}/>
              <Route exact path="/login" component={LoginForm}/>
              <Route exact path="/createuser" component={CreateUser}/>
              <Route exact path="/dashboard">
                <WizardContext.Provider value={this.state.wizard}>
                  <UserDashboard/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/appointments">
                <WizardContext.Provider value={this.state.wizard}>
                  <UserDashboard/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/newAppointment">
                <WizardContext.Provider value={this.state.wizard}>
                  <NewAppointment/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/selectPhysician">
                <WizardContext.Provider value={this.state.wizard}>
                  <SelectPhysician/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/selectAppointmentDate">
                <WizardContext.Provider value={this.state.wizard}>
                  <SelectAppointmentDate/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/selectSlot">
                <WizardContext.Provider value={this.state.wizard}>
                  <SelectSlot/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/addComplaints">
                <WizardContext.Provider value={this.state.wizard}>
                  <AddComplaints/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/appointmentPayment">
                <WizardContext.Provider value={this.state.wizard}>
                  <AppointmentPayment/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/submitAppointment">
                <WizardContext.Provider value={this.state.wizard}>
                  <SubmitAppointment/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/appointmentCreateResponse">
                <WizardContext.Provider value={this.state.wizard}>
                  <AppointmentCreateResponse/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/uploadPrescription" component={UploadPrescription}/>
              <Route exact path="/forgotPassword" component={ForgotPassword}/>
              <Route exact path="/resetPassword" component={ResetPassword}/>
              <Route exact path="/vcSessions" component={VCSessions}/>
              <Route exact path="/manageAccount" component={ManageAccount}/>
              <Route exact path="/labAppointment">
                <WizardContext.Provider value={wizards.labappointment}>
                  <LabAppointment/>
                </WizardContext.Provider>
              </Route>
              <Route exact path="/selectClinic">
                <WizardContext.Provider value={wizards.labappointment}>
                  <SelectClinic/>
                </WizardContext.Provider>
              </Route>
            </div>
          </Container>
          <Footer/>
        </main>
      </Aux>
    );
  }
}

export default Layout;
