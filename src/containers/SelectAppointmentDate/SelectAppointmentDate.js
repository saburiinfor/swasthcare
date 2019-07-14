import React, {Component} from "react";
import {Col, CustomInput, Input, Row} from "reactstrap";
import DatePicker from "react-datepicker";
import ImgWithOverlayTextGroup from "../ImgWithOverlayText/ImgWithOverlayTextGroup";
import styles from "./SelectAppointmentDate.module.css";
import classnames from "classnames";
import {Helmet} from "react-helmet";
import CustomCalenderIcon from "../CustomCalenderIcon/CustomCalenderIcon";

class SelectAppointmentDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      inputDate: "",
      currentDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(date) {
    var newFormatedDate = new Date(date);
    newFormatedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    
    this.setState({
      startDate: date,
      inputDate: newFormatedDate
    });
  }
  
  onChangeHandler = e => {
    if (e.target.value === "today") {
      var date = new Date();
      date =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      
      this.setState({[e.target.name]: date, currentDate: e.target.value});
    }
    
    if (e.target.value === "tomorrow") {
      let date = new Date();
      date.setDate(date.getDate() + 1); // even 32 is acceptable
      
      let tomorrow =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      
      this.setState({[e.target.name]: tomorrow, currentDate: e.target.value});
    }
  };
  handleDateChange = m => {
    this.setState({startDate: m});
  };
  
  render() {
    return (
      <Col md="12" className="mt10">
        <Row>
          <Col>
            <ul className={classnames(styles.customBreadcrump, "p-0")}>
              <li className={styles.confirmed}>Step 1</li>
              <li className={styles.active}>Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
              <li>Step 5</li>
              <li>Step 6</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <div className={styles.selectDate}>
              <h4>Select the Date</h4>
              <Helmet>
                
                <style>{'.header .logo h2{color:#333;} .mt10{margin-top:10px;} main{ background: #fff; } .header .search{border:1px solid #ccc} .header{border-bottom:1px solid #666} .header .logo img{height:80px} '}</style>
              </Helmet>
              <div>
                
                <Row>
                  <Col md="4">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.inputDate}
                      onChange={this.onChangeHandler}
                      placeholder="DD/MM/YYYY"
                    />
                  </Col>
                  <Col md="8">
                    
                    <DatePicker
                      customInput={
                        <CustomCalenderIcon
                          onClickCustHandler={this.handleChange}
                        />
                      }
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col><br/>
                    <CustomInput
                      type="radio"
                      id="today"
                      name="inputDate"
                      label="Today"
                      value="today"
                      checked={this.state.currentDate === "today"}
                      onChange={this.onChangeHandler}
                    />
                    <CustomInput
                      type="radio"
                      id="tomorrow"
                      name="inputDate"
                      label="Tomorrow"
                      value="tomorrow"
                      checked={this.state.currentDate === "tomorrow"}
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12" className="mt-5">
                    <DatePicker
                      selected={this.state.startDate}
                      inline
                      onChange={this.handleChange}
                      monthsShown={2}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md="4">{<ImgWithOverlayTextGroup/>}</Col>
        </Row>
      </Col>
    );
  }
}

export default SelectAppointmentDate;
