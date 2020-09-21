import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import {Button, Form} from 'react-bootstrap';
import Aux from "../../hoc/Auxwrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Alert} from "react-bootstrap";
import * as actions from "../../shared";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValidated: false
    };
  };
  
  componentDidMount() {
  }
  
  submitHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return false;
    }
    this.setState({
      formValidated: true
    });
    let userEmail = form.elements[0].value;
    this.props.onSendResetLink(userEmail);
  };
  
  render() {
    return (
      <Aux>
        <div className="oneGridBox">
          <Form validated={this.state.formValidated} onSubmit={this.submitHandler}>
            <Form.Row>
              {this.props.isLinkSent &&
                <Alert key={'mail-success'} variant={'success'}>
                  {this.props.successMsg}
                </Alert>
              }
              {this.props.error &&
                <Alert key={'mail-failure'} variant={'danger'}>
                  {this.props.errorMsg}
                </Alert>
              }
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={'8'} controlId={'DescText'}>
                <h3>
                  Don't remember password?
                </h3>
                <Form.Text className="text-muted">
                  Enter your registered email address and we will send you the link to reset your password.
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} md={'4'} controlId={'signupText'}>
                <Form.Label>
                  Don't have account? <Link to={'/createuser'}>Sign Up</Link>
                </Form.Label>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="resetEmail">
                <Form.Label>
                  Your Email address
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your registered email"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Button type="submit">Request reset link</Button>
            </Form.Row>
            <Form.Row>&nbsp;</Form.Row>
            <Form.Row>
              <Link to={'/'}>Back to Sign In</Link>
            </Form.Row>
          </Form>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.forgotPassword.errorMsg !== null,
    isLinkSent: state.forgotPassword.successMsg !== null,
    errorMsg: state.forgotPassword.errorMsg,
    successMsg: state.forgotPassword.successMsg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSendResetLink: (userEmail) => dispatch(actions.sendResetLink(userEmail))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
