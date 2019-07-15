import React from "react";
import {Button, Col, Form, Row} from "reactstrap";
import Aux from "../../hoc/Auxwrap";
import InputField from "../../components/Common/InputField/InputField";
import Carousel from '../Carousel/Carousel';
import {Link} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
    //this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
  }
  
  onChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    // const { } = this.state;   
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
          <div class="bgWhite">
            <Form className="form">
              <Row>
                <Col>
                  <InputField name="userName" id="userName" placeholder="Username" value={this.state.userName} onChange={this.onChange}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputField name="password" id="passWord" placeholder="Password" type="password" value={this.state.password} onChange={this.onChange}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputField label="Remember me" name="rememberMe" id="rememberMe" type="checkbox" checked="true" value={this.state.rememberMe} onChange={this.onChange}/>
                </Col>
              </Row>
              <Link to="/appointment">
                <Button color="primary" block>
                  Submit
                </Button>
              </Link>
            </Form>
            <p id="forgotPWD"><a href="#" className="textDn">Forgot username/password </a></p>
            <BrowserView>
              <p id="signUp"><Link to="/createuser" className="textDn">New User, Sign Up </Link></p>
            </BrowserView>
          </div>
          <MobileView>
            <div class="globalLinks-mob">
              <ul>
                <li><Link to="/createuser">Sign Up</Link></li>
                <li><Link to="#">Privacy</Link></li>
                <li><Link to="#">Contact us</Link></li>
              </ul>
            </div>
          </MobileView>
        </Col>
      </Aux>
    );
  }
}

export default LoginForm;