import React, {Component} from "react";
import Aux from "../../hoc/Auxwrap";
import {Button, Col, CustomInput, Form, FormGroup, Input, Row} from "reactstrap";
import styles from "./CreateUser.module.css";
import axios from 'axios'
import Carousel from '../Carousel/Carousel'

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
      gender: "F",
      city: "",
      address: "",
      marketId: "",
      appId: "",
      createdBy: "",
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
  }
  onChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  render() {
    
    return (
      <Aux>
        <Col sm="8">
          <Carousel></Carousel>
          <div className="keyFeatures">
            <ul>
              <li>* Over 10,000 doctors in network</li>
              <li>* 24x7 expert support</li>
              <li>* Over 1 million lab facilities</li>
              <li>* Home clinic services</li>
              <li>* Express services</li>
            </ul>
          </div>
        </Col>
        <Col sm="4">
          <div class="bgWhite">
            <Form>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="name" id="name" className="no-border" value={this.state.name} onChange={this.onChangeHandler}/>
                <label>Name</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="email" name="email" id="email" className="no-border" value={this.state.email} onChange={this.onChangeHandler}/>
                <label>Email</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="password" name="password" id="password" className="no-border" value={this.state.password} onChange={this.onChangeHandler}/>
                <label>Password</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="number" name="contactNo" id="contactNo" className="no-border" value={this.state.contactno} onChange={this.onChangeHandler}/>
                <label>Contact Number</label>
              </FormGroup>
              <FormGroup>
                <Row className={styles.gender}>
                  <Col sm={2}>Gender</Col>
                  <Col sm={10}>
                    <CustomInput inline type="radio" id="female" name="gender" label="Female" value="F" checked={this.state.gender === 'F'} onChange={this.onChangeHandler}/>
                    <CustomInput inline type="radio" id="male" name="gender" label="Male" value="M" checked={this.state.gender === 'M'} onChange={this.onChangeHandler}/>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="city" id="city" className="no-border" value={this.state.city} onChange={this.onChangeHandler}/>
                <label>City</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="address" id="address" className="no-border" value={this.state.address} onChange={this.onChangeHandler}/>
                <label>Address</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="marketId" id="marketId" className="no-border" value={this.state.marketId} onChange={this.onChangeHandler}/>
                <label>Market Id</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="appId" id="appId" className="no-border" value={this.state.appId} onChange={this.onChangeHandler}/>
                <label>App Id</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="createdBy" id="createdBy" className="no-border" value={this.state.createdBy} onChange={this.onChangeHandler}/>
                <label>Created By</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="roleId" id="roleId" className="no-border" value={this.state.roleId} onChange={this.onChangeHandler}/>
                <label>Role Id</label>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="bloodgrp" id="bloodgrp" className="no-border" value={this.state.bloodgrp} onChange={this.onChangeHandler}/>
                <label>Blood Group</label>
              </FormGroup>
              <FormGroup>
                <Input type="date" name="dob" id="dob" className="no-border pl-0" value={this.state.dob} onChange={this.onChangeHandler}/>
              </FormGroup>
              <FormGroup className={styles.floatingLabel}>
                <Input type="text" name="status" id="status" className="no-border" value={this.state.status} onChange={this.onChangeHandler}/>
                <label>Status</label>
              </FormGroup>
              <Button color="primary" onClick={this.onSubmitHandler}>Submit</Button>
              <Button color="secondary" className="ml-2">
                Cancel
              </Button>
            </Form>
          </div>
        </Col>
      </Aux>
    );
  }
}

export default CreateUser;