import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import "./UserManagement.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Accordion, Card, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

class ManageAccount extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <Col md="12" className="mt10">
        <Helmet>
          <style>{'.header .logo h2{color:#333;} .tar {text-align:right;margin-bottom: 5px;} .mt10{margin-top:10px;} main{ background: #fff; } .header' +
          ' .search{border:1px' +
          ' solid #ccc}' +
          ' @media screen and (min-width: 800px) { .header{border-bottom:1px solid #666} } '}</style>
        </Helmet>
        <Row>
          <Col md="12">
            {/*{ this.props.profileCompliant === false &&*/}
            {/*<UserProfile/>*/}
            {/*}*/}
            <Row className={'manageAccount'}>
              <div className="profilePhotoPanel">
                <div className={'profilePhoto'}>
                  <FontAwesomeIcon className="profilePic" color="#ccc" size="5x" icon={faUser}/>
                  <br/>
                  <span className={'profileEdit'}>Upload photo</span>
                </div>
                <Row className={'userDetails'}>
                  <Col md={"6"} className={'leftColumn'}>
                    Patient name
                    {/*{this.props.userProfile.name}*/}
                  </Col>
                  <Col md={'6'} className={'rightColumn'}>
                    11/11/1111
                    {/*{this.props.userProfile.dateofbirth}*/}
                  </Col>
                </Row>
                <Row className={'userDetails'}>
                  <Col md={'6'} className={'leftColumn'}>
                    1234567890
                    {/*{this.props.userProfile.contactno}*/}
                  </Col>
                  <Col md={'6'} className={'rightColumn'}>
                    1769
                    {/*{this.props.userProfile.id}*/}
                  </Col>
                </Row>
                {/*<div className="profileCompletion mb-4">70% profile complete</div>*/}
              </div>
              <div className={'profileDetails'}>
                <Form>
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} variant="link" eventKey="0">
                          Personal information
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <FormGroup controlId={'profileForm.personlGroup'}>
                            <FormLabel>Full name</FormLabel>
                            <FormControl type={'text'} placeholder={'Patient full name'}/>
                            <FormLabel>Contact No.</FormLabel>
                            <FormControl type={'tel'} placeholder={'Contact number'}/>
                            <FormLabel>Alternate No.</FormLabel>
                            <FormControl type={'tel'} placeholder={'Alternate Contact number'}/>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl type={'date'} value={'19/06/1977'}/>
                            <FormLabel>Gender</FormLabel>
                            <br/>
                            <Form.Check inline type="radio" label="Male" name="patientGender" id="patient_m"/>
                            <Form.Check inline type="radio" label="Female" name="patientGender" id="patient_f"/>
                            <Form.Check inline type="radio" label="others" name="patientGender" id="patient_o" />
                            <br/>
                            <FormLabel>Spoken languages</FormLabel>
                            <FormControl type={'text'} placeholder={'Languages comma separated'}/>
                          </FormGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} variant="link" eventKey="1">
                          Health information
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <FormGroup controlId={'profileForm.healthGroup'}>
                            <FormLabel>Blood Group</FormLabel>
                            <FormControl as={'select'}>
                              <option>A+</option>
                              <option>O+</option>
                              <option>B+</option>
                              <option>AB+</option>
                              <option>A-</option>
                              <option>O-</option>
                              <option>B-</option>
                              <option>AB-</option>
                            </FormControl>
                          </FormGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} variant="link" eventKey="2">
                          Payment information
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <h5>Address details</h5>
                          <FormGroup controlId={'profileForm.paymentGroup'}>
                            <FormLabel>Address type</FormLabel>
                            <FormControl as={'select'}>
                              <option>Home</option>
                              <option>Work</option>
                              <option>Other</option>
                            </FormControl>
                            <FormLabel>Apartment No.</FormLabel>
                            <FormControl type={'text'} placeholder={'Apartment/Flat/Unit No.'}/>
                            <FormLabel>Building/apartment name</FormLabel>
                            <FormControl type={'text'} placeholder={'Apartment/Community/Building name'}/>
                            <FormLabel>Area/locality</FormLabel>
                            <FormControl type={'text'} placeholder={'Area/locality name'}/>
                          </FormGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} variant="link" eventKey="3">
                          Misc. information
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Form>
                {/*<div>*/}
                {/*  <Button className={this.state.activeTab === '1' ? styles.tabButtons + ' active' : styles.tabButtons} onClick={this.toggle.bind(this, '1')}>*/}
                {/*    Today*/}
                {/*  </Button>*/}
                {/*  <Button className={this.state.activeTab === '2' ? styles.tabButtons + ' active' : styles.tabButtons} onClick={this.toggle.bind(this, '2')}>*/}
                {/*    Tomorrow*/}
                {/*  </Button>*/}
                {/*  <div className={this.state.activeTab === '3' ? styles.tabCalendar + ' ' + styles.active : styles.tabCalendar}>*/}
                {/*    <DatePicker value={this.state.appointmentDate} onChange={this.selectAppointmentDate} format={'y-MM-dd'}/>*/}
                {/*  </div>*/}
                {/*  <Row>*/}
                {/*    <Col sm="12" className={styles.appointments}>*/}
                {/*      <AppointmentRowGroup appointmentDate={this.props.appointmentDate} />*/}
                {/*    </Col>*/}
                {/*  </Row>*/}
                {/*</div>*/}
              </div>
            </Row>
          </Col>
          {/*<Col md="4">*/}
          {/*  <ImgWithOverlayTextGroup/>*/}
          {/*</Col>*/}
        </Row>
      </Col>
    )
  }
}

export default ManageAccount;