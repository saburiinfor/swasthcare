import React from "react";

import { Row, Col, Form, Button } from "reactstrap";

import Aux from "../../hoc/Auxwrap";

import InputField from "../../components/Common/InputField/InputField";

import Carousel from '../Carousel/Carousel';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class LoginForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

        Username:""

   };

 

    //this.onSubmit = this.onSubmit.bind(this);

    this.onChange = this.onChange.bind(this);

  }

 

  onSubmit(e) {

    e.preventDefault();

  }

 

  onChange(e) {   

    e.preventDefault();

    this.setState({[e.target.name]: e.target.value })

  }

 

  render() {

   // const { } = this.state;   

    return (

      <Aux>
        <Col sm="8">
          <Carousel />
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
        <h4>Welcome to ConferKare</h4>

        <Form className="form">

          <Row>

            <Col>

              <InputField

                name="userName"

                label="Username"

                id="userName"

                placeholder="Enter User Name"

                value={this.state.userName}

                onChange={this.onChange}

              />

            </Col>

          </Row>

          <Row>

            <Col>

              <InputField

                name="password"

                label="Password"

                id="passWord"

                placeholder="Enter Password"

                type="password"

                value={this.state.password}

                onChange={this.onChange}

              />

            </Col>

          </Row>

          
            <Link to ="/appointment">
            <Button color="primary" block>

              Submit

            </Button>
            </Link>
          

        </Form>
        <p><a href="#" className="textDn">Forgot UserName / Password ></a></p>
        <p><Link to="/createuser" className="textDn">New User , Sign Up ></Link></p>
        </div>
        </Col>
      </Aux>

    );

  }

}

 

export default LoginForm;

