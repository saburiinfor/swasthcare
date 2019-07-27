import React, { Component } from "react";
import './LoginForm.module.scss';
import { Button, Col, Form, Row } from "reactstrap";
import Aux from "../../hoc/Auxwrap";
import Carousel from '../Carousel/Carousel';
import { Link, Redirect } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import InputField from "../../components/Common/Input/Input";
import ButtonField from "../../components/Common/Button/Button";
import { checkValidity } from "../../shared/utility";

class LoginForm extends Component {
  state = {
    formIsValid: false,
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Username"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
        errorMessage: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
         /* minLength: 6*/
        },
        valid: false,
        touched: false,
        errorMessage: ""
      },
      remember: {
        elementType: "checkbox",
        elementConfig: {
          type: "checkbox",
          label: "Remember Me",
          checked: true
        },
        value: "",
        valid: true,
        touched: true
      }
    },
    isSignup: true,
    isFormValid: false
  };
  
componentDidMount() {
  
    {/* if (this.props.authRedirectPath !== '/') {

            this.props.onSetAuthRedirectPath(this.props.authRedirectPath);

        }*/}

  }
  inputBluredHandler = (event, controlName) => {
    let checkValid = checkValidity(
      event.target.value,
      this.state.controls[controlName].validation
    );
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        valid: checkValid.isValid,
        errorMessage: checkValid.error,
        touched: true
      }
    };
    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value
      }
    };
    this.setState({ controls: updatedControls});
  };
  submitHandler = event => {
    event.preventDefault();
    if (this.state.formIsValid) {
      this.props.onAuth(
        this.state.controls.email.value,
        this.state.controls.password.value,
        this.state.isSignup
      );
    }
  };

  render() {

    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = formElementsArray.map(formElement => (
      <Row key={formElement.id}>
        <Col>
          <InputField
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            errorMessage={formElement.config.errorMessage}
            changed={event => this.inputChangedHandler(event, formElement.id)}
            blured = {event => this.inputBluredHandler(event,formElement.id)}
          />
        </Col>
      </Row>
    ));
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p className="text-danger mt-2">{this.props.error}</p>
      );
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      return <Redirect to={this.props.authRedirectPath} />;
    }
    return (
      <Aux>
        <Col sm="8">
          <BrowserView>
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
          </BrowserView>
        </Col>
        <Col sm="4">
          <div className="bgWhite">
          <Form className="form" noValidate>
              {form}
              <ButtonField color="primary" className={'submitBtn'} btnType="customButton" clicked={this.submitHandler} disabled={!this.state.formIsValid}>Submit</ButtonField>
              {errorMessage}
            </Form>
            <p id="forgotPWD"><a href="#" className="textDn">Forgot username/password </a></p>
            <BrowserView>
              <p id="signUp"><Link to="/createuser" className="textDn">New User, Sign Up </Link></p>
            </BrowserView>
          </div>
          <MobileView>
            <div className="globalLinks-mob">
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

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: (authRedirectPath) => dispatch(actions.setAuthRedirectPath(authRedirectPath))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);