import React, {Component} from "react";
import {Col} from "reactstrap";
import {Alert, Button, Form} from 'react-bootstrap';
import Aux from "../../hoc/Auxwrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import queryString from 'query-string';
import * as actions from "../../shared";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordMatchError: false,
      errorText: 'New password and confirm password should match, please try again.'
    };
  };
  
  componentDidMount() {
    let verifyToken = queryString.parse(this.props.location.search).verifyToken;
    this.props.onValidateToken(verifyToken);
  }
  
  changeHandler = (event) => {
    let newpwd = document.querySelector('#newpassword0').value,
      newpwd1 = event.target.value;
    if (newpwd !== newpwd1) {
      this.setState({
        passwordMatchError: true
      });
      event.preventDefault();
      event.stopPropagation();
      event.target.focus();
      return false;
    } else {
      this.setState({
        passwordMatchError: false
      });
    }
  }
  
  submitHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return false;
    }
    let newPassword = form.elements['newpassword0'].value;
    this.props.onResetPassword(this.props.userEmail, newPassword);
  };
  
  render() {
    return (
      <Aux>
        <div className="oneGridBox">
          <Form validated={this.state.formValidated} onSubmit={this.submitHandler}>
            <Form.Row className={'reset-messages'}>
              {this.props.isPasswordUpdated &&
              <Form.Row>
                <Alert key={'reset-success'} variant={'success'}>
                  {this.props.successMsg}
                </Alert>
              </Form.Row>
              }
              {this.props.invalidToken &&
              <Form.Row>
                <Form.Label>
                  It seems the token is expired or invalid one, please request for new token using this <Link to={'/forgotPassword'}>link</Link> to reset your password.
                </Form.Label>
              </Form.Row>
              }
              {this.props.error &&
              <Form.Row>
                <Alert key={'reset-failure'} variant={'danger'}>
                  {this.props.errorMsg}
                </Alert>
              </Form.Row>
              }
            </Form.Row>
            {(this.props.invalidToken === false && this.props.isPasswordUpdated === false) &&
              <Form.Group>
                <Form.Row>
                  {this.state.passwordMatchError &&
                  <Alert key={'reset-failure'} variant={'danger'}>
                    {this.state.errorText}
                  </Alert>
                  }
                  <Form.Group as={Col} md={'12'} controlId={'signupText'}>
                    <h3>
                      Reset your password
                    </h3>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="newpassword0">
                    <Form.Label>
                      New password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter new password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="newpassword1">
                    <Form.Label>
                      Re-enter password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Re-enter new password"
                      onBlur={this.changeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Password doesn't match with new password
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Button type="submit">Update password</Button>
                </Form.Row>
              </Form.Group>
            }
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
    error: state.resetPassword.errorMsg !== null,
    invalidToken: state.resetPassword.tokenErrorMsg !== null,
    isPasswordUpdated: state.resetPassword.successMsg !== null,
    errorMsg: state.resetPassword.errorMsg,
    successMsg: state.resetPassword.successMsg,
    tokenErrorMsg: state.resetPassword.tokenErrorMsg,
    userEmail: state.resetPassword.userEmail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onValidateToken: (token) => dispatch(actions.validateToken(token)),
    onResetPassword: (userEmail, newPassword) => dispatch(actions.resetPassword(userEmail, newPassword))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);