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
    let addresses = [
      {
        "id": "12",
        "userID": "1769",
        "PinCode": "753001",
        "plotNumber": "1150",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "1",
        "addressType": 'Home',
        "createdDate": null,
        "updatedDate": "2020-08-04 04:19:39"
      },
      {
        "id": "13",
        "userID": "1769",
        "PinCode": "500050",
        "plotNumber": "E402, Aparna Hillpark lakebreeze, chandanagar",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "14",
        "userID": "1769",
        "PinCode": "500050",
        "plotNumber": "E402, Aparna Hillpark lakebreeze, chandanagar",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": 'Work',
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "15",
        "userID": "1769",
        "PinCode": "500050",
        "plotNumber": "E402, Aparna Hillpark lakebreeze, chandanagar",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "16",
        "userID": "1769",
        "PinCode": "500050",
        "plotNumber": "E402, Aparna Hillpark lakebreeze, chandanagar",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "17",
        "userID": "1769",
        "PinCode": "500050",
        "plotNumber": "E402, Aparna Hillpark lakebreeze, chandanagar",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "18",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": 'Others',
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "19",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "20",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "21",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "22",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "23",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "24",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "25",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "26",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "27",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "28",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "29",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "30",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      },
      {
        "id": "31",
        "userID": "1769",
        "PinCode": "0",
        "plotNumber": "undefined",
        "locality": "",
        "city": null,
        "state": null,
        "landmark": "",
        "addressType": null,
        "createdDate": null,
        "updatedDate": "0000-00-00 00:00:00"
      }
    ];
    this.setState({
      addressList: addresses
    });
  }
  
  editAddress = (addressId) => {
    let addressObject = this.state.addressList.find(obj => obj.id === addressId);
    let editAddress = {
      flag: true,
      addressObj: addressObject
    };
    Object.assign(this.props.editAddress, editAddress);
  }
  
  render() {
    // console.log(this.props);
    let favAddresses = [], otherAddresses = [];
    if (this.props.addressList.length > 0) {
      // let favAddresses = this.props.addressList.filter(addressObject => (addressObject.addressType === 'Home' || addressObject.addressType === 'Work' || addressObject.addressType === 'Others'));
      favAddresses = this.state.addressList.filter(addressObject => (addressObject.addressType === 'Home' || addressObject.addressType === 'Work' || addressObject.addressType === 'Others'));
      otherAddresses = this.state.addressList.filter(addressObject => (addressObject.addressType !== 'Home' && addressObject.addressType !== 'Work' && addressObject.addressType !== 'Others'))
      // console.log(favAddresses);
      // console.log(otherAddresses);
    }
    return (
      <Row>
        <Col md={"4"}>
          <Card className={"addressCard newAddress"}>
            <Card.Body>
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
                      {address.plotNumber}
                      {address.locality}
                      {address.city} - {address.pinCode}
                      {address.state}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {index !== 0
                      ? <Card.Link href={"#"}>Set as default</Card.Link>
                      : ''
                    }
                    <Card.Link className={'editAddress'} href={"#"} onClick={this.editAddress.bind(null, address.id)}>Edit</Card.Link>
                    <Card.Link className={'removeAddress'} href={"#"}>Remove</Card.Link>
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
                      {address.plotNumber}
                      {address.locality}
                      {address.city} - {address.pinCode}
                      {address.state}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {index !== 0
                      ? <Card.Link href={"#"}>Set as default</Card.Link>
                      : ''
                    }
                    <Card.Link className={'editAddress'} href={"#"} onClick={this.editAddress.bind(null, address.id)}>Edit</Card.Link>
                    <Card.Link className={'removeAddress'} href={"#"}>Remove</Card.Link>
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