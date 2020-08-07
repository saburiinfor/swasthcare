import React, {Component} from 'react';
import {Col, Row, Card} from "react-bootstrap";
import * as actions from "../../shared";
import {connect} from "react-redux";
import ManageAddress from "./ManageAddress";

class ListAddresses extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      addressList: []
    };
    
    this.editAddress.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      addressList: this.props.addressList
    });
  }
  
  editAddress = (addressId, op) => {
    let editAddress = {};
    if (addressId === null) {
      editAddress = {
        flag: true,
        addressObj: {}
      };
    } else {
      let addressObject = this.props.addressList.find(obj => obj.id === addressId);
      editAddress = {
        flag: true,
        addressObj: addressObject
      };
    }
    Object.assign(this.props.editAddress, editAddress);
    this.props.changeEditView(true);
    this.props.setOperation(op);
  }
  
  render() {
    let favAddresses = [], otherAddresses = [];
    if (this.props.addressList.length > 0) {
      // let favAddresses = this.props.addressList.filter(addressObject => (addressObject.addressType === 'Home' || addressObject.addressType === 'Work' || addressObject.addressType === 'Others'));
      favAddresses = this.props.addressList.filter(addressObject => (addressObject.addressType === 'Home' || addressObject.addressType === 'Work' || addressObject.addressType === 'Others'));
      otherAddresses = this.props.addressList.filter(addressObject => (addressObject.addressType !== 'Home' && addressObject.addressType !== 'Work' && addressObject.addressType !== 'Others'))
      // console.log(favAddresses);
      // console.log(otherAddresses);
    }
    return (
      <Row>
        <Col md={"4"}>
          <Card className={"addressCard newAddress"}>
            <Card.Body onClick={this.editAddress.bind(null, null, 'new')}>
              <Card.Text>
                <span className={"plusSign"}>+</span>
                Add address
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        { favAddresses.length > 0 &&
          favAddresses.map((address, index) => {
              return (
              <Col md={"4"} key={'address-'+ address.id}>
                <Card className={"addressCard"}>
                  <Card.Header as={"h6"}>
                    <span className={'defaultAddress'}>
                    {index === 0
                      ? 'Default address'
                      : ''
                    }
                    </span>
                    <span className={"addressType"}>
                      {address.addressType}
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{this.props.patientProfile.name}</Card.Title>
                    <Card.Text>
                      {address.plotNumber}<br/>
                      {address.locality}<br/>
                      {address.city} - {address.PinCode}<br/>
                      {address.state}<br/>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {index !== 0
                      ? <Card.Link href={"#"}>Set as default</Card.Link>
                      : ''
                    }
                    <Card.Link className={'editAddress'} href={"#"} onClick={this.editAddress.bind(null, address.id, 'edit')}>Edit</Card.Link>
                    <Card.Link className={'removeAddress'} href={"#"} onClick={this.editAddress.bind(null, address.id, 'remove')}>Remove</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>);
          })
        }
        {
          otherAddresses.length > 0 &&
          otherAddresses.map((address, index) => {
            return (
              <Col md={"4"} key={'address-'+ address.id}>
                <Card className={"addressCard"}>
                  <Card.Header as={"h6"}>
                    <span className={'defaultAddress'}/>
                    <span className={"addressType"}>
                      {address.addressType}&nbsp;
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{this.props.patientProfile.name}</Card.Title>
                    <Card.Text>
                      {address.plotNumber}<br/>
                      {address.locality}<br/>
                      {address.city} - {address.PinCode}<br/>
                      {address.state}<br/>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href={"#"}>Set as default</Card.Link>
                    <Card.Link className={'editAddress'} href={"#"} onClick={this.editAddress.bind(null, address.id, 'edit')}>Edit</Card.Link>
                    <Card.Link className={'removeAddress'} href={"#"} onClick={this.editAddress.bind(null, address.id, 'remove')}>Remove</Card.Link>
                  </Card.Footer>
                </Card>
              </Col>);
          })
        }
      </Row>
    );
  }
}

export default ListAddresses;