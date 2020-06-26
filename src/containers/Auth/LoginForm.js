import React, {Component} from "react";
import {Col, Form, Row} from "reactstrap";
import Aux from "../../hoc/Auxwrap";
import Carousel from '../../components/Common/Carousel/Carousel';
import {Link, Redirect} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";
import {connect} from "react-redux";
import * as actions from "../../shared";
import InputField from "../../components/Common/Input/Input";
import ButtonField from "../../components/Common/Button/Button";
import {checkValidity} from "../../shared/utility";

class LoginForm extends Component {
  state = {
    formIsValid: false,
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          name: "email",
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
          name: "pwd",
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
      userType: {
        elementType: "input",
        elementConfig: {
          name: "userType",
          type: "hidden"
        },
        value: "1",
        validation: {
          required: false
        },
        valid: true,
        touched: true,
        errorMessage: ""
      },
      remember: {
        elementType: "checkbox",
        elementConfig: {
          name: "rememberMe",
          type: "checkbox",
          label: "Remember Me",
          checked: true
        },
        value: "",
        valid: true,
        touched: false
      }
    },
    isSignup: true,
    isFormValid: false,
    enableSubmit: false
  };
  
  componentDidMount() {
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
    this.setState({controls: updatedControls, formIsValid: formIsValid});
  };
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value
      }
    };
    let pwdHasValue = false;
    if (controlName === 'password' && event.target.value !== '') {
      pwdHasValue = true;
    }
    this.setState({controls: updatedControls, enableSubmit: pwdHasValue});
  };
  submitHandler = event => {
    event.preventDefault();
    if (this.state.formIsValid) {
      this.props.onAuth(
        this.state.controls.email.value,
        this.state.controls.password.value,
        this.state.controls.userType.value,
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
            blured={event => this.inputBluredHandler(event, formElement.id)}
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
    if (this.props.isAuthenticated) {
      this.props.onGetUserProfile(this.props.token);
      return <Redirect to={this.props.authRedirectPath}/>;
    }
    return (
      <div>
        <Row>
          <Aux>
            <Col sm="8">
              <BrowserView>
                <Carousel/>
              </BrowserView>
            </Col>
            <Col sm="4">
              <div className="bgWhite">
                <div className={'welcomeMsg'}>Welcome to ConferKare</div>
                <Form className="form" noValidate>
                  {form}
                  <ButtonField color="primary" className={'submitBtn'} btnType="customButton" clicked={this.submitHandler} disabled={!this.state.enableSubmit}>Sign In</ButtonField>
                  {errorMessage}
                </Form>
                <p id="forgotPWD"><a href="/forgotPassword" className="textDn">Forgot password </a></p>
                <BrowserView>
                  <p id="signUp"><Link to="/createuser" className="textDn">New User, Sign Up </Link></p>
                </BrowserView>
                <MobileView>
                  <div className="globalLinks-mob">
                    <ul>
                      <li><Link to="/createuser">Sign Up</Link></li>
                      <li><Link to="#">Privacy</Link></li>
                      <li><Link to="#">Contact us</Link></li>
                    </ul>
                  </div>
                </MobileView>
              </div>
            </Col>
          </Aux>
        </Row>
        <Row className="keyFeatures">
          <div className={"featuresHead"}>
            Get care at our SimpleeKare clinics or try our telehealth options. You have the convenience to get all your healthcare needs and maintain your personal doctor relationship.
          </div>
          <Col md={"4"}>
            <ul>
              <li>Clinic appointments</li>
              <li>Order Lab Tests</li>
              <li>Order home health services</li>
            </ul>
          </Col>
          <Col md={"4"}>
            <ul>
              <li>Video appointments</li>
              <li>Order Medicines</li>
              <li>Pay Online</li>
            </ul>
          </Col>
          <Col md={"4"}>
            <ul>
              <li>Phone appointments</li>
              <li>Order Home Physiotherapy</li>
              <li>Access Health Records</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    userProfile: state.UserProfile.userProfile,
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, userType, isSignup) => dispatch(actions.auth(email, password, userType, isSignup)),
    onGetUserProfile: (userToken) => dispatch(actions.getUserProfile(userToken)),
    onSetAuthRedirectPath: (authRedirectPath) => dispatch(actions.setAuthRedirectPath(authRedirectPath))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
