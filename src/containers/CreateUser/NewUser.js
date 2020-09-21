import React, {Component} from "react";
import { Col } from "reactstrap";
import Aux from "../../hoc/Auxwrap";
import Carousel from '../../components/Common/Carousel/Carousel';
import {Link} from "react-router-dom";
import {BrowserView} from "react-device-detect";
import {Row} from "react-bootstrap";

class NewUser extends Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col sm="8">
            <BrowserView>
              <Carousel/>
            </BrowserView>
          </Col>
          <Col sm="4">
            <div className="bgWhite">
              <p>
                Congratulations, registration completed successfully. Please <Link to="/" className="textDn">Click here</Link> to login
              </p>
            </div>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default NewUser;