import React, {Component} from "react";
import Aux from "../../hoc/Auxwrap";
import {Button, Col, CustomInput, Form, FormGroup, Input, Row} from "reactstrap";
import styles from "./CreateUser.module.scss";
import axios from 'axios'
import Carousel from '../Carousel/Carousel'
import {BrowserView, MobileView, isMobile} from "react-device-detect";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTypeId: "1",
      uhid: "P201901",
      name: "",
      email: "",
      password: "",
      contactNo: "",
      gender: "",
      city: "",
      address: "",
      marketId: "1",
      appId: "1",
      createdBy: "conferkare_dev",
      roleid: "",
      bloodgrp: "",
      dob: "",
      status: "",
      users: [],
      store: []
      
    }
  }
  
  /*componentDidMount(){
   axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
   .then(json => console.log(json))
   }
   
   componentDidMount(){
   axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
   .then(json => json.data.results.map(result => (
   {
   name: `${result.name.first} ${result.name.last}`,
   id: result.registered
   })))
   .then(newData => console.log(newData))
   }*/
  
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr').then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,
        id: result.registered
      }))).then(newData => this.setState({users: newData, store: newData})).catch(error => alert(error))
  }
  
  onSubmitHandler = e => {
    console.log("current state is = " + JSON.stringify(this.state));
  };
  onChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  render() {
    
    return (
      <Aux>
        <Col sm="8">
          <BrowserView>
            <Carousel/>
            <div className="keyFeatures">
              <ul>
                <li>* Over 10,000 doctors in network</li>
                <li>* 24x7 expert support</li>
                <li>* Over 1 million lab facilities</li>
                <li>* Home clinic services</li>
                <li>* Express services</li>
              </ul>
            </div>
          </BrowserView>
        </Col>
        <Col sm="4">
          <div className={styles.bgWhite}>
            <Form>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="name" id="name" className="no-border" value={this.state.name} onChange={this.onChangeHandler}/>
                <label>Name *</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="email" name="email" id="email" className="no-border" value={this.state.email} onChange={this.onChangeHandler}/>
                <label>Email *</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="password" name="password" id="password" className="no-border" value={this.state.password} onChange={this.onChangeHandler}/>
                <label>Password *</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="number" name="contactNo" id="contactNo" className="no-border" value={this.state.contactno} onChange={this.onChangeHandler}/>
                <label>Contact Number *</label>
              </FormGroup>
              <div className={styles.buttonContainer}>
                <Button color="primary" onClick={this.onSubmitHandler} className={styles.createUserBtn}>Submit</Button>
              </div>
              {/*<Button color="secondary" className="ml-2">*/}
              {/*  Cancel*/}
              {/*</Button>*/}
            </Form>
          </div>
        </Col>
        <MobileView>
          <div className={styles.faqContainer}>
            <h4>Faq?</h4>
            <ul>
              <li>
                <span className={styles.question}>Q. Why signup required?</span>
                <span className={styles.answer}>A. Features are very personal and confidential so to maintain the privacy of customers we need them to have their exclusive member access.</span>
              </li>
              <li>
                <span className={styles.question}>Q. Why mobile number needed?</span>
                <span className={styles.answer}>A. Mobile number is unique for most most of the individuals and mostly users would interact with systems using phones so mobile number is taken as secondary important point.</span>
              </li>
            </ul>
          </div>
        </MobileView>
      </Aux>
    );
  }
}

export default CreateUser;